import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, exhaustMap, filter, interval, map, mergeMap, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    let posts$ = interval(1).pipe(
      filter(v => v>0),
      take(15)
    )
    posts$.pipe(
      switchMap(id => {
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }))
    .subscribe(console.log);
  }
}
/* 
Merge Map
  Retrun which ever return the response first.

Concat Map
  Return in same order.

Switch Map
  Only return latest one and cancel the older once.

Exhaust Map
  If it idel only it will take new one.
  It will discard the new one if it receives in between.

 */ 