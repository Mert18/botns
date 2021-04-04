const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();

client.login(process.env.TOKEN_KEY);

client.on('message', async (message) => {
    if (message.content === `sa`) {
        message.channel.send("aleyküm selam kardeşim hoş geldin")
    }
    else if (message.author.id === "277389276927361025") {
        const funnyData = [
            "neyse buranın tadı kaçtı",
            "biz de tam çıkıyorduk",
            "neyse beyler görüşürüz",
            "neyse sonra konuşuruz",
            "neyse beyler ben yemeğe gidiyorum",
            "buranın havastı bi değişti"
        ];
        let x = Math.trunc(Math.random() * funnyData.length)
        message.channel.send(funnyData[x])
    }
    else if (message.author.id === "277134945011499009") {
        const funnyData = [
            "kralım böyle buyurdu",
            "haklısınız efendim",
            "padişahımız kralımız emredersiniz",
            "ilker padişahım çok yaşa",
            "padişah ilker cumhurbaşkanı hazretleri kralım",
            "öyle efendim",
            "haklısınız efendim",
            "siz ne derseniz doğrudur efendim",
            "padişahımız fermanını verdi ",
        ];
        let x = Math.trunc(Math.random() * funnyData.length)
        message.channel.send(`<:love_you_gesture:828186373139464222> <:love_you_gesture:828186373139464222> <:love_you_gesture:828186373139464222> ${funnyData[x]} <:love_you_gesture:828186373139464222> <:love_you_gesture:828186373139464222> <:love_you_gesture:828186373139464222> `)

    }
    else if (message.content === `$ns`) {
        const x = Math.trunc(Math.random() * 3000);
        message.channel.send(`Enes bugün ${x} kez ağladı.`)
    }
    else if (message.content === `$valorant şahan`) {
        message.channel.send("Bugün Şahan'ın valorant hasar verileri şöyle: \n")
        message.channel.send(`Killjoy'un tareti: 434 \n`);
        message.channel.send(`Şahan : 124`);
    }
    else if (message.content === `$valorant enes`) {
        const x = Math.trunc(Math.random() * 3000);
        const y = Math.trunc(Math.random() * 500);

        message.channel.send(`Enes'in düellocu alıp en arkada bekleme sayacı: ${x} \n`)

        message.channel.send(`Enes'in kötü oynayıp ağlayarak dc'den çıkma sayacı: ${y} \n`)

    }
})