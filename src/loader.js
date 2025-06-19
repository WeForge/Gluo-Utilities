require('dotenv').config();
const a = require('./client');
a.commands.load('legacy');
a.applicationCommands.load('app');
a.login(process.env.TOKEN);
