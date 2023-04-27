import { Component, OnInit } from '@angular/core';
import {SliderService} from "./../../services/slider.service";
import {Slider} from 'src/app/models/slider'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit  {
slider:Slider[]=[];
constructor(private sliderService: SliderService) { }
ngOnInit(): void {
  this.getSlider();
//   slider: [
//     {
//       image: 'https://loremflickr.com/g/600/400/paris',
//       thumbImage: 'https://loremflickr.com/g/1200/800/paris',
//       alt: 'Image 1',
//       title: 'Image 1'
//     }, {
//       image: 'https://loremflickr.com/600/400/brazil,rio',
//       thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
//       title: 'Image 2',
//       alt: 'Image 2'
//     }, {
//       image: 'https://loremflickr.com/600/400/paris,girl/all',
//       thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
//       title: 'Image 3',
//       alt: 'Image 3'
//     }, {
//       image: 'https://loremflickr.com/600/400/brazil,rio',
//       thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
//       title: 'Image 4',
//       alt: 'Image 4'
//     }, {
//       image: 'https://loremflickr.com/600/400/paris,girl/all',
//       thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
//       title: 'Image 5',
//       alt: 'Image 5'
//     }
// ];
}
getSlider() {
  this.sliderService.getTodos().subscribe(response=> {
    this.slider = response;
  })
}
}
