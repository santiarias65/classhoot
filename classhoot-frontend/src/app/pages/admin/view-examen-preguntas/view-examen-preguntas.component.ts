import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examen-preguntas',
  templateUrl: './view-examen-preguntas.component.html',
  styleUrls: ['./view-examen-preguntas.component.css']
})
export class ViewExamenPreguntasComponent implements OnInit {

  constructor(private router : ActivatedRoute,
      private preguntasService : PreguntaService,
      private snack : MatSnackBar
    ) { }

  examenId : number = 0;
  titulo : string = '';
  preguntas : any = [];

  ngOnInit(): void {
    this.examenId = this.router.snapshot.params['examenId'];
    this.titulo = this.router.snapshot.params['titulo'];
    this.preguntasService.ListarPreguntasExamen(this.examenId).subscribe(
      (data)=>{
        console.log(data);
        this.preguntas = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  eliminarPregunta(preguntaId : number){
    Swal.fire({
      title : 'Eliminar Pregunta',
      text : '¿Seguro que quieres eliminar la pregunta?',
      icon : 'warning',
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : 'Eliminar',
      cancelButtonText : 'Cancelar',
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this.preguntasService.eliminarPregunta(preguntaId).subscribe(
          ()=>{
            this.snack.open('Pregunta eliminada','',{
              duration : 3000
            })
            this.ngOnInit();
          },
          (error)=>{
            this.snack.open('Error al eliminar la pregunta','',{
              duration : 3000
            })
            console.log(error);
          }
        )
      }
    })
  }

}
