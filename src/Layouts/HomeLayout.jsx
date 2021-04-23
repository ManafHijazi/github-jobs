import React, { useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { useCallback } from 'react';
import { GlobalHistory, languageChange } from '../Helper';
import { SwitchRoute } from '../Helper/SwitchRoute';
import { HomeRoutes } from '../routes/HomeRoutes/HomeRoutes';
import usa from '../assets/Images/UnitedStatesOfAmerica.png';
import uae from '../assets/Images/UnitedArabEmirates.png';
import './HomeLayout.Style.scss';

export const HomeLayout = () => {
  const languageClicked = useCallback(languageChange);
  const currentLanguage = JSON.parse(localStorage.getItem('localization'));
  const [language, setLanguage] = useState(currentLanguage.currentLanguage);

  return (
    <div className='app-wrapper'>
      <div className='app-header-wrapper'>
        <div className='app-logo' onClick={() => GlobalHistory.push('/home')}>
          <div className='logo-title'>
            <div className='logo-text'>GitHub</div>
            <div className='logo-sub-text'>Jobs</div>
          </div>
        </div>
        <IconButton
          onClick={() => {
            if (language === 'ar') {
              setLanguage('en');
              languageClicked('en');
            } else {
              setLanguage('ar');
              languageClicked('ar');
            }
          }}>
          <img src={language === 'ar' ? usa : uae} alt='language' width='24px' />
        </IconButton>
        <div className='view-content-button'>
          <Button onClick={() => window.open('https://cors-anywhere.herokuapp.com/corsdemo')}>
            Click me to view content
          </Button>
        </div>
      </div>
      <div className='app-container-wrapper'>
        <SwitchRoute routes={HomeRoutes} />
      </div>
    </div>
  );
};
