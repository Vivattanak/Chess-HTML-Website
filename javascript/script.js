function checkInput() {
    // Get the value entered by the user
    var userInput = document.getElementById("puzzleinput").value;

    // Check if the input is correct
    if (userInput === "Bxc4") {
        document.getElementById("result").textContent = "Correct! This move creates a discovered attack on the queen, while simultanously pinning the queen to the king. If the queen takes the bisho pyou have checkmate on the next move";
    } else {
        document.getElementById("result").textContent = "Wrong. Please try again. Check for the tactics we have learned! ";
    }
}
