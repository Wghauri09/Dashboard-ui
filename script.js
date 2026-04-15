
//------------------- For toogle menu action 

// first make a variable and then from which call the aside
const sideMenu = document.querySelector("aside")
// first make a variable and then from which call the menubar

const menuBtn = document.querySelector("#menu-bar")
const closeBtn = document.querySelector("#close_btn")

const themeToggler =document.querySelector(".theme-toggler")

// add event listner for open the sidebar using menu
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})
// add event listner for open the sidebar close menu
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})


//--------------- For toogle menu action  ends

//--------------- for night and day mode changes

themeToggler.addEventListener('click',()=>{
    // for theme 
    document.body.classList.toggle('dark-theme-variables')
    
    // for theme ends 
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})