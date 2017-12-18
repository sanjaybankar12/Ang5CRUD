import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector:'about',
    templateUrl:'./about.component.html',
    styleUrls:[ './about.component.css' ],
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