import {Component, HostListener, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatMenu} from "@angular/material/menu";
import {Store} from "@ngrx/store";
import {selectIsAuthenticated, selectRol} from "../../../Authentication/states/user.selector";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isLargeScreen = window.innerWidth >= 768;
  rol:string = "";

  // Angular Routing Navigation
  routesFarmer: {label:string , to: string}[] = [
    {label: "Home", to: "/farmer-home"},
    {label: "Products", to: "/products"},
    {label: "Financial Management", to: "/finance"},
    {label: "Orders", to: "/farmer-home"},
  ]
  routesMerchant: {label:string , to: string}[] = [
    {label: "Home", to: "/merchant-home"},
    {label: "Products", to: "/products"},
    {label: "My Shopping", to: "/merchant-home"},
    {label: "Rate", to: "/rates"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  constructor(private router: Router,
              private store: Store) {

    this.store.select(selectRol)
      .subscribe((rol) => this.rol = rol);
  }

  redirectToSignIn(){
    this.router.navigate(["signin"]);
  }

}
