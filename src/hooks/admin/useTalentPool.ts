import { AxiosResponse } from 'axios';
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
  status: boolean;
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
interface IResponseUniqueTalentPool {
  talentPool: ITalentPools;
}

export interface IAddUserTalentPool {
  idCandidate: number;
  idUser: number;

  profile: string;
  observation: string;
  softwares: string;
  education: string;
  experience: string;
  languages: string;
  status: boolean;
  charge: string;
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

export function GetUniqueTalentPools({
  idUser,
}: {
  idUser: string;
}): Promise<IResponseUniqueTalentPool> {
  const query = `
      query{
        talentPool(idUser:${idUser}){
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

  return graphql(query).then(response => {
    return response.data as IResponseUniqueTalentPool;
  });
}

export function AddUserTalentPool(
  data: IAddUserTalentPool,
): Promise<AxiosResponse> {
  const query = `
  mutation{
    moveUserTalentPool(
        idCandidate: ${data.idCandidate}

        idUser: ${data.idUser}
        charge: "${data.charge}"
        profile: "${data.profile}"
        observation: "${data.observation}"
        softwares: "${data.softwares}"
        education: "${data.education}"
        experience: "${data.experience}"
        languages: "${data.languages}"
        status: ${data.status}
      )
      {
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
      }
    }
    `;

  return graphql(query);
}
