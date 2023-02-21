export const sortPosts = posts => {
  posts.forEach(post => {
    if(!post.date) {
      throw new Error('Post does not contain date, cannot be sorted')
    }
  })
  return posts.sort((postA, postB) => {
    return postA.date < postB.date ? 1 : -1
  })
}