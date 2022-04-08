import graphql from '../../services/graphql';

export interface IJobs {
  id: string;
  idInterestSkills: string;
  jobTitle: string;
  level: string;
  country: string;
  description: string;
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
