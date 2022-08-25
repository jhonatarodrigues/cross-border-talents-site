import { AxiosResponse } from 'axios';
import Moment from 'moment';
import { htmlToText } from '../../util/format';

import graphql from '../../services/graphql';

export interface IJobs {
  id: string;
  idInterestSkills: string;
  jobTitle: string;
  level: string;
  country: string;
  description: string;
  date: string;
  countryId?: string;
  requirements?: string;
  benefits?: string;
  userRecruiter?: {
    id: string;
  };
  interestSkills: {
    id: string;
    name: string;
  };
}

interface IResponseJobs {
  jobs: IJobs[];
}

interface IResponseJobsPage {
  jobsSearch: {
    jobs: IJobs[];
    infoPage: {
      currentPage: number;
      maxPage: number;
    };
    numberAllCandidates: number;
  };
}

export interface IJobsSend {
  interestSkills: string;
  jobTitle: string;
  level: string;
  country: string;
  description: string;
  date: string;
  requirements: string;
  benefits: string;
  recruiter: string;
}

interface IJobsUpdate extends IJobsSend {
  id: string;
}

export function DeleteJobs(id: string): Promise<AxiosResponse> {
  const query = `
      mutation {
          removeJobs(id: "${id}")
      }
    `;

  return graphql(query);
}

export function UpdateJobs(data: IJobsUpdate): Promise<IJobs> {
  const query = `
      mutation {
          updateJobs(
              id: "${data.id}",
              idInterestSkills: "${data.interestSkills}",
              jobTitle: "${data.jobTitle}",
              level: "${data.level}",
              country: "${data.country}",
              description: "${data.description}",
              date: "${Moment(data.date).format('YYYY-MM-DD HH:mm')}"
              requirements: "${data.requirements}",
              benefits: "${data.benefits}",
              recruiter: "${data.recruiter}"
          ){
              id
              idInterestSkills
              jobTitle
              level
              country
              description
          }
      }
    
    `;

  return graphql(query)
    .then(response => {
      return response.data.updateJobs as IJobs;
    })
    .catch(() => {
      return {} as IJobs;
    });
}
export function AddJobs(data: IJobsSend): Promise<IJobs> {
  const query = `
    mutation {
        createJobs(
            idInterestSkills: "${data.interestSkills}",
            jobTitle: "${data.jobTitle}",
            level: "${data.level}",
            country: "${data.country}",
            description: "${data.description}",
            date: "${Moment(data.date).format('YYYY-MM-DD HH:mm')}"
            requirements: "${data.requirements}",
            benefits: "${data.benefits}",
            recruiter: "${data.recruiter}"
        ){
            id
            idInterestSkills
            jobTitle
            level
            country
            description
        }
    }
  
  `;

  return graphql(query)
    .then(response => {
      return response.data.createJobs as IJobs;
    })
    .catch(() => {
      return {} as IJobs;
    });
}

export function GetJobs(): Promise<IResponseJobs> {
  const query = `
    query {
        jobs {
            id
            idInterestSkills
            jobTitle
            level
            country
            description
            date
            requirements
            benefits
            userRecruiter{
                id
            }
            interestSkills{
                id
                name
            }
        }

    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseJobs;
    })
    .catch(() => {
      return { jobs: [] };
    });
}

export function GetJobsPage({
  search,
  department,
  country,

  page,
  itensPerPage,
}: {
  search?: string;
  department?: string;
  country?: string;

  page?: number;
  itensPerPage?: number;
}): Promise<IResponseJobsPage> {
  const query = `
      query {
        jobsSearch (
            search: "${search || ''}",
            ${department ? `department: "${department}",` : ''}
            ${country ? `country: "${country}",` : ''}
            
            ${page ? `page: ${page},` : ''} 
            ${itensPerPage ? `itensPerPage: ${itensPerPage},` : ''}
        ) {
            jobs{
                id
                idInterestSkills
                jobTitle
                level
                country
                description
                date
                requirements
                benefits
                interestSkills{
                    id
                    name
                }
            } 
            infoPage{
                currentPage
                maxPage
            }
            numberAllCandidates
        }
  
      }
    `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseJobsPage;
    })
    .catch(() => {
      return {
        jobsSearch: {
          jobs: [],
          infoPage: { currentPage: 0, maxPage: 0 },
          numberAllCandidates: 0,
        },
      };
    });
}

export function GetJob({ id }: { id: string }): Promise<IJobs> {
  const query = `
    query{
        job(id: "${id}") {
          id
          idInterestSkills
          jobTitle
          level
          country
          description
          requirements
          benefits
          interestSkills{
            id
            name
          }
          date
        }
      }
      `;

  return graphql(query).then(response => {
    return response.data.job as IJobs;
  });
}
