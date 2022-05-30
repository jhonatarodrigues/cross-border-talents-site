import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export interface IContract {
  id: string;
  name: string;
  color: string;
}

export interface IResponseContract {
  typeContracts: IContract[];
}

export function GetContracts(): Promise<IResponseContract> {
  const query = `
    query {
        typeContracts {
        id
        name
        color
        }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseContract;
    })
    .catch(() => {
      return { typeContracts: [] };
    });
}
