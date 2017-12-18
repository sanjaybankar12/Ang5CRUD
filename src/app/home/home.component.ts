import { Component,OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { DataService } from '../data.service';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:[ './home.component.css','./bootstrap.min.css' ],
    animations:[ trigger('hobbies',[
        transition('* => *',[
            query(':enter',style({opacity:0}),{optional:true}),

            query(':enter',stagger('300ms',[
                animate('.6s ease-in',keyframes([
                    style({opacity:0,transform:'translateY(-75%)',offset:0}),
                    style({opacity:.5,transform:'translateY(35px)',offset:.3}),
                    style({opacity:1,transform:'translateY(0)',offset:1})
                ]))]),{optional:true})
        ])
    ]) ],
    providers:[ DataService ]
})

export class HomeComponent implements OnInit{

    btnText:string;
    itemCount:number;
    hobbies:string[];
    hobbyText:string;

    constructor(private dataService: DataService){

    }

    ngOnInit(){
        this.btnText='Add Hobby';
        this.hobbyText='';
        this.hobbies=[];

        this.dataService.hobby.subscribe(res => {
            this.hobbies=res;
        });
        this.itemCount=this.hobbies.length;

        this.dataService.changeHobby(this.hobbies);

    }

    addHobbies(){
        if(this.hobbies.indexOf(this.hobbyText)!=-1)
            return;
        if(this.hobbyText=='')
            return;
        this.hobbies.push(this.hobbyText);
        this.hobbyText='';       
        this.itemCount=this.hobbies.length;
        this.dataService.changeHobby(this.hobbies);
    }

    deleteHobby(i){
        this.hobbies.splice(i,1);
        this.itemCount=this.hobbies.length;
        this.dataService.changeHobby(this.hobbies);
    }

}