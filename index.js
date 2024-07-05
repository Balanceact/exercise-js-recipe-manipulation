// 1: Name of Recipie
const nameOfRecipie = document.querySelector("#recipe-name").innerText;
console.log(nameOfRecipie);

// 2: Element holding nameOfRecipie
const nameOfRecipieElement = document.querySelector("#recipe-name");
console.log(nameOfRecipieElement);

// 3: Font size of element with class description
const description = document.querySelector(".description");
const fontSizeOfDescription = window.getComputedStyle(description).fontSize;
console.log(fontSizeOfDescription);

// 4: Value of the alt atrribute on the image
const image = document.querySelector("img");
const altAttributeOnImage = image.attributes.alt.value;
console.log(altAttributeOnImage);

// 5: Dimensions and the url of the image
const imageAttributes = {};
imageAttributes.url = image.attributes.src.value;
imageAttributes.height = image.clientHeight;
imageAttributes.width = image.clientWidth;
console.log(imageAttributes);

// 6: How many ingredients does the paste have
const paste = document.querySelector(".ingredients-list-paste");
console.log(paste.children.length);

// 7: The forth element in the list containing the ingredients for the paste
console.log(paste.children[3]);

// 8: Instructions -> Array of objects
const instructions = document.querySelector(".instructions-list");
console.log(instructions.children);
let instructionsSaved = [];
for (let index = 0; index < instructions.children.length; index++) {
    const element = {order: index + 1, text: instructions.children[index].innerText}
    instructionsSaved[index] = element;
}
console.log(instructionsSaved);