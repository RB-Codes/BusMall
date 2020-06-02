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
  'assets/bag.jpg',
   'assets/banana.jpg',
   'assets/bathroom.jpg',
   'assets/boots.jpg',
   'assets/breakfast.jpg',
   'assets/bubblegum.jpg',
   'assets/chair.jpg',
   'assets/cthulhu.jpg',
   'assets/dog-duck.jpg',
   'assets/dragon.jpg',
   'assets/pen.jpg',
   'assets/pet-sweep.jpg',
   'assets/scissors.jpg',
   'assets/shark.jpg',
   'assets/sweep.png',
   'assets/usb.gif',
   'assets/water-can.jpg',
   'assets/wine-glass.jpg'];

   Item.all = [];  

   var kliks = 0;
   var kliklim = 25;
   var ikliks = [];
   var iviews = [];
   // calling id
   var leftImage = document.getElementById('leftImage');
   var rightImage = document.getElementById('rightImage');
   var midImage = document.getElementById('midImage');
   //this will be the constructor
   
   function Item(iname, ipath, idetail){
     this.iname = iname;
     this.ipath = ipath;
     this.idetail = idetail;
     this.iviews = 0;
     this.ikliks = 0;
     Item.all.push(this);
    }
    // creating news
    for (var i = 0; i < pname.length; i++) {
      new Item(pname[i],ppath[i])
    }
    // Making Variables
    var leftImage5, midImage5, rightImage5;
    // Render Function 
    function renderImages () {
    // NO REPETITION
    do{
      var cas1 =randomNumber(0,Item.all.length-1);
      var cas2 =randomNumber(0,Item.all.length-1);
      var cas3 =randomNumber(0,Item.all.length-1);
    } while (cas1 === cas2 || cas2 === cas3 || cas1 === cas3);
    // Giving items names
    leftImage5 = Item.all[cas1];
    midImage5 = Item.all[cas2];
    rightImage5 = Item.all[cas3];
    // \\\\\\\\\\\\\\
    leftImage.src = leftImage5.ipath;
    leftImage.alt = leftImage5.iname;
    leftImage.title =leftImage5.iname;
    // \\\\\\\\\\\\\\\\\\
    midImage.src = midImage5.ipath;
    midImage.alt = midImage5.iname;
    midImage.title = midImage5.iname;
    // \\\\\\\\\\\\\\\\
    rightImage.src = rightImage5.ipath;
    rightImage.alt = rightImage5.iname;
    rightImage.title =rightImage5.iname;
// console.log(leftImage);
// console.log(midImage);
  }
  renderImages();
  

    function renderResults () {
      var ulE1 = document.getElementById('resulty');
      for( var i =0; i<items.all.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${Items.all[i].goatName} has ${Items.all[i].kliks}`;
        ulE1.append(li);
      }
    }
// Event Listener 
// \\\\\\\\\\\\\\\\\\

imagesSection.addEventListener('click',klikcount);
function klikcount (event) {

  if(kliks < kliklim) {
    
    if(event.target.id !== 'imagesSection') {
      kliks++;
      if(event.target.id === 'leftImage') {
        leftImage5.ikliks++;

      }
      if(event.target.id === 'rightImage') {
        rightImage5.ikliks++;
      }
      if(event.target.id === 'midImage') {
        midImage5.ikliks++;
      }
      renderImages();
    } 
  } else {
    renderResults();
    // console.log(kliks)
  }
}

function renderResults (){
  var ulE1 = document.getElementById('resulty');
  for (var i = 0; i < Item.all.length; i++) {
   var li = document.createElement('li');
   ulE1.appendChild(li)
   li.textContent = `${Item.all[i].iname} has ${Item.all[i].ikliks}`
  //  console.log(li)
  }
}
// Math dude
 function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}