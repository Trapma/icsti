import React from 'react'
import { SearchUi } from './UI/search/SearchUi'

export const Header = ({ title, search, setIsChecked, isChecked }) => {
    const searchDomain = isChecked ? 'Zenodo' : 'Core'
    const changeDomain = (e) => {
        setIsChecked(e.target.checked)
    }
    return (
        <header className="masthead" style={{ backgroundImage: "url('assets/img/about-bg.jpg')" }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <span className="subheading">Международный Центр Научной и Технической Информации</span>
                            {search &&
                                <div>
                                    <br />
                                    <div className="form-check form-switch">
                                        <input
                                            id="flexSwitchCheckChecked"
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={(e) => { changeDomain(e) }}

                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Поиск будет производиться по домену {searchDomain}</label>
                                    </div>
                                    <SearchUi search={search} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
