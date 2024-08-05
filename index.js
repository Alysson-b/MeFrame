  function toggleMode(){
  const body = document.body;
  const img = document.querySelector(".Profile-Home img")
  const h1 = document.querySelector(".description h1");
    
  body.classList.toggle("light");
      if(body.classList.contains('light')){
        h1.innerHTML = 'Me Segue Aí <span><i class="fa-regular fa-circle-check"></i></span>'
        img.setAttribute("src", "./assets/octocat-1721685940495.png")
  }else{
        h1.innerHTML = 'Alisson Sousa <span><i class="fas fa-check-circle"></i></span>';
        img.setAttribute("src", "./assets/WhatsApp Image 2024-07-14 at 12.39.29.jpeg")
  }
  }