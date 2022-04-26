const error: { [key: string]: string } = {
  'network error': 'Network error: Failed to conect to the server.',
  notAuthorized: 'Not authorized: You are not authorized to access this page.',
  userExists: 'User already exists.',
  getTeamLeaders: 'Failed to get team leaders.',
  getCountries: 'Failed to get countries.',
  getRecruiter: 'Failed to get recruiter.',
  getInterestSkills: 'Failed to get interest skills.',
  removeUser: 'Failed to remove user.',
};

export default function errorString(key: string): string {
  return error[key] || '';
}
