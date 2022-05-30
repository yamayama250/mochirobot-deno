import { Bot, DiscordenoMessage } from "https://deno.land/x/discordeno@13.0.0-rc18/mod.ts"
import { sendMessage } from "./sendMessage.ts"
import { Embed } from "../types/Embed.ts"
import { WordList } from "../types/WordList.ts"

const embed: Embed = {
  title: "もちたろのリンクもち",
  fields: [
    { name: 'モチッター', value: 'https://twitter.com/a_inari_' },
    { name: 'モチッチ', value: 'https://www.twitch.tv/a_inari' }
  ],
  image: {
    url: "https://cdn.discordapp.com/avatars/294379133251878912/ad6947b2c1e8dd50c31df6cd5fd0b2cf.webp?size=240"
  },
  footer: {
    text: "もちもち〜！"
  }
}

const wordList: WordList = {
  words: [
    { content: "餅さん", message: "呼んだ？" },
    { content: "餅ジョイ", message: "呼んだ？" },
    { content: "neiropop", message: "りき？" },
    { content: "ねいろさん", message: "りき？" },
    { content: "ねとろま", message: "ねとろまくん大好き" },
    { content: "あすか", message: "もちもち～～～！！！！" },
    { content: "ねとろま", message: "ねとろまくん大好き" }
  ]
}

/**
 * Discordから受け取ったメッセージに対応する返答を行います
 * @param bot 
 * @param message 
 */
export function contentJudge(bot: Bot, message: DiscordenoMessage) {
  if(message.isBot) return
  
  if(message.content.startsWith("<@" + bot.id + ">")) {
    if(message.content.indexOf("愛してる") != -1) {
      sendMessage(bot, message.channelId, "ﾓﾁﾓﾁｯ!?")
    }
  } else {
    wordList.words.map(word => {
      if(message.content.indexOf(word.content) != -1){
        sendMessage(bot, message.channelId, word.message)
      }
    })
    if(message.content.startsWith("!link")) {
      sendMessage(bot, message.channelId, { embeds: [embed] })
    }
  }
}
