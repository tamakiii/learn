export function initials(fullName) {  
  let initials = (fullName || '')
    .split(' ')
    .map(name => name[0])
    .join('');

  return initials || 'N/A';
}
