require('dotenv').config({ path: '../.env' });
const a = require('./client');
await a.commands.load('../commands/legacy');
await a.applicationCommands.load('../commands/app');
await a.login(process.env.TOKEN);
