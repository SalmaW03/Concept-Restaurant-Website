class myHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <header>
            <h1 class="title">
                <a href="index.html" class="head">CROÛTE</a>
            </h1>
        </header>
        `
    }
}

customElements.define('my-header', myHeader)

class myFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer id="hours">
            <div>
                <h2 class="title2">
                    <a href="index.html" class="head">CROÛTE</a>
                </h2>
                <p class="copyright">All Rights Reserved to Croûte 2024</p>

                <div class="cover">
                <h5>LOCAL ARTISAN PIZZA MADE TO ORDER</h5>
                <div class="area1">
                    <span class="area2">City, Dubai</span>
                    <span class="area2">0000000000</span>
                </div>
                <div class="area1">
                    <span class="area2">City, Sharjah</span>
                    <span class="area2">0000000000</span>
                </div>
                    <p class="time">Open everyday from 10 am to 10 pm</p>
                </div>

                <img class="svg" src="images/instagram-socials-social-media-icon-svgrepo-com.svg">
            </div>
        </footer>
    `
    }
};

customElements.define('my-footer', myFooter);


class myNav extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="none">
            <div id="customID" class="cta">
            <h1>
                <a href="index.html" class="logo">CROÛTE</a>
            </h1>
                <nav>
                    <ul class="nav1">   
                        <li class="nav2">
                            <a href="menu.html" class="cta-1">MENU</a>
                        </li>
                        <li class="nav2">
                            <a href="order.html" class="cta-1">ORDER</a>
                        </li>
                        <li class="nav2">
                            <a href="#hours" class="cta-1">HOURS & LOCATION</a>
                        </li>
                        <li class="nav2">
                            <a href="gallery.html" class="cta-1">GALLERY</a>
                        </li>
                        <li class="nav2">
                            <a href="#" class="cta-1">OUR STORY</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


        <div class="none2 nonee">
        <div id="customID2" class="cta">
            <h1>
                <a href="index.html" class="logo2">CROÛTE</a>
            </h1>
            <div id="hamburger-icon">
            <input type="checkbox" id="menu-button">
            <label for="menu-button">
            <nav>
            <div class="ham-menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            </nav>
            </label>
            <div class="menu-1">
                <ul class="mobile-menu ul-1">
                    <li class="li-1">
                        <a href="index.html" class="mobile">Home</a>
                    </li>
                    <li class="li-1">
                        <a href="menu.html" class="mobile">Menu</a>
                    </li>
                    <li class="li-1">
                        <a href="order.html" class="mobile">Order</a>
                    </li>
                    <li class="li-1">
                        <a href="#hours" class="mobile">Hours & Location</a>
                    </li>
                    <li class="li-1">
                        <a href="gallery.html" class="mobile">Gallery</a>
                    </li>
                    <li class="li-1">
                        <a href="#" class="mobile">Our Story</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        `
    }
}

customElements.define('my-nav', myNav)

const body = document.body;
let lastScroll = 0;

window.addEventListener ("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scrollUp")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scrollDown")) {
        body.classList.remove('scrollUp')
        body.classList.add("scrollDown")
    }

    if (currentScroll < lastScroll && body.classList.contains("scrollDown")) {
        body.classList.remove('scrollDown')
        body.classList.add("scrollUp")
    }

    if (lastScroll = 0) {
        body.classList.remove("scrollUp")
    }

    lastScroll = currentScroll;

})

myID = document.getElementById("customID");

let myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 10) {
        myID.className = "cta show"
    } else {
        myID.className = "cta hide-1"
    }
};

window.addEventListener("scroll", myScrollFunc);


myID2 = document.getElementById("customID2");

let myScrollFuncc = function() {
    var y = window.scrollY;
    if (y >= 10) {
        myID2.className = "cta show"
    } else {
        myID2.className = "cta hide-1"
    }
};

window.addEventListener("scroll", myScrollFuncc);

const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");

    document.body.classList.toggle("hide1");
})
