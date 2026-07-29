const {
ChannelType,
PermissionFlagsBits,
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
} = require("discord.js");


module.exports = {

name:"interactionCreate",

async execute(interaction){


if(interaction.isStringSelectMenu()){


if(interaction.customId !== "ticket_menu") return;


let type = interaction.values[0];

let role;


if(type === "buyer"){
role="1502723065795051693";
}

if(type==="support" || type==="free"){
role="1502708624487616684";
}



const names={
buyer:"🛒・buyer",
support:"💬・support",
free:"🎁・free-access"
};



const channel = await interaction.guild.channels.create({

name:`${names[type]}-${interaction.user.username}`,

type:ChannelType.GuildText,


permissionOverwrites:[

{
id:interaction.guild.id,
deny:[
PermissionFlagsBits.ViewChannel
]
},

{
id:interaction.user.id,
allow:[
PermissionFlagsBits.ViewChannel,
PermissionFlagsBits.SendMessages
]
},

{
id:role,
allow:[
PermissionFlagsBits.ViewChannel,
PermissionFlagsBits.SendMessages
]
}

]

});



const buttons = new ActionRowBuilder()
.addComponents(

new ButtonBuilder()
.setCustomId("claim_ticket")
.setLabel("👤 Claim")
.setStyle(ButtonStyle.Primary),


new ButtonBuilder()
.setCustomId("close_ticket")
.setLabel("🔒 Close")
.setStyle(ButtonStyle.Danger)

);



const embed = new EmbedBuilder()
.setColor("#8B0000")
.setTitle("🔴 Ticket Created")
.setDescription(
`Welcome <@${interaction.user.id}>!

Your ticket has been created.

Please explain your request clearly.

⚫ Be patient.
🔴 Staff will reply soon.

Ticket Type:
**${type.toUpperCase()}**`
)
.setFooter({
text:"NSC Ticket System"
});



await channel.send({

content:`<@${interaction.user.id}> <@&${role}>`,

embeds:[embed],

components:[buttons]

});



interaction.reply({

content:`✅ Ticket created: ${channel}`,

ephemeral:true

});


}



if(interaction.isButton()){


if(interaction.customId==="close_ticket"){

interaction.reply("🔒 Closing ticket...");

setTimeout(()=>{

interaction.channel.delete();

},3000);

}



if(interaction.customId==="claim_ticket"){

interaction.reply({

content:`👤 Ticket claimed by ${interaction.user}`

});

}


}


}

};
