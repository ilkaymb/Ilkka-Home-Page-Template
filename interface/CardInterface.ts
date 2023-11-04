// Bu interface her kart için kullanılacak.
export interface CardInterface {
  title: string;
  content: string;
  image: any; // Burada daha spesifik bir tip (örn. string ya da ImageProps) kullanmak daha uygun olabilir.
}

// Bu interface CardArea bileşeninin beklediği prop'lar için kullanılacak.
export interface CardAreaInterface {
  cards: CardInterface[]; // CardInterface tipinde bir dizi.
}
