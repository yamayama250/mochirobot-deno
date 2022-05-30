import { Bot } from "https://deno.land/x/discordeno@13.0.0-rc18/mod.ts"
import { cron } from "https://deno.land/x/deno_cron@v1.0.0/cron.ts"
import { sendMessage } from "./sendMessage.ts"

/**
 * 設定した毎時処理を実行します
 * @param bot 
 */
export function cronJob(bot: Bot) {
  cron("0 0 9 * * *", () => {
    sendMessage(
      bot,
      BigInt(Deno.env.get("CHANNEL_ID")!),
      "みんなおはモチー!！ストア確認した！？した！？した！？！？"
    )
  })
  cron("0 0 21 * * *", () => {
    sendMessage(
      bot,
      BigInt(Deno.env.get("CHANNEL_ID")!),
      "ねとろまくん、愛してる！！"
    )
  })
}