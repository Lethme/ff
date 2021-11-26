import { Component, OnInit } from '@angular/core';

interface Certificate {
  title: string,
  subtitle: string,
  imageUrl: string,
  thumbnailUrl: string
}

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.less']
})
export class CertificationComponent implements OnInit {
  certificates: Array<Certificate> = [
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/1.jpg', thumbnailUrl: 'assets/img/cert/1_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/2.jpg', thumbnailUrl: 'assets/img/cert/2_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/3.jpg', thumbnailUrl: 'assets/img/cert/3_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/4.jpg', thumbnailUrl: 'assets/img/cert/4_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/5.jpg', thumbnailUrl: 'assets/img/cert/5_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/6.jpg', thumbnailUrl: 'assets/img/cert/6_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/7.jpg', thumbnailUrl: 'assets/img/cert/7_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/8.jpg', thumbnailUrl: 'assets/img/cert/8_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/9.jpg', thumbnailUrl: 'assets/img/cert/9_tn.jpg' },
    { title: 'Lorem', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi?', imageUrl: 'assets/img/cert/10.jpg', thumbnailUrl: 'assets/img/cert/10_tn.jpg' },
  ]
  constructor() { }

  ngOnInit(): void { }
}
