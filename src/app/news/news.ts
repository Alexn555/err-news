import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../services/newsService';
import { NewsType } from '../../model/newsModel';
import { NewsCategory } from '../category/category';

@Component({
  selector: 'app-news',
  templateUrl: './news.html',
  imports: [NewsCategory],
  styleUrl: './news.scss',
})
export class AppNews {
    news: NewsType[] = [];
    subscription: Subscription;

    constructor(private newsService: NewsService) {
        this.subscription = new Subscription;
    }

    ngOnInit() {
        this.subscription = this.newsService.getData().subscribe(response => {
            let res = response;
            if (res && res.data && res.data.category.frontPage) {
                let raw: NewsType[] = res.data.category.frontPage;
                for (let i = 0, l = raw.length; i < l; i++) {
                    if (i > 0 && raw[i].header !== '' && raw[i].highTimeline && raw[i].data.length > 0) {
                        this.news[i] = raw[i];
                        this.news[i].key = i;
                    }
                }
            }
        });
   }

   trackCategory(index: number, category: NewsType) {
       return category;
   } 

   ngOnDestroy() {
       this.subscription.unsubscribe();
   }
}
