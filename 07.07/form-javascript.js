
var registrationsDiv = document.getElementById("registrations");
console.log(registrationsDiv);
var registrationsData = "";

function onSubmit(e) {
    // preventDefault abil ei tule refreshi
    // e tähendab eventi
    e.preventDefault();
    console.log(e);
    console.log("töötab");

    document.forms["registrationForm"]

    console.log(registrationForm)
    console.log(registrationForm["firstname"]);
    console.log(registrationForm["firstname"].value);

    var firstName = registrationForm["firstname"].value;
    console.log(firstName);
    var lastName = registrationForm["lastname"].value;
    console.log(lastName);
    var number = registrationForm["phone"].value;
    console.log(number);
    var email = registrationForm["email"].value;
    console.log(email);

    registrationForm.reset();
    
    //registrationsData = registrationsData + "Eesnimi: " + firstName + "<br>" + "Perekonnanimi: " + lastName +  "<br>" + "Telefon: " + number + "<br>" + "Email: " + email + "<br>";
    //registrationsDiv.innerHTML = registrationsData;

    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("phone", number);
    localStorage.setItem("email", email);

    location.href = "review.html";

}