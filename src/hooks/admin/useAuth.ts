import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

interface IChangePasswordSend {
  password: string;
  newPassword: string;
}

export function ChangePassword(
  data: IChangePasswordSend,
): Promise<AxiosResponse> {
  const query = `
    mutation{
        changePassword(password: "${data.password}", newPassword: "${data.newPassword}")
    }
  `;

  return graphql(query);
}
