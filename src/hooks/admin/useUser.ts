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
    .catch(error => {
      console.log('error', error);
      return { users: [] };
    });
}
