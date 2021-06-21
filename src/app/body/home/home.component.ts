import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../../source/database.service';
import { Shoe } from '../../source/shoe';
import { SourceService } from '../../source/source.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  sources:Shoe[]=[];
  prodWidth:any;

  constructor(private source: SourceService,
              private database: DatabaseService) {
                
               }
  

  ngOnInit(): void {

    this.database.getShoes();

    setTimeout(() =>{
      this.source.getFiles().subscribe(x =>{
        this.sources = x;
        console.log(x);
  
        return this.sources;
      });

    }, 1500)
  }




  public ngAfterViewInit() {
   
  }

  

}
