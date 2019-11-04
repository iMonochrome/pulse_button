function onPulse() {
  let pulse = document.getElementById("pulse");
  pulse.classList.add("active");
  setTimeout(function() {
    pulse.classList.remove("active");
  }, 700);
}
