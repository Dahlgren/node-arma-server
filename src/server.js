var _ = require('lodash')
var fs = require('fs')
var mkdirp = require('mkdirp')
var path = require('path')
var spawn = require('child_process').spawn

var executables = require('./executables')

var configTemplate = _.template(fs.readFileSync(path.resolve(__dirname, '../templates/config.tpl')).toString())
var configsDirectory = 'configs'

var defaultPlatform = function () {
  if (process.platform === 'win32') {
    return 'windows'
  }

  return 'linux'
}

var Server = function (options) {
  this.options = _.defaults(options, {
    admins: null,
    allowedFilePatching: options.filePatching ? 1 : null,
    allowedHTMLLoadExtensions: null,
    allowedLoadFileExtensions: null,
    allowedPreprocessFileExtensions: null,
    battleEye: null,
    config: 'server.config',
    disableVoN: null,
    doubleIdDetected: null,
    filePatching: null,
    forceRotorLibSimulation: null,
    forcedDifficulty: null,
    game: 'arma3',
    headlessClients: null,
    hostname: null,
    kickDuplicate: null,
    localClient: null,
    logFile: null,
    missions: null,
    mods: [],
    motd: null,
    motdInterval: null,
    onDifferentData: null,
    onHackedData: null,
    onUnsignedData: null,
    onUserConnected: null,
    onUserDisconnected: null,
    parameters: ['-noSound', '-world=empty'],
    password: null,
    passwordAdmin: null,
    path: process.cwd(),
    persistent: null,
    platform: defaultPlatform(),
    players: null,
    serverMods: [],
    timeStampFormat: null,
    verifySignatures: null,
    vonCodecQuality: null,
    voteMissionPlayers: null,
    voteThreshold: null
  })
}

Server.prototype.armaServerExecutable = function () {
  return executables(this.options.game, this.options.platform)
}

Server.prototype.armaServerPath = function () {
  var executable = this.armaServerExecutable()
  if (!executable) return null
  return path.join(this.options.path, executable)
}

Server.prototype.writeServerConfig = function () {
  var config = configTemplate(this.options)
  mkdirp.sync(path.join(this.options.path, configsDirectory))
  var file = path.join(this.options.path, configsDirectory, this.options.config)
  fs.writeFileSync(file, config)
}

Server.prototype.makeConfigParameter = function () {
  return '-config=' + path.join(configsDirectory, this.options.config)
}

Server.prototype.makeModsParameter = function () {
  if (this.options.mods) {
    return '-mod=' + this.options.mods.join(';')
  }
  return null
}

Server.prototype.makePortParameter = function () {
  if (this.options.port) {
    return '-port=' + this.options.port
  }
  return null
}

Server.prototype.makeServerModsParameter = function () {
  if (this.options.mods) {
    return '-serverMod=' + this.options.serverMods.join(';')
  }
  return null
}

Server.prototype.start = function () {
  var startParams = []
  var gamePath = this.armaServerPath()
  var options = {
    env: process.env
  }

  if (this.options.platform === 'linux') {
    options = {
      cwd: this.options.path,
      env: process.env
    }
  }

  if (this.options.platform === 'wine') {
    gamePath = 'wine'
    startParams.push(this.armaServerPath())
  }

  if (this.options.mods && this.options.mods.length) {
    startParams.push(this.makeModsParameter())
  }

  if (this.options.parameters) {
    this.options.parameters.map(function (parameter) {
      startParams.push(parameter)
    })
  }

  if (this.options.port) {
    startParams.push(this.makePortParameter())
  }

  if (this.options.serverMods && this.options.serverMods.length) {
    startParams.push(this.makeServerModsParameter())
  }

  if (this.options.filePatching) {
    startParams.push('-filePatching')
  }

  startParams.push(this.makeConfigParameter())

  return spawn(gamePath, startParams, options)
}

module.exports = Server
