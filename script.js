const events = {
    "October 21": [
        "On this day in 1805, the Battle of Trafalgar took place.",
        "In 1944, the Battle of Leyte Gulf began.",
        "On October 21, 1998, the United States launched a missile attack on Iraq."
    ],
    // Add more dates as you need
};

document.getElementById("get-history").addEventListener("click", function () {
    const date = new Date();
    const today = `${date.getMonth() + 1}/${date.getDate()}`; // Format as MM/DD
    document.getElementById("date").textContent = `Today is ${today}`;
    
    const history = events[today];
    if (history) {
        document.getElementById("history-events").innerHTML = history.map(event => `<p>${event}</p>`).join('');
    } else {
        document.getElementById("history-events").innerHTML = `<p>No historical events found for today.</p>`;
    }
});
