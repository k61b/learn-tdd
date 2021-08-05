import { render } from "@testing-library/react";
import { PlaceList } from "../PlaceList";

describe("PlaceList", () => {
  it("loads places on first render", () => {
    const loadPlaces = jest.fn().mockName("loadPlaces");
    const places = [];

    render(<PlaceList loadPlaces={loadPlaces} places={places} />);

    expect(loadPlaces).toHaveBeenCalled();
  });

  it("displays the places", () => {
    const noop = () => {};
    const places = [
      { id: 1, name: "Sushi Place" },
      { id: 2, name: "Pizza Place" },
    ];
    const { queryByText } = render(
      <PlaceList loadPlaces={noop} places={places} />,
    );

    expect(queryByText("Sushi Place")).not.toBeNull();
    expect(queryByText("Pizza Place")).not.toBeNull();
  });
});
