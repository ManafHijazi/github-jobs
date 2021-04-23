import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardContent, Tooltip, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import '../Styles/JobDetailsView.scss';

export const JobDetailsCardsComponent = ({ data, isLoading, onActiveJobChange }) => {
  const nodeRef = useRef(null);

  return (
    <div ref={nodeRef} className='job-details-card'>
      <div className='card-content-wrapper'>
        {!isLoading &&
          data &&
          data.map((item, index) => (
            <Card key={`jobCard-${index + 1}`} onClick={() => onActiveJobChange(item)}>
              <CardContent>
                <Tooltip
                  aria-label='title'
                  title={(item.title && item.title) || 'N/A'}
                  placement='left'>
                  <div className='card-title'>
                    <Typography>{(item.title && item.title) || 'N/A'}</Typography>
                  </div>
                </Tooltip>
                <Tooltip
                  aria-label='location'
                  title={(item.location && item.location) || 'N/A'}
                  placement='left'>
                  <div className='card-sub-title'>
                    <Typography>{(item.location && item.location) || 'N/A'}</Typography>
                  </div>
                </Tooltip>
                <div className='separator-h' />
                <div className='card-item'>
                  <Typography>HTML, CSS & JavaScript</Typography>
                </div>
              </CardContent>
            </Card>
          ))}
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
