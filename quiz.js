let currentSlideId = 'quiz-start';

function next(){
    document.querySelector("question-1").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + current + ")").style.display = "block";
}

function prev() {
    let prevSlideId = document.getElementById(currentSlideId).ch    getAttribute("id");
    while (currentSlideId != 'quiz-start') {
        document.querySelector('currentSlideId').style.display = "none";
        document.querySelector("#img_slider img:nth-child(" + current + ")").style.display = "block";
    }
    
}



