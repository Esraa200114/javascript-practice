var courses = [
    {
        name: "Complete ReactJS  course",
        price: 2.3
    },
    {
        name: "Complete Java  course",
        price: 2.4
    },
    {
        name: "Complete React Native  course",
        price: 2.9
    },
    {
        name: "Complete C++  course",
        price: 2.7
    }
];

function generateList() {
    const unorderedList = document.querySelector(".list-group");
    unorderedList.innerHTML = "";
    courses.forEach((c) => {
        const listItem = document.createElement("li");

        listItem.classList.add("list-group-item");
        listItem.classList.add("d-flex");
        listItem.classList.add("justify-content-between");
        listItem.classList.add("align-items-center");
        listItem.classList.add("fw-bold");

        const name = document.createTextNode(c.name);
        listItem.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + c.price);
        span.appendChild(price);

        listItem.appendChild(span);

        unorderedList.appendChild(listItem);
    });
}

window.addEventListener("load", generateList);

const sortButtonASC = document.querySelector(".sort-btn-asc");

sortButtonASC.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});

const sortButtonDESC = document.querySelector(".sort-btn-desc");

sortButtonDESC.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();
});
