const buttons = document.querySelectorAll('.btn');

let rating;
console.log(buttons);
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        rating = event.target.innerText;
        console.log(rating);
        action(rating);
    })
});

document.querySelector('.button-style').addEventListener('click', handleButton);

function handleButton() {
    const secondDiv = document.getElementById('main');
    const firstDiv = document.getElementById('wrapper');
    if (secondDiv.style.display === "none") {
        secondDiv.style.display = "inline-flex";
        firstDiv.style.display = "none";
    } else {
        secondDiv.style.display = "none";
    }
}

function action(rating) {
    const node = document.createElement("p");
    const textNode = document.createTextNode(`You selected ${rating} out of 5`);
    node.appendChild(textNode);
    document.getElementById('rating').appendChild(node);
}

