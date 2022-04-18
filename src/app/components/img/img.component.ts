import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'servicios-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit,OnDestroy {

  img: string = '';
  @Input()
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img);
  }

  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/imagenes/dragon.jpg';

  constructor() {
    //antes del render
    //No async  --- once time/no corre cosas asincronas/corre una vez
    //solo puede haber cosas que tengan un valor, no que esperen
    console.log('constructor', 'imgValue =>', this.img);
  }

  // counter = 0;
  // counterFn: number | undefined;
  ngOnInit(): void {
    //corre antes del render
    //Si corre cosas asincronas - fetch -- corre una vez
    console.log('ngOnInit', 'imgValue =>', this.img);

    //Contador
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // },1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    //corre antes y durante el render
    //Actualiza los cambios en el @input. Corre varias veces
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngAfterViewInit(){
    //corre despues del render
    //se manipulan los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    //Elimina el componente
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgerror(){
    this.img = this.imageDefault;
  }

  imgloaded(){
    console.log('load hijo');
    this.loaded.emit(this.img);
  }
}
