import { handleActions, createAction } from "redux-actions";

import axios from "axios";
import { pender } from "redux-pender/lib/utils";

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = "GET_POST";

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
  data: {
    title: "",
    body: ""
  }
};

export default handleActions(
  {
    ...pender({
      type: GET_POST,
      /* 
      요청 중에 실패 했을 때 추가적으로 해야 할 작업이 있다면 onPending과 onFailure를 추가해준다.
      onPending: (state, action) => state,
      onFailure: (state, action) => state
    */
      onSuccess: (state, action) => {
        const { title, body } = action.payload.data;
        return {
          data: {
            title,
            body
          }
        };
      }
    })
  },
  initialState
);
