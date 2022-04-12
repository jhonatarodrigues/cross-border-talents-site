import { string } from 'yup';
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

export interface ICompanySend {
  name: string;
  email: string;
  status: boolean;
  phone: string;
  teamLeader: string;
  companyName: string;
  country: string;
  companyLogo?: string;
  upload?: HTMLInputElement;
  interestSkills: string;
}

interface IResponseCompanySend {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  companie: {
    id: string;
    idUser: string;
    country: string;
    companyLogo: string;
  };
}

export function AddCompany(data: ICompanySend): Promise<IResponseCompanySend> {
  const query = `
    mutation {
            createCompanie(
            name: "${data.name}"
            email: "${data.email}"
            phone: "${data.phone}"
            status: ${data.status}
            country: "${data.country}"
            companyName: "${data.companyName}"
            teamLeader: "${data.teamLeader}"
            companyLogo: "${data.companyLogo}"
            idInterestSkills: "${data.interestSkills}"
        ) {
            user {
                id
                name
                email
                phone
                accessLevel
            }
            companie {
                id
                idUser
                country
                companyLogo
            }
        }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data.createCompanie as IResponseCompanySend;
    })
    .catch(() => {
      return {} as IResponseCompanySend;
    });
}

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
