import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export const RecentOpeningsCardComponent = ({ data, isLoading }) => {
  return (
    <div className='recent-openings-card-component-wrapper'>
      <div className='card-content-wrapper'>
        {data &&
          data.map((item, index) => (
            <Card key={`jobCard-${index + 1}`}>
              <CardContent>
                <div className='card-title'>
                  <Typography>Front end developer</Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button>View</Button>
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
