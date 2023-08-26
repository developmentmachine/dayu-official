import React from "react";

const CompanyProfile: React.FC<{ id: string }> = (props) => {
    return (
            <div className="masthead main-title" id={props.id}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="mask">
                            <h1 className="text-white font-weight-bold">北京大誉环保科技有限公司</h1>
                            <div className="align-self-baseline">
                                <p>成立于2009年，是一家专注于环保产品和高效换热产品研究、开发、生产及销售的高科技企业，总部设立于北京，下设生产基地位于天津武清，公司技术和研发实力雄厚，是国家认定的“高新技术企业”，拥有多项国家专利。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CompanyProfile;
