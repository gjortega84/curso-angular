import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServPostService {

  constructor(private htto : HttpClient) { }
    getpost(){
      return this.htto.get('https://jsonplaceholder.typicode.com/posts')
    }
  
}
