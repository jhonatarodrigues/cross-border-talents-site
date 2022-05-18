import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export function SendContact({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<AxiosResponse> {
  const query = `
    mutation {
        sendContact(name: "${name}", email: "${email}", subject: "${subject}", message: "${message}")
    }
  `;

  return graphql(query);
}
