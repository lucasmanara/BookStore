import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, delay, tap } from 'rxjs/operators';
import { Genre } from './genre.model';

const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  formData: Genre;
  list: Genre[];

  private readonly API = `${environment.API}Genre`;

  constructor(private http: HttpClient) {}

  refreshList() {
    this.list = null;
    this.http.get(this.API).toPromise().then(
      res => {
        let array = Object.values(res);
        this.list = array as Genre[];
      });
  }

  get() {
    return this.http.get<Genre[]>(this.API).pipe(
      tap(console.log)
    );
  }

  create(formData: any) {
    return this.http.post(this.API, JSON.stringify(formData), options).pipe(take(1));
  }

  put(formData: Genre) {
    const Id = formData.Id;
    return this.http.put(this.API + '/' + Id, formData, options).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(this.API + '/' + id).pipe(take(1));
  }
}
