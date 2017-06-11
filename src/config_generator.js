var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var configTemplate = _.template(fs.readFileSync(path.resolve(__dirname, '../templates/config.tpl')).toString())

var ConfigGenerator = function (options) {
  this.options = _.defaults(options, {
    admins: null,
    allowedHTMLLoadExtensions: null,
    allowedLoadFileExtensions: null,
    allowedPreprocessFileExtensions: null,
    battleEye: null,
    disableVoN: null,
    doubleIdDetected: null,
    forceRotorLibSimulation: null,
    forcedDifficulty: null,
    headlessClients: null,
    hostname: null,
    kickDuplicate: null,
    localClient: null,
    logFile: null,
    missions: null,
    motd: null,
    motdInterval: null,
    onDifferentData: null,
    onHackedData: null,
    onUnsignedData: null,
    onUserConnected: null,
    onUserDisconnected: null,
    password: null,
    passwordAdmin: null,
    persistent: null,
    players: null,
    timeStampFormat: null,
    verifySignatures: null,
    vonCodecQuality: null,
    voteMissionPlayers: null,
    voteThreshold: null
  })
}

ConfigGenerator.prototype.generate = function () {
  return configTemplate(this.options)
}

module.exports = ConfigGenerator
