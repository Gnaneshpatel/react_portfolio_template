import React from 'react';

const ProfileService = ({ target, image }) => {
    return (
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target={target}>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={image} alt="" />
        </div>
    );
}

export default ProfileService;
