import React from "react";

const Header: React.FC = () => {
    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4" href="#">北京大誉 LOGO</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#companyProfile">公司概况</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">研发历史</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">产品与服务</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">选型与计算</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">联系我们</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
