import { Component } from '@angular/core';
import { NewsService } from '../newsservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers:[NewsService]
})
export class NewsComponent {
   constructor(private NsService:NewsService){}
}
