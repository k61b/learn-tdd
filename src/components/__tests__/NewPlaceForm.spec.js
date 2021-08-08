import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import flushPromises from "flush-promises";
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
      createPlace.mockResolvedValue();

      const { getByPlaceholderText, getByTestId } = context;

      await userEvent.type(getByPlaceholderText("Add Place"), placeName);

      userEvent.click(getByTestId("new-place-submit-button"));

      return act(flushPromises);
    });

    it("calls createPlace with the name", () => {
      expect(createPlace).toHaveBeenCalledWith(placeName);
    });

    it("clears the name", () => {
      const { getByPlaceholderText } = context;
      expect(getByPlaceholderText("Add Place").value).toEqual("");
    });
  });
});
