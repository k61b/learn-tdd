import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import placesReducer from "../places/reducers";
import { loadPlaces } from "../places/actions";

describe("places", () => {
  describe("loadPlaces action", () => {
    describe("initially", () => {
      let store;

      beforeEach(() => {
        const initialState = {};

        store = createStore(
          placesReducer,
          initialState,
          applyMiddleware(thunk),
        );
      });

      it("does not have the loading flag set", () => {
        expect(store.getState().loading).toEqual(false);
      });

      it("does not have the error flag set", () => {
        expect(store.getState().loadError).toEqual(false);
      });
    });

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
      let store;

      beforeEach(() => {
        const api = {
          loadPlaces: () => new Promise(() => {}),
        };

        const initialState = { loadError: true };

        store = createStore(
          placesReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        store.dispatch(loadPlaces());
      });

      it("sets a loading flag", () => {
        expect(store.getState().loading).toEqual(true);
      });

      it("clears the error flag", () => {
        expect(store.getState().loadError).toEqual(false);
      });

      it("clears the loading flag", () => {
        expect(store.getState().loading).toEqual(true);
      });
    });

    describe("when loading fails", () => {
      let store;

      beforeEach(() => {
        const api = {
          loadPlaces: () => Promise.reject(),
        };

        const initialState = {};

        store = createStore(
          placesReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        return store.dispatch(loadPlaces());
      });

      it("sets an error flag", () => {
        expect(store.getState().loadError).toEqual(true);
      });
    });
  });
});
