export const beSame = (a, b) => {
  if (a === b) {
    return true
  }

  throw new Error(`Values are not the same`)
}
