import React, { useCallback, useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { ActiveJobDetailsComponent, JobDetailsCardsComponent } from './JobDetailsUtilities';
import { GetAllJobOpenings, GetAllJobOpeningsById } from '../../Services/JobsServices';
import { GetParams } from '../../Helper';
import './Styles/JobDetailsView.scss';

export const JobDetailsView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isJobLoading, setIsJobLoading] = useState(false);
  const [jobsData, setJobsData] = useState(null);
  const [filter] = useState({ description: '', location: '' });
  const [activeJob, setActiveJob] = useState(null);

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

  const getJobById = useCallback(async () => {
    setIsJobLoading(true);
    const result = await GetAllJobOpeningsById(GetParams('id'));
    if (!(result && result.status && result.status !== 200)) setActiveJob(result.data);
    else setActiveJob(null);
    setIsJobLoading(false);
  }, []);

  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);

  useEffect(() => {
    getJobById();
  }, [getJobById]);

  const onActiveJobChange = useCallback((activeItem) => {
    setActiveJob(activeItem);
  }, []);

  return (
    <div className='job-details-view-wrapper'>
      <div className='jobs-details-container'>
        <div className='jobs-details-cards-wrapper'>
          <JobDetailsCardsComponent
            data={jobsData}
            isLoading={isLoading}
            onActiveJobChange={onActiveJobChange}
          />
        </div>
        <div className='jobs-details-content-wrapper'>
          <ActiveJobDetailsComponent activeJob={activeJob} isJobLoading={isJobLoading} />
        </div>
      </div>
      <div className='jobs-details-footer'>
        <div className='footer-text'>
          <div className='footer-title'>Follow us</div>
          <div className='footer-sub-title'>Engage with us</div>
        </div>
        <div className='footer-actions'>
          <div className='footer-linkedin'>
            <IconButton>
              <span className='iconify' data-icon='mdi-linkedin' />
            </IconButton>
          </div>
          <div className='footer-website'>
            <IconButton>
              <span className='iconify' data-icon='mdi-web' />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
