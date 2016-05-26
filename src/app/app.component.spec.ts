import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppAppComponent } from '../app/app.component';

beforeEachProviders(() => [AppAppComponent]);

describe('App: App', () => {
  it('should create the app',
      inject([AppAppComponent], (app: AppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([AppAppComponent], (app: AppAppComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
