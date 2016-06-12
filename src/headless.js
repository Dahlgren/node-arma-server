var _ = require('lodash');
var fs = require('fs');
var mkdirp = require('mkdirp');
var os = require('os');
var path = require('path');
var spawn = require('child_process').spawn;

var executables = require('./executables');

var defaultPlatform = function () {
  if (process.platform === 'win32') {
    return 'windows';
  }

  return 'linux';
};

var Headless = function (options) {
  this.options = _.defaults(options, {
    filePatching: null,
    game: 'arma3',
    host: null,
    mods: [],
    parameters: ['-noSound', '-world=empty'],
    password: null,
    path: process.cwd(),
    platform: defaultPlatform(),
    port: null,
  });
};

Headless.prototype.armaServerExecutable = function() {
  return executables(this.options.game, this.options.platform);
};

Headless.prototype.armaServerPath = function() {
  var executable = this.armaServerExecutable();
  if (!executable) return null;
  return path.join(this.options.path, executable);
};

Headless.prototype.makeHostParameter = function() {
  if (this.options.host) {
    return '-connect=' + this.options.host;
  }
  return null;
};

Headless.prototype.makeModsParameter = function() {
  if (this.options.mods) {
    return '-mod=' + this.options.mods.join(';');
  }
  return null;
};

Headless.prototype.makePasswordParameter = function() {
  if (this.options.password) {
    return '-password=' + this.options.password;
  }
  return null;
};

Headless.prototype.makePortParameter = function() {
  if (this.options.port) {
    return '-port=' + this.options.port;
  }
  return null;
};

Headless.prototype.start = function() {
  var startParams = [];
  var gamePath = this.armaServerPath();
  var options = {
    env: process.env,
  };

  if (this.options.platform === 'linux') {
    options = {
      cwd: this.options.path,
      env: process.env,
    };
  }

  if (this.options.platform === 'wine') {
    gamePath = 'wine';
    startParams.push(this.armaServerPath());
  }

  if (this.options.host) {
    startParams.push(this.makeHostParameter());
  }

  if (this.options.mods && this.options.mods.length) {
    startParams.push(this.makeModsParameter());
  }

  if (this.options.password) {
    startParams.push(this.makePasswordParameter());
  }

  if (this.options.parameters) {
    this.options.parameters.map(function (parameter) {
      startParams.push(parameter);
    });
  }

  if (this.options.port) {
    startParams.push(this.makePortParameter());
  }

  if (this.options.filePatching) {
    startParams.push('-filePatching');
  }

  startParams.push('-client');

  return spawn(gamePath, startParams, options);
};

module.exports = Headless;
