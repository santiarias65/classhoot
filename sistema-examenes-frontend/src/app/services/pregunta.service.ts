import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http : HttpClient) { }

  public ListarPreguntasExamen(examenId : number){
    return this.http.get(`${baserUrl}/pregunta/examen/preguntas/${examenId}`);
  }

  public agregarPregunta(pregunta : any){
    return this.http.post(`${baserUrl}/pregunta/`,pregunta);
  }

  public eliminarPregunta(preguntaId : number){
    return this.http.delete(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public actualizarPregunta(pregunta : any){
    return this.http.put(`${baserUrl}/pregunta/`,pregunta);
  }

  public obtenerPregunta(preguntaId : number){
    return this.http.get(`${baserUrl}/pregunta/${preguntaId}`);
  }
}
