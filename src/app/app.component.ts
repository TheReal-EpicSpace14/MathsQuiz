import { Component } from '@angular/core';

const heroes: any[] = [
  { id: 11, name: "mr.nice" },
  { id: 12, name: "narco" },
  { id: 13, name: "bombasto" },
  { id: 14, name: "celeritas" },
  { id: 15, name: "mageta" },
  { id: 16, name: "rubberman" },
  { id: 17, name: "dynama" },
  { id: 18, name: "dr iq" },
  { id: 19, name: "magma" },
  { id: 20, name: "tornado" },
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  clickdivide = false
  clickmultiply = false
  y = 2
  equals = " = "
  t = 120
  score = 0;
  min = 2
  second = 60
  timer;
  name;
  symbol = [' - ',' + ']
  questionlist = []
  answerlist = []
  studAns = []
  scoreboard = []
  multi = "*"
  divide = "/"
  question = Math.floor((Math.random() * 10)+1)+this.symbol[Math.floor((Math.random()*this.y)+0)]+Math.floor((Math.random() * 10)+1)
  ans = eval(this.question)

  enterName() {
    var txt;
    var person = prompt("What is your first and last name?")
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = person
      this.scoreboard.push({name:person,score:this.score,t:this.t})
    }
    // document.getElementById("demo").innerHTML = txt;
  }

  multiply() {
    this.symbol.push(this.multi)
    this.y=this.y+1
  }
  division() {
    this.symbol.push(this.divide)
    this.y=this.y+1
  }
  // this.var1= Math.random() * 10;
  // this.var2= Math.random() * 10;
  //
  // this.question = this.var1 + " + " + this.var2 +  "="
  // alert(this.answer)


  questions() {
    this.clickdivide=true
    this.clickmultiply=true
    this.questionlist = []
    this.answerlist = []
    this.score = 0
    clearInterval(this.timer)
    this.myTimer()
    this.t = 120
    this.studAns = []

      for (var i = 0; i < 20; i++){
        this.question = Math.floor((Math.random() * 10)+1)+this.symbol[Math.floor((Math.random()*this.y)+0)]+Math.floor((Math.random() * 10)+1)
        this.questionlist.push(this.question)
        this.ans = eval(this.question)
        this.answerlist.push(this.ans)

        console.log(this.questionlist)
        console.log(this.question)
        console.log(this.ans)
        console.log(this.answerlist)
      }
    }
    myTimer() {
       var a2 = this;
       this.timer = setInterval(function(){ myTimer() }, 1000 );
       function myTimer() {
         var d = new Date();
         a2.t = a2.t-1;
         if (a2.t == 0) {
           clearInterval(a2.timer)
           var txt;
           var person = prompt("Sadly, your time has ran out. What is your first and last name?")
           if (person == null || person == "") {
             txt = "User cancelled the prompt.";
           } else {
             txt = person
           }
           document.getElementById("demo").innerHTML = txt;
         }
       }
     }

  marks() {
    this.symbol = [" - "," + "]
    this.y = 2
    clearInterval(this.timer)
    for (var i = 0; i < 20; i++){
      if (this.studAns[i] == this.answerlist[i]){
        this.score = this.score + 1
      }
    }
    this.enterName()
    console.log(this.score)
    this.clickdivide=false
    this.clickmultiply=false

}

}


export class hero {
id: number;
name: string;
// thisselectedHero = hero
}
