var should = require('should');
var Server = require('../src/server');

describe('server', function() {
  describe('armaServerExecutable', function() {
    it('should use correct executable for linux', function() {
      var server = new Server({platform: "linux"});
      server.armaServerExecutable().should.eql("arma3server");
    });

    it('should use correct executable for windows', function() {
      var server = new Server({platform: "windows"});
      server.armaServerExecutable().should.eql("arma3server.exe");
    });

    it('should use correct executable for wine', function() {
      var server = new Server({platform: "wine"});
      server.armaServerExecutable().should.eql("arma3server.exe");
    });
  });

  describe('makeModsParameter', function() {
    it('should create mods parameter for single mod', function() {
      var server = new Server({mods: ["@mod"]});
      server.makeModsParameter().should.eql("-mod=@mod");
    });

    it('should create mods parameter for multiple mod', function() {
      var server = new Server({mods: ["@mod1", "@mod2"]});
      server.makeModsParameter().should.eql("-mod=@mod1;@mod2");
    });
  });

  describe('makeServerModsParameter', function() {
    it('should create server mods parameter for single mod', function() {
      var server = new Server({serverMods: ["@mod"]});
      server.makeServerModsParameter().should.eql("-serverMod=@mod");
    });

    it('should create server mods parameter for multiple mod', function() {
      var server = new Server({serverMods: ["@mod1", "@mod2"]});
      server.makeServerModsParameter().should.eql("-serverMod=@mod1;@mod2");
    });
  });

  describe('makePortParameter', function() {
    it('should create port parameter for supplied port', function() {
      var server = new Server({port: 2302});
      server.makePortParameter().should.eql("-port=2302");
    });
  });
});
