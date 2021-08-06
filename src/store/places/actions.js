export const START_LOADING = "START_LOADING";
export const STORE_PLACES = "STORE_PLACES";
export const RECORD_LOADING_ERROR = "RECORD_LOADING_ERROR";

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

const startLoading = () => ({ type: START_LOADING });

const storePLaces = records => ({
  type: STORE_PLACES,
  records,
});

const recordLoadingError = () => ({ type: RECORD_LOADING_ERROR });
