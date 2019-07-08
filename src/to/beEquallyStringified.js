export const beEquallyStringified = (objA, objB) => {
  if (JSON.stringify(objA) === JSON.stringify(objB)) {
    return true
  }

  throw new Error(`Values are not equal by JSON.stringify`)
}
