import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  constructor(private http:HttpClient) {}

  sendMessage(chat_id:number,text:string,reply_markup:any){
    var data={
      chat_id:chat_id,
      text:text,
      reply_markup:{keyboard:reply_markup}
    }
    return this.http.post( `https://api.telegram.org/bot6631310582:AAGGU-mjtN45yvl7ELE_lAG7tjAjaXVf7r8/sendMessage`,data)
  }

  sendPhoto(chat_id:number,photo:string,caption:string){
    var data={
        chat_id:chat_id,
        photo:photo,
        caption:caption
    }
    return this.http.post( `https://api.telegram.org/bot6631310582:AAGGU-mjtN45yvl7ELE_lAG7tjAjaXVf7r8/sendPhoto`,data)
  }
}