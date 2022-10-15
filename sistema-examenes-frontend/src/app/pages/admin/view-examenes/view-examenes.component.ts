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

}
