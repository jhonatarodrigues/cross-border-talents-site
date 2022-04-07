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

  userRecruiter: {
    id: string;
    name: string;
    email: string;
    accessLevel: number;
  };
  userTeamLeader: {
    id: string;
    name: string;
    email: string;
    accessLevel: number;
  };
  user: {
    id: string;
    name: string;
    email: string;
    accessLevel: number;
    status: boolean;
  };
}

interface IResponseCandidates {
  candidates: ICandidate[];
}

export interface ICandidateSend {
  name: string;
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

  recruiter: string;
  teamLeader: string;
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

export function AddCandidate(
  data: ICandidateSend,
): Promise<IResponseCandidateSend> {
  const query = `
    mutation {
        createCandidate(
            name: "${data.name}"
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
            
            recruiter: "${data.recruiter}"
            teamLeader: "${data.teamLeader}"
            
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

export function GetListCandidates(): Promise<IResponseCandidates> {
  const query = `
    query{
        candidates{
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
            
            userRecruiter{
                id
                name
                email
                accessLevel
            }
            userTeamLeader{
                id
                name
                email
                accessLevel
            }
            user{
                id
                name
                email
                accessLevel
                status
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