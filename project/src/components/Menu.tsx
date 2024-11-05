import UserGrid from "./UserGrid"
function Menu() {
    return(
        <>
            <nav className="navBar flex">
                <ul className="flex pt-6">
                    <li className="mx-3"><a href="#">Perfil</a></li>
                    <li className="mx-3"><a href="#">Libros</a></li>
                    <li className="mx-3"><a href="#">Añadir libros</a></li>
                    <li className="mx-3"><a href="#">Editar libros</a></li>
                    <li className="mx-3"><a href="#">Salir</a></li>
                </ul>
                <UserGrid username="Leo" img="https://randomuser.me/api/portraits/thumb/men/22.jpg"/>
            </nav>
        </>
    )
}
export default Menu