var plus=document.getElementsByClassName("plus")
var minus=document.getElementsByClassName("minus")
var add=document.getElementsByClassName("add")
var del=document.getElementsByClassName("del")
var price=document.getElementsByClassName("price")
var count=document.getElementsByClassName("count")
var counter=document.getElementsByClassName("counter")
var shop=document.getElementById('shop')

for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        counter[i].innerHTML=Number(counter[i].innerHTML)+1
        count[i].innerHTML=Number(counter[i].innerHTML)*Number(price[i].innerHTML)
        total()
})
minus[i].addEventListener("click",function(){
    if(Number(this.previousElementSibling.innerHTML)>0)  
    this.previousElementSibling.innerHTML=Number(this.previousElementSibling.innerHTML)-1
 else this.previousElementSibling.innerHTML=0
 count[i].innerHTML=Number(counter[i].innerHTML)*Number(price[i].innerHTML)
 total()
})
}

for(let i=0;i<del.length;i++){
del[i].addEventListener('click',function(){
    del[i].parentElement.parentElement.remove()
   total()
})
}
function total(){
    let sum=0
    for( let i=0; i<count.length; i++ ){
        sum=sum+Number(count[i].innerHTML)
    }
   shop.innerHTML=sum
}
function alrt() {
    alert("Thank you for shopping with us!");
}

    

