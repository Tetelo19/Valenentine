document.getElementById("proposalForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var response = formData.get("proposal_response");

    if (response === "accept") {
        window.location.href = "acceptance.html";
    } else {
        window.location.href = "decline.html";
    }
});
