function handleYesClick() {
    createHearts();

    setTimeout(() => {
        window.location.href = "yes.html";
    }, 1000);
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random()}s`;
        document.body.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Tambahkan animasi wiggle
    noButton.classList.add("wiggle");
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 500);
}

function changeBackground() {
    const colors = ["#fff5f5", "#ffebee", "#e1f5fe", "#e8f5e9", "#f3e5f5"];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 4000);
}

document.addEventListener("DOMContentLoaded", changeBackground);
