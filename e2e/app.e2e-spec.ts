import { NgrxAngularPage } from './app.po';

describe('ngrx-angular App', function() {
  let page: NgrxAngularPage;

  beforeEach(() => {
    page = new NgrxAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
