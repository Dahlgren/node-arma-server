var _ = require('lodash');
var fs = require('fs');
var mkdirp = require('mkdirp');
var os = require('os');
var path = require('path');
var spawn = require('child_process').spawn;

var configTemplate = _.template(fs.readFileSync(path.resolve(__dirname, '../templates/config.tpl'), { 'encoding':'utf8'}));
var configsDirectory = 'configs';

var defaultPlatform = function () {
  if (process.platform === 'win32') {
    return 'windows';
  }

  return 'linux';
};

var Server = function (options) {
  this.options = _.defaults(options, {
    allowedHTMLLoadExtensions: null,
    allowedLoadFileExtensions: null,
    allowedPreprocessFileExtensions: null,
    battleEye: null,
    config: 'server.config',
    disableVoN: null,
    doubleIdDetected: null,
    forceRotorLibSimulation: null,
    headlessClients: null,
    hostname: null,
    kickDuplicate: null,
    localClient: null,
    motd: null,
    motdInterval: null,
    onDifferentData: null,
    onHackedData: null,
    onUnsignedData: null,
    onUserConnected: null,
    onUserDisconnected: null,
    password: null,
    passwordAdmin: null,
    path: process.cwd(),
    persistent: null,
    platform: defaultPlatform(),
    players: null,
    timeStampFormat: null,
    verifySignatures: null,
    vonCodecQuality: null,
    voteMissionPlayers: null,
    voteThreshold: null,
  });
};

Server.prototype.armaServerPath = function() {
  if (this.options.platform === 'linux') {
    return path.join(this.options.path, 'arma3server');
  }
  return path.join(this.options.path, 'arma3server.exe');
};

Server.prototype.serverConfigPath = function() {
  return path.join(this.options.path, configsDirectory, this.options.config);
};

Server.prototype.writeServerConfig = function() {
  var config = configTemplate(this.options);
  mkdirp.sync(path.join(this.options.path, configsDirectory));
  fs.writeFileSync(this.serverConfigPath(), config);
};

Server.prototype.makeConfigParameter = function() {
  return '-config=' + this.serverConfigPath();
};

Server.prototype.makeModsParameter = function() {
  if (this.options.mods) {
    return '-mod=' + mods.join(';');
  }
  return null;
};

Server.prototype.makePortParameter = function() {
  if (this.options.port) {
    return '-port=' + this.options.port;
  }
  return null;
};

Server.prototype.start = function() {
  var startParams = [];
  var gamePath = this.armaServerPath();
  var options = null;

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

  if (this.options.mods && this.options.mods.length) {
    startParams.push(this.makeModsParameter());
  }

  if (this.options.port) {
    startParams.push(this.makePortParameter());
  }

  startParams.push(this.makeConfigParameter());
  startParams.push('-noSound');
  startParams.push('-world=empty');

  return spawn(gamePath, startParams, options);
};

module.exports = Server;
