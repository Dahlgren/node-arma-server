<% if (admins !== null) { %>
admins[]= {
  <% _.forEach(admins, function(uid) { %>
    "<%= uid %>",
  <% }) %>
};
<% } %>

<% if (hostname !== null) { %>
// Servername visible in the game browser.
hostname = "<%= hostname %>";
<% } %>

<% if (password !== null) { %>
// Password required to connect to server.
password = "<%= password %>";
<% } %>

<% if (passwordAdmin !== null) { %>
// Password to protect admin access.
passwordAdmin = "<%= passwordAdmin %>";
<% } %>

<% if (players !== null && players > 0) { %>
// The maximum number of players that can connect to server. Number of mission slots override this setting.
maxPlayers = <%= players %>;
<% } %>

<% if (logFile !== null) { %>
logFile = "<%=logFile %>";
<% } %>

<% if (motd !== null) { %>
// WELCOME MESSAGE ("message of the day")
// It can be several lines, separated by comma
// Empty messages "" will not be displayed at all but are only for increasing the interval
motd[]= {
  <% _.forEach(motd, function(message) { %>
    "<%= message %>",
  <% }) %>
};
<% } %>

<% if (motdInterval !== null) { %>
// Time interval (in seconds) between each message
motdInterval = <%= motdInterval %>;
<% } %>

<% if (kickDuplicate !== null) { %>
// Each ArmA version has its own ID. If kickDuplicate is set to 1, a player will be kicked when he joins a server where another player with the same ID is playing.
kickDuplicate = <%= kickDuplicate %>;
<% } %>

<% if (verifySignatures !== null) { %>
// Verifies .pbos against .bisign files. Valid values 0 (disabled), 1 (prefer v2 sigs but accept v1 too) and 2 (only v2 sigs are allowed).
verifySignatures = <%= verifySignatures %>;
<% } %>

<% if (voteMissionPlayers !== null) { %>
// Tells the server how many people must connect so that it displays the mission selection screen.
voteMissionPlayers = <%= voteMissionPlayers %>;
<% } %>

<% if (voteThreshold !== null) { %>
// 33% or more players need to vote for something, for example an admin or a new map, to become effective
voteThreshold = <%= voteThreshold %>;
<% } %>

<% if (disableVoN !== null) { %>
// If set to 1, Voice over Net will not be available
disableVoN = <%= disableVoN %>;
<% } %>

<% if (vonCodecQuality !== null) { %>
// since 1.62.95417 supports range 1-20 //since 1.63.x will supports range 1-30 //8kHz is 0-10, 16kHz is 11-20, 32kHz is 21-30
vonCodecQuality = <%= vonCodecQuality %>;
<% } %>

<% if (persistent !== null) { %>
// If 1, missions still run on even after the last player disconnected.
persistent = <%= persistent %>;
<% } %>

<% if (timeStampFormat !== null) { %>
// Set the timestamp format used on each report line in server-side RPT file. Possible values are "none" (default),"short","full".
timeStampFormat = "<%= timeStampFormat %>";
<% } %>

<% if (battleEye !== null) { %>
// Server to use BattlEye system
BattlEye = <%= battleEye %>;
<% } %>

<% if (forcedDifficulty !== null) { %>
forcedDifficulty = "<%= forcedDifficulty %>";
<% } %>

<% if (forceRotorLibSimulation !== null) { %>
// Enforces the Advanced Flight Model on the server. Default = 0 (up to the player). 1 - forced AFM, 2 - forced SFM.
forceRotorLibSimulation = <%= forceRotorLibSimulation %>;
<% } %>

<% if (allowedLoadFileExtensions !== null) { %>
// Only allow files with those extensions to be loaded via loadFile command (since Arma 3 build 1.19.124216)
// Defaults: "hpp","sqs","sqf","fsm","cpp","paa","txt","xml","inc","ext","sqm","ods","fxy","lip","csv","kb","bik","bikb","html","htm","biedi"
allowedLoadFileExtensions[] = {
  <% _.forEach(allowedLoadFileExtensions, function(fileExtension) { %>
    "<%= fileExtension %>",
  <% }) %>
};
<% } %>

