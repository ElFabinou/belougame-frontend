import '../index.css';

function Navbar() {
    return (<div class="bg-violet-900 py-4 items-center">
            <div class={"md:flex justify-between"}>
                <a class={"flex"} href={"/"}>
                    <img class="ml-1 mr-2 h-10 w-10" src="/src/assets/icons/logos/beluga-white.png"/>
                    <h1 class="text-white text-4xl font-bold">Belougame</h1>
                </a>
                <div class={"justify-self-end flex pr-4 items-center"}>
                    <a href={""}><h1 class="text-white text-2xl mx-2">Jeux</h1></a>
                    <a href={"/login"} class={"rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-1"}>
                        <h1 class="text-white text-2xl">Connexion</h1>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
