import { Component, OnInit } from '@angular/core';
import {CardService} from './../../services/card.service'
import {Card} from 'src/app/models/card'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 card:Card[]=[];
 constructor(private cardService:CardService){}
 ngOnInit(): void {
   this.getCards()
 }
 getCards() {
  this.cardService.getCards().subscribe(response=> {
    this.card = response;
  })

 }
}
