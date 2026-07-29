const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  REST,
  Routes,
  Events
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const commands = [
  {
    name: "ping",
    description: "Check bot performance",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

const CLIENT_ID = "1531640039820230847";

// Register slash commands
(async () => {
  try {
    console.log("Registering commands...");

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );

    console.log("✅ Commands registered!");
  } catch (error) {
    console.error("Command registration error:", error);
  }
})();

// Bot ready
client.once(Events.ClientReady, () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Slash commands
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === "ping") {
      const start = Date.now();

      await interaction.deferReply();

      const latency = Date.now() - start;

      const embed = new EmbedBuilder()
        .setColor("#8B0000")
        .setTitle("🔴⚫ NSC Bot Status")
        .setDescription(
`🟢 **Status:** Online

🏓 **Bot Latency**
\`${latency}ms\`

🌐 **API Latency**
\`${client.ws.ping}ms\`

━━━━━━━━━━━━━━

⚫ NSC • No Second Chances`
        )
        .setTimestamp();

      await interaction.editReply({
        embeds: [embed],
      });
    }
  } catch (error) {
    console.error("Interaction error:", error);

    if (interaction.deferred || interaction.replied) {
      await interaction.editReply("❌ An error occurred.");
    } else {
      await interaction.reply({
        content: "❌ An error occurred.",
        ephemeral: true,
      });
    }
  }
});

// Login
client.login(process.env.TOKEN);
