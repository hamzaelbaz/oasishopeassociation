const form = document.querySelector("form"),
    nom = document.querySelector("#nom"),
    objet = document.querySelector("#objet"),
    email = document.querySelector("#email"),
    message = document.querySelector("#message"),
    tel = document.querySelector('#tel')
form.addEventListener("submit", async e => {
    e.preventDefault();
    let a = nom.value,
        t = objet.value,
        n = email.value,
        o = message.value,
        p = tel.value;
    try {
        await axios.post("/.netlify/functions/sendEmail", {
            name: a,
            objets: t,
            emails: n,
            messages: o,
            tele: p
        }), nom.value = "", objet.value = "", email.value = "", message.value = "", tel.value =""
    } catch (s) {
        console.error("oups! elle y a une erreur:", s)
    }
});