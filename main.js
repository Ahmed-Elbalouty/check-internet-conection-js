let h2 = document.getElementById("status");

window.onload = function () {
  if (window.navigator.onLine) {
    h2.innerHTML = "Online";
    h2.style.color = "green";
  } else {
    h2.innerHTML = "Offline";
    h2.style.color = "gray";
  }
};

window.addEventListener("online", function () {
  h2.innerHTML = "Online";
  h2.style.color = "green";
});

window.addEventListener("offline", function () {
  h2.innerHTML = "offline";
  h2.style.color = "gray";
});
