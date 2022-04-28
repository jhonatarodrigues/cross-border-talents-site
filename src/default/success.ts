const success: { [key: string]: string } = {
  createdUser: 'User created successfully.',
  createdTeamLeader: 'Team leader created successfully.',
  createdRecruiter: 'Recruiter created successfully.',
  createdCompany: 'Company created successfully.',
  createdCandidate: 'Candidate created successfully.',
  createdInterestSkills: 'Interest skill created successfully.',
  createdJobs: 'Job created successfully.',
  createdTestimonial: 'Testimonial created successfully.',
  removeUser: 'User removed successfully.',
  updateUser: 'User updated successfully.',
  updateTeamLeader: 'Team leader updated successfully.',
  removeTeamLeader: 'Team leader removed successfully.',
};

export default function successString(key: string): string {
  return success[key] || '';
}
