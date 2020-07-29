import React from 'react';
import ProfileService from './ProfileService';
import image1 from '../assets/img/portfolio/cabin.png';
import image2 from '../assets/img/portfolio/cake.png';
import image3 from '../assets/img/portfolio/circus.png';
import image4 from '../assets/img/portfolio/game.png';
import image5 from '../assets/img/portfolio/safe.png';
import image6 from '../assets/img/portfolio/submarine.png';


const Profile = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ProfileService target="#portfolioModal1" image={image1} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ProfileService target="#portfolioModal2" image={image2} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <ProfileService target="#portfolioModal3" image={image3} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <ProfileService target="#portfolioModal4" image={image4} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <ProfileService target="#portfolioModal5" image={image5} />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ProfileService target="#portfolioModal6" image={image6} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
