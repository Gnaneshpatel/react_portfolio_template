import React from 'react';
import PortfolioModel from './PortfolioModel';
import image1 from '../assets/img/portfolio/cabin.png';
import image2 from '../assets/img/portfolio/cake.png';
import image3 from '../assets/img/portfolio/circus.png';
import image4 from '../assets/img/portfolio/game.png';
import image5 from '../assets/img/portfolio/safe.png';
import image6 from '../assets/img/portfolio/submarine.png';

const PortfolioModels = () => {
    return (
        <div>
            <PortfolioModel id="portfolioModal1"
                lable="portfolioModal1Labe1"
                title="Log Cabin"
                image={image1}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
            />

            <PortfolioModel id="portfolioModal2"
                title="Tasty Cake"
                image={image2}
                lable="portfolioModal1Labe2"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
            />
            <PortfolioModel id="portfolioModal3"
                image={image3}
                lable="portfolioModal1Labe3"
                title="Circus Tent"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
            />
            <PortfolioModel id="portfolioModal4"
                title="Controller"
                image={image4}
                lable="portfolioModal1Labe4"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
            />
            <PortfolioModel id="portfolioModal5"
                title="Locked Safe"
                image={image5}
                lable="portfolioModal1Labe5"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
            />
            <PortfolioModel id="portfolioModal6"
                title="Submarine"
                image={image6}
                lable="portfolioModal1Labe6"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
            />
        </div>

    );
}

export default PortfolioModels;
