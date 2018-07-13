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
        'Sintax error, you must use the sintax: angularjs-4-typescript:service <module>'
      );
    }
    this.modulePath = this.args[0];
    let hasservice =
      this.modulePath
        .split('/')
        .pop()
        .indexOf('service') > -1 ||
      this.modulePath
        .split('/')
        .pop()
        .indexOf('Service') > -1;
    if (hasservice) {
      this.modulePath = this.modulePath.replace(/\/(.-?)?[s, S]ervice/g, '');
    }
    this.serviceName = core.upperCaseFirst(core.namePath(this.modulePath));
  }

  writing() {
    core.generateFile(
      `${core.fileDirPath(this.modulePath, 'service')}`,
      'service.ts',
      {
        name: this.serviceName
      },
      this
    );
  }
};
