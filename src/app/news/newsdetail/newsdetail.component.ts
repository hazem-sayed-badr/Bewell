import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from '../../newsservice.service';
import { Newdetail } from '../detail.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrl: './newsdetail.component.css',
  providers:[NewsService]
})
export class NewsdetailComponent implements OnInit {
  constructor(private newssrv:NewsService){}
  selectedNew:Newdetail;
  newid:number;
  activateroute:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(): void {
   this.newid= +this.activateroute.snapshot.paramMap.get('id');
   this.selectedNew=this.newssrv.newsdetail.find(news=>news.id===this.newid);
  }

}
