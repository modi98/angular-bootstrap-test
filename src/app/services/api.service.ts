import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPost } from '../interfaces/ipost';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private db: IPost[] = [
    {
      id: '1',
      title: 'Example 1',
      description: 'This is a fake post designed to test functionality.'
    },
    {
      id: '2',
      title: 'Example 2',
      description: 'This is a fake post designed to test functionality.'
    },
    {
      id: '3',
      title: 'Example 3',
      description: 'This is a fake post designed to test functionality.'
    },
    {
      id: '4',
      title: 'Example 4',
      description: 'This is a fake post designed to test functionality.'
    },
    {
      id: '5',
      title: 'Example 5',
      description: 'This is a fake post designed to test functionality.'
    },
    {
      id: '6',
      title: 'Example 6',
      description: 'This is a fake post designed to test functionality.'
    }
  ];

  public bs = new BehaviorSubject(this.db);
  public ob = this.bs.asObservable();

  constructor() { }

  addPost(post: IPost): void {
    this.db.push(post);
    this.bs.next(this.db);
  }
}
