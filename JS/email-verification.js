const fields = document.querySelectorAll("[required]")
const visual_alert = document.getElementById("typeyouremail");

for (let field of fields){
    field.addEventListener("invalid", event => {
        unsuccessful();
    });
}

const sucessfull = () => {
    visual_alert.innerHTML = "E-mail successfully registered!";
    visual_alert.style.color = "#04D361";
}

const unsuccessful = () => {
    visual_alert.innerHTML = "There was an error in the email subscription.";
    visual_alert.style.color = "#D42919";
}