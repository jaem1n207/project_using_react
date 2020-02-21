/* 
  액션 객체를 만드는 액션 생성자들을 선언한다.
*/

import * as types from "./ActionTypes";

export const create = color => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
});

export const increment = index => ({
  type: types.INCREMENT,
  index
});

export const decrement = index => ({
  type: types.DECREMENT,
  index
});

export const setColor = ({ index, color }) => ({
  type: types.SET_COLOR,
  color
});
