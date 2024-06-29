document.getElementById('button1').addEventListener
('click',Brakefast);

document.getElementById('button2').addEventListener
('click',Lunch);

document.getElementById('button3').addEventListener
('click',Desert);


function Brakefast(){
   fetch('menu-B.json')
   .then(function(responce){
      return responce.json();
   })
   .then(function(data){
      // console.log(data);
      let html = '';
       data.forEach(function(menuB){
         html += `
         <div class= "food-item">
         <img src="${menuB.picture}" alt="">
         <p>${menuB.name}<p/>
         <p class="price"> ${menuB.price}<p/>
         </div>
         `;
       });
         document.getElementById('Food-Items').innerHTML = html;
       })
   }

   function Lunch(){
    fetch('menu-L.json')
    .then(function(responce){
      return responce.json();
    })
    .then(function(data){
      // console.log(data);
      let html = '';
      data.forEach(function(menuL){
        html += `
        <div class= "food-item">
         <img src="${menuL.picture}" alt="">
        <p class="title">${menuL.name}<p/>
        <p class="price"> ${menuL.price}<p/>
        </div>
        `;
      });
      document.getElementById('Food-Items').innerHTML = html
    })

  }
  
  function Desert(){
    fetch('menu-D.json')
    .then(function(responce){
      return responce.json();
    })
    .then(function(data){
      // console.log(data);
      let html = '';
      data.forEach(function(menuD){
        html += `
        <div class= "food-item">
        <img src="${menuD.picture}" alt="">
        <p class="title">${menuD.name}<p/>
        <p class="price"> ${menuD.price}<p/>
        </div>
        `;
      });
      document.getElementById('Food-Items').innerHTML = html
    })

  }

