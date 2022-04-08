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

// export interface IUserSend {
//   name: string;
//   email: string;
//   status: boolean;
//   phone: string;
// }

// export function AddUser(data: IUserSend): Promise<IUser> {
//   const query = `
//     mutation {
//       createUser(name: "${data.name}", email: "${data.email}", status: ${data.status}, phone: "${data.phone}") {
//         id
//         name
//         email
//         phone
//         status
//       }
//     }
//   `;

//   return graphql(query)
//     .then(response => {
//       return response.data.createUser as IUser;
//     })
//     .catch(() => {
//       return {} as IUser;
//     });
// }

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
