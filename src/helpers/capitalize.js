export const capitalize = text => {
  if (text === '') throw new Error('Nothing to capitalize')
  const words = text.split(' ')
  const titles = []
  words.forEach(word => {
    titles.push(word.charAt(0).toUpperCase() + word.slice(1))
  })
  return titles.join(' ')
}
