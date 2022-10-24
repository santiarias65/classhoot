import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pregunta',
  templateUrl: './add-pregunta.component.html',
  styleUrls: ['./add-pregunta.component.css']
})
export class AddPreguntaComponent implements OnInit {

  constructor(private router : ActivatedRoute,
      private preguntaService : PreguntaService
    ) { }

  titulo : string = '';
  examenId : number = 0;
  pregunta : any = {
    examen : {},
    contenido : '',
    opcion1 : '',
    opcion2 : '',
    opcion3 : '',
    opcion4 : '',
    respuesta : ''
  };

  ngOnInit(): void {
    this.examenId = this.router.snapshot.params['examenId'];
    this.titulo = this.router.snapshot.params['titulo'];
    this.pregunta.examen.examenId = this.examenId;
  }

  agregarPregunta(){
    if(this.pregunta.contenido.trim() == null || this.pregunta.contenido.trim() == ''){
      return ;
    }
    if(this.pregunta.opcion1.trim() == null || this.pregunta.opcion1.trim() == ''){
      return ;
    }
    if(this.pregunta.opcion2.trim() == null || this.pregunta.opcion2.trim() == ''){
      return ;
    }
    if(this.pregunta.opcion3.trim() == null || this.pregunta.opcion3.trim() == ''){
      return ;
    }
    if(this.pregunta.opcion4.trim() == null || this.pregunta.opcion4.trim() == ''){
      return ;
    }
    if(this.pregunta.respuesta.trim() == null || this.pregunta.respuesta.trim() == ''){
      return ;
    }

    this.preguntaService.agregarPregunta(this.pregunta).subscribe(
      ()=>{
        Swal.fire('Pregunta Agregada','La pregunta ha sido Agregada correctamente','success');
        this.pregunta.contenido = '';
        this.pregunta.opcion1 = '';
        this.pregunta.opcion2 = '';
        this.pregunta.opcion3 = '';
        this.pregunta.opcion4 = '';
        this.pregunta.respuesta = '';
      },
      (error)=>{
        Swal.fire('Error !!','Error al guardar la pregunta en la base de datos','error');
        console.log(error);
      }
    )
  }

}
