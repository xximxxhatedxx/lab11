$(document).ready(() => {
    let current = 1;
    let all_words = [
        "always", "bed", "keyboard",
        "tomorrow", "pain", "sky",
        "apple", "fear", "life", "night"
    ]

    let all_translation = [
        "завжди", "ліжко", "клавіатура",
        "завтра", "біль", "небо",
        "яблуко", "страх", "життя", "ніч"
    ]

    let words = [], translation = [];
    let answers = Array(10).fill(0);
    let correct = 0, wrong = 0;
    let index;
    for ( ; all_words.length > 0; ){
        index = Math.round(Math.random() * all_words.length);
        words.push(...all_words.splice(index, 1));
        translation.push(...all_translation.splice(index, 1));
    }

    $("#card").text(words[0]);
    
    $("#card").click(() => {
        if (answers[current - 1] != 0) return;
        if($("#answer").val().trim().length < 2)
            alert("Write your answer");
        else if ($("#answer").val().trim().toLowerCase() == translation[current - 1]){
            $("#Correct").text(++correct);
            $("#card").css("background-color", "#48ff48");
            answers[current - 1] = 1;
        }
        else {
            $("#Wrong").text(++wrong);
            answers[current - 1] = -1;
            $("#card").css("background-color", "#ff6969");
        }  
        $("#answer").val("");
    })

    $("#previous").click(() => {
        if (current > 1){
            $("#navbarText").text(`${--current}/10`);
            $("#card").text(words[current - 1]);
            if (answers[current - 1] == -1) $("#card").css("background-color", "#ff6969");
            else if (answers[current - 1] == 1) $("#card").css("background-color", "#48ff48");
            else $("#card").css("background-color", "white");
        }
    })

    $("#next").click(() => {
        if (current < 10){
            $("#navbarText").text(`${++current}/10`);
            $("#card").text(words[current - 1]);
            if (answers[current - 1] == -1) $("#card").css("background-color", "#ff6969");
            else if (answers[current - 1] == 1) $("#card").css("background-color", "#48ff48");
            else $("#card").css("background-color", "white");
        }
    })
}) 