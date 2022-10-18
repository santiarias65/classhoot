import { Component, OnInit } from '@angular/core';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent implements OnInit {

  examen : any = [

  ]

  constructor(private examenService : ExamenesService) { }

  ngOnInit(): void {
    this.examenService.listarExamenes().subscribe(
      (data:any) =>{
        this.examen = data;
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error !!','Error al cargar los exámenes','error');
      }
    )
  }

  eliminarExamen(examenId : number){
    Swal.fire({
      title: 'Eliminar Examen',
      text : 'Esta Seguro de eliminar el Examen?',
      icon : 'warning',
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : 'Eliminar',
      cancelButtonText : 'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.examenService.eliminarExamen(examenId).subscribe(
          ()=>{
            //this.examen = this.examen.filter((e :any)=>e.examenId != examenId);
            this.ngOnInit();
            Swal.fire('Examen eliminado','El Examen ha sido eliminado correctamente','success');
          },
          ()=>{
            Swal.fire('Error !!','Error al eliminar el examen','error');
          }
        );
      }
    })
  }
}
