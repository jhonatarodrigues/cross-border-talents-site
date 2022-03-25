const success: { [key: string]: string } = {
  createdUser: 'User created successfully.',
  createdTeamLeader: 'Team leader created successfully.',
  createdRecruiter: 'Recruiter created successfully.',
  createdCompany: 'Company created successfully.',
};

export default function successString(key: string): string {
  return success[key] || '';
}
