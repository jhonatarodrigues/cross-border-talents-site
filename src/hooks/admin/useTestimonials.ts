import Moment from 'moment-timezone';
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

export interface ITestimonialSend {
  name: string;
  picture: string;
  date: string;
  testimonial: string;
  observations: string;
  country: string;
  upload?: HTMLInputElement;
}

export function AddTestimonial(data: ITestimonialSend): Promise<ITestimonials> {
  const query = `
    mutation {
        createTestimonial(
            name: "${data.name}",
            picture: "${data.picture}",
            date: "${Moment(data.date).format('YYYY-MM-DD HH:mm')}",
            testimonial: "${data.testimonial}",
            observations: "${data.observations}",
            country: "${data.country}"
        ){
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
      return response.data.createTestimonial as ITestimonials;
    })
    .catch(() => {
      return {} as ITestimonials;
    });
}

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
