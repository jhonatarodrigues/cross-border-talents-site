const success: { [key: string]: string } = {
  removeUser: 'do you want to remove the user?',
  removeTeamLeader: 'do you want to remove the team leader?',
  removeRecruiter: 'do you want to remove the recruiter?',
  removeCompany: 'do you want to remove the company?',
  removeJobs: 'do you want to remove the job?',
  removeTestimonials: 'do you want to remove the testimonial?',
  removeCandidate: 'do you want to remove the candidate?',
};

export default function infoString(key: string): string {
  return success[key] || '';
}
