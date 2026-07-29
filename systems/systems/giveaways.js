const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

const giveaways = new Map();


module.exports = {

  async createGiveaway(interaction) {

    const prize = interaction.options.getString("prize");
    const duration = interaction.options.getString("duration");
    const winners = interaction.options.getInteger("winners");

    const giveawayID = "NSC-" + Math.floor(Math.random() * 99999);


    const embed = new EmbedBuilder()

      .setColor("#8B0000")

      .setTitle("🎉 NSC Giveaway")

      .setDescription(
`🎁 **Prize**
${prize}

⏱️ **Duration**
${duration}

🏆 **Winners**
${winners}

👤 **Hosted by**
${interaction.user}

🆔 **Giveaway ID**
${giveawayID}

━━━━━━━━━━━━━━

Click the button below to enter!`
      )

      .setFooter({
        text: "NSC • No Second Chances"
      })

      .setTimestamp();



    const button = new ActionRowBuilder()
      .addComponents(

        new ButtonBuilder()
          .setCustomId(`giveaway_${giveawayID}`)
          .setLabel("🎉 Enter Giveaway")
          .setStyle(ButtonStyle.Success)

      );


    giveaways.set(giveawayID, {
      prize,
      duration,
      winners,
      users: []
    });


    await interaction.reply({
      embeds: [embed],
      components: [button]
    });

  },


  async enterGiveaway(interaction) {

    const id = interaction.customId.replace(
      "giveaway_",
      ""
    );


    const giveaway = giveaways.get(id);

    if (!giveaway) {
      return interaction.reply({
        content: "❌ Giveaway not found.",
        ephemeral: true
      });
    }


    if (giveaway.users.includes(interaction.user.id)) {

      return interaction.reply({
        content: "❌ You already entered.",
        ephemeral: true
      });

    }


    giveaway.users.push(interaction.user.id);


    await interaction.reply({
      content: "✅ You entered the giveaway!",
      ephemeral: true
    });

  }

};const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

const giveaways = new Map();


module.exports = {

  async createGiveaway(interaction) {

    const prize = interaction.options.getString("prize");
    const duration = interaction.options.getString("duration");
    const winners = interaction.options.getInteger("winners");

    const giveawayID = "NSC-" + Math.floor(Math.random() * 99999);


    const embed = new EmbedBuilder()

      .setColor("#8B0000")

      .setTitle("🎉 NSC Giveaway")

      .setDescription(
`🎁 **Prize**
${prize}

⏱️ **Duration**
${duration}

🏆 **Winners**
${winners}

👤 **Hosted by**
${interaction.user}

🆔 **Giveaway ID**
${giveawayID}

━━━━━━━━━━━━━━

Click the button below to enter!`
      )

      .setFooter({
        text: "NSC • No Second Chances"
      })

      .setTimestamp();



    const button = new ActionRowBuilder()
      .addComponents(

        new ButtonBuilder()
          .setCustomId(`giveaway_${giveawayID}`)
          .setLabel("🎉 Enter Giveaway")
          .setStyle(ButtonStyle.Success)

      );


    giveaways.set(giveawayID, {
      prize,
      duration,
      winners,
      users: []
    });


    await interaction.reply({
      embeds: [embed],
      components: [button]
    });

  },


  async enterGiveaway(interaction) {

    const id = interaction.customId.replace(
      "giveaway_",
      ""
    );


    const giveaway = giveaways.get(id);

    if (!giveaway) {
      return interaction.reply({
        content: "❌ Giveaway not found.",
        ephemeral: true
      });
    }


    if (giveaway.users.includes(interaction.user.id)) {

      return interaction.reply({
        content: "❌ You already entered.",
        ephemeral: true
      });

    }


    giveaway.users.push(interaction.user.id);


    await interaction.reply({
      content: "✅ You entered the giveaway!",
      ephemeral: true
    });

  }

};
