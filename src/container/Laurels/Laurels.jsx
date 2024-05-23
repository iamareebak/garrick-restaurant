import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

import './Laurels.css';

const AwardCard = ({ award : { imgUrl, title, subtitle} }) => (

  <div className="app__laurels-awards-card">
    
    <div className="app__laurels-awards-card-content">

      <div className="app__laurels-awards-card-content-logo">

        <img src={imgUrl} alt="awards" />
        <div className="app__laurels-awards-card-content-awards">

          <p className="p__cormorant awards-subs" style={{ color: '#DCCA87' }}>{title}</p>
          <p className="p__opensans awards-subs" style={{ color: 'var(--color-grey)' }} >{subtitle}</p>
        </div>
      </div>


    </div>
  </div>
);
 
const Laurels = () => (

  <div className="app__laurels ">

    <div className="app__bg app__wrapper section__padding" id="awards">

      <div className="app__laurels-logo">

        <img src={images.logo} alt="Logo"/>
      </div>

      <div className="app__wrapper-info">

        <SubHeading title="Awards & recognition"/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

      
        <div className="app__laurels-awards">

          { data.awards.map((award) => <AwardCard award={award} key={award.title} /> )}
        </div>


      </div>
      <div className="app__wrapper-img">

        <img src={images.laurels} alt="laurels img" />
      </div>
    </div>
  </div>

);

export default Laurels;

