function toggleMode(){
    const html = document.body;
    const img = document.querySelector(".Profile-Home img")
  
      html.classList.toggle("light")
     if(html.classList.contains('light')){
      img.setAttribute("src", "./assets/octocat-1721685940495.png")
    }else{
      img.setAttribute("src", "./assets/WhatsApp Image 2024-07-14 at 12.39.29.jpeg")
     
    } 
   
  }