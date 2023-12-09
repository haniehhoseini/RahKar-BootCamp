import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from "../telegram.service"
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-bot',
  standalone: true,
  imports: [CommonModule, HttpClientModule , ReactiveFormsModule],
  templateUrl: './bot.component.html',
  styleUrl: './bot.component.scss'
})
export class BotComponent {
  constructor(private telegramService: TelegramService,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.addItems()
    }

    chat_id: number[] = [5288018404];
   

    errorMessage:string|null = null;

    form:FormGroup=this.formBuilder.group({
      text:["",Validators.required],
      photo:["",Validators.required],
      caption:["",Validators.required],
      button:[],
      items:this.formBuilder.array([])
    })

    get items():FormArray{
      return this.form.get('items') as FormArray;
    }

    addItems(){
      this.items.push(this.formBuilder.group({
        name:[""],
      }))
    }

    removeAt(index:number){
      this.items.removeAt(index)
    }

    convertlistToTelegramFormat(list:any[]){
      var arrayOfTelegramFormat:any=[]

      let numberOfButten = this.form.value.button;
       

      for (let i = 0; i < list.length; i += numberOfButten) {
        const rowButtons = list.slice(i, i + numberOfButten).map(element => ({
          text: element.name,
          callback_data: element.name
        }));
    
        arrayOfTelegramFormat.push(rowButtons);
      }
      return arrayOfTelegramFormat
  
    }
    
    submite(){
      this.errorMessage=null
      if (this.form.valid) {
        this.telegramService.sendMessage(
        this.chat_id[0],
        this.form.get('text')?.value,
        this.convertlistToTelegramFormat(this.items.value)
        ).subscribe(data=>{
        })
        this.telegramService.sendPhoto(
          this.chat_id[0],
          this.form.get('photo')?.value,
          this.form.get('caption')?.value
        ).subscribe(data=>{
        })
      }else{this.errorMessage="text is empty"}
    }
}
