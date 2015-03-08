var should = require('should');
var Server = require('../src/server');

describe('server', function() {
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

  describe('makePortParameter', function() {
    it('should create port parameter for supplied port', function() {
      var server = new Server({port: 2302});
      server.makePortParameter().should.eql("-port=2302");
    });
  });
});
