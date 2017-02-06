import {counter} from './';

describe('actions', () => {
  it('Increments from 0 to 1', () => {

    expect(
      counter(0, { type: 'INCREMENT' })
    ).toBe(1)

  })

  it('Increments from 1 to 2', () => {

    expect(
      counter(1, { type: 'INCREMENT' })
    ).toBe(2)

  })


  it('Decrements from 2 to 1 ', () => {

      expect(
      counter(2, { type: 'DECREMENT' })
    ).toBe(1)

  })

  it('Returns the current state of the application', () => {

      expect(
      counter(1, { type: 'ANYTHING_ELSE' })
    ).toBe(1)

  })

  it('Starts with the initial state of the application', () => {

      expect(
      counter(undefined, { })
    ).toBe(0)

  })




})


/*

console.log('tests passed!')

*/
