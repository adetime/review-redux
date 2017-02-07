import LoggerReducer from './LoggerReducer';

describe('actions', () => {
  it('Logs first action', () => {

    expect(
      LoggerReducer([], { type: 'INCREMENT', payload: 0 })
    ).toEqual([{ type: 'INCREMENT', payload: 0 }])

  })


  it('Logs more increments', () => {

    expect(
      LoggerReducer([{ type: 'INCREMENT', payload: 0 }], { type: 'INCREMENT', payload: 1 })
    ).toEqual([{ type: 'INCREMENT', payload: 0 }, { type: 'INCREMENT', payload: 1 }])

  })

  it('Ignores unknow actions', () => {

    expect(
      LoggerReducer([{ type: 'INCREMENT', payload: 0 }], { type: 'ANYTHING_ELSE', payload: 7 })
    ).toEqual([{ type: 'INCREMENT', payload: 0 }])

  })


  it('Logs more Decrements', () => {

    expect(
      LoggerReducer([{ type: 'INCREMENT', payload: 0 }], { type: 'DECREMENT', payload: -1 })
    ).toEqual([{ type: 'INCREMENT', payload: 0 }, { type: 'DECREMENT', payload: -1 }])

  })


  it('Starts with the initial state of the application', () => {



    expect(
      LoggerReducer(undefined, { })
    ).toEqual([])


  })








});
