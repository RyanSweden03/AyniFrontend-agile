import {Component, HostListener, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatMenu} from "@angular/material/menu";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-farmer-navigation',
  templateUrl: './farmer-navigation.component.html',
  styleUrls: ['./farmer-navigation.component.css']
})
export class FarmerNavigationComponent {
  isLargeScreen = window.innerWidth >= 768;
  rol:string = "";

  // Angular Routing Navigation
  routesFarmer: {label:string , to: string}[] = [
    {label: "Home", to: "/farmer-home"},
    {label: "Products", to: "/products"},
    {label: "Financial Management", to: "/finance"},
    {label: "Orders", to: "/orders"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  constructor(private router: Router) {
  }

  redirectToSignIn(){
    this.router.navigate(["signin"]);
  }

}
