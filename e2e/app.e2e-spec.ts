import { PCAdvisePage } from './app.po';

describe('pcadvise App', () => {
  let page: PCAdvisePage;

  beforeEach(() => {
    page = new PCAdvisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
