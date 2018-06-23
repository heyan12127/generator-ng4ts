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
        'Sintax error, you must use the sintax: angularjs-4-typescript:filter <module>'
      );
    }
    this.modulePath = this.args[0];
    let hasfilter =
      this.modulePath
        .split('/')
        .pop()
        .indexOf('filter') > -1 ||
      this.modulePath
        .split('/')
        .pop()
        .indexOf('Filter') > -1;
    if (hasfilter) {
      this.modulePath = this.modulePath.replace(/[f, F]ilter/g, '');
    }
    this.filterName = core.upperCaseFirst(core.namePath(this.modulePath));
  }

  writing() {
    core.generateFile(
      `${core.fileDirPath(this.modulePath, 'filter')}`,
      'filter.ts',
      {
        name: this.filterName
      },
      this
    );
  }
};
