import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector:'about',
    template:`
            <p style='margin:4% 0 0 10%;'>This is about page , <strong style='cursor:pointer;' (click)="sendMeBack()">Take me back..!!</strong></p>
    `,
    styleUrls:[ ],
    providers:[ DataService ]
})

export class AboutComponent implements OnInit{
    
    hobbies:any;

    constructor(private dataService: DataService,private router:Router){

    }

    ngOnInit(){
        this.dataService.hobby.subscribe(res => this.hobbies=res);
    }

    sendMeBack(){
        this.router.navigate(['']);
    }
}