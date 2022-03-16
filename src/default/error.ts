const error: { [key: string]: string } = {
  'network error': 'Network error: Failed to conect to the server.',
  notAuthorized: 'Not authorized: You are not authorized to access this page.',
  userExists: 'User already exists.',
};

export default function errorString(key: string): string {
  return error[key] || '';
}