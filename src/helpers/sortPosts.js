export const sortPosts = posts => {
  return posts.sort((postA, postB) => {
    return postA.date < postB.date ? 1 : -1
  })
}