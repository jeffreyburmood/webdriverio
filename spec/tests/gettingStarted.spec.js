/* eslint-disable wdio/no-pause */
describe("Getting Started", () => {
  xit("should open a web page", async () => {
    await browser.url("https://the-internet.herokuapp.com");
    await browser.pause(5000);
  });

  it("should click something", async () => {});
});
