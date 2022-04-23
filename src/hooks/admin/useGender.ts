const gender = [
  'Agender',
  'Androgynous',
  'Bigender',
  'Demigirl',
  'Demiguy',
  'Feminine',
  'Femme',
  'Genderqueer',
  'Genderfluid',
  'Intersex',
  'Man',
  'Masculine',
  'Neutrois',
  'Nonbinary',
  'Other',
  'Pangender',
  'Third Gender',
  'Woman',
];

export interface IResponseGender {
  gender: string[];
}

export function GetGender(): IResponseGender {
  return {
    gender,
  };
}
