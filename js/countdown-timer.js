const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

const countDown = new Date("20 May 2022, 10:10").getTime(),
  x = setInterval(function () {
    const now = new Date().getTime(),
      distance = countDown - now;

    console.log(
      `${Math.floor(distance / day)} hari ${Math.floor(
        (distance % day) / hour
      )} jam ${Math.floor((distance % hour) / minute)} menit ${Math.floor(
        (distance % minute) / second
      )} detik`
    );

    if (distance < 0) {
      console.log("Waktu Habis");
      clearInterval(x);
    }
  }, 0);
