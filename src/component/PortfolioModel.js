import React from 'react';

const PortfolioModel = ({ id, lable, description, title, image }) => {
    return (
        <div className="portfolio-modal modal fade" id={id} role="dialog" aria-labelledby={lable} aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-times"></i></span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{title}</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src={image} alt="" />
                                    <p className="mb-5">{description}</p>
                                    <button className="btn btn-primary" data-dismiss="modal">
                                        <i className="fa fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioModel;
