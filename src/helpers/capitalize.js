export const capitalize = text => {
  const words = text.split(' ')
  const titles = []
  words.forEach(word => {
    titles.push(word.charAt(0).toUpperCase() + word.slice(1))
  })
  return titles.join(' ')
}