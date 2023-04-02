describe("Math Suite", function () {
  function add(a, b) {
    return a + b;
  }

  // beforeEach(function() {
  //     console.log('BeforeEach')
  // })

  // beforeAll(function() {
  //     console.log('BeforeAll')
  // })

  // afterEach(function() {
  //     console.log('AfterEach')
  // })

  // afterAll(function() {
  //     console.log('AfterAll')
  // })

  it("should add two numbers correctly", () => {
    var result = 2;

    expect(add(1, 1)).toEqual(result);
  });

  it("should add two numbers correctly again", () => {
    var result = 2;

    expect(add(1, 2))
      .withContext("Values were expected to be equal")
      .toEqual(result);
  });

  it("should add two numbers correctly again again", () => {
    var result = 2;

    expect(add(1, 2))
      .withContext("Values were expected to be equal")
      .toEqual(result);
  });

  it("should add two numbers correctly again again again", () => {
    var result = 2;
    pending("still developing this one");

    expect(add(1, 2))
      .withContext("Values were expected to be equal")
      .toEqual(result);
  });
});
