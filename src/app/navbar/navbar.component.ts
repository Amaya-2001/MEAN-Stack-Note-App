import { Component } from '@angular/core';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faFileCirclePlus = faFileCirclePlus;

}
