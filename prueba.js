 document.addEventListener("DOMContentLoaded", function () {
    const descriptions = [
        { title: "FODDER", description: "What is this game?", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo nam veritatis labore, distinctio quasi quidem similique. Nihil voluptatum veritatis praesentium, deserunt vitae culpa! Modi ut ipsa obcaecati sit quaerat.." },
        { title: "ADVENTURE", description: "An epic journey awaits!", text: "Explore vast lands, defeat monsters, and become a hero." },
        { title: "MYSTIC", description: "Unleash your power!", text: "Harness magical abilities and fight against darkness." }
    ];

    const radioButtons = document.querySelectorAll('input[name="slider"]');
    const titleElement = document.getElementById("game-title");
    const descElement = document.getElementById("game-description");
    const textElement = document.getElementById("game-text");

    radioButtons.forEach((radio, index) => {
        radio.addEventListener("change", function () {
            titleElement.textContent = descriptions[index].title;
            descElement.textContent = descriptions[index].description;
        });
    });
});