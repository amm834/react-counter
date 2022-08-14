const NavBar = ({totalCountes}) => {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand mb-0 h1">Navbar
                        <span className="badge bg-success text-lg ms-2">{totalCountes} </span>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;