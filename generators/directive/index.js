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
        'Sintax error, you must use the sintax: angularjs-4-typescript:directive <module>'
      );
    }
    this.modulePath = this.args[0];
    let hasDirective =
      this.modulePath
        .split('/')
        .pop()
        .indexOf('directive') > -1 ||
      this.modulePath
        .split('/')
        .pop()
        .indexOf('Directive') > -1;
    if (hasDirective) {
      this.modulePath = this.modulePath.replace(/[d, D]rective/g, '');
    }
    this.directiveName = core.upperCaseFirst(core.namePath(this.modulePath));
  }

  writing() {
    core.generateFile(
      `${core.fileDirPath(this.modulePath, 'directive')}`,
      'directive.ts',
      {
        name: this.directiveName
      },
      this
    );
  }
};
