import CounterReducer from './CounterReducer';

describe('actions', () => {
  it('Increments from 0 to 1', () => {

    expect(
      CounterReducer(0, { type: 'INCREMENT' })
    ).toBe(1)

  })

  it('Increments from 1 to 2', () => {

    expect(
      CounterReducer(1, { type: 'INCREMENT' })
    ).toBe(2)

  })


  it('Decrements from 2 to 1 ', () => {

      expect(
      CounterReducer(2, { type: 'DECREMENT' })
    ).toBe(1)

  })

  it('Returns the current state of the application', () => {

      expect(
      CounterReducer(1, { type: 'ANYTHING_ELSE' })
    ).toBe(1)

  })

  it('Starts with the initial state of the application', () => {

      expect(
      CounterReducer(undefined, { })
    ).toBe(0)

  })




})
