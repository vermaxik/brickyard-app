import { BrickyardAppPage } from './app.po';

describe('brickyard-app App', () => {
  let page: BrickyardAppPage;

  beforeEach(() => {
    page = new BrickyardAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
