<% if (hostname) { %>
// Servername visible in the game browser.
hostname = "<%= hostname %>";
<% } %>

<% if (password) { %>
// Password required to connect to server.
password = "<%= password %>";
<% } %>

<% if (passwordAdmin) { %>
// Password to protect admin access.
passwordAdmin = "<%= passwordAdmin %>";
<% } %>

<% if (players) { %>
// The maximum number of players that can connect to server. Number of mission slots override this setting.
maxPlayers = <%= players %>;
<% } %>

<% if (motd) { %>
// WELCOME MESSAGE ("message of the day")
// It can be several lines, separated by comma
// Empty messages "" will not be displayed at all but are only for increasing the interval
motd[]= {
  <% _.forEach(motd, function(message) { %>
    "<%= message %>",
  <% }) %>
};
<% } %>

<% if (motdInterval) { %>
// Time interval (in seconds) between each message
motdInterval = <%= motdInterval %>;
<% } %>

<% if (kickDuplicate) { %>
// Each ArmA version has its own ID. If kickDuplicate is set to 1, a player will be kicked when he joins a server where another player with the same ID is playing.
kickDuplicate = <%= kickDuplicate %>;
<% } %>

<% if (verifySignatures) { %>
// Verifies .pbos against .bisign files. Valid values 0 (disabled), 1 (prefer v2 sigs but accept v1 too) and 2 (only v2 sigs are allowed).
verifySignatures = <%= verifySignatures %>;
<% } %>

<% if (voteMissionPlayers) { %>
// Tells the server how many people must connect so that it displays the mission selection screen.
voteMissionPlayers = <%= voteMissionPlayers %>;
<% } %>

<% if (voteThreshold) { %>
// 33% or more players need to vote for something, for example an admin or a new map, to become effective
voteThreshold = <%= voteThreshold %>;
<% } %>

<% if (disableVoN) { %>
// If set to 1, Voice over Net will not be available
disableVoN = <%= disableVoN %>;
<% } %>

<% if (vonCodecQuality) { %>
// since 1.62.95417 supports range 1-20 //since 1.63.x will supports range 1-30 //8kHz is 0-10, 16kHz is 11-20, 32kHz is 21-30
vonCodecQuality = <%= vonCodecQuality %>;
<% } %>

<% if (persistent) { %>
// If 1, missions still run on even after the last player disconnected.
persistent = <%= persistent %>;
<% } %>

<% if (timeStampFormat) { %>
// Set the timestamp format used on each report line in server-side RPT file. Possible values are "none" (default),"short","full".
timeStampFormat = "<%= timeStampFormat %>";
<% } %>

<% if (battleEye) { %>
// Server to use BattlEye system
BattlEye = <%= battleEye %>;
<% } %>

<% if (forceRotorLibSimulation) { %>
// Enforces the Advanced Flight Model on the server. Default = 0 (up to the player). 1 - forced AFM, 2 - forced SFM.
forceRotorLibSimulation = <%= forceRotorLibSimulation %>;
<% } %>

<% if (allowedLoadFileExtensions) { %>
// Only allow files with those extensions to be loaded via loadFile command (since Arma 3 build 1.19.124216)
// Defaults: "hpp","sqs","sqf","fsm","cpp","paa","txt","xml","inc","ext","sqm","ods","fxy","lip","csv","kb","bik","bikb","html","htm","biedi"
allowedLoadFileExtensions[] = {
  <% _.forEach(allowedLoadFileExtensions, function(fileExtension) { %>
    "<%= fileExtension %>",
  <% }) %>
};
<% } %>

<% if (allowedPreprocessFileExtensions) { %>
// Only allow files with those extensions to be loaded via preprocessFile/preprocessFileLineNumber commands (since Arma 3 build 1.19.124323)
// Defaults: "hpp","sqs","sqf","fsm","cpp","paa","txt","xml","inc","ext","sqm","ods","fxy","lip","csv","kb","bik","bikb","html","htm","biedi"
allowedPreprocessFileExtensions[] = {
  <% _.forEach(allowedPreprocessFileExtensions, function(fileExtension) { %>
    "<%= fileExtension %>",
  <% }) %>
};
<% } %>

<% if (allowedHTMLLoadExtensions) { %>
// Only allow files with those extensions to be loaded via HTMLLoad command (since Arma 3 build 1.27.126715)
// Defaults: "htm","html","xml","txt"
allowedHTMLLoadExtensions[] = {
  <% _.forEach(allowedHTMLLoadExtensions, function(fileExtension) { %>
    "<%= fileExtension %>",
  <% }) %>
};
<% } %>

<% if (onUserConnected) { %>
// Server Side Script to be executed upon user connected
onUserConnected = "<%= onUserConnected %>";
<% } %>

<% if (onUserDisconnected) { %>
// Server Side Script to be executed upon user disconnected
onUserDisconnected = "<%= onUserDisconnected %>";
<% } %>

<% if (doubleIdDetected) { %>
// Server Side Script to be executed upon users with same id detected
doubleIdDetected = "<%= doubleIdDetected %>";
<% } %>

<% if (onUnsignedData) { %>
// unsigned data detected
onUnsignedData = "<%= onUnsignedData %>";
<% } %>

<% if (onHackedData) { %>
// tampering of the signature detected
onHackedData = "<%= onHackedData %>";
<% } %>

<% if (onDifferentData) { %>
// data with a valid signature, but different version than the one present on server detected
onDifferentData = "<%= onDifferentData %>";
<% } %>

<% if (headlessClients) { %>
// Headless clients
// The server doesn't allow arbitrary connections from headless clients if you do not define the headless clients IPs.
// Multiple Connections and Addresses are allowed in the case of more than one Headless Client.
headlessClients[] = {
  <% _.forEach(headlessClients, function(client) { %>
    "<%= client %>",
  <% }) %>
};
<% } %>

<% if (localClient) { %>
// to indicate clients with unlimited bandwidth and nearly no latency (https://dev-heaven.net/issues/62500), Available since Arma 2:OA build 99184 , including Arma 3
localClient[]={
  <% _.forEach(localClient, function(client) { %>
    "<%= client %>",
  <% }) %>
};
<% } %>
