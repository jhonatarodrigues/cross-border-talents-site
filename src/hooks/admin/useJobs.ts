import { AxiosResponse } from 'axios';
import Moment from 'moment';
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
  interestSkills: {
    id: string;
    name: string;
  };
}

interface IResponseJobs {
  jobs: IJobs[];
}

export interface IJobsSend {
  interestSkills: string;
  jobTitle: string;
  level: string;
  country: string;
  description: string;
  date: string;
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
