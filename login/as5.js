let arr=[]
function insert(name,age){
this.pname=name;
this.page=age;
}

function insertdata(){
let j1=document.getElementById("i1").value
let j2=parseInt(document.getElementById("i2").value)
arr.push(new insert(j1,j2))
console.log(arr)
}

function showinfo(){
    for(let i =0;i<arr.length;i++){
        document.getElementById("p1").innerHTML=document.getElementById("p1").innerHTML+ "  "+'<br>'+arr[i].pname + "  " + arr[i].page
       }
   }
    
