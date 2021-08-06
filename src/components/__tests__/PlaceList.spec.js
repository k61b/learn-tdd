import { render } from "@testing-library/react";
import { PlaceList } from "../PlaceList";

describe("PlaceList", () => {
  const places = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ];
  let loadPlaces;
  let context;

  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadPlaces: jest.fn().mockName("loadPlaces"),
      loading: false,
      places,
      ...propOverrides,
    };
    loadPlaces = props.loadPlaces;

    context = render(<PlaceList {...props} />);
  };

  beforeEach(() => {
    renderWithProps();
  });

  describe("when loading succeds", () => {
    it("loads places on first render", () => {
      expect(loadPlaces).toHaveBeenCalled();
    });

    it("displays the places", () => {
      const { queryByText } = context;

      expect(queryByText("Sushi Place")).not.toBeNull();
      expect(queryByText("Pizza Place")).not.toBeNull();
    });

    it("displays the loading indicator while loading", () => {
      renderWithProps({ loading: true });
      const { queryByTestId } = context;
      expect(queryByTestId("loading-indicator")).not.toBeNull();
    });

    it("does not display the loading indicator while not loading", () => {
      const { queryByTestId } = context;
      expect(queryByTestId("loading-indicator")).toBeNull();
    });

    it("does not display the error message", () => {
      const { queryByText } = context;
      expect(queryByText("Places could not be loaded.")).toBeNull();
    });
  });

  describe("when loading fails", () => {
    beforeEach(() => {
      renderWithProps({ loadError: true });
    });

    it("displays the error message", () => {
      const { queryByText } = context;
      expect(queryByText("Places could not be loaded.")).not.toBeNull();
    });
  });
});
