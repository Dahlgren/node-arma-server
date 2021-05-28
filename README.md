# arma-server
Node wrapper for starting arma servers

## Supported games

- arma1
- arma2
- arma2oa
- arma3
- arma3_x64
- cwa (does not support linux)
- ofp
- ofpresistance

## CLI

Install the module globally from NPM

`npm install arma-server -g`

### ArmA Headless

`arma-headless [options]`

#### Options
```
-h, --help          output usage information
--debug             More verbose logging (e.g. stack traces)
--filePatching      Enable file patching
--game [value]      Game to launch
--host [value]      Server IP to join
--mods <mods>       Comma separated list of mods
--password [value]  Password required to join server
--path [value]      Path to arma server directory
--port [value]      Server port to join
--type [value]      Type of server, either linux, windows or wine
```

### ArmA Server

`arma-server [options]`

#### Options:
```
-h, --help                   output usage information
--config [value]             Server config name
--debug                      More verbose logging (e.g. stack traces)
--disableVoN [value]         Disable VON
--filePatching               Enable file patching
--game [value]               Game to launch
--headlessClients <clients>  Whitelisted IPs for headless clients
--hostname [value]           Name in server list
--localClient <clients>      Whitelisted IPs for local clients
--mods <mods>                Comma separated list of mods
--motd <motd>                Comma separated list of messages to show
--motdInterval [value]       Interval between messages
--password [value]           Password required to join server
--passwordAdmin [value]      Admin password required to join server
--path [value]               Path to arma server directory
--persistent [value]         Run server persistent
--platform [value]           Type of server, either linux, windows or wine
--players [value]            Maximum number of player slots
--serverMods <mods>          Comma separated list of server mods
--verifySignatures [value]   Verifies .pbos against .bisign files
```

## Module

Install the module from NPM

`npm install arma-server`

### Headless

To use the server class `var ArmaServer = require('arma-server').Headless;`

#### Options

References,
* https://community.bistudio.com/wiki/Arma_3_Headless_Client

Option | Type | Default | Description
--- | --- | --- | ---
debug | boolean | game default | More verbose logging (e.g. stack traces)
filePatching | boolean | game default | Enable file patching
game | string | 'arma3' | Which game engine to use
host | string | game default | IP or hostname that client should connect to
mods | array of strings | [] | Array of mods as strings to use, relative to game folder
parameters | array | ['-noSound', '-world=empty'] | Additional parameters that will be passed to the arma executable
password | string | game default | Server password
path | string | current working directory | Path to Arma directory
platform | string | 'linux' or 'windows' depending on current OS | 'linux', 'windows' or 'wine' depeding on which to use
port | integer | game default | Server port

### Server

To use the server class `var ArmaServer = require('arma-server').Server;`

#### Options

References,
* https://community.bistudio.com/wiki/server.cfg
* https://community.bistudio.com/wiki/Arma_3_Startup_Parameters

Not all options are available yet

#### Options
Option | Type | Default | Description
--- | --- | --- | ---
additionalConfigurationOptions | string | empty | Additional configuration options as text appended to the configuration file if defined. Make sure to not reuse any other defined configuration options as they will end up twice in the file.
admins | array | game default | Whitelist UIDs as admins, array of strings
allowedFilePatching | integer | game default | Allow clients to use file patching. 0 is disallow, 1 is allow HC, 2 is allow all clients
allowedHTMLLoadExtensions | array of strings | game default | Whitelisted file extensions allowed
allowedLoadFileExtensions | array of strings | game default | Whitelisted file extensions allowed
allowedPreprocessFileExtensions | array of strings | game default | Whitelisted file extensions allowed
battleEye | boolean | game default | Should BattleEye be enabled
config | string | 'server.config' | Name of config file to be saved, stored in configs directory
debug | boolean | game default | More verbose logging (e.g. stack traces)
disableVoN | boolean | game default | Should built in VoN be disabled
doubleIdDetected | string | game default | Server side script to execute on duplicate client id
filePatching | boolean | game default | Enable file patching
forceRotorLibSimulation | boolean | game default | Force rotor simulation from Helicopters DLC
game | string | 'arma3' | Which game to start
forcedDifficulty | string | game default | Set forced difficulty from matching CfgDifficultyPresets or Custom to use CustomDifficulty. Missions list with defined difficulty overrides this value.
headlessClients | array of strings | game default | Whitelist headless clients, array of IPs as strings
hostname | string | game default | Name of server
kickDuplicate | boolean | game default | Should duplicate clients be kicked
localClient | array of strings | game default | Whitelist local clients, array of IPs as strings
logFile | string | game default | Path to log file
missions | array | game default | Array of missions as object with mission name and difficulty. Params can also be optionally set. See below
mods | array | [] | Array of mods as strings to use, relative to game folder
motd | array of strings | game default | Messages to show as MOTD
motdInterval | integer | game default | Time between motds
onDifferentData | string | game default | Server side script to execute on different data
onHackedData | string | game default | Server side script to execute on hacked data
onUnsignedData | string | game default | Server side script to execute on unsigned data
onUserConnected | string | game default | Server side script to execute on user connected
onUserDisconnected | string | game default | Server side script to execute on user disconnected
parameters | array | ['-noSound', '-world=empty'] | Additional parameters that will be passed to the arma executable
password | string | game default | Server password
passwordAdmin | string | game default | Admin password
path | string | current working directory | Path to game folder
persistent | boolean | game default | If server should run in persistent mode
platform | string | 'linux' or 'windows' depending on current OS | 'linux', 'windows' or 'wine' depending on which to use
players | integer | game default | Number of player slots
serverMods | array | [] | Array of server mods as strings to use, relative to game folder
timeStampFormat | string | game default | Log timestamp format, see references
verifySignatures | integer | game default | Addons signature verification. Default = 0. Weak = 1. Full = 2. See references
vonCodecQuality | integer | game default | Value of 1 - 20, default is 3. See references
voteMissionPlayers | integer | game default | Numbers of players needed to be connected before mission vote
voteThreshold | float | game default | Percentage required to win voting

##### Missions

Key | Type | Description
--- | --- | ---
name | string | Name of mission, could either be filename without pbo suffix or mission name as declared in cfgMissions
difficulty | string | In Arma 2 and above, recruit, regular, veteran or mercenary
params | array | Array with mission parameters, see below

##### Mission Parameters

Key | Type | Description
--- | --- | ---
name | string | Mission parameter name as declared in the mission
value | number | Mission parameter value
