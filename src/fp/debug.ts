export const trace = (message: string) => <T>(data: T) => {
  // eslint-disable-next-line no-console
  console.log(message, data)
  return data
}
