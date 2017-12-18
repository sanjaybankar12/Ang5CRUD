import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()

export class DataService{

    private hobbies=new BehaviorSubject<any>(['Keep Learning New Technologies']);
    hobby=this.hobbies.asObservable();
    
    constructor(){

    }

    changeHobby(hobby){
        this.hobbies.next(hobby);
    }
}