import graphql from '../../services/graphql';

export interface IRegion {
  name: string;
  shortCode: string;
}
export interface ICountrie {
  countryName: string;
  countryShortCode: string;
  regions: IRegion[];
}

interface IResponseCountries {
  countries: ICountrie[];
}

export function GetCountries(): Promise<IResponseCountries> {
  const query = `
    query{
        countries{
            countryName
            countryShortCode
            regions{
                name
                shortCode
            }
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
