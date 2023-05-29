var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count+=10000;
      counterElement.textContent = count;
    }