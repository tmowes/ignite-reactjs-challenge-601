export function getUserInitials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return `${firstName[0]}${lastName ? lastName[0] : firstName[1]}`
}
