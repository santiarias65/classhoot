import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private locationSt : LocationStrategy,
      private route : ActivatedRoute,
      private preguntasService : PreguntaService
    ) { }

  pruebaEnviada = false;
  examenId : number = 0;
  preguntas : any;
  respuestas : any = [];

  //resultados del examen
  preguntasCorrectas = 0;
  

  ngOnInit(): void {
    this.bloquiarRetroceso();
    this.examenId = this.route.snapshot.params['examenId'];
    this.cargarPreguntas();
  }

  //evita que el usuario pueda devolverse cuando este presentando el examen
  bloquiarRetroceso(){
    history.pushState(null,null!,location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,null!,location.href);
    })
  }

  cargarPreguntas(){
    this.preguntasService.listarPreguntasExamenPresentarPrueba(this.examenId).subscribe(
      (data:any)=>{
        //console.log(data);
        this.preguntas = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar las preguntas de la pruba','error');
      }
    )
  }

  enviarCuestionario(){
    Swal.fire({
      title: '¿Quieres enviar el examen?',
      showCancelButton : true,
      confirmButtonText : 'Enviar',
      cancelButtonText : 'Cancelar',
      icon : 'info'
    }).then((result) =>{
      if(result.isConfirmed){
        let bandera = 0;
        
        this.preguntas.forEach((p:any)=>{
           if(p.respuesta == this.respuestas[bandera]){
              this.preguntasCorrectas++;
           }
           bandera++;
           
        })
        this.pruebaEnviada = true;
        //console.log("preguntas correctas "+this.preguntasCorrectas);
      }
    })
  }
}
