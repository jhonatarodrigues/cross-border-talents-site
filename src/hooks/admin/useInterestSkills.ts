import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export interface IInterestSkills {
  id: string;
  name: string;
  internal: boolean;
}

interface IResponseInterestSkills {
  interestSkills: IInterestSkills[];
}

export interface IInterestSkillsSend {
  name: string;
  internal: boolean;
}
interface IInterestSkillsUpdate extends IInterestSkillsSend {
  id: string;
}

export function UpdateInterestSkills(
  data: IInterestSkillsUpdate,
): Promise<IInterestSkills> {
  const query = `
      mutation {
        updateInterestSkill(id: "${data.id}", name: "${data.name}", internal:${data.internal}){
              id
              name
            }
      }
    `;

  return graphql(query)
    .then(response => {
      return response.data.updateInterestSkill as IInterestSkills;
    })
    .catch(() => {
      return {} as IInterestSkills;
    });
}

export function AddInterestSkills(
  data: IInterestSkillsSend,
): Promise<IInterestSkills> {
  const query = `
    mutation {
        createInterestSkill(name: "${data.name}", internal:${data.internal}){
            id
            name
          }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data.createInterestSkill as IInterestSkills;
    })
    .catch(() => {
      return {} as IInterestSkills;
    });
}

export function DeleteInterestSkills(id: string): Promise<AxiosResponse> {
  const query = `
      mutation {
        removeInterestSkill(id: "${id}")
      }
    `;

  return graphql(query);
}

export function GetInterestSkills(): Promise<IResponseInterestSkills> {
  const query = `
    query {
        interestSkills{
            id
            name
            internal
        }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseInterestSkills;
    })
    .catch(() => {
      return { interestSkills: [] };
    });
}
