

/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const titleElm = document.getElementById("title1");
titleElm.innerHTML = "Stranger Coding Things....... :) ";


// by class name
const paragraphsHtmlCollection = document.getElementsByClassName("paragraph");
const paragraphsArr = [...paragraphsHtmlCollection]; // convert html collection to an array
paragraphsArr.forEach( element => {
    element.innerHTML = "this is the new text........"
})


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");



// by css selectors....

const first = document.querySelector("section h2");
console.log(first)

const all = document.querySelectorAll("section h2");
console.log(all)


//
// context: document vs. element
//



const pikachuElm = document.getElementById("pikachu");
const allParagraphsInsidePikachu = pikachuElm.querySelectorAll(".paragraph");
allParagraphsInsidePikachu.forEach(elm => elm.innerHTML = "this is inside pikachu")



/**************/
/* Properties */
/**************/


pikachuElm.innerHTML = `
        <h1>pizza</h1>
        <p>this is some text</p>
    `;

pikachuElm.innerText = "pizza"


pikachuElm.style.color = "orange";
pikachuElm.style.backgroundColor = "#ffe432"; 
pikachuElm.style.border = "5px solid purple"; 


const firstH1 = document.querySelector("h1");
firstH1.id = "new-title"

firstH1.className = "highlighted"



/**************/
/* Attributes */
/**************/

const myLink = document.querySelector("#my-link");
//const href = myLink.getAttribute("href");
myLink.setAttribute("href", "https://ironhack.com"); // modify an attribute (it already exists)
myLink.setAttribute("target", "_blank"); // add new attribute (it doesnt exist)



/*********************/
/* Create a DOM node */
/* *******************/


/*  Create a an image dynamically */

const newImg = document.createElement("img");
newImg.setAttribute("src", "./images/pikachu.jpg");
pikachuElm.appendChild(newImg);



/*  Create a button dynamically */

// step1: create the element:
const newBtn = document.createElement('button');

// step2: add content or modify (ex. innerHTML...)
newBtn.innerText = "This button was added dynamically";
newBtn.classList.add("btn");
newBtn.id = "button-3";


//step3: append to the dom: `parentElm.appendChild()`
const container3 = document.getElementById("container-3");
container3.appendChild(newBtn)





/***********************/
/* Remove from the DOM */
/* *********************/


const bodyElm = document.querySelector("body");
bodyElm.removeChild(myLink);



/**********/
/* Events */
/**********/

// elm.addEventListener(type, listener)


/* Attach event to one element */

// const btnElm = document.getElementById("btn");
// btnElm.addEventListener("click", (event) => {
//     console.log("a click event was fired in our BUTTON")
// });



/* Attach event to multiple elements */

// const btnList = document.querySelectorAll(".btn");
// btnList.forEach((button) => {
//     button.addEventListener("click", () => {
//         console.log("a click event was fired in our BUTTON")
//     });
// });





// Event Bubbling

// const containerElm = document.getElementById("container");
// containerElm.addEventListener("click", () => {
//     console.log("a click event was fired in our CONTAINER")
// });


// Attach an event to elements created dynamically 
document.addEventListener("click", (event) => {
    console.log("a click event was fired in the DOCUMENT")
    console.log("the event was originally fired in the element with id..." + event.target.id);

    const priceElm = document.getElementById("price");
    const currentPrice = priceElm.value;

    console.log("current price....", currentPrice)
});

