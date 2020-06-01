'use strict'

var pname = [
'bag.jpg',
 'banana.jpg',
 'bathroom.jpg',
 'boots.jpg',
 'breakfast.jpg',
 'bubblegum.jpg',
 'chair.jpg',
 'cthulhu.jpg',
 'dog-duck.jpg',
 'dragon.jpg',
 'pen.jpg',
 'pet-sweep.jpg',
 'scissors.jpg',
 'shark',
 'sweep.png',
 'usb.gif',
 'water-can.jpg',
 'wine-glass.jpg'];

 var ppath = [
  'bag.jpg',
   'banana.jpg',
   'bathroom.jpg',
   'boots.jpg',
   'breakfast.jpg',
   'bubblegum.jpg',
   'chair.jpg',
   'cthulhu.jpg',
   'dog-duck.jpg',
   'dragon.jpg',
   'pen.jpg',
   'pet-sweep.jpg',
   'scissors.jpg',
   'shark',
   'sweep.png',
   'usb.gif',
   'water-can.jpg',
   'wine-glass.jpg'];

   items.all = [];  

   var kliks = 0;
   var kliklim = 25;
// calling id
   var leftImage = document.getElementById('leftImage');
   var rightImage = document.getElementById('rightImage');
   var midImage = document.getElementById('midImage');
   //this will be the constructor
   
   function item(iname, ipath, idetail){
     this.iname = iname;
     this.ipath = ipath;
     this.idetail = idetail;
     this.iviews = 0;
     this.ikliks = 0;
     items.push(this);
     
   }
// creating news
for (var j = 0; j < pname.length; j++) {
 new item (pname[i])
  
}

imagesSection.addEventListener('click',klikcount);

function klikcount (event) {
 
  if(kliks < kliklim) {
    
    if(event.target.id !== 'imagesSection') {
      kliks++;
      if(event.target.id === 'leftImage') {
        leftGoat.kliks++;
      }
      if(event.target.id === 'rightImage') {
        rightGoat.kliks++;
      }
      renderImages();
    } 
  } else {
    renderResults();
  }
}

function renderResults () {
  var ulE1 = document.getElementById('finalResult');
  for( var i =0; i<items.all.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${items.all[i].goatName} has ${items.all[i].kliks}`;
    ulE1.append(li);
  }
}


 function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}