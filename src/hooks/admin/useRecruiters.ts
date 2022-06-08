import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export interface IRecruiter {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: boolean;
  interestSkills: string;
  user: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    status: boolean;
  };
  userTeamLeader: {
    id: string;
    idUser: string;
    department: string;
    user: {
      id: string;
      name: string;
      lastName: string;
    };
  };
}

interface IResponseRecruiter {
  recruiters: IRecruiter[];
}

export interface IRecruiterSend {
  name: string;
  lastName: string;
  email: string;
  status: boolean;
  phone: string;
  teamLeader: string;
  department: string;
}

export interface IRecruiterUpdate extends IRecruiterSend {
  id: string;
}

interface IResponseRecruiterSend {
  user: {
    id: string;
    name: string;
    email: string;
  };
  recruiter: {
    id: string;
    idUser: string;
    teamLeader: string;
  };
}

export function DeleteRecruiter(id: string): Promise<AxiosResponse> {
  const query = `
      mutation {
        removeRecruiter(id: "${id}")
      }
    `;

  return graphql(query);
}

export function UpdateRecruiter(
  data: IRecruiterUpdate,
): Promise<IResponseRecruiterSend> {
  const query = `
      mutation {
        updateRecruiter (
          id: "${data.id}",
          name: "${data.name}",
          lastName: "${data.lastName}",
          phone: "${data.phone}",
          status: ${data.status},
          teamLeader: ${data.teamLeader},
          interestSkills: "${data.department}"
        ) {
          user{
            id 
            name
            email
          }
          recruiter{
            id
            idUser
            teamLeader
          }
        }
      }
    `;

  return graphql(query)
    .then(response => {
      return response.data.updateRecruiter as IResponseRecruiterSend;
    })
    .catch(() => {
      return {} as IResponseRecruiterSend;
    });
}

export function AddRecruiter(
  data: IRecruiterSend,
): Promise<IResponseRecruiterSend> {
  const query = `
    mutation {
      createRecruiter (
        name: "${data.name}",
        lastName: "${data.lastName}",
        email: "${data.email}",
        phone: "${data.phone}",
        status: ${data.status},
        teamLeader: ${data.teamLeader},
        interestSkills: "${data.department}"
      ) {
        user{
          id 
          name
          email
        }
        recruiter{
          id
          idUser
          teamLeader
        }
      }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data.createRecruiter as IResponseRecruiterSend;
    })
    .catch(() => {
      return {} as IResponseRecruiterSend;
    });
}

export function GetRecruiters(): Promise<IResponseRecruiter> {
  const query = `
    query {
      recruiters {
        id
        idUser
        teamLeader
        interestSkills
        user {
          id
          name
          lastName
          email
          phone
          status
        }
        userTeamLeader{
            id
            idUser
            department
            user {
                id
                name
                lastName
            }
        }
      }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseRecruiter;
    })
    .catch(() => {
      return { recruiters: [] };
    });
}

export function GetRecruitersIdUser({
  idUser,
}: {
  idUser: string;
}): Promise<IResponseRecruiter> {
  const query = `
      query {
        recruiters(idUser: "${idUser}") {
          id
          idUser
          user {
            id
            name
            lastName
            email
          }
        }
      }
    `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseRecruiter;
    })
    .catch(() => {
      return { recruiters: [] };
    });
}
