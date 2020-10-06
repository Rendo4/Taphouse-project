import rootReducer from "../../reducers/index";
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from "../../reducers/keg-list-reducer";
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReudcer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleonPage: false
    });
  });

  test('Check that initial sate of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null}));
  });

  test('check that initial state of formVisibleReudcer matches root deucer', () => {
    expect(store.getState().formVisibleonPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });

  test('check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: "Hard Apple Cider",
      brand: "2 Town Cider",
      price: "$4",
      alchol: "6%",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleonPage).toEqual(formVisibleReducer(undefined, action));
  });

})