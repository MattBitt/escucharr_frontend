export const msToTime = (duration) => {
  const milliseconds = Math.floor((duration % 1000) / 100)
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  const hoursStr = hours < 10 ? '0' + hours : hours
  const minutesStr = minutes < 10 ? '0' + minutes : minutes
  const secondsStr = seconds < 10 ? '0' + seconds : seconds
  console.log(hoursStr + ':' + minutesStr + ':' + secondsStr)
  return hoursStr + ':' + minutesStr + ':' + secondsStr
}

export const timeToMs = (durationString) => {
  const a = durationString.split(':') // split it at the colons
  const milliseconds = (+a[0] * 60 * 60 + +a[1] * 60 + +a[2]) * 1000
  return milliseconds
}

export const combineHMSInputs = (hours, minutes, seconds) => {
  const milliseconds = (+hours * 60 * 60 + +minutes * 60 + +seconds) * 1000
  return milliseconds
}
