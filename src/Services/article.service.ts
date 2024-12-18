import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  tab: any[] = [];
  constructor(private http: HttpClient) { }

  GETALL(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/articles')
  }

  saveArticle(articleToSave: any): Observable<void> {
    const newArticle = {
      ...articleToSave,
      id: articleToSave.id ?? Math.ceil(Math.random() * 1000).toString(),
      createDate: new Date().toISOString()
    };

    // Ajouter le nouvel article à la liste
    this.tab.push(newArticle);

    // Retourner un Observable indiquant que l'opération est terminée
    return new Observable(observer => observer.next())//hetha topic
  }
  onsave(form: any): Observable<void> {
    return this.http.post<void>('http://localhost:3000/articles', form)
  }
}
