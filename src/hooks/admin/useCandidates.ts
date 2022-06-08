import { AxiosResponse } from 'axios';
import graphql from '../../services/graphql';

export interface ICandidate {
  id: string;
  idUser: string;
  profilePicture: string;
  socialMedia: string;
  birthDate: string;
  country: string;
  gender: string;
  nativeLanguage: string;
  cvUpload: string;
  allowTalentPool: boolean;
  allowContactMe: boolean;
  privacityPolicy: boolean;
  englishLevel: number;
  observations: string;
  idInterestSkills: string;
  talentPoolVerify: boolean;

  userRecruiter: {
    id: string;
    user: {
      id: string;
      name: string;
      lastName: string;
      email: string;
      accessLevel: number;
    };
  };
  userTeamLeader: {
    id: string;
    user: {
      id: string;
      name: string;
      email: string;
      accessLevel: number;
      lastName: string;
    };
  };
  user: {
    id: string;
    name: string;
    email: string;
    accessLevel: number;
    lastName: string;
    status: boolean;
    phone: string;
  };
}

interface IResponseCandidates {
  candidates: ICandidate[];
}

export interface IResponseSearchCandidates {
  searchCandidates: {
    candidates: ICandidate[];
    infoPage: {
      currentPage: number;
      maxPage: number;
    };
  };
}

export interface ICandidateSend {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  status: boolean;

  uploadPicture?: HTMLInputElement;
  uploadCv?: HTMLInputElement;

  profilePicture: string;
  cvUpload: string;

  socialMedia: string;
  birthDate: string;
  country: string;
  gender: string;
  nativeLanguage: string;
  allowTalentPool: boolean;
  allowContactMe: boolean;
  privacityPolicy: boolean;
  englishLevel: string;
  observations: string;

  recruiter: string;
  teamLeader: string;
  interestSkills: string;
}

export interface ICandidateSendLogin {
  name: string;
  lastName: string;
  email: string;
  socialMedia: string;
  allowTalentPool: boolean;
  englishLevel: string;
  interestSkills: string;
}

interface ICandidateUpdate extends ICandidateSend {
  id: string;
}

interface IResponseCandidateSend {
  user: {
    id: string;
    name: string;
    email: string;
    accessLevel: number;
  };
  candidate: {
    id: string;
    idUser: string;
  };
}

export function DeleteCandidate(id: string): Promise<AxiosResponse> {
  const query = `
        mutation {
            removeCandidate(id: "${id}")
        }
      `;

  return graphql(query);
}

export function UpdateCandidate(
  data: ICandidateUpdate,
): Promise<IResponseCandidateSend> {
  const query = `
      mutation {
        updateCandidate(
              id: "${data.id}",
              name: "${data.name}"
              lastName: "${data.lastName}"
              phone: "${data.phone}"
              status: ${data.status}
              
              profilePicture: "${data.profilePicture}"
              socialMedia: "${data.socialMedia}"
              birthDate: "${data.birthDate}"
              country: "${data.country}"
              gender: "${data.gender}"
              nativeLanguage: "${data.nativeLanguage}"
              cvUpload: "${data.cvUpload}"
              allowTalentPool: ${data.allowTalentPool}
              allowContactMe: ${data.allowContactMe}
              privacityPolicy: ${data.privacityPolicy}
              englishLevel: "${data.englishLevel}"
              observations: "${data.observations}"
              
              recruiter: "${data.recruiter}"
              teamLeader: "${data.teamLeader}"
              idInterestSkills: "${data.interestSkills}"
          ) {
              user {
                  id
                  name
                  email
                  accessLevel
              }
              candidate{
                  id
                  idUser
              }
          }
      }
    
    `;

  return graphql(query)
    .then(response => {
      return response.data.updateCandidate as IResponseCandidateSend;
    })
    .catch(() => {
      return {} as IResponseCandidateSend;
    });
}

