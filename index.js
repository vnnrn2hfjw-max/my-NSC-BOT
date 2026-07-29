require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require("discord.js");

const { REST, Routes } = require("discord.js");


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});


// Slash commands
const commands = [
  {
    name: "ping",
    description: "Check bot performance"
  }
];


const rest = new REST({ version: "10" })
.setToken(process.env.TOKEN);


const CLIENT_ID = "1531640039820230847";


// Register commands
(async () => {
  try {

    console.log("Registering commands...");

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      {
        body: commands
      }
    );

    console.log("✅ Commands registered!");

  } catch (error) {

    console.error(error);

  }
})();


// When bot starts
client.once("ready", () => {

  console.log(`✅ ${client.user.tag} is online!`);

});


// Commands
client.on("interactionCreate", async interaction => {

  if (!interaction.isChatInputCommand()) return;


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
      embeds: [embed]
    });

  }

});


// Login
client.login(process.env.TOKEN);
