export const splitIntoParagraphs = initialContent => {
  let content = ''
  if (initialContent.includes('\n')) {
    const splitContent = initialContent.split('\n')
    content = splitContent.map(p => {
      return <p key={p.length + Math.random()}>{p.trim()}</p>
    })
  } else {
    return initialContent
  }
  return content
}
