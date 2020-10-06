import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from "./../../actions/ActionTypes";

describe('kegListReducer', () => {

  let action;

  const currentState = {
    1: { name: 'Hard Apple Cider',
    brand: "2 Town Cider",
    price: "$4",
    alchol: "6%",
    id: 1 },
    2: { name: "coors light",
    brand: "coors light",
    price: "$2",
    alchol: "3.8%",
    id: 2 }
  }

  const kegData = {
    name: "Hard Apple Cider",
    brand: "2 Town Cider",
    price: "$4",
    alchol: "6%",
    id: 1
  };

  test('Should return default sate if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alchol: alchol,
      id: id
      
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alchol, alchol,
        id: id
      }
    });
  });

  test ('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: "coors light",
        brand: "coors light",
        price: "$2",
        alchol: "3.8%",
        id: 2 }
    });
  });

});
