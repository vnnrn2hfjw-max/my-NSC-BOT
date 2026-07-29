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


  else if (interaction.commandName === "prices") {

    await interaction.reply(
`# NSC PRICES

## ACCESS ##
> - Free Access — FREE
> - Half Access — 350 Robux | $3.50
> - Full Access — 600 Robux | $8
> - Name Skip — 150 Robux | $1.50

## STAFF RANKS ##
-# Limited spots
- **Trial required before permissions are given.**
> - Chief of Staff — $250
> - Manager — $200
> - Head Admin — $160
> - Senior Admin — $125
> - Admin — $90
> - Ranker — $60
> - Head Moderator — $50
> - Senior Moderator — $40
> - Moderator — $30
> - Junior Moderator — $20
> - Trial Moderator — $10

## EXTRA ##
> - Link Perms — $3
> - Pic Perms — $3
> - Custom Role — $10
> - Private VC — $15
> - Custom Role + Private VC Bundle — $20

## PAYMENTS ##
> - PayPal (Friends & Family ONLY)
> - Robux
> - Server Boosts
> - Gift Cards

## TERMS AND CONDITIONS ##
> Only buy from a Trusted Seller, Owner, or Founder.
> No refunds.
> Abuse of purchased roles may result in removal.
> Leadership roles are not for sale.
> All purchases are final.`
    );

  }


  else if (interaction.commandName === "group") {

    await interaction.reply(
`Here is our official Roblox Group:

https://www.roblox.com/share/g/926022365`
    );

  }


  else if (interaction.commandName === "english") {

    await interaction.reply(
`# <:RedDrippingGlowingCrown:1502724245334130719> HOW TO JOIN NSC | No Second Chances

Welcome to NSC | No Second Chances.

To gain access to NSC, complete these requirements:

✅ Requirements

• Join our official Roblox Group:
https://www.roblox.com/share/g/926022365

• Follow the owners:

darius:
https://www.roblox.com/users/5782622558/profile

blastyed:
https://www.roblox.com/users/3025544313/profile

• Add "NSC" or "666" to your Roblox display and Discord username.

• Roblox account must be at least 1 month old.

• Read all rules.

• React to the 4 most recent activity checks.

• Roblox account must contain at least one full page of badges.

📩 Final Step

Open a ticket and provide proof.

Welcome to NSC. Stay loyal. Stay active. Stay NSC.`
    );

  }


  else if (interaction.commandName === "spanish") {

    await interaction.reply(
`# <:RedDrippingGlowingCrown:1502724245334130719> CÓMO UNIRSE A NSC | No Second Chances

Bienvenido a NSC | No Second Chances.

Requisitos:

✅ Únete al Grupo oficial de Roblox:
https://www.roblox.com/share/g/926022365

• Sigue a los dueños:

darius:
https://www.roblox.com/users/5782622558/profile

blastyed:
https://www.roblox.com/users/3025544313/profile

• Añade "NSC" o "666" a tu Roblox y Discord.

• La cuenta debe tener mínimo 1 mes.

• Lee las reglas.

• Reacciona a las últimas comprobaciones de actividad.

• La cuenta debe tener una página completa de insignias.

📩 Paso final

Abre un ticket y proporciona pruebas.

Bienvenido a NSC. Mantente leal. Mantente activo.`
    );

  }

});


client.login(process.env.TOKEN);
