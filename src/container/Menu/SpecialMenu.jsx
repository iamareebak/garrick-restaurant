import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialmenu flex__center section__padding" id="menu">
    
    <div className="app__specialmenu-title">
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'>Today&apos; Special</h1>
    </div>

    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu-wine flex__center">
        <p className='app__specialmenu-menu-heading'>Wine & Beer</p>
        <div className="app__specialmenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      

      <div className="app__specialmenu-menu-image ">
        <img src={images.menu} alt="Menu-Image" />
      </div>

      <div className="app__specialmenu-menu-cocktail flex__center">
        <p className='app__specialmenu-menu-heading'>Cocktails</p>
        <div className="app__specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>


      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
  </div>
  
);

export default SpecialMenu;
