function distanceFromHqInBlocks (number) {
    return Math.abs(number - 42)
}

function distanceFromHqInFeet (number) {
  distanceFromHqInBlocks(number);
  return number * 264
}
