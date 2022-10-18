import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pregunta',
  templateUrl: './actualizar-pregunta.component.html',
  styleUrls: ['./actualizar-pregunta.component.css']
})
export class ActualizarPreguntaComponent implements OnInit {

  constructor(private preguntaService : PreguntaService,
      private route : ActivatedRoute,
      private router : Router
    ) { }

  preguntaId : number = 0;
  pregunta : any;

  ngOnInit(): void {
    this.preguntaId = this.route.snapshot.params['preguntaId'];
    this.preguntaService.obtenerPregunta(this.preguntaId).subscribe(
      (data : any)=>{
        this.pregunta = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  actualizarPregunta(){
    this.preguntaService.actualizarPregunta(this.pregunta).subscribe(
      ()=>{
        Swal.fire('Pregunta Actualizada','La pregunta ha sido actualizada correctamente','success').then(
          ()=>{
            this.router.navigate(['/admin/ver-preguntas/'+this.pregunta.examen.examenId+'/'+this.pregunta.examen.titulo]);
          }
        )
      }
    )
  }
}
