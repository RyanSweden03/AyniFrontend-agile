import {Component, HostListener, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatMenu} from "@angular/material/menu";
import {RolSubjectService} from "../../../Authentication/services/rol-subject.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isLargeScreen = window.innerWidth >= 768;
  rol:string = "farmer";

  // Angular Routing Navigation
  routesFarmer: {label:string , to: string}[] = [
    {label: "Home", to: "/signin"},
    {label: "Find Products", to: "/farmer-home"},
    {label: "Financial Management", to: "/farmer-home"},
    {label: "My Orders", to: "/farmer-home"},
  ]
  routesMerchant: {label:string , to: string}[] = [
    {label: "Home", to: "/merchant-home"},
    {label: "Find Products", to: "/merchant-home"},
    {label: "My Shopping", to: "/merchant-home"},
    {label: "Rate", to: "/merchant-home"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  constructor(private router: Router,
              private rolService: RolSubjectService) {
    this.rolService.rol$.subscribe((value) => {
      this.rol = value;
    })
  }

  redirectToSignIn(){
    this.router.navigate(["signin"]);
  }

}
