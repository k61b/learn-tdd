export const STORE_PLACES = "STORE_PLACES";

export const loadPlaces = () => (dispatch, getState, api) => {
  api.loadPlaces().then(records => {
    dispatch(storePLaces(records));
  });
};

const storePLaces = records => ({
  type: STORE_PLACES,
  records,
});
