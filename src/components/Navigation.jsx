import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to='/'>МЦНТИ</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/about'>О МЦНТИ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/news'> Новости</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/service'> Услуги</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/project'> Проекты</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/archive'>Архивы</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to='/contact'>Контакты</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
