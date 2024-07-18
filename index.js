let span=document.getElementById("balance")
let craditamount=document.getElementById("abc")
let cradit=document.getElementById("cradit")
cradit.addEventListener("click",avlBalance)
let balance=0 

function avlBalance(){   
    let amount=Number(craditamount.value)
    balance=balance+amount
    span.innerHTML=balance
    craditamount.value="" 
    alert("Amount cradit successfully")   
}
let Withdraw=document.getElementById("Withdraw") 
Withdraw.addEventListener("click",WithdrawBalance)

function WithdrawBalance(){
    let amount=Number(craditamount.value)
    if(balance>amount || balance==amount){
    balance=balance-amount
    span.innerHTML=balance
    craditamount.value=""
    alert("Amount Withdraw successfully")
}else{
    alert(" Your balance is low so cradit balance first")
     craditamount.value=""
}
   
}