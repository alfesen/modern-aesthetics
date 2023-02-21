export const splitIntoParagraphs = initialContent => {
  let content = ''
  if (!initialContent) {
    throw new Error('No initial content')
  }
  if (
    typeof initialContent !== 'string' ||
    initialContent.trim().length === 0
  ) {
    throw new Error('Initial content must be a valid string')
  }
  if (!initialContent.includes('\n')) {
    return initialContent
  }
  content = splitContent(initialContent)
  return content
}

export const splitContent = initialContent => {
  const splitContent = initialContent.split('\n')
  const content = splitContent.map(p => {
    return <p key={p.length + Math.random()}>{p.trim()}</p>
  })
  return content
}
