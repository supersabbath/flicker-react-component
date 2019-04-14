import { LOADING_IMAGE, LOAD_IMAGE_SUCCESS, LOAD_IMAGE_ERROR } from './constants'
import flickerRequest from './../../flickr/flickrRequest'

export function startRequest(response) {
  return {
    type: LOADING_IMAGE,
    response,
    items: [],
    isFetching: true
  }
}

function requestSuccedded(json) {
  return {
    type: LOAD_IMAGE_SUCCESS,
    items: json.items,
    title: json.title,
    isFetching: false,
    receivedAt: Date.now()
  }
}

function requestFailed (error) {
  return {
    type: LOAD_IMAGE_ERROR,
    error: error,
    items: [],
    isFetching: false,
    receivedAt: Date.now()
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