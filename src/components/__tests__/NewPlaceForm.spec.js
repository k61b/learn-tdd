import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewPlaceForm } from "../NewPlaceForm";

describe("NewPlaceForm", () => {
  const placeName = "Sushi Place";

  let createPlace;
  let context;

  beforeEach(() => {
    createPlace = jest.fn().mockName("createPlace");
    context = render(<NewPlaceForm createPlace={createPlace} />);
  });

  describe("when filled in", () => {
    beforeEach(async () => {
      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(getByPlaceholderText("Add Place"), placeName);

      userEvent.click(getByTestId("new-place-submit-button"));
    });

    it("calls createPlace with the name", () => {
      expect(createPlace).toHaveBeenCalledWith(placeName);
    });
  });
});
