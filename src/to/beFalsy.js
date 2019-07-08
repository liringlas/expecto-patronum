export const beFalsy = val => {
  if (Boolean(val) === false) {
    return true
  }

  throw new Error(`Value is not falsy`)
}
