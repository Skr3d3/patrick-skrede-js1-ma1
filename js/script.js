const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
    let cat = {
        complain() {
            console.log("Meow!");
        }
    };
    cat.complain();

// Question 2
    const heading = document.querySelector("h3");
    heading.innerHTML = "Updated heading";

// Question 3
    heading.style.fontSize = "2em";

// Question 4
    heading.className = "subheading";

// Question 5
    const paragraphs = document.querySelectorAll("p");

    for (let paragraph of paragraphs) {
        paragraph.style.color = "red";
    }
/*
    paragraphs.forEach(paragraph => {
        paragraph.style.color = "red";
    });

    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color ="red";
    };
*/

// Question 6
    let resultsContainer = document.querySelector(".results");

    resultsContainer.innerHTML = "<p>New paragraph</p>";
    resultsContainer.style.backgroundColor = "yellow";

// Question 7

function logNames(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
};
logNames(cats);

// Question 8

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let catsAge
        if (cats[i].age) {
            catsAge = cats[i].age;
        }
        else {catsAge = "Age unknown"};

        html += `
        <div>
        <h5>${cats[i].name}</h5>
        <p>${catsAge}</p>
        </div>`
    }
return html;
};


const catContainer = document.querySelector(".cat-container")
catContainer.innerHTML = createCats(cats);