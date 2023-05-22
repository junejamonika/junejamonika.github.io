$(document).ready(function () {
  // Get the modal
  var modal = document.getElementById("discount-modal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  function openModal() {
    modal.style.display = "block";
  }

  openModal();

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("hour-digit-one").innerHTML = String(hours).length > 1 ? String(hours)[0] : 0;
    document.getElementById("hour-digit-two").innerHTML = String(hours).length > 1 ? String(hours)[1] : String(hours)[0];

    document.getElementById("min-digit-one").innerHTML = String(minutes).length > 1 ? String(minutes)[0] : 0;
    document.getElementById("min-digit-two").innerHTML = String(minutes).length > 1 ? String(minutes)[1] : String(minutes)[0];

    document.getElementById("sec-digit-one").innerHTML = String(seconds).length > 1 ? String(seconds)[0] : 0;
    document.getElementById("sec-digit-two").innerHTML = String(seconds).length > 1 ? String(seconds)[1] : String(seconds)[0];

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});
