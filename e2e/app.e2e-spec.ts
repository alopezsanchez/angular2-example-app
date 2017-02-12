import { MyPackageManagerPage } from './app.po';

describe('my-package-manager App', function() {
  let page: MyPackageManagerPage;

  beforeEach(() => {
    page = new MyPackageManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
