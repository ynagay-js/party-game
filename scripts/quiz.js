window.onload = () => {
  let currentSlideId = ".quiz-start";
  let nextSlideId = ".question-";
  let prevSlideId = "";
  let questionCounter = 1;
  let numberOfQuestion = 2;
  let nextButton = document.querySelector(".next");
  let prevButton = document.querySelector(".prev");

  function next() {
    if (currentSlideId === ".quiz-start") {
      prevSlideId = currentSlideId;
      document.querySelector(prevSlideId).style.display = "none";
      nextSlideId =
        nextSlideId
          .split("")
          .filter((char) => isNaN(char))
          .join("") + questionCounter;
      currentSlideId = nextSlideId;
      document.querySelector(currentSlideId).style.display = "block";
    } else if (questionCounter < numberOfQuestion) {
      questionCounter++;
      prevSlideId = currentSlideId;
      document.querySelector(prevSlideId).style.display = "none";
      nextSlideId =
        nextSlideId
          .split("")
          .filter((char) => isNaN(char))
          .join("") + questionCounter;
      currentSlideId = nextSlideId;
      document.querySelector(currentSlideId).style.display = "block";
    }
  }

  function prev() {
    if (currentSlideId === ".question-1") {
      prevSlideId = currentSlideId;
      document.querySelector(prevSlideId).style.display = "none";
      currentSlideId = ".quiz-start";
      document.querySelector(currentSlideId).style.display = "block";
    } else if (
      currentSlideId !== ".quiz-start" &&
      questionCounter <= numberOfQuestion
    ) {
      questionCounter--;
      prevSlideId = currentSlideId;
      document.querySelector(prevSlideId).style.display = "none";
      nextSlideId =
        nextSlideId
          .split("")
          .filter((char) => isNaN(char))
          .join("") + questionCounter;
      currentSlideId = nextSlideId;
      document.querySelector(currentSlideId).style.display = "block";
    }
  }

  nextButton.addEventListener("click", next);
  prevButton.addEventListener("click", prev);

  // Timer functionality

  //modal window
  let modal = document.getElementById("modal");
  let timerBtn = document.getElementById("timer-button");
  let closeBtn = document.getElementsByClassName("close")[0];
  let timerDisplay = document.querySelector(".timer-display");
  let timerValue = document.querySelector(".timer-display").innerHTML;
  let startTimerButton = document.querySelector(".start");
  let stopTimerButton = document.querySelector(".stop");
  let countdownInterval;

  timerBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  //modal window

  //   timerDisplay.oninput = function () {
  //     timerValue = document.getElementById("timer-display").innerHTML;
  //   };

  startTimerButton.addEventListener("click", () => {
    let countdown = timerValue;
    countdownInterval = setInterval(() => {
      countdown--;
      console.log(countdown);
      document.querySelector(".timer-display").textContent = countdown;
      if (countdown <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  });

  stopTimerButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    document.querySelector(".timer-display").textContent = timerValue;
  });
};
