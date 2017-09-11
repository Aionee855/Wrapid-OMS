import { Datatable2Page } from './app.po';

describe('datatable2 App', function() {
  let page: Datatable2Page;

  beforeEach(() => {
    page = new Datatable2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
