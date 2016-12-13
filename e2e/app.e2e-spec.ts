import { LifestyleIncentivePage } from './app.po';

describe('lifestyle-incentive App', function() {
  let page: LifestyleIncentivePage;

  beforeEach(() => {
    page = new LifestyleIncentivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
