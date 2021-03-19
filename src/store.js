import { combineReducers, createStore } from "redux";
import throttle from "lodash.throttle";
import actions from "./actions";
import board from './reducers/boardReducer';
import listsById from './reducers/listReducer';
import cardsById from './reducers/cardReducer';

const reducers = combineReducers({
  board,
  listsById,
  cardsById,
});

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

if (!store.getState().board.lists.length) {
  actions(store);
}

export default store;
