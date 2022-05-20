const gender = ['Male', 'Female', 'Untold'];

export interface IResponseGender {
  gender: string[];
}

export function GetGender(): IResponseGender {
  return {
    gender,
  };
}
