describe("Creating a Place", () => {
  it("allows adding places", () => {
    const placeId = 22;
    const placeName = "Sushi Place";

    cy.server({ force404: true });

    cy.route({
      method: "GET",
      url: "https://outside-in-dev-api.herokuapp.com/mPFKmo8wZRdGHl3CyDKhhfXxFraVUKpN/restaurants",
      response: [],
    });

    cy.route({
      method: "POST",
      url: "https://outside-in-dev-api.herokuapp.com/mPFKmo8wZRdGHl3CyDKhhfXxFraVUKpN/restaurants",
      response: {
        id: placeId,
        name: placeName,
      },
    }).as("addPlace");

    cy.visit("/");

    cy.get('[placeholder="Add Place"]').type(placeName);
    cy.contains("Add").click();

    cy.wait("@addPlace").its("requestBody").should("deep.equal", {
      name: placeName,
    });

    cy.contains(placeName);
  });
});
