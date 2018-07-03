'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');
const path = require('path');

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
    const rgx = /^_./;
    fs.readdir(path.resolve(__dirname, 'templates'), (err, files) => {
      if (err) {
        console.log(`error:\n` + err);
      }
      files.forEach(file => {
        if (rgx.test(file)) {
          this.fs.copy(
            this.templatePath(`${file}`),
            this.destinationPath(`./${file.replace(rgx, '.')}`)
          );
        } else if (file !== '.DS_Store') {
          this.fs.copy(this.templatePath(`${file}`), this.destinationPath(`./${file}`));
        }
      });
    });
  }

  install() {
    this.npmInstall();
  }
};
