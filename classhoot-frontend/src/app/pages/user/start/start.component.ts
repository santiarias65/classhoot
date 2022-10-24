import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      private preguntasService : PreguntaService,
      private router :Router
    ) { }

  pruebaEnviada = false;
  examenId : number = 0;
  preguntas : any =[];
  respuestas : any = [];
  nombrePrueba : string ='';

  //resultados del examen
  preguntasCorrectas = 0;

  //tiempo del examen
  timer : any;
  intervalo : any;
  

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

        //tiempo
        this.timer = localStorage.getItem('time')!=null ? 
        Number(localStorage.getItem('time')) : this.preguntas.length *2 *60;
        
        this.iniciarTiempo();
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
  public enviarCuestionarioPorTiempo(){
    let bandera = 0;
        
    this.preguntas.forEach((p:any)=>{
      if(p.respuesta == this.respuestas[bandera]){
        this.preguntasCorrectas++;
      }
      bandera++;
           
    })
    this.pruebaEnviada = true;
  }

  public iniciarTiempo(){
    this.intervalo = window.setInterval(()=>{
      if(this.timer <= 0){
        this.enviarCuestionarioPorTiempo();
        localStorage.removeItem('time');
        clearInterval(this.intervalo);
      }else{
        this.timer--;
        localStorage.setItem('time',''+this.timer);
      }
    },1000);
  }

  public obtenerHora(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} : ${ss}`;
  }

  public irInicio(){
    clearInterval(this.intervalo);
    this.router.navigate(['/user-dashboard/0']);
  }
}
