const list = document.querySelector('ul')
const deger = document.querySelector("#task")
const button = document.querySelector('.button')

for (var i=0;i<list.children.length;i++){

    list.children[i].innerHTML += `<button class="close" style="float: right;">x</button>`
   
}

function newElement() {
    
    if(deger.value) {
    $('.success').toast('show')
    list.innerHTML += `<li>${deger.value}<button class="close" style="float: right;">x</button></li>`
    deger.value = ""
    }
    else{
        $('.error').toast('show')
    }
}


list.addEventListener("click", listclose )
function listclose(e) {
    if (e.target.className == '' || e.target.className == 'checked') {
      e.target.classList.toggle('checked');
    } else {
        e.target.parentElement.remove();
    }
  };

