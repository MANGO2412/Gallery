//functio to get data from json
const get=(url,apiKey=null)=>{
  if(apiKey !=null){
    return fetch(url,{headers: {Authorization: apiKey}})
    .then(resp => {return resp.json()})
  }

  return fetch(url)
   .then(resp => {
       return resp.json()
     })
}

//function  scroll
function reveal() {
  var reveals = document.querySelectorAll(".photo");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


const search=(value,contener,method)=>{
    contener.innerHTML="";
    let url="https://api.pexels.com/v1/search?query="+value;
    get(url,'n9rsRPJxQg2ehBgJHHhY5MlE6hhm89LUYMX6wJOHe3vnAeQ8EiQJDiTl')
      .then(data=>{
        data["photos"].forEach(element => {
          contener.innerHTML+=`
           <div>
               <p class="hid">${element.id}</p>
              <img class="photo" width="200" height="200" src="${element.src.original}" alt="${element.alt}"/>
           </div>
          `;
        });
        method();
      }) 
}

const getPhoto=(id,method)=>{
     const title=document.getElementById("title"),
           user=document.getElementById("user"),
           photo=document.querySelector(".picture");

     let url="https://api.pexels.com/v1/photos/"+id;
     get(url,'n9rsRPJxQg2ehBgJHHhY5MlE6hhm89LUYMX6wJOHe3vnAeQ8EiQJDiTl')
         .then(data=>{
             title.textContent=data.alt;
             user.textContent=data.photographer;
             photo.src=data.src.original;
             photo.alt=data.alt;
         })
}


const allData=(contener,method)=>{
  let url="http://localhost:3000/FILENAME.json";
  get(url)
    .then(data=>{
        data["photos"].forEach(element => {
          contener.innerHTML+=`
           <div>
              <p class="hid">${element.id}</p>
              <img class="photo" width="200" height="200" src="${element.src.original}" alt="${element.alt}"/>
           </div>
          `;
        });
        method()
      })  
}

export {search,get,allData};