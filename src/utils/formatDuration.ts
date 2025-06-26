export default function formatDuration(weeks: number): string {
  if (weeks >= 52) {
    const years = Math.round(weeks / 52)
    return years === 1 ? '1 año' : `${years} años`
  }
  if (weeks > 4) {
    const months = Math.ceil(weeks / 4)
    return months === 1 ? '1 mes' : `${months} meses`
  }
  return weeks === 1 ? '1 semana' : `${weeks} semanas`
}

