function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (one, two) {
  return Math.abs(two - one) * 264;
}

function calculatesFarePrice(start, destination) {
  return distanceFromHqInFeet(start) - distanceFromHqInFeet(destination);
}
