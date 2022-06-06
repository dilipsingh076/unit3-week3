// let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"


main()
var userdata=JSON.parse(localStorage.getItem("user"))
async function main()
{
  var res=getdata()


  var data= await res

//   console.log(data)
  append(data)
 
  var balance=userdata.wallet
//   console.log(balance)
  document.querySelector("#wallet_balance").innerText=balance

}

async function getdata()
{
    try
    {
        const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
        var res= await fetch(url)
        // console.log(res)
        var data=await res.json()
//   console.log(res.json())     
        return data[0].vouchers
    }
    catch(error)
    {
        console.log(error)
    }
}

function append(data)
{
   var container=document.querySelector("#voucher_list")
   
   data.forEach(function(ele)
   {
       var div=document.createElement("div")
       div.setAttribute("class","voucher")
       
       var image=document.createElement("img")
       image.src=ele.image

       var name=document.createElement("p")
       name.innerText=ele.name

       var price=document.createElement("p")
       price.innerText=ele.price

       var button=document.createElement("button")
       button.innerText="Buy"
       button.setAttribute("class","buy_voucher")
       button.addEventListener("click",function()
       {
           addvoucher(ele)
       })

       div.append(image,name,price,button)
       container.append(div)

   })
}

function addvoucher(ele)
{
    var balance=userdata.wallet
    if(balance<ele.price)
    {
        alert("Sorry! insufficient balance")
    }
    else
    {
       alert("Hurray! purchase successful")
       balance=balance-ele.price

       userdata.wallet=balance
       
       document.querySelector("#wallet_balance").innerText=balance
       localStorage.setItem("user",JSON.stringify(userdata))


       var purchase_array=JSON.parse(localStorage.getItem("purchase"))|| []
       purchase_array.push(ele)
       localStorage.setItem("purchase",JSON.stringify(purchase_array))
    }
}