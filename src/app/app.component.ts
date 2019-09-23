import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navLinks = [
    {path: '/home', icon: 'home', label: 'Home'},
    {path: '/map', icon: 'map', label: 'Map'},
    {path: '/chat', icon: 'chat', label: 'Chat'}
  ];
  route: string;
  opened = false;

  constructor(private loc: Location, private router: Router) {
    this.router.events.subscribe(val => {
      if (loc.path() !== '') {
        const currentRoute = loc.path();
        this.route = currentRoute.replace('/', '').toUpperCase();
      } else {
        this.route = 'HOME';
      }
    });
  }

  ngOnInit() {
  }

  openSideBar() {
    this.opened = !this.opened;
  }
}
