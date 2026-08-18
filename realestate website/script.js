```javascript
// =========================
// EXPLORE PROPERTIES BUTTON
// =========================

    function exploreProperties() {
    window. location.href = "properties.html";
}


// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to Shruthi Estates!");
```// Property details button

function viewProperty(propertyName) {
        window.location.href="enquiry.html";
}// Contact form

function submitContact(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "!\n\nYour message has been received by Shruthi Estates."
    );

    document.querySelector(".contact-form form").reset();
}// Property enquiry

function submitEnquiry(event) {

    event.preventDefault();

    let name = document.getElementById("enquiryName").value;
    let property = document.getElementById("property").value;

    alert(
        "Enquiry Submitted Successfully! 🎉\n\n" +
        "Thank you, " + name + "!\n" +
        "Selected Property: " + property +
        "\n\nShruthi Estates will contact you soon."
    );

    document.querySelector(".enquiry-form form").reset();
}