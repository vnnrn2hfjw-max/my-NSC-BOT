if (interaction.commandName === "ping") {

    const { EmbedBuilder } = require("discord.js");

    const ping = Date.now();

    await interaction.deferReply();

    const latency = Date.now() - ping;

    const uptime = Math.floor(client.uptime / 1000);

    const days = Math.floor(uptime / 86400);
    const hours = Math.floor(uptime / 3600) % 24;
    const minutes = Math.floor(uptime / 60) % 60;
    const seconds = uptime % 60;


    const embed = new EmbedBuilder()

    .setColor("#8B0000")

    .setTitle("🔴⚫ NSC Bot Status")

    .setDescription(
`🟢 **Status:** Online

🏓 **Bot Latency**
\`${latency}ms\`

🌐 **API Latency**
\`${client.ws.ping}ms\`

⏱️ **Uptime**
\`${days}d ${hours}h ${minutes}m ${seconds}s\`

━━━━━━━━━━━━━━━━

🏠 **Servers**
\`${client.guilds.cache.size}\`

👥 **Users**
\`${client.users.cache.size}\`

━━━━━━━━━━━━━━━━

⚫ NSC • No Second Chances`
    )

    .setFooter({
        text: "System Monitoring"
    })

    .setTimestamp();


    await interaction.editReply({
        embeds: [embed]
    });

}
