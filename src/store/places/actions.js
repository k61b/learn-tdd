export const START_LOADING = "START_LOADING";
export const STORE_PLACES = "STORE_PLACES";

export const loadPlaces = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api.loadPlaces().then(records => {
    dispatch(storePLaces(records));
  });
};

const startLoading = () => ({ type: START_LOADING });

const storePLaces = records => ({
  type: STORE_PLACES,
  records,
});
