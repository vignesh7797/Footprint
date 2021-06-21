import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/source/database.service';
import { Shoe } from 'src/app/source/shoe';
import { SourceService } from 'src/app/source/source.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  sources:Shoe[]=[];
  load = true;
  windowWidth:any;
  skeleton = Array(12);

  constructor(private source:SourceService,
              private database: DatabaseService) { 

                window.scrollTo(0, 0);


    this.windowWidth = window.innerWidth;

  }

  ngOnInit(): void {

    this.database.getShoes();

    setTimeout(() =>{
     
    }, 1500);

    setTimeout(()=>{

      this.source.getCategory('');

      this.source.setCategory().subscribe(s =>{
        this.sources = s;

        if(s == []){
          this.source.getFiles().subscribe(t => {
            this.sources = t;
          });
        }
      });


        return this.sources;
      
    }, 2000)
    
    console.log(this.sources);

  
  }

}
