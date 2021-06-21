import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Category } from './category';
import { Shoe } from './shoe';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private Shoes:Shoe[] =[];

  price =[{Min:1000, Max:20000}];

  category = new BehaviorSubject<Shoe[]>(this.Shoes);
  Cat= new BehaviorSubject<Category[]>([{name:'', completed:true}]);
  checked = new BehaviorSubject<Shoe[]>(this.Shoes);
  value = new BehaviorSubject<any[]>(this.price);
  Color = new BehaviorSubject<Shoe[]>(this.Shoes);
  model = new BehaviorSubject<Shoe[]>(this.Shoes);
  ShoesChanged = new BehaviorSubject<Shoe[]>(this.Shoes);

  constructor() { }

  getShoes(){
    return this.Shoes.slice();
  }

  setShoes(shoe:Shoe[]){
    this.Shoes = shoe;
    this.ShoesChanged.next(this.Shoes.slice());
    console.log(this.Shoes);
    return this.Shoes.slice();
  }

  getFiles(){
    return of(this.Shoes);
  }

  getCategory(cat: string){

    this.category.next(this.Shoes.filter(s => s.category.includes(cat)));
    
   // console.log(this.category)
    return of(this.category);
    
  }

  getModel(mod: string){
    this.model.next(this.Shoes.filter(s => s.model.includes(mod)));
    //console.log(this.model);
    return this.model.asObservable();
  }

  setModel(){
    return this.model.asObservable();
  }

  getPrice(min?: number, max?: number){

    if(min !=null || max != null){
      this.value.next([{Min:min,Max:max}]);
    }
    return this.value.asObservable();
  }

  setPrice(){
    return this.value.asObservable();
  }


  getColor(col:never){
    if(col!=''){
      this.category.next(this.Shoes.filter(c => c.color.includes(col)));
    } 
      return this.category;
  }

  pushCategory(Cat: any){
    
    this.Cat.next(Cat);
    //console.log(Cat.length);

    for(let x=0; x<Cat.length; x++){
      
      if(Cat[x].completed){
        console.log(Cat[x].name);
       //return this.checked;
        
      }else{
        console.log(Cat[x].name);
      }
    }

    //console.log(this.checked.value);
    
    return this.checked.asObservable();
  }

}
