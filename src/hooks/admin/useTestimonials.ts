import graphql from '../../services/graphql';

export interface ITestimonials {
  id: string;
  name: string;
  picture: string;
  date: string;
  testimonial: string;
  observations: string;
  country: string;
}

interface IResponseTestimonials {
  testimonials: ITestimonials[];
}

// export interface IUserSend {
//   name: string;
//   email: string;
//   status: boolean;
//   phone: string;
// }

// export function AddUser(data: IUserSend): Promise<IUser> {
//   const query = `
//     mutation {
//       createUser(name: "${data.name}", email: "${data.email}", status: ${data.status}, phone: "${data.phone}") {
//         id
//         name
//         email
//         phone
//         status
//       }
//     }
//   `;

//   return graphql(query)
//     .then(response => {
//       return response.data.createUser as IUser;
//     })
//     .catch(() => {
//       return {} as IUser;
//     });
// }

export function GetTestimonials(): Promise<IResponseTestimonials> {
  const query = `
    query {
        testimonials{
            id
            name
            picture
            date
            testimonial
            observations
            country
        }
    
    }
  
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseTestimonials;
    })
    .catch(() => {
      return { testimonials: [] };
    });
}