<% if (allowedPreprocessFileExtensions !== null) { %>
// Only allow files with those extensions to be loaded via preprocessFile/preprocessFileLineNumber commands (since Arma 3 build 1.19.124323)
// Defaults: "hpp","sqs","sqf","fsm","cpp","paa","txt","xml","inc","ext","sqm","ods","fxy","lip","csv","kb","bik","bikb","html","htm","biedi"
allowedPreprocessFileExtensions[] = {
  <% _.forEach(allowedPreprocessFileExtensions, function(fileExtension) { %>
    "<%= fileExtension %>",
  <% }) %>
};
<% } %>

<% if (allowedHTMLLoadExtensions !== null) { %>
// Only allow files with those extensions to be loaded via HTMLLoad command (since Arma 3 build 1.27.126715)
// Defaults: "htm","html","xml","txt"
allowedHTMLLoadExtensions[] = {
  <% _.forEach(allowedHTMLLoadExtensions, function(fileExtension) { %>
    "<%= fileExtension %>",
  <% }) %>
};
<% } %>

<% if (allowedFilePatching !== null) { %>
// Allow or prevent client using -filePatching to join the server.
// 0 is disallow, 1 is allow HC, 2 is allow all clients
allowedFilePatching = <%= allowedFilePatching %>;
<% } %>

<% if (onUserConnected !== null) { %>
// Server Side Script to be executed upon user connected
onUserConnected = "<%= onUserConnected %>";
<% } %>

<% if (onUserDisconnected !== null) { %>
// Server Side Script to be executed upon user disconnected
onUserDisconnected = "<%= onUserDisconnected %>";
<% } %>

<% if (doubleIdDetected !== null) { %>
// Server Side Script to be executed upon users with same id detected
doubleIdDetected = "<%= doubleIdDetected %>";
<% } %>

<% if (onUnsignedData !== null) { %>
// unsigned data detected
onUnsignedData = "<%= onUnsignedData %>";
<% } %>

<% if (onHackedData !== null) { %>
// tampering of the signature detected
onHackedData = "<%= onHackedData %>";
<% } %>

<% if (onDifferentData !== null) { %>
// data with a valid signature, but different version than the one present on server detected
onDifferentData = "<%= onDifferentData %>";
<% } %>

<% if (headlessClients !== null) { %>
// Headless clients
// The server doesn't allow arbitrary connections from headless clients if you do not define the headless clients IPs.
// Multiple Connections and Addresses are allowed in the case of more than one Headless Client.
headlessClients[] = {
  <% _.forEach(headlessClients, function(client) { %>
    "<%= client %>",
  <% }) %>
};
<% } %>

<% if (localClient !== null) { %>
// to indicate clients with unlimited bandwidth and nearly no latency (https://dev-heaven.net/issues/62500), Available since Arma 2:OA build 99184 , including Arma 3
localClient[]={
  <% _.forEach(localClient, function(client) { %>
    "<%= client %>",
  <% }) %>
};
<% } %>

<% if (missions) { %>
// Missions defined for rotation
class Missions {
  <% _.forEach(missions, function(mission, index) { %>
    class mission_<%= index + 1 %> {
      template = "<%= mission.name %>";
      difficulty = "<%= mission.difficulty %>";
      class Params {
      <% if (mission.params) { %>
        <% _.forEach(mission.params, function(param) { %>
          <%= param.name %> = <%= param.value %>;
        <% }) %>
      <% } %>
      };
    };
  <% }) %>
};
<% } %>

<% if (additionalConfigurationOptions !== null) { %>
<%= additionalConfigurationOptions %>
<% } %>
