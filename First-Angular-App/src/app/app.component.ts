import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-Angular-App';

test: string = 'test';

person = {firstname: 'Mati', lastname: 'Mõttus'};

}
