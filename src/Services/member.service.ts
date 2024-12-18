import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private httpClient: HttpClient) { } // bch sna3na instance bch 5demna

  tab: any[] = GLOBAL._DB.members;
  ONSAVE(memberToSave: any): Observable<any> {
    const Member1 = {
      ...memberToSave, // extractit des attributs eli mawjoudin fel membertosave 
      id: Math.ceil(Math.random() * 1000).toString(),
      createdDate: new Date().toISOString(),

    }

    this.tab.push(Member1)
    return new Observable(observer => observer.next()) // houa l pattron eli bch ya7ki lel composant . observer houa el service . bch traja3 el observer.next . kima then fel vue

    // //generateur de requette http
    // return this.httpClient.post('localhost:8080/api/Member', memberToSave)
  }
  ONDELETE(id: string): Observable<any> {
    // return this.httpClient.delete('localhost:8080/api/Member/$id') 
    this.tab = this.tab.filter((item) => item.id != id);
    return new Observable(observer => observer.next())
  }
  updateMember(currentItemId: string, membernew: any): Observable<any> {
    const index1 = this.tab.findIndex(item => item.id == currentItemId);
    this.tab[index1] = {
      id: currentItemId, ...membernew,
      createdDate: new Date().toISOString()
    }
    return new Observable(observer => observer.next())
  }
  getMemberById(id: string): Observable<any> {
    // return this.httpClient.get<any>('127.0.0.1:8080/api/Member/$id');
    return new Observable(observer => observer.next(
      this.tab.filter(item => item.id == id)[0] ?? null
    ))
  }
}
