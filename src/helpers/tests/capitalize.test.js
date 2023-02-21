import { capitalize } from '../capitalize'

describe('capitalize', () => {
  it('should return a string with each word capitalized', () => {
    const str = 'test test'
    const expected = 'Test Test'
    const result = capitalize(str)
    expect(result).toBe(expected)
  })
  it('should throw an error if provided value is not a string', () => {
    const str = 4
    const result = () => capitalize(str)
    expect(result).toThrow()
  })
  it('should throw "not a function" error if provided value is not a string', () => {
    const str1 = 4
    const str2 = ['test']
    const str3 = {}
    const str4 = true
    const result1 = () => capitalize(str1)
    const result2 = () => capitalize(str2)
    const result3 = () => capitalize(str3)
    const result4 = () => capitalize(str4)
    expect(result1).toThrow('not a function')
    expect(result2).toThrow('not a function')
    expect(result3).toThrow('not a function')
    expect(result4).toThrow('not a function')
  })
  it('should throw an error if no value is provided', () => {
    const result = () => capitalize()
    expect(result).toThrow('undefined')
  })
  it('should throw an error if empty string is provided', () => {
    const str = ''
    const result = () => capitalize(str)
    expect(result).toThrow('Nothing to capitalize')
  })
})
