var executables = {
  arma1: {
    linux: 'server',
    windows: 'arma_server.exe'
  },
  arma2: {
    linux: 'server',
    windows: 'arma2server.exe'
  },
  arma2oa: {
    linux: 'server',
    windows: 'arma2oaserver.exe'
  },
  arma3: {
    linux: 'arma3server',
    windows: 'arma3server.exe'
  },
  arma3_x64: {
    windows: 'arma3server_x64.exe'
  },
  cwa: {
    windows: 'coldwarassault_server.exe'
  },
  ofp: {
    linux: 'server',
    windows: 'ofp_server.exe'
  },
  ofpresistance: {
    linux: 'server',
    windows: 'ofpr_server.exe'
  }
}

module.exports = function (game, platform) {
  if (platform === 'wine') {
    platform = 'windows'
  }

  if (executables[game]) {
    return executables[game][platform]
  }

  return null
}
