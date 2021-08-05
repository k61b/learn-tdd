import { render } from "@testing-library/react";
import { PlaceList } from "../PlaceList";

describe("PlaceList", () => {
  it("loads places on first render", () => {
    const loadPlaces = jest.fn().mockName("loadPlaces");

    render(<PlaceList loadPlaces={loadPlaces} />);

    expect(loadPlaces).toHaveBeenCalled();
  });
});
