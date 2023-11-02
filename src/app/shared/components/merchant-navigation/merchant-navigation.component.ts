import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-merchant-navigation',
  templateUrl: './merchant-navigation.component.html',
  styleUrls: ['./merchant-navigation.component.css']
})
export class MerchantNavigationComponent {
  isLargeScreen = window.innerWidth >= 768;

  routesMerchant: {label:string , to: string}[] = [
    {label: "Home", to: "/merchant-home"},
    {label: "Products", to: "/sales"},
    {label: "My Shopping", to: "/purchases"},
    {label: "Rate", to: "/rates"},
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
