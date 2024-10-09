

const container = document.querySelector("#container");
const colorPallete = document.querySelector("#colorPallete");
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        console.log(button.id);
        switch(button.id){
            case ("8x8"):
                grid8x8();
                break;
            case ("12x12"):
                grid12x12();
                break;
            case ("30x30"):
                grid30x30();
                break;
            case ("50x50"):
                grid50x50();
                break;
            case ("reset"):
                resetf();
                break;
            case ("grid"):
                toggleGrid();
                break;
            default :
                break;
        }
    });
});
const colors = [
    // Warm Colors
    "red",      // Bright red
    "orange",   // Bright orange
    "yellow",   // Bright yellow
    "gold",     // Gold
    "coral",    // Coral
    "salmon",   // Salmon
    "pink",     // Pink
    "brown",    // Brown

    // Cool Colors
    "green",    // Bright green
    "lime",     // Lime green
    "cyan",     // Cyan
    "blue",     // Bright blue
    "teal",     // Teal
    "navy",     // Navy blue
    "indigo",   // Indigo
    "violet",   // Violet
    "purple",   // Purple
    "magenta",   // Magenta

    // Neutrals
    "white",    // White
    "gray",     // Gray
    "black",    // Black
    "silver",    // Silver
    "olive",     // Olive
    "lavender",  // Lavender

    // Additional Colors
    "peach",    // Peach
    "mint",     // Mint green
    "khaki",    // Khaki
    "maroon",    // Maroon
    "turquoise", // Turquoise
    "charcoal",  // Charcoal gray
    "periwinkle", // Periwinkle
    "fuchsia",   // Fuchsia
    "chartreuse", // Chartreuse
    "plum",      // Plum
    "beige",     // Beige
    "aquamarine" // Aquamarine
];

const colorNames = {
    // Warm Colors
    red: "rgb(255, 0, 0)",        // Bright red
    orange: "rgb(255, 165, 0)",   // Bright orange
    yellow: "rgb(255, 255, 0)",   // Bright yellow
    gold: "rgb(255, 215, 0)",      // Gold
    coral: "rgb(255, 127, 80)",    // Coral
    salmon: "rgb(250, 128, 114)",  // Salmon
    pink: "rgb(255, 192, 203)",    // Pink
    brown: "rgb(165, 42, 42)",     // Brown

    // Cool Colors
    green: "rgb(0, 128, 0)",       // Bright green
    lime: "rgb(50, 205, 50)",      // Lime green
    cyan: "rgb(0, 255, 255)",      // Cyan
    blue: "rgb(0, 0, 255)",        // Bright blue
    teal: "rgb(0, 128, 128)",      // Teal
    navy: "rgb(0, 0, 128)",        // Navy blue
    indigo: "rgb(75, 0, 130)",     // Indigo
    violet: "rgb(238, 130, 238)",  // Violet
    purple: "rgb(128, 0, 128)",    // Purple
    magenta: "rgb(255, 0, 255)",   // Magenta

    // Neutrals
    white: "rgb(255, 255, 255)",   // White
    gray: "rgb(128, 128, 128)",     // Gray
    black: "rgb(0, 0, 0)",           // Black
    silver: "rgb(192, 192, 192)",    // Silver
    olive: "rgb(128, 128, 0)",       // Olive
    lavender: "rgb(230, 230, 250)",  // Lavender

    // Additional Colors
    peach: "rgb(255, 218, 185)",    // Peach
    mint: "rgb(189, 252, 201)",     // Mint green
    khaki: "rgb(240, 230, 140)",    // Khaki
    maroon: "rgb(128, 0, 0)",        // Maroon
    turquoise: "rgb(64, 224, 208)",  // Turquoise
    charcoal: "rgb(54, 69, 79)",     // Charcoal gray
    periwinkle: "rgb(204, 204, 255)", // Periwinkle
    fuchsia: "rgb(255, 0, 255)",      // Fuchsia
    chartreuse: "rgb(127, 255, 0)",   // Chartreuse
    plum: "rgb(221, 160, 221)",      // Plum
    beige: "rgb(245, 222, 179)",     // Beige
    aquamarine: "rgb(127, 255, 212)" // Aquamarine
};
    
//To iteterate throughs Colors Array
let k=0;
let currentColor = "white";
let setColor = "";
let height = "50px";
let width = "50px";
let total = 144;
draw(height,width,total);

// functions
function grid8x8(){
    height = "75px";
    width = "75px";
    total = 64;
    deleteGrid();
    draw(height,width,total);
    console.log("8x8 drawn");

};
function grid12x12(){
    height = "50px";
    width = "50px";
    total = 144;
    deleteGrid();
    draw(height,width,total);
};
function grid30x30(){
    height = "30px";
    width = "30px";
    total = 400;
    deleteGrid();
    draw(height,width,total);
};
function grid50x50(){
    height = "12px";
    width = "12px";
    total = 2500;
    deleteGrid();
    draw(height,width,total);
};
let toggle = 0;
function toggleGrid(){
    const divs = container.querySelectorAll(".divs"); 
    if(toggle===0){
        divs.forEach(div => {
            div.style.outlineStyle = "none";
        });
        toggle = 1;
    }else{
        divs.forEach(div => {
            div.style.outlineStyle = "solid";
        });
        toggle = 0;
    }

    console.log("Toggle Grid Called!")
};
function resetf(){
    const divs = container.querySelectorAll(".divs"); 
    divs.forEach(div => {
        div.style.backgroundColor = "white";
        div.dataset.setColor = "white";
    });
    console.log("resetcalled")
};

function draw(height,width,total){
    for (let i=0;i<total;i++){
        const div = document.createElement("div");
        div.style.width=width;
        div.style.height=height;
        div.classList.add("divs");
        div.addEventListener("click", () => {
            div.style.backgroundColor = currentColor; // Change color on hover
            div.dataset.setColor = currentColor;
        });   
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = currentColor; // Change color on hover
        });

        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = div.dataset.setColor || "white"; // Reset color on mouse out
        }) 
        container.appendChild(div);     
    }
};
function deleteGrid(){
    console.log("delete called");
    while (container.firstChild) {
        container.removeChild(container.firstChild); 
    }
};
for (let j=0;j<36;j++){
    const colorsDiv = document.createElement("div");
    colorsDiv.classList.add("colors");
    colorsDiv.style.backgroundColor = (colors[k]);   
    colorsDiv.addEventListener("click", () => {
        currentColor = getComputedStyle(colorsDiv).backgroundColor;
        const colorName = colorNames[currentColor] || "Unknown Color";
        console.log(colorName);
    });
    k++;
    colorPallete.appendChild(colorsDiv);     
}

