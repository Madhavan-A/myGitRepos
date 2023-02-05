import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbcserviceService } from '../abcservice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {


  // @Input() msg: any;
      // Stats: any = [{name: "Madhavan", id: 1, age: 22},
      //          {name: "Sriram", id: 2, age: 23},
      //            {name: "Dhasa", id: 3, age: 15},
      //            {name: "Vijay", id: 4, age: 18},
      //            {name: "Ajith", id: 5, age: 28}]
  //  @Output()  msg = new EventEmitter()
   //  sendmsg(){
  //   this.msg.emit(this.Stats)
  //  }
// studentsdata: any
// name: any = "madhavan";

  // Finddate: any = new Date().toDateString()
  // Staffs: any[] = [{name: "Raman", age: 22, Gender: "M"},
  // {name: "Raja", age: 26, Gender: "M"},
  // {name: "Revathi", age: 25, Gender: "F"},
  // {name: "Raghinath", age: 28, Gender: "M"}]
  // add(){
  //   this.Staffs.push({name: "Aishu", age: 22, Gender:"F"})
  // }
  // remove(){
  //   this.Staffs.pop()
  // } 
  value: any;
     constructor(private data: AbcserviceService) {
      // this.studentsdata = this.data.details();      
    // console.log(5+5);
    // console.log(this.studentsdata)
    }
   

  ngOnInit(): void {
  
    
  }

  

}


