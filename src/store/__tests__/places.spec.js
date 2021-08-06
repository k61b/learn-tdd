import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from "../places/reducers";
import { loadPlaces } from "../places/actions";

describe("places", () => {
  describe("loadPlaces action", () => {
    describe("when loading succeds", () => {
      const records = [
        { id: 1, name: "Sushi Place" },
        { id: 2, name: "Pizza Place" },
      ];

      let store;

      beforeEach(() => {
        const api = {
          loadPlaces: () => Promise.resolve(records),
        };
        const initialState = {
          records: [],
        };
        store = createStore(
          placesReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );
        return store.dispatch(loadPlaces());
      });

      it("stores the places", () => {
        expect(store.getState().records).toEqual(records);
      });

      it("clears the loading flag", () => {
        expect(store.getState().loading).toEqual(false);
      });
    });

    describe("while loading", () => {
      it("sets a loading flag", () => {
        const api = {
          loadPlaces: () => new Promise(() => {}),
        };

        const initialState = {};

        const store = createStore(
          placesReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        store.dispatch(loadPlaces());

        expect(store.getState().loading).toEqual(true);
      });
    });
  });

  describe("initially", () => {
    it("does not have the loading flag set", () => {
      const initialState = {};

      const store = createStore(
        placesReducer,
        initialState,
        applyMiddleware(thunk),
      );

      expect(store.getState().loading).toEqual(false);
    });
  });
});
