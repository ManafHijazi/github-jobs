import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { Card, CardContent, CircularProgress, Tooltip, Typography } from '@material-ui/core';
import '../Styles/JobDetailsView.scss';

export const JobDetailsCardsComponent = ({ data, isLoading, onActiveJobChange }) => {
  const isRtl = JSON.parse(localStorage.getItem('localization')).isRtl;
  const nodeRef = useRef(null);

  return (
    <div ref={nodeRef} className='job-details-card'>
      <div className='card-content-wrapper'>
        {!isLoading &&
          data &&
          data.length > 0 &&
          data.map(
            (item, index) =>
              item && (
                <Card key={`jobCard-${index + 1}`} onClick={() => onActiveJobChange(item)}>
                  <CardContent>
                    <Tooltip
                      aria-label='title'
                      placement={isRtl ? 'right' : 'left'}
                      title={(item.title && item.title) || 'N/A'}>
                      <div className='card-title'>
                        <Typography>{(item.title && item.title) || 'N/A'}</Typography>
                      </div>
                    </Tooltip>
                    <Tooltip
                      aria-label='location'
                      placement={isRtl ? 'right' : 'left'}
                      title={(item.location && item.location) || 'N/A'}>
                      <div className='card-sub-title'>
                        <Typography>{(item.location && item.location) || 'N/A'}</Typography>
                      </div>
                    </Tooltip>
                    <div className='card-progress'>
                      <div className='outer-progress'>
                        <CircularProgress
                          variant='determinate'
                          value={Math.floor(Math.random() * 100)}
                        />
                      </div>
                      <div className='inner-progress'>
                        <CircularProgress variant='determinate' value={100} />
                      </div>
                      <div className='progress-value'>{`${Math.floor(Math.random() * 100)}%`}</div>
                    </div>
                    <div className='separator-h' />
                    <div className='card-item'>
                      <Typography>HTML, CSS & JavaScript</Typography>
                    </div>
                  </CardContent>
                </Card>
              )
          )}
        {isLoading &&
          Array.from(new Array(15)).map((item, index) => (
            <div className='job-skeleton-wrapper' key={`${index + 1}-skeleton`}>
              <Skeleton animation='wave' />
            </div>
          ))}
      </div>
    </div>
  );
};
JobDetailsCardsComponent.propTypes = {
  data: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
  onActiveJobChange: PropTypes.func,
};
JobDetailsCardsComponent.defaultProps = {
  data: [],
  isLoading: false,
  onActiveJobChange: () => {},
};
