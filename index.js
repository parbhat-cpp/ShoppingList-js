const add_btn=document.getElementById("btnAdd");
const DIV=document.getElementById("idDiv");
const input=document.getElementById("idInput");

let cnt=1;

add_btn.addEventListener("click",()=>{
  let text=input.value;
  let cntr=cnt.toString();
  DIV.innerHTML=`<div class="card" id="card${cntr}" style="margin:5px;">
  <div class="card-body d-flex">
    <p id="list${cntr}">${text}</p>
    <button class="btn btn-outline-success" id="rem${cntr}" onclick="onRemClicked('card${cntr}')" >remove</button>
    <button class="btn btn-outline-success" id="edit${cntr}" onclick="onEditClicked('list${cntr}')">edit</button>
  </div>
</div>`+DIV.innerHTML;
input.value="";
cnt++;
},false)

const onRemClicked = (ele)=>{
  document.getElementById(ele).remove();
}

const onEditClicked = (ele)=>{
  let a=prompt("Edit list element","idk");
  if(a!=null){
    document.getElementById(ele).textContent=a;
  }
}