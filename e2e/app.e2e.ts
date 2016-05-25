import { ManoloPage } from './app.po';

describe('manolo App', function() {
  let page: ManoloPage;

  beforeEach(() => {
    page = new ManoloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('manolo works!');
  });
});
