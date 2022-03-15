const success: { [key: string]: string } = {
  createdUser: 'User created successfully.',
};

export default function successString(key: string): string {
  return success[key] || '';
}
