import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs'; // everything returned from firestore to a component will be an Observable

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
}
