let num=document.getElementById("num")
let num1=document.getElementById("num2")
let num2=document.getElementById("num0")
let num3=document.getElementById("num1")
let img1=document.getElementById("img")
let img2=document.getElementById("img2")
let btn1=document.getElementById("serch-btn")
let btn2=document.getElementById("serch-btn2")
let search=document.getElementById("search0")
let search2=document.getElementById("search01")
let buton=document.getElementById("img-between")
let username1=document.getElementById("h4")
let username2=document.getElementById("h41")


async function getUser() {
 
    const response = await fetch(
      `https://api.github.com/users/${search.value}`
    );
  

    const data = await response.json();
  

    num.innerText = `${data.public_repos}`;
    num1.textContent = `${data.followers}`;
    img1.src =  `${data.avatar_url}`;
   
  

    username1.textContent=`${data.name}`
  

    console.log(data.avatar_url)


   
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> getUser()

btn1.addEventListener("click",()=>{

    getUser();
    console.log("hi")
    
    
    
    
    })










async function getUser1() {
 
    const response = await fetch(
      `https://api.github.com/users/${search2.value}`
    );
  

    const data = await response.json();
  

    num2.innerText = `${data.public_repos}`;
    num3.textContent = `${data.followers}`;
    img2.src =  `${data.avatar_url}`;
   
  

    username2.textContent=`${data.name}`
  

    console.log(data.avatar_url)


   
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> getUser()
btn2.addEventListener("click",()=>{

    getUser1();
    console.log("hi")
    
    
    
    
    })







    function getUser2(){


let repo1=parseInt (num.innerText);
let repo2=parseInt (num2.innerText);
let followers1=parseInt (num1.innerText);
let followers2 =parseInt (num3.innerText);

if (repo1>repo2) {


   img1.style.borderColor="green"
   img2.style.borderColor="red"


  
}else if (repo1<repo2) {
    img2.style.borderColor="green"
    img1.style.borderColor="red"

}else if (repo1==repo2) {

    if (followers1>followers2) {
        img1.style.borderColor="green"
   img2.style.borderColor="red"
    }else if (followers1<followers2) {
        img2.style.borderColor="green"
    img1.style.borderColor="red"
    }else{
        img2.style.borderColor="yellow"
    img1.style.borderColor="yellow"
    }
    
}
        


    }



buton.addEventListener("click",()=>{

    getUser2();
    console.log("hi")
    
    
    
    
    })



