document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".main p");
    let index = 0;

    function switchParagraphs() {
        paragraphs.forEach((p, i) => {
            p.style.display = i === index ? "block" : "none";
        });

        index = (index + 1) % paragraphs.length; // Loop back when it reaches the last paragraph
    }

    // Initially hide all except the first paragraph
    switchParagraphs();
    setInterval(switchParagraphs, 5000); // Change every 5 seconds
});