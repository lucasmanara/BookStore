
export class Book {
  id: number;
  title: string;
  genreid: number;
  genre: {
    id: number;
    name: string;
  }
  authorid: number;
  author: {
    id: number;
    name: string;
  }
  stock: number;
  publishdate: string;
}
