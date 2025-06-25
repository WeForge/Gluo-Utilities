require('dotenv').config({ path: '../.env' });
const a = require('./client');
a.commands.load(path.resolve(__dirname, '../commands/legacy'));
a.applicationCommands.load(path.resolve(__dirname, '../commands/app'));
a.login(process.env.TOKEN);
