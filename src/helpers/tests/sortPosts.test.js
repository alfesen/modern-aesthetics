import { sortPosts } from '../sortPosts'

describe('sortPosts', () => {
  it('should sort posts by date descending', () => {
    const posts = [
      { id: 2, date: new Date('2022-03-12') },
      { id: 1, date: new Date('2023-01-03') },
    ]
    const result = sortPosts(posts)
    expect(result).toEqual([
      { id: 1, date: new Date('2023-01-03') },
      { id: 2, date: new Date('2022-03-12') },
    ])
  })

  it('should throw an error if posts are undefined', () => {
    const result = () => sortPosts()
    expect(result).toThrow()
  })
  
  it('should throw an error if provided value is not an array', () => {
    const val1 = 'invalid'
    const result = () => sortPosts(val1)
    expect(result).toThrow()
  })

  it('should throw an error if provided value does not contain a date', () => {
    const posts = [{ id: 1 }, { id: 3 }, { id: 2 }]
    const result = () => sortPosts(posts)
    expect(result).toThrow()
  })
  
  it('should throw a defined error if provided value does not contain a date', () => {
    const posts = [{ id: 1 }, { id: 3 }, { id: 2 }]
    const result = () => sortPosts(posts)
    expect(result).toThrow('cannot be sorted')
  })
})
