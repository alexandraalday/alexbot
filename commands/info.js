const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with some info!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Get info about a user')
                .addUserOption(option => option.setName('user').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Get info about the server')),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('user') || interaction.user;
            await interaction.reply(`${user.username}'s tag: ${user.tag}\n${user.username}'s id: ${user.id}\n${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        }
        if (interaction.options.getSubcommand() === 'server') {
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        }
    },
};
