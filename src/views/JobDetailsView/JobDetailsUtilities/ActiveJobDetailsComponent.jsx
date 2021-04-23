import React from 'react';
import { PropTypes } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTranslation } from 'react-i18next';
import '../Styles/JobDetailsView.scss';

const parentTranslationPath = 'JobDetailsView';
const translationPath = '';

export const ActiveJobDetailsComponent = ({ activeJob, isJobLoading }) => {
  const { t } = useTranslation(parentTranslationPath);

  return (
    <>
      {!isJobLoading && activeJob && (
        <div className='active-job-details-wrapper'>
          <div className='job-item'>
            <div className='job-title'>
              {(activeJob.title && activeJob.title) || 'N/A'}
              <div className='job-badge'>{(activeJob.type && activeJob.type) || 'N/A'}</div>
            </div>
            <div className='job-date'>
              {(activeJob.created_at && activeJob.created_at) || 'N/A'}
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>{t(`${translationPath}description`)}</div>
            <div className='job-description'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${(activeJob.description && activeJob.description) || 'N/A'}`,
                }}
              />
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>{t(`${translationPath}requirements`)}</div>
            <div className='job-description'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${(activeJob.how_to_apply && activeJob.how_to_apply) || 'N/A'}`,
                }}
              />
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>{t(`${translationPath}summary`)}</div>
            <div className='job-Summary'>
              <div className='summary-content'>
                <div className='summary-content-section'>
                  <div className='sub-item-title'>
                    <div className='summary-key'> {t(`${translationPath}salary-range`)}: </div>
                    <div className='summary-value'>N/A</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>{t(`${translationPath}industry`)}: </div>
                    <div className='summary-value'>N/A</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>{t(`${translationPath}experince-required`)}: </div>
                    <div className='summary-value'>N/A</div>
                  </div>
                </div>
                <div className='separator-v' />
                <div className='summary-content-section'>
                  <div className='sub-item-title'>
                    <div className='summary-key'>{t(`${translationPath}major`)}:</div>
                    <div className='summary-value'>N/A</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>{t(`${translationPath}career-level`)}: </div>
                    <div className='summary-value'>N/A</div>
                  </div>
                  <div className='sub-item-title'>
                    <div className='summary-key'>{t(`${translationPath}minimum-gpa`)}: </div>
                    <div className='summary-value'>N/A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='job-item'>
            <div className='job-sub-title'>{t(`${translationPath}required-skills`)}</div>
            <div className='required-skills'>
              <div className='job-badge'>Css</div>
              <div className='job-badge'>HTML</div>
              <div className='job-badge'>Reactjs</div>
              <div className='job-badge'>Restful Apis</div>
              <div className='job-badge'>Js</div>
            </div>
          </div>
          <div className='separator-h-1' />
          <div className='job-item'>
            <div className='job-sub-title'>{t(`${translationPath}languages`)}</div>
            <div className='required-skills'>
              <div className='job-badge'>En - Full professional proficiency</div>
              <div className='job-badge'>Ar - Full working proficiency</div>
            </div>
          </div>
          <div className='separator-h-1' />
        </div>
      )}
      {isJobLoading && <Skeleton animation='wave' />}
    </>
  );
};
ActiveJobDetailsComponent.propTypes = {
  activeJob: PropTypes.instanceOf(Object),
  isJobLoading: PropTypes.bool,
};
ActiveJobDetailsComponent.defaultProps = {
  isJobLoading: false,
};
