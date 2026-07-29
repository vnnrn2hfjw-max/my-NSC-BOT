const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  PermissionsBitField
} = require("discord.js");


module.exports = {

  async createTicketPanel(interaction) {

    const buttons = new ActionRowBuilder()
      .addComponents(

        new ButtonBuilder()
          .setCustomId("free_access_ticket")
          .setLabel("🎟️ Free Access Ticket")
          .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
          .setCustomId("buyer_ticket")
          .setLabel("💰 Buyer Ticket")
          .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
          .setCustomId("support_ticket")
          .setLabel("🛠️ Support Ticket")
          .setStyle(ButtonStyle.Secondary)

      );


    await interaction.reply({
      content:
`🔴⚫ **NSC Ticket Center**

Choose the ticket type you need:

🎟️ **Free Access Ticket**
For joining NSC.

💰 **Buyer Ticket**
For purchases and payments.

🛠️ **Support Ticket**
For help and issues.`,
      components: [buttons]
    });

  },


  async handleTicket(interaction) {

    let ticketType;
    let staffRole;


    if (interaction.customId === "free_access_ticket") {
      ticketType = "Free Access";
      staffRole = "1502708624487616684";
    }


    if (interaction.customId === "buyer_ticket") {
      ticketType = "Buyer";
      staffRole = "1502723065795051693";
    }


    if (interaction.customId === "support_ticket") {
      ticketType = "Support";
      staffRole = "1502708624487616684";
    }


    const channel = await interaction.guild.channels.create({

      name: `ticket-${interaction.user.username}`,

      type: ChannelType.GuildText,

      permissionOverwrites: [

        {
          id: interaction.guild.id,
          deny: [
            PermissionsBitField.Flags.ViewChannel
          ]
        },

        {
          id: interaction.user.id,
          allow: [
            PermissionsBitField.Flags.ViewChannel,
            PermissionsBitField.Flags.SendMessages
          ]
        },

        {
          id: staffRole,
          allow: [
            PermissionsBitField.Flags.ViewChannel,
            PermissionsBitField.Flags.SendMessages
          ]
        }

      ]

    });


    await channel.send(
`🔴⚫ **NSC Ticket Created**

Welcome <@${interaction.user.id}>!

Ticket Type:
**${ticketType}**

Staff:
<@&${staffRole}>

Please explain your request and provide any needed information.

A staff member will assist you soon.`
    );


    await interaction.reply({
      content: `✅ Your ticket has been created: ${channel}`,
      ephemeral: true
    });

  }

};
