import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, delay, tap } from 'rxjs/operators';
import { Book } from './book.model';

const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  formData: Book;
  list: Book[];

  private readonly API = `${environment.API}Book`;

  constructor(private http: HttpClient) {}

  refreshList() {
    this.list = null;
    this.http.get(this.API).toPromise().then(
      res => {
        let array = Object.values(res);
        this.list = array as Book[];
      });
  }

  get() {
    return this.http.get<Book[]>(this.API).pipe(
      tap(console.log)
    );
  }

  create(formData: any) {
    return this.http.post(this.API, JSON.stringify(formData), options).pipe(take(1));
  }

  put(formData: Book) {
    const id = formData.id;
    return this.http.put(this.API + '/' + id, formData, options).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(this.API + '/' + id).pipe(take(1));
  }
}
