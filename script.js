function zoom(imgLink) {
    document.getElementById("fullscreen").src = imgLink;
    document.getElementById("full-screen-view").style.display = "block";

    document.body.classList.add("hide");
     document.getElementsByClassName("none2").style.display = "none";
}

function closeZoom() {
    document.getElementById("full-screen-view").style.display = "none";

    document.body.classList.remove("hide");
    document.getElementsByClassName("none2").style.display = "block";
}

const target = document.getElementById("target");
target.addEventListener("click", () => {
    /*console.log("its clicked")*/
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/person-holding-a-slice-of-pizza-4109111/" class="demo1" target="blank" rel="external nofollow">Image created by Polina Tankilevitch - Pexels</a>` ;
})

const target1 = document.getElementById("target1");
target1.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/overhead-shot-of-anchovies-on-pieces-of-bread-5602610/" class="demo1" target="blank" rel="external nofollow">Image created by Leeloo The First - Pexels</a>` ;
})

const target2 = document.getElementById("target2");
target2.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/truffles-on-pizza-20117232/" class="demo1" target="blank" rel="external nofollow">Image created by Yusuf Kaya - Pexels</a>` ;
})

const target3 = document.getElementById("target3");
target3.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/salad-with-roast-peach-on-plate-24018365/" class="demo1" target="blank" rel="external nofollow">Image created by Vanessa Pozos - Pexels</a>` ;
})

const target4 = document.getElementById("target4");
target4.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/glass-of-fresh-cocktail-on-white-background-4021995/" class="demo1" target="blank" rel="external nofollow">Image created by Karolina Kaboompics - Pexels</a>` ;
})

const target5 = document.getElementById("target5");
target5.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/tasty-pie-slice-and-baked-pear-on-black-plate-6210838/" class="demo1" target="blank" rel="external nofollow">Image created by Tim Douglas - Pexels</a>` ;
})

const target6 = document.getElementById("target6");
target6.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/pizzas-and-silverware-19968430/" class="demo1" target="blank" rel="external nofollow">Image created by Rene Strgar - Pexels</a>` ;
})

const target7 = document.getElementById("target7");
target7.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/pizza-served-in-a-restaurant-20844860/" class="demo1" target="blank" rel="external nofollow">Image created by Nadin Sh - Pexels</a>` ;
})

const target8 = document.getElementById("target8");
target8.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/blue-juice-with-mint-herb-3186752/" class="demo1" target="blank" rel="external nofollow">Image created by Nerfee Mirandilla - Pexels</a>` ;
})

const target9 = document.getElementById("target9");
target9.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/woman-hand-holding-pizza-slice-19533168/" class="demo1" target="blank" rel="external nofollow">Image created by Giona Mason - Pexels</a>` ;
})

const target10 = document.getElementById("target10");
target10.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/baked-pepperoni-pizza-cut-in-triangular-portions-10875220/" class="demo1" target="blank" rel="external nofollow">Image created by Valeria Boltneva - Pexels</a>` ;
})

const target11 = document.getElementById("target11");
target11.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/fruit-alcoholic-cocktail-in-glass-12419161/" class="demo1" target="blank" rel="external nofollow">Image created by Denys Gromov - Pexels</a>` ;
})

const target12 = document.getElementById("target12");
target12.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href="https://www.pexels.com/photo/classic-pizza-baked-and-cut-in-triangular-servings-10875297/" class="demo1" target="blank" rel="external nofollow">Image created by Valeria Boltneva - Pexels</a>` ;
})

const target13 = document.getElementById("target13");
target13.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = `<a href=https://www.pexels.com/photo/salad-on-plate-17478678/" class="demo1" target="blank" rel="external nofollow">Image created by Nadin Sh - Pexels</a>` ;
})
