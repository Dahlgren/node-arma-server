require('should')
var ConfigGenerator = require('../src/config_generator')

describe('ConfigGenerator', function () {
  describe('generate', function () {
    describe('battleEye', function () {
      it('should set BattleEye to false', function () {
        var configGenerator = new ConfigGenerator({ battleEye: false })
        configGenerator.generate().should.containEql('BattlEye = false;')
      })

      it('should set BattleEye to true', function () {
        var configGenerator = new ConfigGenerator({ battleEye: true })
        configGenerator.generate().should.containEql('BattlEye = true;')
      })
    })

    describe('disableVoN', function () {
      it('should set disableVON to false', function () {
        var configGenerator = new ConfigGenerator({ disableVoN: false })
        configGenerator.generate().should.containEql('disableVoN = false;')
      })

      it('should set disableVON to true', function () {
        var configGenerator = new ConfigGenerator({ disableVoN: true })
        configGenerator.generate().should.containEql('disableVoN = true;')
      })
    })

    describe('forceRotorLibSimulation', function () {
      it('should set forceRotorLibSimulation to false', function () {
        var configGenerator = new ConfigGenerator({ forceRotorLibSimulation: false })
        configGenerator.generate().should.containEql('forceRotorLibSimulation = false;')
      })

      it('should set forceRotorLibSimulation to true', function () {
        var configGenerator = new ConfigGenerator({ forceRotorLibSimulation: true })
        configGenerator.generate().should.containEql('forceRotorLibSimulation = true;')
      })
    })

    describe('hostname', function () {
      it('should set hostname to test', function () {
        var configGenerator = new ConfigGenerator({ hostname: 'test' })
        configGenerator.generate().should.containEql('hostname = "test";')
      })
    })

    describe('kickDuplicate', function () {
      it('should set kickDuplicate to false', function () {
        var configGenerator = new ConfigGenerator({ kickDuplicate: false })
        configGenerator.generate().should.containEql('kickDuplicate = false;')
      })

      it('should set kickDuplicate to true', function () {
        var configGenerator = new ConfigGenerator({ kickDuplicate: true })
        configGenerator.generate().should.containEql('kickDuplicate = true;')
      })
    })

    describe('password', function () {
      it('should set password to test', function () {
        var configGenerator = new ConfigGenerator({ password: 'test' })
        configGenerator.generate().should.containEql('password = "test";')
      })
    })

    describe('passwordAdmin', function () {
      it('should set passwordAdmin to test', function () {
        var configGenerator = new ConfigGenerator({ passwordAdmin: 'test' })
        configGenerator.generate().should.containEql('passwordAdmin = "test";')
      })
    })

    describe('persistent', function () {
      it('should set persistent to false', function () {
        var configGenerator = new ConfigGenerator({ persistent: false })
        configGenerator.generate().should.containEql('persistent = false;')
      })

      it('should set persistent to true', function () {
        var configGenerator = new ConfigGenerator({ persistent: true })
        configGenerator.generate().should.containEql('persistent = true;')
      })
    })

    describe('players', function () {
      it('should set maxPlayers to 1', function () {
        var configGenerator = new ConfigGenerator({ players: 1 })
        configGenerator.generate().should.containEql('maxPlayers = 1;')
      })
    })
  })
})
