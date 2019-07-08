export const beTruthy = val => {
  if (Boolean(val) === true) {
    return true
  }

  throw new Error(`Value is not truthy`)
}
