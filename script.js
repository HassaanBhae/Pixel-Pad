

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
            case ("60x60"):
                grid60x60();
                break;
            case ("reset"):
                resetf();
                break;
            case ("grid"):
                toggleGrid();
                break;
            case ("download"):
                download();
                break;
            default :
                break;
        }
    });
});
const colors = [
    // Warm Colors
    "red", "orange", "yellow", "gold", "coral", "salmon", "pink", "brown",
    // Cool Colors
    "green", "lime", "cyan", "blue", "teal", "navy", "indigo", "violet", "purple", "magenta",
    // Neutrals
    "white", "gray", "black", "silver", "olive", "lavender",
    // Additional Colors
    "peach", "mint", "khaki", "maroon", "turquoise", "charcoal", "periwinkle", "fuchsia", "chartreuse", "plum", "beige", "aquamarine"
];

const colorNames = {
    "red": "rgb(255, 0, 0)",
    "orange": "rgb(255, 165, 0)",
    "yellow": "rgb(255, 255, 0)",
    "gold": "rgb(255, 215, 0)",
    "coral": "rgb(255, 127, 80)",
    "salmon": "rgb(250, 128, 114)",
    "pink": "rgb(255, 192, 203)",
    "brown": "rgb(165, 42, 42)",
    "green": "rgb(0, 128, 0)",
    "lime": "rgb(50, 205, 50)",
    "cyan": "rgb(0, 255, 255)",
    "blue": "rgb(0, 0, 255)",
    "teal": "rgb(0, 128, 128)",
    "navy": "rgb(0, 0, 128)",
    "indigo": "rgb(75, 0, 130)",
    "violet": "rgb(238, 130, 238)",
    "purple": "rgb(128, 0, 128)",
    "magenta": "rgb(255, 0, 255)",
    "white": "rgb(255, 255, 255)",
    "gray": "rgb(128, 128, 128)",
    "black": "rgb(0, 0, 0)",
    "silver": "rgb(192, 192, 192)",
    "olive": "rgb(128, 128, 0)",
    "lavender": "rgb(230, 230, 250)",
    "peach": "rgb(255, 218, 185)",
    "mint": "rgb(189, 252, 201)",
    "khaki": "rgb(240, 230, 140)",
    "maroon": "rgb(128, 0, 0)",
    "turquoise": "rgb(64, 224, 208)",
    "charcoal": "rgb(54, 69, 79)",
    "periwinkle": "rgb(204, 204, 255)",
    "fuchsia": "rgb(255, 0, 255)",
    "chartreuse": "rgb(127, 255, 0)",
    "plum": "rgb(221, 160, 221)",
    "beige": "rgb(245, 222, 179)",
    "aquamarine": "rgb(127, 255, 212)"
};

function getColor(index) {
    if (index < 0 || index >= colors.length) {
        console.log("Index out of range");
        return;
    }
    const colorName = colors[index];
    const rgbValue = colorNames[colorName] || "Unknown RGB Value";
    
    // console.log(`Color Name: ${colorName}, RGB Value: ${rgbValue}`);
    return rgbValue;
}

// Example usage
getColor(0);  // Logs: Color Name: red, RGB Value: rgb(255, 0, 0)
getColor(10); // Logs: Color Name: cyan, RGB Value: rgb(0, 255, 255)

let currentColor = "white";
let setColor = "";
let height = "40px";
let width = "40px";
let total = 144;
draw(height,width,total);

// functions
function grid8x8(){
    height = "60px";
    width = "60px";
    total = 64;
    deleteGrid();
    draw(height,width,total);
    console.log("8x8 drawn");

};
function grid12x12(){
    height = "40px";
    width = "40px";
    total = 144;
    deleteGrid();
    draw(height,width,total);
};
function grid30x30(){
    height = "16px";
    width = "16px";
    total = 900;
    deleteGrid();
    draw(height,width,total);
};
function grid60x60(){
    height = "8px";
    width = "8px";
    total = 3600;
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
///Downlaod Div
function download(){
    // const div = document.getElementById('snapshot-div');
    html2canvas(container).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'pixel-pad.png';
        link.click();
    });

};
function draw(height,width,total){
    let opacity = 0.4;
    for (let i=0;i<total;i++){
        const div = document.createElement("div");
        div.style.width=width;
        div.style.height=height;
        div.style.opacity = opacity;
        div.classList.add("divs");
        div.dataset.opacitycount=0;
        div.addEventListener("click", () => {
            div.style.backgroundColor = currentColor; // Change color on hover
            let count = Number(div.dataset.opacitycount);
            switch(count){
                case 0:
                    console.log('case 0');
                    opacity=0.4;
                    break;
                case 1:
                    console.log('case 1');
                    opacity=0.6;
                    break;
                case 2:
                    console.log('case 2');
                    opacity=0.8;
                    break;
                case 3:
                    console.log('case 3');
                    opacity=1;
                    break;
                default:
                    break;
            }
            div.style.opacity = opacity;
            div.dataset.opacitycount++;
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
    colorsDiv.style.backgroundColor = getColor(j);   
    colorsDiv.addEventListener("click", () => {
        currentColor = getComputedStyle(colorsDiv).backgroundColor;
    });
    colorPallete.appendChild(colorsDiv);     
}


