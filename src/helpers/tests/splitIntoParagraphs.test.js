import { splitIntoParagraphs, splitContent } from '../splitIntoParagraphs'

describe('splitIntoParagraphs', () => {
  it("should throw an error if provided argument isn't a string", () => {
    const val1 = 23
    const val2 = true
    const val3 = {}
    const res1 = () => splitIntoParagraphs(val1)
    const res2 = () => splitIntoParagraphs(val2)
    const res3 = () => splitIntoParagraphs(val3)
    expect(res1).toThrow()
    expect(res2).toThrow()
    expect(res3).toThrow()
  })

  it("should throw a defined error if provided argument isn't a string", () => {
    const val = 23
    const res = () => splitIntoParagraphs(val)
    expect(res).toThrow('must be a valid string')
  })
})

describe('splitContent', () => {
  it('should throw an error if initial content is not provided', () => {
    const result = () => splitContent()
    expect(result).toThrow('undefined')
  })
  it('should return few p elements if initial content is provided', () => {
    const splitted = splitContent('Test \n test')
    const result = { p1: splitted[0], p2: splitted[1] }
    expect(result.p1.type).toBe('p')
    expect(result.p2.type).toBe('p')
  })
  it('should return paragraphs with splitted initial content', () => {
    const splitted = splitContent('Test \n test')
    const result = { p1: splitted[0], p2: splitted[1] }
    expect(result.p1.props).toEqual({ children: 'Test' })
    expect(result.p2.props).toEqual({ children: 'test' })
  })
})
