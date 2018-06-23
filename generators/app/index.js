'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the smashing ${chalk.red('generator-ng4ts')} generator!`));

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to create angularjs project?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('!(_.*)'), this.destinationPath(`.`));
    this.fs.copy(this.templatePath('src/'), this.destinationPath(`./src/`));
  }

  install() {
    this.installDependencies();
  }
};