export function AddCandidate(
  data: ICandidateSend,
): Promise<IResponseCandidateSend> {
  const query = `
    mutation {
        createCandidate(
            name: "${data.name}"
            lastName: "${data.lastName}"
            email: "${data.email}"
            phone: "${data.phone}"
            status: ${data.status}
            
            profilePicture: "${data.profilePicture}"
            socialMedia: "${data.socialMedia}"
            birthDate: "${data.birthDate}"
            country: "${data.country}"
            gender: "${data.gender}"
            nativeLanguage: "${data.nativeLanguage}"
            cvUpload: "${data.cvUpload}"
            allowTalentPool: ${data.allowTalentPool}
            allowContactMe: ${data.allowContactMe}
            privacityPolicy: ${data.privacityPolicy}
            englishLevel: "${data.englishLevel}"
            observations: "${data.observations}"
            
            recruiter: "${data.recruiter}"
            teamLeader: "${data.teamLeader}"
            idInterestSkills: "${data.interestSkills}"
        ) {
            user {
                id
                name
                email
                accessLevel
            }
            candidate{
                id
                idUser
            }
        }
    }
  
  `;

  return graphql(query)
    .then(response => {
      return response.data.createCandidate as IResponseCandidateSend;
    })
    .catch(() => {
      return {} as IResponseCandidateSend;
    });
}

export function AddCandidateLogin(
  data: ICandidateSendLogin,
): Promise<IResponseCandidateSend> {
  const query = `
      mutation {
          createCandidate(
              name: "${data.name}"
              lastName: "${data.lastName}"
              email: "${data.email}"
              status: true
              socialMedia: "${data.socialMedia}"
              englishLevel: "${data.englishLevel}"
              allowTalentPool: ${data.allowTalentPool}
              idInterestSkills: "${data.interestSkills}"
          ) {
              user {
                  id
                  name
                  email
                  accessLevel
              }
              candidate{
                  id
                  idUser
              }
          }
      }
    
    `;

  return graphql(query)
    .then(response => {
      return response.data.createCandidate as IResponseCandidateSend;
    })
    .catch(() => {
      return {} as IResponseCandidateSend;
    });
}

export function GetListCandidates({
  search,
  department,
  recruiter,
}: {
  search?: string;
  department?: string;
  recruiter?: string;
}): Promise<IResponseCandidates> {
  const query = `
    query{
        candidates(search: "${search || ''}", ${
    department ? `department: "${department}"` : ''
  }, ${recruiter ? `recruiter: "${recruiter}"` : ''}) {
            id
            idUser
            profilePicture
            socialMedia
            birthDate
            country
            gender
            nativeLanguage
            cvUpload
            allowTalentPool
            allowContactMe
            privacityPolicy
            englishLevel
            idInterestSkills
            observations
            talentPoolVerify
            
            userRecruiter{
                id
                user{
                    id
                    name
                    lastName
                    email
                    accessLevel
                }
            }
            userTeamLeader{
                id
                user {
                    id
                    name
                    lastName
                    email
                    accessLevel
                }
            }
            user{
                id
                name
                lastName
                email
                accessLevel
                status
                phone
            }
        
        }
    }
  `;

  return graphql(query)
    .then(response => {
      return response.data as IResponseCandidates;
    })
    .catch(() => {
      return { candidates: [] };
    });
}

export function GetCandidatesPage({
  search,
  itensPerPage,
  page,
}: {
  search?: string;
  itensPerPage?: number;
  page?: number;
}): Promise<IResponseSearchCandidates> {
  const query = `
        query{
            searchCandidates(search:"${search}", ${
    itensPerPage ? `itensPerPage:${itensPerPage},` : ''
  } ${page ? `page:${page}` : ''}){
            candidates{
                id
                idUser
                idInterestSkills
                observations
                country
                user{
                name
                lastName
                }
            }
            infoPage{
                currentPage
                maxPage
            }
            }
        }
    `;

  return graphql(query).then(response => {
    return response.data as IResponseSearchCandidates;
  });
}

export function AddTeamLeaderToCandidate({
  idCandidate,
}: {
  idCandidate: string;
}): Promise<AxiosResponse> {
  const query = `
  mutation {
      addTeamLeader(id: ${idCandidate})
  }`;

  return graphql(query);
}
