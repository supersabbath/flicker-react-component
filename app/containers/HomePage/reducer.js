import { LOADING_IMAGE, LOAD_IMAGE_SUCCESS, LOAD_IMAGE_ERROR } from './constants'
import { fromJS } from 'immutable';

// The initial state of the randomFlickr reducer
const initialState = fromJS({
  isFetching: false,
  error: false,
  items: [],
  didInvalidate: false,
  title: "Init",
});

export default function randomFlickrReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_IMAGE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        items: [],
        title: "",
      })
    case LOAD_IMAGE_SUCCESS:
 
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        title: action.title,
        error: null
      })
    case LOAD_IMAGE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [],
        title: "",
        error: action.error
      })
    default:
      return state
  }
}