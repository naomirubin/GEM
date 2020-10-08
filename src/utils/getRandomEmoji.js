// const EMOJIS = ["💪", "🔥", "😱", "😎", "🎉", "🥇", "🚀", "👌", "👍", "😵"]
const EMOJIS = ["💪"]

export const getRandomEmoji = () => {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
}
