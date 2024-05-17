import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.component.html',
  styles: ``
})
export class UserMenuComponent {

  @Input({required: true})
  public username: string = '';

}
