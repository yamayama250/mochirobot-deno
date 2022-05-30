import { Bot, CreateMessage } from "https://deno.land/x/discordeno@13.0.0-rc18/mod.ts"

/**
 * @param bot
 * @param channelId - 送信したいチャンネルのID 
 * @param content - 送信したいコンテンツ
 */
export function sendMessage(
  bot: Bot,
  channelId: bigint,
  content: string | CreateMessage
) {
  if(typeof content === "string") content = { content }
  return bot.helpers.sendMessage(channelId, content)
}
