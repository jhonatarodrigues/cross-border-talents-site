import { AxiosResponse } from 'axios';
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

interface IResponseTestimonialsSearch {
  testimonialsSearch: {
    testimonials: ITestimonials[];
    infoPage: {
      currentPage: number;
      maxPage: number;
    };
  };
}

interface IITestimonialUpdate extends ITestimonialSend {
  id: string;
}

export function DeleteTestimonial(id: string): Promise<AxiosResponse> {
  const query = `
      mutation {
          removeTestimonial(id: "${id}")
      }
    `;

  return graphql(query);
}

export function UpdateTestimonial(
  data: IITestimonialUpdate,
): Promise<ITestimonials> {
  const query = `
      mutation {
          updateTestimonial(
              id: "${data.id}",
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
      return response.data.updateTestimonial as ITestimonials;
    })
    .catch(() => {
      return {} as ITestimonials;
    });
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

export function GetTestimonialsSearch({
  search,
  page,
  itensPerPage,
}: {
  search?: string;
  page?: number;
  itensPerPage?: number;
}): Promise<IResponseTestimonialsSearch> {
  const query = `
    query{
        testimonialsSearch(search: "${search || ''}",  ${
    page ? `page: ${page},` : ''
  } ${itensPerPage ? `itensPerPage: ${itensPerPage},` : ''}){
          testimonials{
            id
            name
            picture
            date
            testimonial
            observations
            country
          }
          infoPage{
            currentPage
            maxPage
          }
        }
      }
    `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseTestimonialsSearch;
    })
    .catch(() => {
      return {
        testimonialsSearch: {
          testimonials: [],
          infoPage: {
            currentPage: 0,
            maxPage: 0,
          },
        },
      };
    });
}
