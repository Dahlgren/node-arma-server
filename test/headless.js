var should = require('should');
var Headless = require('../src/headless');

describe('headless', function() {
  describe('armaServerExecutable', function() {
    it('should use correct executable for linux', function() {
      var headless = new Headless({platform: "linux"});
      headless.armaServerExecutable().should.eql("arma3server");
    });

    it('should use correct executable for windows', function() {
      var headless = new Headless({platform: "windows"});
      headless.armaServerExecutable().should.eql("arma3server.exe");
    });

    it('should use correct executable for wine', function() {
      var headless = new Headless({platform: "wine"});
      headless.armaServerExecutable().should.eql("arma3server.exe");
    });
  });

  describe('makeHostParameter', function() {
    it('should create connect parameter for supplied host', function() {
      var headless = new Headless({host: "domain.test"});
      headless.makeHostParameter().should.eql("-connect=domain.test");
    });
  });

  describe('makeModsParameter', function() {
    it('should create mods parameter for single mod', function() {
      var headless = new Headless({mods: ["@mod"]});
      headless.makeModsParameter().should.eql("-mod=@mod");
    });

    it('should create mods parameter for multiple mod', function() {
      var headless = new Headless({mods: ["@mod1", "@mod2"]});
      headless.makeModsParameter().should.eql("-mod=@mod1;@mod2");
    });
  });

  describe('makePasswordParameter', function() {
    it('should create password parameter for supplied password', function() {
      var headless = new Headless({password: "test"});
      headless.makePasswordParameter().should.eql("-password=test");
    });
  });

  describe('makePortParameter', function() {
    it('should create port parameter for supplied port', function() {
      var headless = new Headless({port: 2302});
      headless.makePortParameter().should.eql("-port=2302");
    });
  });
});
