function saveStorage(){
let value =  document.querySelector("input").value;
document.querySelector("input").value = "";
localStorage.setItem("item", {name: "홍길동", age : 20, handsome: true});
}

//-------------------------------------------

function readFromStorage(){
  let itemValue = localStorage.getItem("item");
  let itemValueType = typeof(itemValue);
  let item = JSON.parse(itemValue);
  document.querySelector("span").innerHTML = `[name:(${item.name})]`;
}
///-------------------------------------------------------
function kbdHandler(){
  if(event.keyCode == 13){//// enter키를 누르면
    saveStorage();

  }
}
//----------------------------------------------------------
window.onload = function(){
  document.querySelector("input").addEventListener("keydown",kbdHandler);
readFromStorage();
}
