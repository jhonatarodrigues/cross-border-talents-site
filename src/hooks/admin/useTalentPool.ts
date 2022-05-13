import graphql from '../../services/graphql';

export interface ITalentPools {
  id: number;
  idCandidate: number;
  idUser: number;
  idTeamLeader: number;
  data: Date;
  profile: string;
  observation: string;
  softwares: string;
  education: string;
  experience: string;
  languages: string;
  status: string;
  charge: string;
  user: {
    name: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

interface IResponseUser {
  talentPools: ITalentPools[];
}

export function GetTalentPools(): Promise<IResponseUser> {
  const query = `
    query{
        talentPools{
            id
            idCandidate
            idUser
            idTeamLeader
            data
            profile
            observation
            softwares
            education
            experience
            languages
            status
            charge
            user{
                id
                name
                lastName
                email
                phone
            }
            
        }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseUser;
    })
    .catch(() => {
      return {
        talentPools: [],
      };
    });
}
