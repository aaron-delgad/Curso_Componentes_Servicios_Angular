import { Component } from '@angular/core';

@Component({
  selector: 'servicios-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent= '';

  onLoaded(img: string){
  console.log('Llegando del padre',img)
  }

  showImg = true;
  toggleImg(){
    this.showImg = !this.showImg;
  }

}
