import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  constructor(private http : HttpClient) { }

  public listarExamenes(){
    return this.http.get(`${baserUrl}/examen/`);
  }

  public agregarExamen(examen:any){
    return this.http.post(`${baserUrl}/examen/`,examen);
  }

  public eliminarExamen(examenId : number){
    return this.http.delete(`${baserUrl}/examen/${examenId}`);
  }

  public obtenerExamen(examenId : number){
    return this.http.get(`${baserUrl}/examen/${examenId}`);
  }

  public actualizarExamen(examen : any){
    return this.http.put(`${baserUrl}/examen/`,examen);
  }

  public listarExamenesPorCategoria(categoriaId : number){
    return this.http.get(`${baserUrl}/examen/categoria/${categoriaId}`);
  }

  public obtenerExamenesActivos(){
    return this.http.get(`${baserUrl}/examen/activo`);
  }

  public obtenerExamenActivoCategoria(categoriaId : number){
    return this.http.get(`${baserUrl}/examen/categoria/activo/${categoriaId}`);
  }
}
