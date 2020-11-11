import { Quote } from '@angular/compiler';
import { Component} from '@angular/core';
import { from } from 'rxjs';
import { QuoteService } from '../services/quote.services';
import { Quote} from '../models/quote.class';

@Component({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html',
    styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxcomponent{
    public quote = new Quote('', '');
    constructor(public quoteService: QuoteService){
        this.getQuote();
    }
    public getQuote(){
        this.quoteService.getRandomQuote().subscribe((data: Quote) => {
            this.quote = new Quote(data.quote, data.author) ;
        });
    }
}