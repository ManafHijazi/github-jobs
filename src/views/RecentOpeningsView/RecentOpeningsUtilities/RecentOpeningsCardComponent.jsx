import React from 'react';
import { PropTypes } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTranslation } from 'react-i18next';
import { GlobalHistory } from '../../../Helper';
import { Button, Card, CardActions, CardContent, Tooltip, Typography } from '@material-ui/core';

const parentTranslationPath = 'RecentOpeningsView';
const translationPath = '';

export const RecentOpeningsCardComponent = ({ data, isLoading }) => {
  const { t } = useTranslation(parentTranslationPath);

  return (
    <div className='recent-openings-card-component-wrapper'>
      <div className='card-content-wrapper'>
        {!isLoading &&
          data &&
          data.map((item, index) => (
            <Card key={`jobCard-${index + 1}`} className={data.length > 5 ? 'is-full' : ''}>
              <CardContent>
                <Tooltip
                  aria-label='title'
                  title={(item.title && item.title) || 'N/A'}
                  placement='top'>
                  <div className='card-title'>
                    <Typography>{(item.title && item.title) || 'N/A'}</Typography>
                  </div>
                </Tooltip>
                <Tooltip
                  aria-label='location'
                  title={(item.location && item.location) || 'N/A'}
                  placement='bottom'>
                  <div className='card-item'>
                    <Typography>{(item.location && item.location) || 'N/A'}</Typography>
                  </div>
                </Tooltip>
                <div className='separator-h' />
                <div className='card-item'>
                  <Typography>{(item.type && item.type) || 'N/A'}</Typography>
                </div>
                <div className='separator-h' />
                <div className='card-item'>
                  <Typography>HTML, CSS & JavaScript</Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button onClick={() => GlobalHistory.push(`/home/job-details?id=${item.id}`)}>
                  {t(`${translationPath}view`)}
                </Button>
              </CardActions>
            </Card>
          ))}
        {isLoading &&
          Array.from(new Array(15)).map((item, index) => (
            <Skeleton
              width={205}
              height={280}
              variant='rect'
              animation='wave'
              key={`${index + 1}-skeleton`}
            />
          ))}
      </div>
    </div>
  );
};
RecentOpeningsCardComponent.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.instanceOf(Array),
};
RecentOpeningsCardComponent.defaultProps = {
  data: [],
  isLoading: false,
};
