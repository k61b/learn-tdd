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
      places,
      ...propOverrides,
    };
    loadPlaces = props.loadPlaces;

    context = render(<PlaceList {...props} />);
  };

  it("loads places on first render", () => {
    renderWithProps();
    expect(loadPlaces).toHaveBeenCalled();
  });

  it("displays the places", () => {
    renderWithProps();
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
    renderWithProps({ loading: false });
    const { queryByTestId } = context;
    expect(queryByTestId("loading-indicator")).toBeNull();
  });
});
