import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../core/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menuItems: Array<Menu>;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

}
