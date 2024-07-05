// 1: The logo text of the site has the wrong color
const logoText = document.querySelector(".logo-text");
logoText.style.color = "#384241";
//console.log(logoText.style.color);

// 2: The alignment of the elements inside the header element are wrong
const header = document.querySelector("header");
header.style.justifyContent = "normal";
//console.log(header.style.justifyContent);

// 3: The header has a border at the bottom, but it has the wrong color
header.style.borderBottomColor = "#d3d3d3";
//console.log(header.style.borderBottomColor);

// 4: The recipe name is wrong
const nameOfRecipie = document.querySelector("#recipe-name");
nameOfRecipie.innerText = "Frozen Cheescake";
//console.log(nameOfRecipie);

// 5: The clock icon beneath the recipe name has disappeared
const iconSpan = document.querySelector(".time-container");
iconSpan.children[0].className = "material-icons";
//console.log(iconSpan.children[0].className);

// 6: The estimated time of the recipe is also incorrect
iconSpan.children[1].innerText = "60+ min";
//console.log(iconSpan.children[1].innerText);

// 7: The src path to the image is wrong
const image = document.querySelector("img");
//console.log(image);
image.src = "assets/frozen-cheesecake-slice.jpg"

// 8: The background color of the ingredients list container is wrong
const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";
//console.log(ingredientsContainer);

// 9, 10 & 11: The ingredients have errors
ingredientsContainer.children[2].innerHTML = "<li>15st digistivetex</li> <li>Lite smör</li>";
//console.log(ingredientsContainer.children[2]);
ingredientsContainer.children[4].children[2].innerText = "3tsk vaniljsocker";
//console.log(ingredientsContainer.children[4].children);
const listItem = document.createElement("li");
listItem.innerText = "400g naturell philadelphiaost";
//console.log(listItem);
ingredientsContainer.children[4].appendChild(listItem);

// 12: Remove the shadow
const instructionsContainer = document.querySelector(".instructions-container");
instructionsContainer.children[0].className = "instructions";
//console.log(instructionsContainer.children[0].className);

// 13: Two list elements of the list of instructions are incorrect
//console.log(instructionsContainer.children[1].children);
instructionsContainer.children[1].children[1].innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionsContainer.children[1].children[8].innerText = "Ställ in i frysen över natten.";