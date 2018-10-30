import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { environment } from '../../environments/environment';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class MenuService {
  private menuItems: Array<Menu>;
  constructor(private http: HttpClient) { }
  public setMenu(menuItems: Array<Menu>) {
    this.menuItems = menuItems;
  }

  public getMenuItems(): Observable<Array<Menu>> {
    if (!this.menuItems || this.menuItems.length < 1) {
      return this.http.get<Array<Menu>>(`${environment.apiUrl}/menuItems`);
    } else {
      return Observable.of(this.menuItems);
    }
  }

}
