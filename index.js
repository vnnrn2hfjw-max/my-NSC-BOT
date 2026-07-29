const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once(Events.ClientReady, () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === "ping") {
      await interaction.reply("🏓 Pong!");
    }
  } catch (error) {
    console.error(error);

    if (!interaction.replied) {
      await interaction.reply({
        content: "❌ Something went wrong.",
        ephemeral: true
      });
    }
  }
});

client.login(process.env.TOKEN);
