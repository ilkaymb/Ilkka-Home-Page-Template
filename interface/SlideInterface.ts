export interface SlideInterface {
  image: any; // Eğer image her zaman bir URL ise
  title: string;
  description: string;
}
export interface SlideAreaInterface {
  slides: SlideInterface[]; // CardInterface tipinde bir dizi.
}
