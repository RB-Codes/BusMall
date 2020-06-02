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
   'assets/shark',
   'assets/sweep.png',
   'assets/usb.gif',
   'assets/water-can.jpg',
   'assets/wine-glass.jpg'];

   Item.all = [];  

   var kliks = 0;
   var kliklim = 25;
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
    // console.log(Item.all)


    // Making Variables

    var leftImage, midImage, rightImage;
    // Render Function 

    function renderImages () {

    leftImage = Item.all[randomNumber(0,Item.all.length-1)];
    midImage = Item.all[randomNumber(0,Item.all.length-1)];
    rightImage = Item.all[randomNumber(0,Item.all.length-1)];
    
    
    // NO REPETITION


    do{
      var cas1 =randomNumber(0,Item.all.length-1);
      var cas2 =randomNumber(0,Item.all.length-1);
      var cas3 =randomNumber(0,Item.all.length-1);
    } while (cas1 === cas2 || cas2 === cas3 || cas1 === cas3);

    leftImage = Item.all[cas1];
    midImage = Item.all[cas2];
    rightImage = Item.all[cas3];
    // var rePeated = true;
    // while(rePeated) {
    //   if (leftImage == midImage) {
    //     leftImage = Item.all[randomNumber(0,Item.all.length-1)];
    //     midImage = Item.all[randomNumber(0,Item.all.length-1)];
    //   } 
    //   else if (midImage == rightImage) {
    //     midImage = Item.all[randomNumber(0,Item.all.length-1)];
    //     rightImage = Item.all[randomNumber(0,Item.all.length-1)];
    //   }
    //   else if (leftImage == rightImage) {
    //     leftImage = Item.all[randomNumber(0,Item.all.length-1)];
    //     rightImage = Item.all[randomNumber(0,Item.all.length-1)];
    //   }
    //   else {
    //     rePeated = false;
    //   }
    // }

    leftImage.src = leftImage.ipath;
    leftImage.alt = leftImage.iname;
    leftImage.title =leftImage.iname;

    midImage.src = midImage.ipath;
    midImage.alt = midImage.iname;
    midImage.title = midImage.iname;

    rightImage.src = rightImage.ipath;
    rightImage.alt = rightImage.iname;
    rightImage.title =rightImage.iname;

  }
  renderImages();
  

    function renderResults () {
      var ulE1 = document.getElementById('finalResult');
      for( var i =0; i<items.all.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${items.all[i].goatName} has ${items.all[i].kliks}`;
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
        leftImage.kliks++;
      }
      if(event.target.id === 'rightImage') {
        rightImage.kliks++;
      }
      if(event.target.id === 'midImage') {
        midImage.kliks++;
      }
      renderImages();
    } 
  } else {
    renderResults();
  }
}

function renderResults (){
  var ulE1 = document.getElementById('resulty');
  for (var i = 0; i < Item.all.length; i++) {
   var li = document.createElement('li');
   li.textContent = `${Item.all[i].iname} has ${item.all[i].kliks}`
  }
}
// Math dude
 function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}