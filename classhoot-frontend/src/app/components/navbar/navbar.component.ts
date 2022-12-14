import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLoggedIn = false;
  user:any = null;

  constructor(public login:LoginService,
      private router : Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      () => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
        
      }
    )
    
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }
  
  public perfil(){
    if(this.login.getUserRole() == 'ADMIN'){
      this.router.navigate(['/admin']);
    }else{
      if(this.login.getUserRole() == 'NORMAL'){
        this.router.navigate(['/user-dashboard']);
      }
    }
  }

}
