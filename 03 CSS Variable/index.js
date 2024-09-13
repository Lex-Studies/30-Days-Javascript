// Getting and setting a CSS property(or variable)
// let imgBlur = document.querySelector(":root"); // Getting whole DOM
// let getBlur = getComputedStyle(imgBlur); // Getting all the style
// console.log(getBlur.getPropertyValue("--blur")); // Displaying the style
// imgBlur.style.setProperty("--blur", "0px") // Setting a property

// Getting the hold of all the input values
let getBlurValue = document.querySelector("#blur");
let getSpaceValue = document.querySelector("#spacing");
let getColorValue = document.querySelector("#base");
let cssStyles = document.querySelector(":root");


//The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action (such as typing in a textbox or checking a checkbox). 
document.addEventListener("input", function (event) {
    cssStyles.style.setProperty("--spacing", `${getSpaceValue.value}px`);
    cssStyles.style.setProperty("--blur", `${getBlurValue.value}px`);
    cssStyles.style.setProperty("--base-color", `${getColorValue.value}`);
})