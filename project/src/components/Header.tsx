import Menu from "./menu"
import Logo from "./Logo"

function Header() {
    return (
        <>
            <div className="flex flex-row justify-between">
                <Logo />
                <Menu />
            </div>
        </>
    )
}
export default Header