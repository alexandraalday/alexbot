module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`안녕하세요! Logged in as ${client.user.tag} 🙇`);
    },
};