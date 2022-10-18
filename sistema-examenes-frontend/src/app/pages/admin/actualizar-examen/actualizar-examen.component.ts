import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenesService } from 'src/app/services/examenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit {
  
  constructor(private route : ActivatedRoute,
      private examenService : ExamenesService,
      private categoriaService : CategoriaService,
      private router : Router
    ) { }

  examenId = 0;
  examen : any;
  categorias : any;

  ngOnInit(): void {
    //obtener parametros de la url
    this.examenId = this.route.snapshot.params['examenId'];
    //alert(this.examenId);
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data)=>{
        this.examen = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.categoriaService.listarCategorias().subscribe(
      (data:any) =>{
        this.categorias = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  actualizarExamen(){
    this.examenService.actualizarExamen(this.examen).subscribe(
      ()=>{
        Swal.fire('Examen Actualizado','El examen ha sido actualizado correctamente','success').then(
          ()=>{
            this.router.navigate(['/admin/examenes']);
          }
        );
      },
      (error)=>{
        Swal.fire('Error !!','El examen no se pudo actualizar','error')
        console.log(error);
      }
    )
  }

}
