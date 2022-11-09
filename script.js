function myFunction() {
    // location.replace("donation.html")
    window.location.href = "donation.html";
  }
  function myHome() {
    // location.replace("donation.html")
    window.location.href = "index.html";
  }
  function myReverse() {
    // location.replace("donation.html")
    window.location.href = "index.html";
  }
  function myForward() {
    // location.replace("donation.html")
    window.location.href = "details.html";
  }
  function myAddress() {
    let myDiv = document.querySelector(".hide");
    let myHeight = document.querySelector(".box")
    myHeight.style.display.height ="220vh";
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }
  }
  function myReverseTwo() {
    // location.replace("donation.html")
    window.location.href = "donation.html";
  }
  function myForwardTwo() {
    // location.replace("donation.html")
    window.location.href = "payment.html";
  }