import {createSignal} from "solid-js";

async function signUpUser() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if(email == "") {setCorrectEmail(false);}
    else{setCorrectEmail(true)}

    if(password == "") {setCorrectPassword(false);}
    else{setCorrectPassword(true);}

    if(confirmPassword == "") {setCorrectConfirmPassword(false);}
    else{setCorrectConfirmPassword(true);}

    if(email == "" || password == "" || confirmPassword == ""){
        return;
    }
    if(!validateEmail(document.getElementById('email'))){
        console.log("mauvais email")
        return;
    }
    return fetch(process.env.API_ADDRES + '/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": document.getElementById('email').value,
            "password": document.getElementById('password').value
        })
    })
}
const [requirements, setRequirements] = createSignal(true);
const [correctPassword, setCorrectPassword] = createSignal(true);
const [correctConfirmPassword, setCorrectConfirmPassword] = createSignal(true);

const validateEmail = (email) => {
    return email.toString().match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
};
const [correctEmail, setCorrectEmail] = createSignal();
const passwordChecker = (password) => {
    let requirements = [];
    if(password.length >= 8){ //check password size
        requirements.push(true);
    }else{
        requirements.push(false);
    }
    let test = /^?=.*[A-Z]$/ //check uppercase
    if(password.test(test)){
        requirements.push(true);
    }else{
        requirements.push(false);
    }
    test = /^?=.*[a-z]$/ //check password lowercase
    if(password.test(test)){
        requirements.push(true);
    }else{
        requirements.push(false);
    }
    test = /^(?=.*[0-9]).*$/; //check password digit
    if(password.test(test)){
        requirements.push(true);
    }else{
        requirements.push(false);
    }
    test = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/; //check password special char
    if(password.test(test)){
        requirements.push(true);
    }else{
        requirements.push(false);
    }
    setRequirements(requirements);
}

const handleKeypress = (e) => { if (e.key === "Enter") loginUser().then(r => r);  };

function signUp() {
    return (
        <div
            class={"bg-gradient-to-br from-blue-400 to-fuchsia-500 flex flex-col h-screen justify-center items-center"}>
            <div class={"bg-white rounded flex flex-col px-10"}>
                <a href={"/"} class={"self-center contents"}>
                    <img alt="logo.png" class="ml-1 mr-2 h-20 w-20 invert self-center logoAnim"
                         src="/src/assets/icons/logos/beluga-white.png"/>
                    <h1 class="text-2xl font-bold self-center mb-5">Belougame</h1>
                </a>
                <label class={"block text-xs font-semibold text-gray-700"}>E-mail</label>
                <input onkeypress={handleKeypress} class={"shadow appearance-none border "+ (correctEmail() ? "border-purple-500" : "border-red-500") +" rounded " +
                    "w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"} id="email"
                       type="text" placeholder="mail@mail.com"></input>
                <label class={"block text-xs font-semibold text-gray-700"}>Mot de passe
                    <span class={"text-gray-500"}><br/>8 caractères minimum dont 1 chiffre, 1 majucule, <br/>1 minuscule et 1 caractère spécial</span></label>
                <input onkeypress={handleKeypress} class={"shadow appearance-none border "+ (correctPassword() ? "border-purple-500" : "border-red-500") +" rounded " +
                    "w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}
                       id="password" type="password" placeholder="••••••••"></input>
                <label class={"block text-xs font-semibold text-gray-700"}>Confirmer le mot de passe</label>
                <input onkeypress={handleKeypress} class={"shadow appearance-none border "+ (correctConfirmPassword() ? "border-purple-500" : "border-red-500") +" rounded " +
                    "w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}
                       id="password" type="password" placeholder="••••••••"></input>
                <button class={"bg-gradient-to-br from-blue-400 to-fuchsia-500 self-center text-white p-2 rounded mt-1"}
                        onclick={() => loginUser()}>Inscription
                </button>
                <div class={"flex justify-center items-center"}>
                    <a href={"/login"} class={"block text-xs font-semibold text-gray-400 self-center mt-5"}>Déjà inscrit</a>
                </div>
            </div>
        </div>);
}

export default signUp;
