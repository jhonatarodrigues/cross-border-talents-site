import { AxiosResponse } from 'axios';
import api from '../../services/api';
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
  candidate: {
    birthDate: string;
    country: string;
    gender: string;
    observations: string;
    nativeLanguage: string;
    englishLevel: string;
  };
}

export interface IResponseUser {
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
    query {
        talentPools {
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
        candidate{
            id
            country
            nativeLanguage
            englishLevel
        }
        user {
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

export function GetTalentPoolsPage({
  search,

  limit,
}: {
  search?: string;

  limit?: number;
}): Promise<IResponseUser> {
  const query = `
    query {
        talentPools(
            search: "${search || ''}",
            
            ${limit ? `limit: "${limit}"` : ''}
        ) {
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
          charge
          languages
          user {
            id
            name
            lastName
            email
            phone
          }
          candidate {
            birthDate
            country
            gender
            observations
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

export function AcceptTokenTalentPool({
  token,
}: {
  token: string;
}): Promise<AxiosResponse> {
  const query = `
    mutation {
        addUserTalentPool(token: "${token}") 
    }`;

  return graphql(query);
}
