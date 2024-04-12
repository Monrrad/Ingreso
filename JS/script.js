const form = document.forms["loginForm"];

form.addEventListener("submit", function handleFormSubmit(event) {
  event.preventDefault();

  const email = form["email"].value;
  const password = form["password"].value;

  loginUser(email, password);

});

function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Credenciales correctas, ¡bienvenido! ' + user);
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch(function (error) {
      console.log(error);
    });


}

function registrar(email, password){
  firebase.auth().loginUser(email,password)
  .then(function (user) {
    console.log('creado correctamente! ' + user);
    localStorage.setItem('user', JSON.stringify(user));
  })
  .catch(function (error) {
    console.log(error);
  });
}