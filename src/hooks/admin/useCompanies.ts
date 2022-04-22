import graphql from '../../services/graphql';

export interface ICompany {
  id: string;
  idUser: string;
  companyLogo: string;
  country: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    status: string;
  };

  companyName: string;
  industry: string;
  site: string;
  size: string;
  address1: string;
  address2: string;
  city: string;
  userTeamLeader: {
    id: string;
    idUser: string;
    department: string;
    user: {
      id: string;
      name: string;
      lastName: string;
    };
  };

  interestSkills: {
    id: string;
    name: string;
  };
}

interface IResponseCompanies {
  companies: ICompany[];
}

export interface ICompanySend {
  name: string;
  lastName: string;
  email: string;
  status: boolean;
  phone: string;
  teamLeader: string;
  companyName: string;
  country: string;
  companyLogo?: string;
  upload?: HTMLInputElement;
  interestSkills: string;

  industry: string;
  site: string;
  size: string;
  address1: string;
  address2: string;
  city: string;
  facebook: string;
  instagram: string;
  linkedin: string;
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
      name: "${data.name}",
      lastName: "${data.lastName}"
      email: "${data.email}"
      phone: "${data.phone}"
      status: ${data.status}
      country: "${data.country}"
      companyName: "${data.companyName}"
      companyLogo: "${data.companyLogo}"
      industry: "${data.industry}"
      site: "${data.site}"
      size: "${data.size}"
      address1: "${data.address1}"
      address2: "${data.address2}"
      city: "${data.city}"
      facebook: "${data.facebook}"
      instagram: "${data.instagram}"
      linkedin: "${data.linkedin}"
      
      teamLeader: "${data.teamLeader}"
      idInterestSkills:"${data.interestSkills}"
    ){
      companie{
        id
        idUser
        idInterestSkills
        companyName
      }
      user{
        id
        name
        lastName
        email
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
