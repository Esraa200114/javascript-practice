const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const cyan = document.querySelector(".cyan");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBackgroundColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColorChanger = (selectorElement) => {
    var color = getBackgroundColor(selectorElement);

    selectorElement.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

magicColorChanger(red);
magicColorChanger(orange);
magicColorChanger(violet);
magicColorChanger(cyan);
magicColorChanger(pink);