const error: { [key: string]: string } = {
  'network error': 'Network error: Failed to connect to the server.',
  notAuthorized: 'Not authorized: You are not authorized to access this page.',
  userExists: 'User already exists.',
  getTeamLeaders: 'Failed to get team leaders.',
  getCountries: 'Failed to get countries.',
  getRecruiter: 'Failed to get recruiter.',
  getInterestSkills: 'Failed to get interest skills.',
  removeUser: 'Failed to remove user.',
  removeTeamLeader: 'Failed to remove team leader or team leader in use.',
  removeCompany: 'Failed to remove company.',
  removeCandidate: 'Failed to remove candidate.',
  removeInterestSkills: 'Failed to remove interest skills.',
  removeJobs: 'Failed to remove job.',
  removeTestimonials: 'Failed to remove testimonial.',
  getJobs: 'Failed to get jobs.',
  getCandidates: 'Failed to get candidates.',
  talentPoolInterestExists: 'Talent pool interest already exists.',
  acceptTerms: 'You need agree to privacy policy to continue.',
  registerModalCompany: 'Failed to register company.',
  tokenTalentPool: 'Failed to verify token.',
  getTestimonials: 'Failed to get testimonials.',
  contactSuccess: 'Failed to send contact.',
  addTeamLeaderCandidate: 'Failed to add team leader in candidate.',
};

export default function errorString(key: string): string {
  return error[key] || '';
}
