import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from '../services/jsonservice.service';
import { Post } from '../model/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jsonitems',
  templateUrl: './jsonitems.component.html',
  styleUrls: ['./jsonitems.component.css']
})
export class JsonitemsComponent implements OnInit {

  jsondata: Post[]=[];
  id:number;
  title:string;
  author:string;
  selectedItem : Post;
  toggleForm: boolean;

  constructor(private _jsonService: JsonserviceService) { }

  ngOnInit() {

   this.getJasonItems();
    
  }

  addJasonItems(frm:NgForm): void{

      //console.log("hello");
    this.id=(frm.value.id);
    //console.log(this.id);
    this.title=(frm.value.title);
    //console.log(this.title);
    this.author=(frm.value.author);
    //console.log(this.author);
    //debugger
    //this.addItemsToJason();
  }

  getJasonItems(){

    this._jsonService.getShoppingItems()
      .subscribe(items => {
     this.jsondata = <Post[]>items;

   })

  }

  addItemsToJason(){
    //debugger
    let book = new Post(this.id,this.author,this.title);
    this._jsonService.posthoppingItems(book).subscribe();
  
  }

  editItemsToJason(editfrm:NgForm):void{

    //this.id=(editfrm.value.id);
    //console.log(this.id);
    this.title=(editfrm.value.title);
    //console.log(this.title);
    this.author=(editfrm.value.author);
    //console.log(this.title);
  
  }

  editJason(){
    //debugger
   
    let book = new Post(this.selectedItem.id,this.author,this.title);
    this._jsonService.edithoppingItems(book).subscribe();
  
  }

  getIdTiBeDeleted(id:number){
 
    this.id = id;
  
     this._jsonService.deletehoppingItems(this.id)
     .subscribe(result => {
     
        for (var i = 0; i < this.jsondata.length; i++) {
          if (this.id == this.jsondata[i].id) {
            this.jsondata.splice(i, 1);                        
          }          
      }
     })
}

showUpdateForm(Item){

  this.selectedItem = Item;
  this.toggleForm = !this.toggleForm;
}
  
}

  




  
