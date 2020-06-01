var names = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
  ];
  
  var klikin = 0;
  
 
  var leftImage = document.getElementById('leftImage');
  var rightImage = document.querySelector('#rightImage');
  var imagesSection = document.querySelector('#imagesSection');
  
  
  function Bus(name) {
    this.busName = name;
    this.imagePath = `assets/${name}.jpg`;
    this.clicks = 0;
    
    Bus.all.push(this);
  }
  Bus.all = [];
  
  
  for (var i = 0; i < names.length; i++) {
    new Bus(names[i]);
  }
  console.log(Bus.all);
  
  var leftBus, rightBus;
  
  function renderImages() {
    
     leftBus = Bus.all[randomNumber(0,Bus.all.length-1)];
     rightBus = Bus.all[randomNumber(0,Bus.all.length-1)];
    
    leftImage.src = leftBus.imagePath;
    leftImage.alt = leftBus.busName;
    leftImage.title = leftBus.busName;
    rightImage.src = rightBus.imagePath;
    rightImage.alt = rightBus.busName;
    rightImage.title = rightBus.busName;
  }
  renderImages();
  
  
  imagesSection.addEventListener('click',handleClick);
  
  function handleClick (event) {
   
    if(klikin < 5) {
      
      if(event.target.id !== 'imagesSection') {
        klikin++;
        if(event.target.id === 'leftImage') {
          leftBus.clicks++;
        }
        if(event.target.id === 'rightImage') {
          rightBus.clicks++;
        }
        renderImages();
      } 
    } else {
      renderResults();
    }
  }
  
  function renderResults () {
    var ulE1 = document.getElementById('finalResult');
    for( var i =0; i<Bus.all.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${Bus.all[i].busName} has ${Bus.all[i].clicks}`;
      ulE1.append(li);
    }
  }
  
  
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  