/* eslint-disable wdio/no-pause */
describe("Getting Started", () => {
  it("should open a web page", async () => {
    await browser.url("https://the-internet.herokuapp.com");
    await browser.pause(5000);
  });
});
