export const convertDurationFormatRU = (minutes) => {
  return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
}

export const convertDurationFormatEN = (minutes) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
