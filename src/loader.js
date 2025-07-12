require('dotenv').config({ path: '../.env' }); const agg = require('./client');
agg.commands.load('/commands/legacy');
agg.applicationCommands.load('../commands/app');
agg.login(process.env.your_mom);
