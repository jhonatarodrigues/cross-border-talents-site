import graphql from '../../services/graphql';

export interface ICompany {
  id: string;
  idUser: string;
  companyLogo: string;
  country: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: boolean;
  };
}

interface IResponseCompanies {
  companies: ICompany[];
}

export interface IRecruiterSend {
  name: string;
  email: string;
  status: boolean;
  phone: string;
  teamLeader: string;
}

interface IResponseRecruiterSend {
  user: {
    id: string;
    name: string;
    email: string;
  };
  recruiter: {
    id: string;
    idUser: string;
    teamLeader: string;
  };
}

// export function AddRecruiter(
//   data: IRecruiterSend,
// ): Promise<IResponseRecruiterSend> {
//   const query = `
//     mutation {
//       createRecruiter (
//         name: "${data.name}",
//         email: "${data.email}",
//         phone: "${data.phone}",
//         status: ${data.status},
//         teamLeader: ${data.teamLeader},
//       ) {
//         user{
//           id
//           name
//           email
//         }
//         recruiter{
//           id
//           idUser
//           teamLeader
//         }
//       }
//     }
//   `;

//   return graphql(query)
//     .then(response => {
//       return response.data.createRecruiter as IResponseRecruiterSend;
//     })
//     .catch(() => {
//       return {} as IResponseRecruiterSend;
//     });
// }

export function GetCompanies(): Promise<IResponseCompanies> {
  const query = `
    query {
      companies {
        id
        idUser
        companyLogo
        country
        user {
          id
          name
          email
          phone
          status
        }
       
      }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseCompanies;
    })
    .catch(() => {
      return { companies: [] };
    });
}
