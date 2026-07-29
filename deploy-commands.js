const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "derank",
    description: "Remove a user's NSC Roblox rank"
  },
  {
    name: "english",
    description: "How to join NSC (English)"
  },
  {
    name: "giveawaycreate",
    description: "Create a giveaway"
  },
  {
    name: "spanish",
    description: "How to join NSC (Spanish)"
  },
  {
    name: "price",
    description: "View NSC prices and info"
  },
  {
    name: "rank",
    description: "Set a user's NSC Roblox rank"
  },
  {
    name: "role",
    description: "Give a Discord role"
  },
  {
    name: "group",
    description: "Get NSC Roblox group link"
  },
  {
    name: "ping",
    description: "Check bot performance"
  }
];

const rest = new REST({ version: "10" })
  .setToken(process.env.TOKEN);

const CLIENT_ID = "1531640039820230847";

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
