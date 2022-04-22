import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import * as firebase from 'firebase';


@Injectable({
    providedIn: 'root',
  })
  export class DataService {
    private dbPath = 'digitalseva';
    dbRef: firebase.default.database.Database;
  
    constructor(private db: AngularFireDatabase) {
      this.dbRef = this.db.database;
    }
    createService(payload) {
        return this.dbRef
          .ref(`${this.dbPath}/services/${payload.name}`)
       
          .set(payload, (error) => {
            if (error) {
              // The write failed...
              console.log('error while adding the data', error);
              return false;
            } else {
              // Data saved successfully!
              console.log('Data Uploaded !');
              return true;
            }
          });
      }
       // read
  getAllServices() {
    return this.dbRef.ref(`${this.dbPath}/services`);
  }
    // update
    editService(payload) {
      // Get a key for a new Post.
      // var newPostKey = this.dbRef.ref(`${this.dbPath}/games/${gametype}`).child(`${payload.name}`).push().key;
  
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates[`${this.dbPath}/services/${payload.name}/name`] =
        payload.name;
      updates[`${this.dbPath}/services/${payload.name}/description`] =
        payload.description;
        updates[`${this.dbPath}/services/${payload.name}/documents`] =
        payload.documents;
        updates[`${this.dbPath}/services/${payload.name}/charges`] =
        payload.charges;
      // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
      return this.dbRef.ref().update(updates);
    }
  

  deleteService(name) {
    return this.dbRef.ref(`${this.dbPath}/services/${name}`).remove();
  }
  extractServices(snapshot) {
    const services = [];
    console.log('snapshot ', snapshot.val());

    // as the data is inside the format of object convert that into array to iterate
    const data = snapshot.val();

    if (data) {
      // keys
      const serviceKeys = Object.keys(data);
      serviceKeys.forEach((service) => {
        services.push(data[service]);
      });

      console.log('Services in the Services array', services);

      console.log('data of the all Services', data);

      // all the Services will be converted to the array
      return services;
    } else {
      return [];
    }
  }
    }