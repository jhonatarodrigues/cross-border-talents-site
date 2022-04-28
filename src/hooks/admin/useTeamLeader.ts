import graphql from '../../services/graphql';

export interface ITeamLeader {
  department: string;
  id: string;
  idUser: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    accessLevel: number;
    status: boolean;
    phone: string;
  };
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
  department: string;
}

export function AddTeamLeader(data: ITeamLeaderSend): Promise<ITeamLeader> {
  const query = `
    mutation {
        createTeamLeader(
        name: "${data.name}",
        lastName: "${data.lastName}"
        email: "${data.email}"
        phone: "${data.phone}"
        status: ${data.status}
        department: "${data.department}"
        ) {
        id
        idUser
        department
        user {
            id
            name
            lastName
            email
            phone
            accessLevel
            phone
        }
        
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
        teamLeaders{
            department
            id
            idUser
            user {
                id
                name
                lastName
                email
                accessLevel
                status
                phone
            }
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

export function DeleteTeamLeader(id: string): Promise<boolean> {
  const query = `
    mutation {
        removeTeamLeader(id: "${id}")
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data.removeTeamLeader as boolean;
    })
    .catch(() => {
      return false;
    });
}
