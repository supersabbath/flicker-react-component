/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOADING_IMAGE = 'Applicaster/HomePage/LOADING_IMAGE';
export const LOAD_IMAGE_SUCCESS = 'Applicaster/HomePage/LOAD_IMAGE_SUCCESS';
export const LOAD_IMAGE_ERROR = 'Applicaster/HomePage/LOAD_IMAGE_ERROR';
// Refresh related
export const UPDATE_REFRESH_RATE = 'Applicaster/HomePage/UPDATE_REFRESH_RATE';
