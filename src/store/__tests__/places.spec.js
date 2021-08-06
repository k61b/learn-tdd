import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from "../places/reducers";
import { loadPlaces } from "../places/actions";

describe("places", () => {
  describe("loadPlaces action", () => {
    it("stores the places", async () => {
      const records = [
        { id: 1, name: "Sushi Place" },
        { id: 2, name: "Pizza Place" },
      ];

      const api = {
        loadPlaces: () => Promise.resolve(records),
      };

      const initialState = {
        records: [],
      };

      const store = createStore(
        placesReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(loadPlaces());

      expect(store.getState().records).toEqual(records);
    });
  });
});
