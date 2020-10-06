import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Taphouse actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({ name: 'Hard Apple Cider', brand: "2 Town Cider", price: "$4", alchol: "6%", timeOpen: 0,
    formattedWaitTime: "A few seconds", id:1 })).toEqual({
    type: c.ADD_KEG,
    name: "Hard Apple Cider",
    brand: "2 Town Cider",
    price: "$4",
    alchol: "6%",
    timeOpen: 0,
    formattedWaitTime: "A few seconds",
    id: 1
   });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleform should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "time")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "time"
    });
  });
});