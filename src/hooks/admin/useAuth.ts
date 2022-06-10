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

export function ForgotPassword({
  email,
}: {
  email: string;
}): Promise<AxiosResponse> {
  const query = `
    mutation{
        forgotPassword(email: "${email}")
    }
 `;

  return graphql(query);
}
