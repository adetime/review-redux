import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return [...list, 0];
}

const removeCounter = (list, index) => {
  return [
    ...list.slice(0,index),
    ...list.slice(index+1)
  ];
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index]+1,
    ...list.slice(index+1)
  ];
}


describe('Avoid Counter Mutation', () => {

  it('Adds 0 to empty array', () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
      addCounter(listBefore)
    ).toEqual(listAfter)

  });

  it('Removes a counter by index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(
      removeCounter(listBefore, 1)
    ).toEqual(listAfter)

  });

  it('Increments a counter by index', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(
      incrementCounter(listBefore, 1)
    ).toEqual(listAfter)

  });




});
