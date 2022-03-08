function attachEventsListeners() {
  let inputDays = document.querySelector("#days");
  let inputHours = document.querySelector("#hours");
  let inputMinutes = document.querySelector("#minutes");
  let inputSeconds = document.querySelector("#seconds");

  let obj = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  document.querySelector("#daysBtn").addEventListener("click", convert);
  document.querySelector("#hoursBtn").addEventListener("click", convert);
  document.querySelector("#minutesBtn").addEventListener("click", convert);
  document.querySelector("#secondsBtn").addEventListener("click", convert);

  function timer(value, unit) {
    let days = value / obj[unit];

    return {
      days: days,
      hours: days * obj.hours,
      minutes: days * obj.minutes,
      seconds: days * obj.seconds,
    };
  }

  function convert(e) {
    let input = e.target.parentElement.querySelector('input[type="text"]');
    let time = timer(Number(input.value), input.id);

    inputDays.value = time.days;
    inputHours.value = time.hours;
    inputMinutes.value = time.minutes;
    inputSeconds.value = time.seconds;
  }
}
