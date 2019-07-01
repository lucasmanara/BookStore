
export class Book {
  Id: number;
  title: string;
  genreid: number;
  genre: {
    Id: number;
    name: string;
  }
  authorid: number;
  author: {
    Id: number;
    name: string;
  }
  stock: number;
  publishdate: string;
}
