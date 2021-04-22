import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { GetAllJobOpenings } from '../../Services/JobsServices';
import {
  RecentOpeningsCardComponent,
  RecentOpeningsSearchComponent,
} from './RecentOpeningsUtilities';
import './Styles/RecentOpeningsView.Styles.scss';

export const RecentOpeningsView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState(null);
  const [filter, setFilter] = useState({ description: '', location: '', page: 0 });

  const getAllJobs = useCallback(async () => {
    setIsLoading(true);
    const result = await GetAllJobOpenings(filter);
    if (!(result && result.status && result.status !== 200)) {
      setJobsData(result.data);
    } else {
      setJobsData([]);
    }
    setIsLoading(false);
  }, [filter]);
  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);
  const onFilterChange = (newValue) => {
    setFilter({ newValue });
  };
  return (
    <div className='recent-openings-wrapper'>
      <RecentOpeningsSearchComponent onFilterChange={onFilterChange} />
      <div className='recent-openings-cards-wrapper'>
        <div className='section-title'>
          <Typography>Recent Openings</Typography>
        </div>
        <RecentOpeningsCardComponent isLoading={isLoading} data={jobsData} />
      </div>
    </div>
  );
};
