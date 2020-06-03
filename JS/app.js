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
  'tauntaun.jpg',
  'unicorn.jpg',
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
  'assets/tauntaun.jpg',
  'assets/unicorn.jpg',
  'assets/usb.gif',
  'assets/water-can.jpg',
  'assets/wine-glass.jpg'];

Item.all = [];

var kliks = 0;
var kliklim = 25;
var ikliks = [];
var iviews = 0;
// calling id
var leftImage = document.getElementById('leftImage');
var rightImage = document.getElementById('rightImage');
var midImage = document.getElementById('midImage');
//this will be the constructor

function Item(iname, ipath, idetail) {
  this.iname = iname;
  this.ipath = ipath;
  this.idetail = idetail;
  this.iviews = 0;
  this.ikliks = 0;
  Item.all.push(this);
}
// creating news
for (var i = 0; i < pname.length; i++) {
  new Item(pname[i], ppath[i])
}
// Making Variables
var leftImage5, midImage5, rightImage5;
// Render Function 
function renderImages() {
  // NO REPETITION
  do {
    var cas1 = randomNumber(0, Item.all.length - 1);
    var cas2 = randomNumber(0, Item.all.length - 1);
    var cas3 = randomNumber(0, Item.all.length - 1);
  } while (cas1 === cas2 || cas2 === cas3 || cas1 === cas3);
  // Giving items names
  leftImage5 = Item.all[cas1];
  midImage5 = Item.all[cas2];
  rightImage5 = Item.all[cas3];
  // \\\\\\\\\\\\\\
  leftImage.src = leftImage5.ipath;
  leftImage.alt = leftImage5.iname;
  leftImage.title = leftImage5.iname;
  leftImage5.iviews++;
  // \\\\\\\\\\\\\\\\\\
  midImage.src = midImage5.ipath;
  midImage.alt = midImage5.iname;
  midImage.title = midImage5.iname;
  midImage5.iviews++;
  // \\\\\\\\\\\\\\\\
  rightImage.src = rightImage5.ipath;
  rightImage.alt = rightImage5.iname;
  rightImage.title = rightImage5.iname;
  rightImage5.iviews++;
}
renderImages();


function renderResults() {
  var ulE1 = document.getElementById('resulty');
  for (var i = 0; i < items.all.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${Items.all[i].iname} has ${Items.all[i].kliks}`;
    ulE1.append(li);
  }
}
// Event Listener 
// \\\\\\\\\\\\\\\\\\

imagesSection.addEventListener('click', klikcount);
function klikcount(event) {

  if (kliks < kliklim) {

    if (event.target.id !== 'imagesSection') {
      kliks++;
      if (event.target.id === 'leftImage') {
        leftImage5.ikliks++;

      }
      if (event.target.id === 'rightImage') {
        rightImage5.ikliks++;
      }
      if (event.target.id === 'midImage') {
        midImage5.ikliks++;
      }
      renderImages();
    }
  } else if (kliks == 25) {
    kliks++
    ZaChartFun();
    renderResults();
  }
}

function renderResults() {
  var ulE1 = document.getElementById('resulty');
  for (var i = 0; i < Item.all.length; i++) {
    var li = document.createElement('li');
    ulE1.appendChild(li)
    li.textContent = `${Item.all[i].iname} has ${Item.all[i].ikliks}`
  }
}


function ZaChartFun() {
  console.log(Item.all)
  // Vote array for chart
  var voteForPics = [];
  var viewForPics = [];
  // For sentence
  for (var i = 0; i < Item.all.length; i++) {
    voteForPics.push(Item.all[i].ikliks);
    viewForPics.push(Item.all[i].iviews);
  }
  // Chart Data
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: pname,
      datasets: [{
        label: '# of Votes',
        data: voteForPics,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      },

      {
        label: '# of Views',
        data: viewForPics,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 5
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}



// Math dude
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  Stoaa da Noombaz

function storeMyResulty() {
  var viewResultyPreziss = JSON.stringify(viewForPics);
  var voteResultyPreziss = JSON.stringify(voteForPics);
  localStorage.setItem('Za Views', viewResultyPreziss);
  localStorage.setItem('Za Votes', voteResultyPreziss);
}

// Get Ma Reulties 

function getMyResulty() {
  var viewResultyPreziss = localStorage.getItem('Za Views')
  var voteResultyPreziss = localStorage.getItem('Za Votes')
  if (viewResultyPreziss, voteResultyPreziss) {
    Item.all = JSON.parse(viewResultyPreziss, voteResultyPreziss);
    renderResults();
  }
}
// Event stopping zi Default
// function klikcount(event) {
//   event.preventDefault();
// }

