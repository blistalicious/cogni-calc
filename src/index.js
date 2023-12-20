require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('num1').value;
        const num2 = interaction.options.get('num2').value;

        interaction.reply(`${num1} + ${num2} = ${num1 + num2}`);
    }

    if (interaction.commandName === 'subtract') {
        const num1 = interaction.options.get('num1').value;
        const num2 = interaction.options.get('num2').value;

        interaction.reply(`${num1} - ${num2} = ${num1 - num2}`);
    }

    if (interaction.commandName === 'multiply') {
        const num1 = interaction.options.get('num1').value;
        const num2 = interaction.options.get('num2').value;

        interaction.reply(`${num1} * ${num2} = ${num1 * num2}`);
    }

    if (interaction.commandName === 'divide') {
        const num1 = interaction.options.get('num1').value;
        const num2 = interaction.options.get('num2').value;

        interaction.reply(`${num1} / ${num2} = ${num1 / num2}`);
    }

    if (interaction.commandName === 'power') {
        const num1 = interaction.options.get('num1').value;
        const pow = interaction.options.get('pow').value;

        interaction.reply(`${num1}^(${pow}) = ${num1 ** pow}`);
    }

    if (interaction.commandName === 'sqrt') {
        const num = interaction.options.get('num').value;

        interaction.reply(`√${num} = ${Math.sqrt(num)}`);
    }
});

client.login(process.env.TOKEN);

