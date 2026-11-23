
function nextStep(stepNumber) {

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById("step" + stepNumber)
        .classList.add("active");

    // Start at the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function restart() {
    nextStep(1);
}
