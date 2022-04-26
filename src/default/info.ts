const success: { [key: string]: string } = {
  removeUser: 'do you want to remove the user?',
};

export default function infoString(key: string): string {
  return success[key] || '';
}
