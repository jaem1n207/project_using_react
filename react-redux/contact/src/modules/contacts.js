import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const CREATE = "contact/CREATE";
const MODIFY = "contact/MODIFY";
const REMOVE = "contact/REMOVE";
const TOGGLE_FAVORITE = "contact/TOGGLE_FAVORITE";

export const create = createAction(CREATE); // { id, name, phone, color }
export const modify = createAction(MODIFY); // { id, contact: { name, phone } }
export const remove = createAction(REMOVE); // id
export const toggleFavorite = createAction(TOGGLE_FAVORITE); // id

const initialState = List([
  Map({
    id: "abc123",
    name: "도라에몽",
    phone: "010-0000-0001",
    color: "#1DC290",
    favorite: true
  }),
  Map({
    id: "qwe123",
    name: "짱구",
    phone: "010-0000-0004",
    color: "#3AC352",
    favorite: true
  }),
  Map({
    id: "fgh532",
    name: "코난",
    phone: "010-0000-0005",
    color: "#fd7e14",
    favorite: false
  }),
  Map({
    id: "tre423",
    name: "둘리",
    phone: "010-0000-0006",
    color: "#15aabf",
    favorite: false
  }),
  Map({
    id: "vbc469",
    name: "이재민",
    phone: "010-0000-0007",
    color: "#e64980",
    favorite: false
  })
]);

export default handleActions({
  [CREATE]: (state, action) => {
    return state.push(Map(action.payload));
  },
  [MODIFY]: (state, action) => {
    const index = state.findIndex(
      contact => contact.get("id") === action.payload.id
    );

    return state.mergeIn([index], action.payload.contact);
  },
  [REMOVE]: (state, action) => {
    const index = state.findIndex(
      contact => contact.get("id") === action.payload.id
    );

    return state.delete(index);
  },
  [TOGGLE_FAVORITE]: (state, action) => {
    const index = state.findIndex(
      contact => contact.get("id") === action.payload
    );

    return state.update(index, contact =>
      contact.set("favorite", !contact.get("favorite"))
    );
  }
});
