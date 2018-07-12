'use strict';
const Generator = require('yeoman-generator');
const core = require('../core');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.args = args;
    this.opts = opts;
  }

  validateArgs() {
    if (this.args.length < 1) {
      this.env.error(
        'Sintax error, you must use the sintax: angularjs-4-typescript:component <module> [--style|-s]'
      );
    }
    this.modulePath = this.args[0];
    this.optStyle = true;
    if (this.opts.s !== undefined || this.opts.style !== undefined) {
      this.optStyle = this.opts.s || this.opts.style;
    }
    let hasComponent =
      this.modulePath
        .split('/')
        .pop()
        .indexOf('component') > -1 ||
      this.modulePath
        .split('/')
        .pop()
        .indexOf('Component') > -1;
    if (hasComponent) {
      this.modulePath = this.modulePath.replace(/[c, C]omponent/g, '');
    }
    this.componentName = core.upperCaseFirst(core.namePath(this.modulePath));
  }

  writing() {
    const name = `${core.formatFileName(this.componentName).replace('/component/g', '')}`;
    let data = {
      className: this.componentName,
      moduleName: name,
      url: core.upperCaseFirst(core.namePath(this.modulePath)).toLowerCase(),
      componentTagName: core.camelCase(name),
      file: `/${name}`,
      style: this.optStyle,
      filePath: `app/${this.modulePath}`
    };
    core.generateFile(
      core
        .fileDirPath(this.modulePath, 'component', true)
        .replace('.component.ts', '.component.html'),
      'component.html',
      data,
      this
    );
    if (this.optStyle) {
      core.generateFile(
        `${core
          .fileDirPath(this.modulePath, 'component', true)
          .replace('.component.ts', '.component.scss')}`,
        'component.scss',
        data,
        this
      );
    }
    core.generateFile(
      core.fileDirPath(this.modulePath, 'component', true),
      'component.ts',
      data,
      this
    );
    core.generateFile(
      core.fileDirPath(this.modulePath, 'module', true),
      'module.ts',
      data,
      this
    );
  }
};
