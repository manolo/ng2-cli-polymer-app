import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ManoloAppComponent } from '../app/manolo.component';

beforeEachProviders(() => [ManoloAppComponent]);

describe('App: Manolo', () => {
  it('should create the app',
      inject([ManoloAppComponent], (app: ManoloAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'manolo works!\'',
      inject([ManoloAppComponent], (app: ManoloAppComponent) => {
    expect(app.title).toEqual('manolo works!');
  }));
});
