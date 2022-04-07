const success: { [key: string]: string } = {
  createdUser: 'User created successfully.',
  createdTeamLeader: 'Team leader created successfully.',
  createdRecruiter: 'Recruiter created successfully.',
  createdCompany: 'Company created successfully.',
  createdCandidate: 'Candidate created successfully.',
  createdInterestSkills: 'Interest skill created successfully.',
};

export default function successString(key: string): string {
  return success[key] || '';
}
