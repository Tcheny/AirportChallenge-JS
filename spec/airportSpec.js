describe("AirportChallenge", function () { //nom du project
  let airport; // 2 variables
  let plane;

  beforeEach(function () { //a chaque test, j'ai des nouvelles instances
    plane = new Plane();
    airport = new Airport();
  });

  it("plane can land at airport", function () {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("plane can take off at airport", function () {
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

});
