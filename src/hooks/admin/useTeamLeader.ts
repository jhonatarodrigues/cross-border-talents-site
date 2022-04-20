import graphql from '../../services/graphql';

export interface ITeamLeader {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: boolean;
}

interface IResponseTeamLeader {
  teamLeaders: ITeamLeader[];
}

export interface ITeamLeaderSend {
  name: string;
  lastName: string;
  email: string;
  status: boolean;
  phone: string;
}

export function AddTeamLeader(data: ITeamLeaderSend): Promise<ITeamLeader> {
  const query = `
    mutation {
      createTeamLeader(name: "${data.name}", lastName: "${data.lastName}", email: "${data.email}", status: ${data.status}, phone: "${data.phone}") {
        id
        name
        email
        phone
        status
      }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data.createTeamLeader as ITeamLeader;
    })
    .catch(() => {
      return {} as ITeamLeader;
    });
}

export function GetTeamLeaders(): Promise<IResponseTeamLeader> {
  const query = `
    query {
      teamLeaders {
        id
        name
        email
        phone
        status
      }

    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseTeamLeader;
    })
    .catch(() => {
      return { teamLeaders: [] };
    });
}
