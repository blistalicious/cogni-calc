require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'add',
        description: 'Adds two given values.',
        options: [
            {
                name: 'num1',
                description: 'First value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'num2',
                description: 'Second value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'subtract',
        description: 'Subtracts two given values.',
        options: [
            {
                name: 'num1',
                description: 'First value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'num2',
                description: 'Second Value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'multiply',
        description: 'Multiplies two given values.',
        options: [
            {
                name: 'num1',
                description: 'First value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'num2',
                description: 'Second value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'divide',
        description: 'Divides two given values.',
        options: [
            {
                name: 'num1',
                description: 'First value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'num2',
                description: 'Second value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'power',
        description: 'Raises a given value to a given power.',
        options: [
            {
                name: 'num1',
                description: 'Value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'pow',
                description: 'Power',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'sqrt',
        description: 'Square roots a given number.',
        options: [
            {
                name: 'num',
                description: 'Value',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
]; 

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Slash commands were registered successfully.')
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})(); 


