import graphql from '../../services/graphql';

export interface ICountrie {
  code: string;
  code3: string;
  name: string;
  number: string;
}

interface IResponseCountries {
  countries: ICountrie[];
}

export function GetCountries(): Promise<IResponseCountries> {
  const query = `
    query {
      countries {
       code
       code3
       name
       number
       
      }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseCountries;
    })
    .catch(() => {
      return { countries: [] };
    });
}
