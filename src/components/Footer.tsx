import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-light py-5" id="contact">
            <div className="row">
                <div className="col-6 col-md">
                    <h5>关于</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">公司概况</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>产品与服务</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">产品1</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">产品2</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">产品3</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">产品4</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>选型与计算</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Business</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Education</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Government</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Gaming</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>电话</h5>
                    <p>010-12345678</p>
                    <h5>邮箱</h5>
                    <p>something@qq.com</p>
                    <h5>地址</h5>
                    <p>北京昌平</p>
                </div>
                <div className="container px-4 px-lg-5">
                    <div className="small text-center text-muted">Copyright &copy; 2009–2023 - 北京大誉环保科技有限公司
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
