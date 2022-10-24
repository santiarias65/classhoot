import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  constructor(private route : ActivatedRoute,
      private examenService : ExamenesService,
      private router : Router
    ) { }

  examenId : number = 0;
  examen : any = new Object();

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data:any)=>{
        //console.log(data);
        this.examen = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  empezarExamen(){
    Swal.fire({
      title : '¿Quieres empezar el examen?',
      showCancelButton : true,
      cancelButtonText : 'Cancelar',
      confirmButtonText : 'Empezar',
      icon : 'info'
    }).then(
      (result)=>{
        if(result.isConfirmed){
          this.router.navigate(['/start/'+this.examenId]);
        }
      }
    );
  }

}
