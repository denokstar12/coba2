function showSection(id){
  let pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showLogin(){
  document.getElementById('loginPage').style.display='block';
}

function login(){
  let pass = document.getElementById('password').value;
  if(pass === "12345"){
    alert("Login berhasil");
    closeModal('loginPage');
  } else {
    alert("Password salah");
  }
}

function logout(){
  alert("Anda telah logout");
}

function order(product){
  document.getElementById('orderPage').style.display='block';
  document.getElementById('productName').value = product;
}

function closeModal(id){
  document.getElementById(id).style.display='none';
}
