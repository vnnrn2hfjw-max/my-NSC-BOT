const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});


client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }

  else if (interaction.commandName === "group") {
    await interaction.reply(
      "🔗 NSC Official Roblox Group:\nYOUR_GROUP_LINK_HERE"
    );
  }

  else if (interaction.commandName === "english") {
    await interaction.reply(
`🇬🇧 **How to join NSC | No Second Chances**

1. Join the Roblox group
2. Read the rules
3. Follow staff instructions
4. Begin your NSC journey`
    );
  }

  else if (interaction.commandName === "spanish") {
    await interaction.reply(
`🇪🇸 **Cómo unirse a NSC | No Second Chances**

1. Únete al grupo de Roblox
2. Lee las reglas
3. Sigue las instrucciones del staff`
    );
  }

  else if (interaction.commandName === "price") {
    await interaction.reply(
`💰 **NSC Price List**

━━━━━━━━━━━━━━

⭐ Ranks:
• Recruit — Free
• Member — Free
• Trusted — $3
• Elite — $5

━━━━━━━━━━━━━━

⚫ NSC • No Second Chances`
    );
  }

  else if (interaction.commandName === "rank") {
    await interaction.reply(
      "⭐ Rank system coming soon."
    );
  }

  else if (interaction.commandName === "derank") {
    await interaction.reply(
      "🔻 Derank system coming soon."
    );
  }

  else if (interaction.commandName === "role") {
    await interaction.reply(
      "🎭 Role system coming soon."
    );
  }

  else if (interaction.commandName === "giveawaycreate") {
    await interaction.reply(
      "🎉 Giveaway system coming soon."
    );
  }
});


client.login(process.env.TOKEN);
