import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUpdateFormctive:boolean=false;
  work:string="";
  updateWork:string="";
  works:string[]=[];
  index:number=0;
save(){
  this.works.push(this.work);
  this.work="";
}
remove(index:number){
  let result:boolean=confirm("Kaydı Silmek İstiyormusunuz?");
  if (result){
    this.works.splice(index,1);
  }
}
get(work:string,index:number){
  this.updateWork=work;
  this.index=index;
  this.isUpdateFormctive=true;
}
update(){
    this.works[this.index]=this.updateWork;
    this.cancel();
}
cancel(){
  this.isUpdateFormctive=false;
}
changeInputClass(){
  if(this.work.length<3)
    return "form-control is-invalid"
    return "form-control is-valid"
}

}
