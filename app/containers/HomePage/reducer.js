import { LOADING_IMAGE, LOAD_IMAGE_SUCCESS, LOAD_IMAGE_ERROR, UPDATE_REFRESH_RATE } from './constants'
import { fromJS } from 'immutable';

// The initial state of the randomFlickr reducer
const initialState = fromJS({
  isFetching: true,
  error: null,
  items: new Array(),
  title: "Init",
  rate: 10
});

export default function randomFlickrReducer(state = initialState, action) {
  console.log(`typa ${action.type}`, state.get('items'))
  switch (action.type) {
    case LOADING_IMAGE:
      return state
        .set('isFetching', true)
        .set('title', '')
  
    case LOAD_IMAGE_SUCCESS:
      return state
        .set('isFetching', false)
        .set('items', action.items)
        .set('title', action.title)
      
    case LOAD_IMAGE_ERROR:
      return state
        .set('isFetching', false)
        .set('title', '')
        .set('error', action.error)
       
    case UPDATE_REFRESH_RATE:
      return state
        .set('isFetching', false)
        .set('rate', action.refreshRate)
    default:
      return state
  }
}