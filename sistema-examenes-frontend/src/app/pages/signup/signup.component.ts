import  Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService,private snack:MatSnackBar,
      private router : Router
    ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    this.userService.comprobarUsuario(this.user.username).subscribe(
      (data)=>{
        if(data){
          this.snack.open('Este nombre de usuario ya se encuentra en uso, por favor elige otro !!','Aceptar',{
            duration : 3000,
            verticalPosition : 'top',
            horizontalPosition : 'right'
          });
          return ;
        }else{
          this.userService.añadirUsuario(this.user).subscribe(
            () => {
              //console.log(data);
              Swal.fire('Gracias por Registrarte','Inicia sesión y Supera nuestras pruebas','success');
              this.router.navigate(['/login']);
            },(error) => {
              console.log(error);
              this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
                duration : 3000
              });
            }
          )
        }
        
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }

}
