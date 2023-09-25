
function calculateMyAge() {
    var number = parseFloat(document.getElementById("number").value);

    var remainingDays = ((90 - number) * 365);
    var remainingsWeek = ((90 - number) * 52);
    var remainingMonths = ((90 - number) * 12);

    var resultMessage = "You have " + remainingDays + " days, " + remainingsWeek + " weeks, and " + remainingMonths + " months left.";

    document.getElementById("results").innerHTML = resultMessage;

    
}


        
    