import { actions_const } from '../actions';

let initialState = {
  properties: [],
  labels: []
};

const crud = (state = initialState, action) => {
  console.log("action")
  console.log(action)
  switch (action.type) {

    case actions_const.ADD_PROPERTY:
      return {
        ...state,
      }
    case actions_const.UPDATE_PROPERTY:
      {
        return {
          ...state
        }
      }
    case actions_const.DELETE_PROPERTY:
      return {
        ...state
      }
    case actions_const.LOAD_PROPERTIES:
      return {
        ...state,
        properties: [...action.data]
      }
    case actions_const.FETCH_PROPERTIES:
      return {
        ...state
      }
    case actions_const.LOAD_LABELS:
      return {
        ...state,
        labels: [...action.data]
      }
    case actions_const.FETCH_LABELS:
      return {
        ...state
      }
    case actions_const.ADD_LABEL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default crud
