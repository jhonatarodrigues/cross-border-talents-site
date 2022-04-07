import graphql from '../../services/graphql';

export interface IInterestSkills {
  id: string;
  name: string;
}

interface IResponseInterestSkills {
  interestSkills: IInterestSkills[];
}

export interface IInterestSkillsSend {
  name: string;
}

export function AddInterestSkills(
  data: IInterestSkillsSend,
): Promise<IInterestSkills> {
  const query = `
    mutation {
        createInterestSkill(name: "${data.name}"){
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

export function GetInterestSkills(): Promise<IResponseInterestSkills> {
  const query = `
    query {
        interestSkills{
            id
            name
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
