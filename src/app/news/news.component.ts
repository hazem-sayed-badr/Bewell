import { Component } from '@angular/core';
import { NewsService } from '../newsservice.service';
import { Newdetail } from './detail.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers:[NewsService]
})
export class NewsComponent {
   constructor(private NsService:NewsService){}
   newsdata=[
     {id:1,img:"images/news1.png",h2:"Automotive Accessibility: Steering Towards Inclusive Mobility"},
     {id:2,img:"images/news2.png",h2:"Automotive Accessibility: Steering Towards Inclusive Mobility"},
     {id:3,img:"images/news3.png",h2:"Automotive Accessibility: Steering Towards Inclusive Mobility"},
   ]
}
