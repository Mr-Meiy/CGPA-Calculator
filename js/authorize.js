//Authentication
const authenticate = () => {
    let name = document.getElementById('username').value;
    if(name!=""){
      localStorage.setItem("user", name);
      window.location.href = './index.html';
    }
}

//const verify authorization
let verifyAuth = () => {
    const user = localStorage.getItem("user");
    if (user == null) {
        window.location.href = './login.html';
        alert('Login to continue');
    }
}
