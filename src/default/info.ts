const success: { [key: string]: string } = {
  removeUser: 'do you want to remove the user?',
  removeTeamLeader: 'do you want to remove the team leader?',
};

export default function infoString(key: string): string {
  return success[key] || '';
}
