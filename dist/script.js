document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-lineup");
    if (!submitButton) {
        console.error("Submit button not found.");
        return;
    }

    submitButton.addEventListener("click", myLineUp);
});

function myLineUp(event) {
    event.preventDefault();

    const form = document.getElementById("lineup-form");
    const output = document.getElementById("lineup-output");
    if (!form || !output) {
        console.error("Form or output container not found.");
        return;
    }

    const formData = new FormData(form);
    const status = formData.get("status");
    const gameDate = formData.get("gameDate");
    const players = Array.from(form.querySelectorAll('input[name="players"]:checked'))
        .map(function (playerCheckbox) {
            return playerCheckbox.value;
        });

    console.log("Submitted form data:");
    for (const entry of formData.entries()) {
        console.log(entry[0] + ": " + entry[1]);
    }
    if (players.length === 0) {
        console.log("players: None selected");
    }

    const playersText = players.length > 0 ? players.join(", ") : "None selected";
    const summary = "Status: " + status + " | Date: " + gameDate + " | Players: " + playersText;

    console.log("Lineup summary: " + summary);
    output.textContent = summary;
}
