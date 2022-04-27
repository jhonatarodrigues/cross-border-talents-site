import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  status: boolean;
}

interface IResponseUser {
  users: IUser[];
}

export interface IUserSend {
  name: string;
  lastName: string;
  email: string;
  status: boolean;
  phone: string;
}
export interface IUserSendUpdate extends IUserSend {
  id: string;
}

export function DeleteUser(id: string): Promise<AxiosResponse> {
  const query = `
    mutation {
        removeUser(id: "${id}")
    }
  `;

  return graphql(query);
}

export function UpdateUser(data: IUserSendUpdate): Promise<IUser> {
  const query = `
      mutation {
        updateUser(
            id: "${data.id}"
            name: "${data.name}", 
            lastName: "${data.lastName}", 
            status: ${data.status}, 
            phone: "${data.phone}"
        ) {
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
      return response.data.updateUser as IUser;
    })
    .catch(() => {
      return {} as IUser;
    });
}

export function AddUser(data: IUserSend): Promise<IUser> {
  const query = `
    mutation {
      createUser(name: "${data.name}", lastName: "${data.lastName}", email: "${data.email}", status: ${data.status}, phone: "${data.phone}") {
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
        lastName
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
