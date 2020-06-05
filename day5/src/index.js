// import "./styles.css";
const time = document.querySelector("h2");
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const CALC_DATE = 24 * 60 * 60;
const CALC_HOUR = 60 * 60;
const CALC_MINUTE = 60;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();

  let residuum;
  const total = Math.floor((xmasDay.getTime() - now) / 1000);
  const date = Math.floor(total / CALC_DATE);
  residuum = total % CALC_DATE;
  const hour = Math.floor(residuum / CALC_HOUR);
  residuum = residuum % CALC_HOUR;
  const minute = Math.floor(residuum / CALC_MINUTE);
  residuum = residuum % CALC_MINUTE;

  time.textContent = `${date}d ${hour < 10 ? `0${hour}` : hour}h ${
    minute < 10 ? `0${minute}` : minute
  }m ${residuum < 10 ? `0${residuum}` : residuum}s`;
}

(() => {
  getTime();
  setInterval(getTime, 1000);
})();
