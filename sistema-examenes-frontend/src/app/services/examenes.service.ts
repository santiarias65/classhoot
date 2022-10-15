import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  constructor(private http : HttpClient) { }

  public listarExamenes(){
    return this.http.get(`${baserUrl}/examen/`)
  }

  public agregarExamen(examen:any){
    return this.http.post(`${baserUrl}/examen/`,examen);
  }
}
