import graphql from '../../services/graphql';

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: boolean;
}

interface IResponseUser {
  users: IUser[];
}

export interface IUserSend {
  name: string;
  email: string;
  status: boolean;
  phone: string;
}

export function AddUser(data: IUserSend): Promise<IUser> {
  const query = `
    mutation {
      createUser(name: "${data.name}", email: "${data.email}", status: ${data.status}, phone: "${data.phone}") {
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
      return response.data.createUser as IUser;
    })
    .catch(() => {
      return {} as IUser;
    });
}

export function GetUsers(): Promise<IResponseUser> {
  const query = `
    query {
      users {
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
      return response.data as IResponseUser;
    })
    .catch(() => {
      return { users: [] };
    });
}
