import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private categoriaService : CategoriaService,
      private snack : MatSnackBar
    ) { }

  categorias : any;

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data:any)=>{
        this.categorias = data;
      },
      (error)=>{
        this.snack.open('Error al cargar las categorias','',{
          duration : 3000
        });
        console.log(error);
      }
    )
  }

}
