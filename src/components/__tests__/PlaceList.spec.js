import { render } from "@testing-library/react";
import { PlaceList } from "../PlaceList";

describe("PlaceList", () => {
  const places = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ];
  let loadPlaces;
  let context;

  beforeEach(() => {
    loadPlaces = jest.fn().mockName("loadPlaces");

    context = render(<PlaceList loadPlaces={loadPlaces} places={places} />);
  });

  it("loads places on first render", () => {
    expect(loadPlaces).toHaveBeenCalled();
  });

  it("displays the places", () => {
    const { queryByText } = context;

    expect(queryByText("Sushi Place")).not.toBeNull();
    expect(queryByText("Pizza Place")).not.toBeNull();
  });
});
