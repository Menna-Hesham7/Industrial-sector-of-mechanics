//! start menu 
function check(){

    const checkbox = document.querySelector("#checkbox")
    const nav = document.querySelector("#nav")

    // nav.classList.toggle("none");
    console.log(nav)
    console.log(checkbox)

    if(checkbox.checked){
        nav.classList.add("flex")
        nav.classList.remove("none");;
    }else{
        nav.classList.add("none");
        nav.classList.remove("flex")
    }
}
//! end menu 




//! stert Header 
    function header(){
    let header = document.getElementById("min-header")
    header.innerHTML=`
    <div class="container">
    <div class="box">
        <h1 class="logo"><a href="#">Sectt<i class="fa-solid fa-gauge-high"></i>re</a></h1>
        <ul class="m123" id="nav">
            <li><a href="./index.html" class="actve">Home</a></li>
            <li><a href="./about.html" class="about">About</a></li>
            <li><a href="" class="plog" >Blog<i class="fa-solid fa-caret-up fa-rotate-180"></i></a>
                <ul>
                    <li><a  href="./blog-posts.html"  class="posts"  >Blog Posts</a></li>
                    <li><a href="./blog-single-post.html"  class="single"  >Blog Single Post</a></li>
                </ul>
            </li>
            <li><a href="" class="Pages" >Pages<i class="fa-solid fa-caret-up fa-rotate-180"></i></a>
                <ul>
                    <li><a href="./services.html" class="services">Services</a></li>
                    <li><a href="./error.html">404 Pade</a></li>
                    <li><a href="./email.html">Email Pade</a></li>
                </ul>
            </li>
            <li><a href="./contact.html"  class="contact" >Contact</a></li>
        </ul>
    
        <div class="buttons">
            <label class="hamburger" >
                <input type="checkbox" id="checkbox" onclick="check()">
                <svg viewBox="0 0 32 32">
                    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path class="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <a href="#" class="login">Log in</a>
            <a href="#" class="signup">Sign Up </a>
        </div>
    
    </div>
    </div>`
}
header()
//? stert scroll Header 
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window .scrollY > 100 );
    })       
//? End scroll Header 
//! End Header 



//! stert Footer 
function footer(){
    let footer = document.getElementById ("min-footer")
    footer.innerHTML = `
    <div class="container">
    <div class="box">

        <div class="text">
            <h5>About Us</h5>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus turpis sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam tesque et libero ut justo ultrices in.</p>
            <a href="">Contact Us</a>
        </div>

        <div class="liste">
            <h5>Quick Links</h5>
            <div class="listtt">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of use</li>
                    <li>Sales and Refunds</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>

        <div class="imgess">
            <h5>Social Media</h5>
            <div class="imgg">
                <ul>
                    <li><img src="images/factofy2-1.jpg" alt=""></li>
                    <li><img src="images/Factory1-2.jpg" alt=""></li>
                    <li><img src="images/fitting1-1.jpg" alt=""></li>
                </ul>
                <ul>
                    <li><img src="images/fitting3-2.jpg" alt=""></li>
                    <li><img src="images/quality2-2.jpg" alt=""></li>
                    <li><img src="images/quality3-1.jpg" alt=""></li>
                </ul>
            </div>
            <div class="links">
                <ul>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
        </div>

    </div>
</div>
    `
}
footer()
//! End Footer 


//! stert eighth 
function eighth(){
    let eighth = document.getElementById ("eighth")
    eighth.innerHTML = `
    <div class="box">
        <p>© 2023 Secttore. All rights reserved | Designed by <span>W3layouts</span></p>
        <div class="m">@Menna Hesham</div>
    </div>
    `
}
eighth()
//! End eighth 










