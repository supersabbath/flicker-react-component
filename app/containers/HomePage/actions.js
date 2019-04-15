import { LOADING_IMAGE, LOAD_IMAGE_SUCCESS, LOAD_IMAGE_ERROR, UPDATE_REFRESH_RATE } from './constants'
import flickerRequest from './../../flickr/flickrRequest'

export function updateRate(rate) {
  return {
    type: UPDATE_REFRESH_RATE,
    refreshRate: parseInt(rate),
  }
}

export function toggleLoading(isLoading) {
  return {
    type: LOADING_IMAGE,
    isFetching: isLoading
  }
}

function startRequest() {
  return {
    type: LOADING_IMAGE,
    title: 'loading ...',
    isFetching: true
  }
}

function requestSuccedded(json) {
  return {
    type: LOAD_IMAGE_SUCCESS,
    items: json.items,
    title: json.title,
    isFetching: false
  }
}

function requestFailed (error) {
  return {
    type: LOAD_IMAGE_ERROR,
    error: error,
    isFetching: false,
  }
}
// posts: json.data.children.map(child => child.data),
//https://api.flickr.com/services/feeds/photos_public.gne?format=json'
export function fetchImage(p) {
  return async dispatch => {
    dispatch(startRequest(p))
      try {
        const json = await flickerRequest('https://api.flickr.com/services/feeds/photos_public.gne?format=json',{
          jsonpCallbackFunction: 'jsonFlickrFeed'
        });
        return dispatch(requestSuccedded(json))
      } catch (error) {
        console.log('An error occurred.', error);
        return dispatch(requestFailed(error));
      }
  }
}


// export function fetchPostsIfNeeded(subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }