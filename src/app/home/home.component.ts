import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPost } from '../interfaces/ipost';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public posts: IPost[];
  private sub: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.sub = this.api.ob.subscribe(posts => {
      console.log('Updated posts');
      this.posts = posts;
    });
  }

  addPost(): void {
    this.api.addPost({
      id: '6',
      title: 'This is a test',
      description: 'This is a description test'
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
