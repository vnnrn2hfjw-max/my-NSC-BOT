const { REST, Routes } = require("discord.js");


const commands = [

{
name: "ping",
description: "Check bot performance"
},

{
name: "prices",
description: "View NSC prices"
},

{
name: "english",
description: "How to join NSC (English)"
},

{
name: "spanish",
description: "How to join NSC (Spanish)"
},

{
name: "group",
description: "Get NSC Roblox group link"
},

{
name: "ticketpanel",
description: "Create ticket panel"
},

{
name: "giveawaycreate",
description: "Create a giveaway"
},

{
name: "reroll",
description: "Reroll a giveaway"
},

{
name: "role",
description: "Give a Discord role"
},

{
name: "rank",
description: "Rank a Roblox user"
},

{
name: "derank",
description: "Derank a Roblox user"
}

];


const rest = new REST({version:"10"})
.setToken(process.env.TOKEN);


const CLIENT_ID = "1531640039820230847";


(async()=>{

await rest.put(
Routes.applicationCommands(CLIENT_ID),
{
body: commands
}
);

console.log("✅ Commands registered!");

})();
