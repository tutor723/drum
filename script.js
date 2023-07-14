//let boom = document.getElementById("myAudio");


    function myFunction() {
        boom.play();
      }

      let boom = document.getElementById("myAudio");
const image1 = document.getElementById("image1")

function myFunction() {
    setTimeout(() => {
        boom.play()
        }, 5)
    
   
}

    document.addEventListener('keydown', function(e) {
  if(e.keyCode == 66){
    boom1.play();
    image1.classList.add("shake1");
    setTimeout(() => {
            image1.classList.remove('shake1')
        }, 5)
       
    
  }
  
  else if(e.keyCode == 65){
    boom2.play();
    image2.classList.add("grow");
    setTimeout(() => {
            image2.classList.remove('grow')
        },5)
      
        
  }

  else if(e.keyCode == 80){
    boom3.play();
    image3.classList.add("shake1");
    setTimeout(() => {
            image3.classList.remove('shake1')
        }, 10)
       
    
  }
  else if(e.keyCode == 81){
    boom4.play();
    image1.classList.add("shake1");
    setTimeout(() => {
            image1.classList.remove('shake1')
        }, 10)
        
  }
  else if(e.keyCode == 82){
    boom5.play();
    image3.classList.add("grow");
    setTimeout(() => {
            image3.classList.remove('grow')
        },10)
      
  }
  else if(e.keyCode == 83){
    boom6.play();
    image4.classList.add("grow");
    setTimeout(() => {
            image4.classList.remove('grow')
        },10)
        
  }
  else if(e.keyCode == 84){
    boom7.play();
    image1.classList.add("grow");
    setTimeout(() => {
            image1.classList.remove('grow')
        },10)
       
  }
  else if(e.keyCode == 75){
    boom8.play();
    image4.classList.add("grow");
    setTimeout(() => {
            image4.classList.remove('grow')
        },10)
  }
  else if(e.keyCode == 76){
    boom5.play();
    image1.classList.add("grow");
    setTimeout(() => {
            image1.classList.remove('grow')
        },10)
  }
  else {
    boom8.play();
  }
 

























});
  