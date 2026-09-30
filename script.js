const buttons = document.querySelectorAll(".assignment-card button");

const labDetails = document.querySelectorAll(".lab-details");


// Hide all lab details initially
labDetails.forEach((lab) => {
    lab.style.display = "none";
});


// Show selected lab
buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        // Hide all labs
        labDetails.forEach((lab) => {
            lab.style.display = "none";
        });

        // Show selected lab
        const selectedLab = document.getElementById(
            `lab${String(index + 1).padStart(2, "0")}-details`
        );

        selectedLab.style.display = "block";

        // Scroll to selected lab
        selectedLab.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Go back to all lab work
function showAllLabs() {

    // Hide all lab details
    labDetails.forEach((lab) => {
        lab.style.display = "none";
    });

    // Scroll back to lab cards
    document.querySelector(".assignments").scrollIntoView({
        behavior: "smooth"
    });
}