export class ManoloPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('manolo-app h1')).getText();
  }
}
