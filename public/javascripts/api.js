import {search,allData} from './function.js';


//that setences is validated, all inputs are correct and searching for a topic
let btn = document.getElementById("btn");

btn.addEventListener("click",(e)=>{
    let topic= document.getElementById("look");
    let media= document.querySelector(".media");
    e.preventDefault();

    if(topic.value!=="" && topic.value!== " " ){
        search(topic.value,media,()=>{
            let photos= document.querySelectorAll(".photo")
            for(let i=0;i<photos.length;i++){
               photos[i].addEventListener("click",()=>{
                   document.querySelector(".showImage").classList.remove("hid");            
               })
            }
        });
    }else{
        alert("there isn't any query in the search input")
    }
})


 window.addEventListener("load",()=>{
    allData(document.querySelector(".media"),()=>{
        let photos= document.querySelectorAll(".photo")
        for(let i=0;i<photos.length;i++){
           photos[i].addEventListener("click",()=>{
               document.querySelector(".showImage").classList.remove("hid");            
           })
        }
    }); 
})


document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".showImage").classList.add("hid");
})


// window.addEventListener("scroll", reveal);