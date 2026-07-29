const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!"
  }
];

const rest = new REST({ version: "10" })
.setToken(process.env.TOKEN);

const CLIENT_ID = "PUT_YOUR_APPLICATION_ID_HERE";

(async () => {
  try {
    console.log("Registering commands...");

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );

    console.log("✅ Commands registered!");
  } catch (error) {
    console.error(error);
  }
})();
