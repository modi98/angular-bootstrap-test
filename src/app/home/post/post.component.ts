import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() public post: IPost;
  @Output() private goingSomewhere = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.goingSomewhere.emit('Omg');
  }

}
