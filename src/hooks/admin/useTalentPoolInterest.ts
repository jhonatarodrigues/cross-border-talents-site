import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export interface ITalentPoolInterest {
  id: number;
  idTalentPool: number;
  idCompany: number;
}

interface IResponseTalentPoolInterest {
  addTalentPoolInterest: ITalentPoolInterest[];
}

export function AddTalentPoolInterest({
  idTalentPool,
}: {
  idTalentPool: number;
}): Promise<AxiosResponse> {
  const query = `
    mutation {
        addTalentPoolInterest(idTalentPool: ${idTalentPool}) {
            id
            idTalentPool
            idCompany
        }
    }
  
  `;

  return graphql(query);
}

export function CheckTalentPoolInterest({
  idTalentPool,
}: {
  idTalentPool: number;
}): Promise<AxiosResponse> {
  const query = `
    query{
        talentPoolInterests(idTalentPool: ${idTalentPool})
      }
    
    `;

  return graphql(query);
}
