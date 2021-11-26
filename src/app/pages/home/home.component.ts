import { Component, OnInit } from '@angular/core';

export interface Feature {
  title: string,
  imageUrl: string,
  text: string
}

export interface Card {
  title: string,
  imageUrl: string,
  text: string,
  link: string
}

export interface UserData {
  login: string,
  password: string,
  remember: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  features: Array<Feature> = [
    { title: "Lorem", imageUrl: "https://via.placeholder.com/300x150?text=Placeholder", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!" },
    { title: "Lorem", imageUrl: "https://via.placeholder.com/300x150?text=Placeholder", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!" },
    { title: "Lorem", imageUrl: "https://via.placeholder.com/300x150?text=Placeholder", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!" },
    { title: "Lorem", imageUrl: "https://via.placeholder.com/300x150?text=Placeholder", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!" },
  ];
  cards: Array<Card> = [
    { title: "Lorem", imageUrl: "https://via.placeholder.com/50x50?text=Ph", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sed repudiandae rerum error quaerat vitae enim ex, doloribus debitis est?", link: "#" },
    { title: "Lorem", imageUrl: "https://via.placeholder.com/50x50?text=Ph", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sed repudiandae rerum error quaerat vitae enim ex, doloribus debitis est?", link: "#" },
    { title: "Lorem", imageUrl: "https://via.placeholder.com/50x50?text=Ph", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sed repudiandae rerum error quaerat vitae enim ex, doloribus debitis est?", link: "#" },
    { title: "Lorem", imageUrl: "https://via.placeholder.com/50x50?text=Ph", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sed repudiandae rerum error quaerat vitae enim ex, doloribus debitis est?", link: "#" },
  ];
  userData: UserData = {
    login: '',
    password: '',
    remember: false
  }

  constructor() { }
  ngOnInit(): void { }

  loginSubmit() {
    console.log(this.userData);
  }
}
