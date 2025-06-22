function navigateTo(page) {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.display = 'none';
    window.location.href = page + '.html';
  }, 3000);
}

function getSignal() {
  const btn = document.getElementById("getSignalBtn");
  const result = document.getElementById("signalResult");
  btn.disabled = true;
  let time = 60;
  const timer = setInterval(() => {
    btn.innerText = `Wait (${time}s)`;
    time--;
    if (time < 0) {
      clearInterval(timer);
      btn.innerText = "Get Signal";
      btn.disabled = false;
    }
  }, 1000);
  result.innerHTML = "<p>Coin: BTC/USDT<br>Signal: Long<br>Price: $65,000<br>Entry: $64,900</p>";
}