export default function getUpdatedRemainingTime (remainingTime) {
  return remainingTime - (Date.now() - window.countStart)
}
