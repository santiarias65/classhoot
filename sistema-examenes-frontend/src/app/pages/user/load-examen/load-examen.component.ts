import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-load-examen',
  templateUrl: './load-examen.component.html',
  styleUrls: ['./load-examen.component.css']
})
export class LoadExamenComponent implements OnInit {

  constructor(private route : ActivatedRoute,
      private examenService : ExamenesService
    ) { }

  categoriaId : number = 0;
  examenes : any;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.categoriaId = params['categoriaId'];
        if(this.categoriaId == 0){
          console.log('Cargando todos los examenes');
          this.examenService.listarExamenes().subscribe(
            (data:any)=>{
              this.examenes = data;
              console.log(data);
            },
            (error)=>{
              console.log(error);
            }
          )
        }else{
          console.log('cargando un examen');
          this.examenService.listarExamenesPorCategoria(this.categoriaId).subscribe(
            (data : any)=>{
              this.examenes = data;
            },
            (error)=>{
              console.log(error);
            }
          )
        }
      }
    )
    
  }

}
