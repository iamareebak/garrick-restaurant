import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

      <div className="app__wrapper-img app__wrapper-img-reverse">
        <img className="chef-image" src={images.chef} alt="Chef"/>
      </div>

      <div className="app__chef-chefword">
        <SubHeading title="Chef&apos; Word"/>

        <p className='headtext__cormorant'>What we believe in</p>

        <div className="app__chef-content">
          <img src={images.quote} alt="Quotation" style={{width:'47px', height: '40px'}}/>
          <p className='p__quotation '>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>

        <p className='p__quotation '>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        
        <div className="app__chef-signature">
          <p className='p__opensans'>Kevin Lao</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="Kevins Signature" />
        </div>

      </div>
    
  </div>
);

export default Chef;