export const START_LOADING = "START_LOADING";
export const STORE_PLACES = "STORE_PLACES";
export const RECORD_LOADING_ERROR = "RECORD_LOADING_ERROR";
export const ADD_PLACE = "ADD_PLACE";

export const loadPlaces = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api
    .loadPlaces()
    .then(records => {
      dispatch(storePLaces(records));
    })
    .catch(() => {
      dispatch(recordLoadingError());
    });
};

export const createPlace = name => (dispatch, getState, api) => {
  api.createPlace(name).then(record => {
    dispatch(addPlace(record));
  });
};

const startLoading = () => ({ type: START_LOADING });

const storePLaces = records => ({
  type: STORE_PLACES,
  records,
});

const recordLoadingError = () => ({ type: RECORD_LOADING_ERROR });

const addPlace = record => ({
  type: ADD_PLACE,
  record,
});
