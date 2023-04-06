/* eslint-disable wdio/no-pause */
describe('Getting Started', () => {
  xit('should open a web page', async () => {
    await browser.url('https://the-internet.herokuapp.com');
    await browser.pause(5000);
  });

  xit('should click something', async () => {});

  it('shoukd test checkboxes', async () => {
    await browser.url('https://the-internet.herokuapp.com');
    const checkboxlink = $('#content > ul > li:nth-child(6) > a');
    const checkbox1 = $('#checkboxes > input[type="checkbox"]:nth-child(1)');
    const checkbox2 = $('#checkboxes > input[type="checkbox"]:nth-child(3)');

    await checkboxlink.click();

    console.log(
      'Checkbox1 before:' + (await checkbox1.getAttribute('checked'))
    );
    console.log(
      'Checkbox2 before:' + (await checkbox2.getAttribute('checked'))
    );

    await checkbox1.click();
    await checkbox2.click();

    console.log('Checkbox1 after:' + (await checkbox1.getAttribute('checked')));
    console.log('Checkbox2 after:' + (await checkbox2.getAttribute('checked')));

    await browser.pause(3000);
  });
});
