document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("username").value;
  const contraseña = document.getElementById("password").value;

  if (usuario === "admin" && contraseña === "1234") {
    document.getElementById("mensaje").innerText = "✅ Bienvenido";
  } else {
    document.getElementById("mensaje").innerText = "❌ Datos incorrectos";
  }
});
