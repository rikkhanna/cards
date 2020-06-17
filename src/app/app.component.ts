import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title:"Neat Tree",
      subtitle:"@nature",
      description:"Saw this awesome tree during my hike today.",
      image:"assets/tree.jpeg"
    },
    {
      title:"Mountain biking",
      subtitle:"Adventure",
      description:"went to Leh Ladakh on bullet",
      image:"assets/biking.jpeg"
    },
    {
      title:"Mountains",
      subtitle:"Nature Love",
      description:"Saw beautiful Mountain view in HP",
      image:"assets/mountain.jpeg"
    }
  ]
}
