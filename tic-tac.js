let b= document.getElementsByClassName("box");
let count=1;
for(let i=0;i<b.length;i++){
    b[i].addEventListener('click',function(){
         
        if(b[i].innerText==""){
        if(count%2==1){    
            this.innerText="x";
            count++;
        }
        else {
            this.innerText="o"
            count++;
        }
    }   
     
        if(check()){
            
            console.log(count);
          //  alert(this.innerText+' is the winner');
          let x= document.createElement("div");
          x.className="popup bg-success mt-4";
          let y=document.createTextNode("player with "+this.innerText+" is winner");
          let b=document.querySelector(".container");
          let c=document.querySelector(".pop");
          x.appendChild(y);
         //console.log(x,z,b);
          b.insertBefore(x,c);
         // console.log(this)
          addpoint(this);
         
          setTimeout(()=>document.querySelector(".popup").remove(),3000);

            reset();
            count=1;
            
          }
   if(count==10 && !check()){
    
        let x= document.createElement("div");
        x.className="popup bg-info mt-4";
        let y=document.createTextNode(" draw ");
        let b=document.querySelector(".container");
        let c=document.querySelector(".pop");
        x.appendChild(y);
       //console.log(x,z,b);
        b.insertBefore(x,c);
       // console.log(this)
        
       
        setTimeout(()=>document.querySelector(".popup").remove(),3000);
        count=1;
         
        reset();
    }
   

      
    //console.log(check());
    });
   
}
//add points
function addpoint(t){
    //console.log(ppp);
    if(t.innerText=="x"){
        let a= document.querySelector(".tbody");
        let b= document.createElement("tr");
        b.className="temp"
        let c= document.createElement("td");
       
        let d=document.createElement("td");
        b.appendChild(c);
        b.appendChild(d);
        c.appendChild(document.createTextNode("1"));
        d.appendChild(document.createTextNode("0"));
        a.appendChild(b);
        //console.log(a);
    }
     else{
        let a= document.querySelector(".tbody");
        let b= document.createElement("tr");
        b.className="temp"
        let c= document.createElement("td");
        let d=document.createElement("td");
        b.appendChild(d);
        b.appendChild(c);
       
        c.appendChild(document.createTextNode("1"));
        d.appendChild(document.createTextNode("0"));
        a.appendChild(b);
        //console.log(a);
    }
    reset();

}
   
 
//reset  button event
document.querySelector(".btn").addEventListener('click',()=>{
    let b= document.getElementsByClassName("box");
    for(let i=0;i<b.length;i++){
    b[i].innerText="";
    }
    let x= document.querySelectorAll(".temp");
    console.log(x);  
    let y=0;
    for(let i=0;i<x.length;i++){
        x[i].remove();
    } 
 });


//reset
 function reset(){
    
        let b= document.getElementsByClassName("box");
        for(let i=0;i<b.length;i++){
        b[i].innerText="";
        }
    
}

//logic
 function check() {
 
   if( val("#b1","#b2","#b3")||val("#b1","#b4","#b7")||
   val("#b1","#b5","#b9")||val("#b5","#b2","#b8")||val("#b5","#b7","#b3")||val("#b6","#b9","#b3")||val("#b4","#b5","#b6")||val("#b7","#b8","#b9") ){
       return true;
   }
   
}
  
function getDocx(d){
    //console.log(d);
    return document.querySelector(d).textContent;
}

//VALIDATE
function val(b1,b2,b3){
    if(  getDocx(b1) !=""&& getDocx(b2) !=""&& getDocx(b3) !=""&&getDocx(b1) ==getDocx(b2) &&getDocx(b2) ==getDocx(b3)){ 
          return true;    
       }
    }
