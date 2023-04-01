let time = 1500
let interval
function startTimer() {
  clearInterval(interval)
  time = 1500
  interval = setInterval(() => {
    time--
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    document.getElementById('time').innerHTML = `${minutes}:${seconds}`
    if (time === 0) {
      clearInterval(interval)
      alert('时间到！')
    }
  }, 1000)
}
function resetTimer() {
  clearInterval(interval)
  time = 1500
  document.getElementById('time').innerHTML = '25:00'
}
function startBreak() {
  clearInterval(interval)
  time = 300
  interval = setInterval(() => {
    time--
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    document.getElementById('time').innerHTML = `${minutes}:${seconds}`
    if (time === 0) {
      clearInterval(interval)
      alert('休息时间到！')
    }
  }, 1000)
}
