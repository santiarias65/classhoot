import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  categorias : any =[];

  examenData = {
    titulo : '',
    descripcion : '',
    puntosMaximos : '',
    numeroPreguntas : '',
    activo : true,
    categoria : {
      idCategoria :''
    }
  }
  constructor(private categoriaService : CategoriaService,
      private snack : MatSnackBar,
      private examenService : ExamenesService,
      private router : Router
    ) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data:any) =>{
        this.categorias = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  public guardarExamen(){
    console.log(this.examenData);
    if(this.examenData.titulo.trim() == '' || this.examenData.titulo == null){
      this.snack.open('Por favor complete los campos requeridos','Aceptar',{
        duration : 3000
      });
      return ;
    }
    this.examenService.agregarExamen(this.examenData).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Examen guardado','El examen ha sido guardado con éxito','success');
        this.examenData = {
          titulo : '',
          descripcion : '',
          puntosMaximos : '',
          numeroPreguntas : '',
          activo : true,
          categoria : {
            idCategoria :''
          }
        }
        this.router.navigate(['/admin/examenes'])
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Error al guardar el examen','error');
      }
    )
  }
}
