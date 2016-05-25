import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar')
  ]
})
export class AppAppComponent {
  title = 'app works!';
}
