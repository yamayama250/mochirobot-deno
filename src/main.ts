import { createBot, startBot } from "https://deno.land/x/discordeno@13.0.0-rc18/mod.ts"
import { enableCachePlugin, enableCacheSweepers } from "https://deno.land/x/discordeno_cache_plugin@0.0.21/mod.ts"
import { contentJudge } from "./modules/contentJudge.ts"
import { cronJob } from "./modules/cronJob.ts"

const mochiRobot = createBot({
  token: Deno.env.get("DISCORD_TOKEN")!,
  intents: ["Guilds", "GuildMessages"],
  botId: BigInt(Deno.env.get("BOT_ID")!),
  events: {
    ready() {
      console.log("もちろぼ発進もち！")
    },
    messageCreate(bot, message) {
      contentJudge(bot, message)
    }
  }
})

cronJob(mochiRobot)

const bot = enableCachePlugin(mochiRobot)
enableCacheSweepers(bot)

await startBot(bot)
