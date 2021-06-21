import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shoe } from './shoe';
import { SourceService } from './source.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient,
              private sourceService:SourceService) { }

    getShoes(){
      const source = this.sourceService.getShoes();
      
      return this.http.get<Shoe[]>('https://foot-print-f0c7d-default-rtdb.firebaseio.com/shoes/-MU-WiI2BbFpx5NMuxVk.json').subscribe(res =>{
        this.sourceService.setShoes(res);
      })
    }
}
