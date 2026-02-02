function validationLogin() {
  let user = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (user === "admin" && password === "123") {
    alert("Selamat, Anda berhasil login");
    return true; // form dikirim
  } else {
    alert("Username atau password salah");
    return false; // form TIDAK dikirim
  }
}
