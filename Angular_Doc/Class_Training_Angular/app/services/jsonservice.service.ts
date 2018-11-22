import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private http:HttpClient) { }

  getShoppingItems(){

    return this.http.get('http://localhost:3000/posts');
  }

  posthoppingItems(goods:Post){

    return this.http.post('http://localhost:3000/posts',goods);
  }

  deletehoppingItems(delId:number){

    return this.http.delete('http://localhost:3000/posts/'+delId);
  }

  edithoppingItems(updatebook:Post){
    
    return this.http.put('http://localhost:3000/posts/'+updatebook.id,updatebook);
  }

}
