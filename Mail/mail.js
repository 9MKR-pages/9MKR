function sendEmail(){
  var nom = document.getElementById("nomcontact").value;
  var prenom = document.getElementById("prenom").value;
  var mail = document.getElementById("emailcontact").value;
  var messagecontact = document.getElementById("messagecontact").value;

  if (nom == "" || prenom == "" || mail == "" || messagecontact == "") {
    alert("Veuillez remplir tous les champs obligatoires."); }
  else {
    var body = "nom: " + nom + "\n" + "prenom: " + prenom + "\n" + "email: " + mail + "\n" + "message: " + messagecontact;
    var objet = "contact de la part de "+prenom+" "+nom;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "9MKR.wiki@gmail.com",
    Password : "D63FEAEE3C5028F9CFD6E03D63AB8C8B7351",
    To : '9MKR.wiki@gmail.com',
    From : "9MKR.wiki@gmail.com",
    Subject : "Email github : " + objet,
    Body : body
}).then(
  message => alert(message)
);
}}