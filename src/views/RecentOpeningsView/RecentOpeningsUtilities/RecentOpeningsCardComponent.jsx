import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Card, CardActions, CardContent, Tooltip, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { GlobalHistory } from '../../../Helper';

export const RecentOpeningsCardComponent = ({ data, isLoading }) => {
  return (
    <div className='recent-openings-card-component-wrapper'>
      <div className='card-content-wrapper'>
        {data &&
          data.map((item, index) => (
            <Card key={`jobCard-${index + 1}`}>
              <CardContent>
                <Tooltip aria-label="title" title={(item.title && item.title) || 'N/A'} placement='top'>
                  <div className='card-title'>
                    <Typography>{(item.title && item.title) || 'N/A'}</Typography>
                  </div>
                </Tooltip>
                <Tooltip aria-label="location" title={(item.location && item.location) || 'N/A'} placement='bottom'>
                  <div className='card-item'>
                    <Typography>{(item.location && item.location) || 'N/A'}</Typography>
                  </div>
                </Tooltip>
                <div className='separator-h' />
                <div className='card-item'>
                  <Typography>{(item.type && item.type) || 'N/A'}</Typography>
                </div>
                <div className='separator-h' />
              </CardContent>
              <CardActions>
                <Button onClick={()=>GlobalHistory.push('/home/job-detailsF')}>View</Button>
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
  data: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
};
RecentOpeningsCardComponent.defaultProps = {
  data: [],
  isLoading: false,
};
