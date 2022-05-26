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
  removeRecruiter: 'Recruiter removed successfully.',
  updateRecruiter: 'Recruiter updated successfully.',
  removeCompany: 'Company removed successfully.',
  updateCompany: 'Company updated successfully.',
  removeCandidate: 'Candidate removed successfully.',
  updateCandidate: 'Candidate updated successfully.',
  removeInterestSkills: 'Interest skill removed successfully.',
  updateInterestSkills: 'Interest skill updated successfully.',
  removeJobs: 'Job removed successfully.',
  updateJobs: 'Job updated successfully.',
  removeTestimonials: 'Testimonial removed successfully.',
  updateTestimonials: 'Testimonial updated successfully.',
  addTalentPoolInterest: 'Talent pool interest added successfully.',
  updateCandidateTalentPool: 'Candidate and Talent pool updated successfully.',
  createdCandidateTalentPool: 'Candidate and Talent pool created successfully.',
  registerModalCompanySuccess: 'Company registered successfully.',
  tokenTalentPool: 'Token verify successfully.',
  contactSuccess: 'Contact sent successfully.',
  addTeamLeaderCandidate: 'Team leader added in candidate successfully.',
  registerCandidate:
    'Candidate registered successfully. Check your email to get your password.',
  registerCompany:
    'Company registered successfully. Check your email to get your password.',
};

export default function successString(key: string): string {
  return success[key] || '';
}
