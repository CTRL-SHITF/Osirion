 document.addEventListener("DOMContentLoaded", function () {
    const descriptions = [
        { title: "FODDER", description: "What is this game?", text: "In FODDER, disposable agents face a ruthless world.Every choice matters, every life is fragile. Plan your heists, survive the fallout, and uncover the truth behind the syndicates’ war..." },
        { title: "ADVENTURE", description: "An epic journey awaits!", text: "Embark on an adventurous journey through enchanted forests and mountains, using navigation skills to uncover secrets and face challenging enemies. Equip varied weapons, including ancient swords and magical artifacts." },
        { title: "MYSTIC", description: "Unleash your power!", text: "Embark on an adventurous journey through enchanted forests and mountains, using navigation skills to uncover secrets and face challenging enemies. Equip varied weapons, including ancient swords and magical artifacts." }
    ];

    const radioButtons = document.querySelectorAll('input[name="slider"]');
    const titleElement = document.getElementById("game-title");
    const descElement = document.getElementById("game-description");
    const textElement = document.getElementById("game-text");

    radioButtons.forEach((radio, index) => {
        radio.addEventListener("change", function () {
            titleElement.textContent = descriptions[index].title;
            descElement.textContent = descriptions[index].description;
            textElement.textContent = descriptions[index].text;
        });
    });
});
