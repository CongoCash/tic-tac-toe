// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    let selections = {"zero":"a", "one":"b", "two":"c", "three":"d",
        "four":"e", "five":"f", "six":"g", "seven":"h", "eight":"i"}
    let counter = 0;
    let xScore = 0;
    let oScore = 0;
    let win = false;
        $("#zero, #one,#two,#three,#four,#five,#six,#seven,#eight").on("click", function () {
            if (win===false) {
                if (this.innerHTML.length != 1) {
                    counter += 1;
                    if (counter % 2 === 0) {
                        this.innerHTML = "X";
                        selections[this.id] = "X";
                        $(".user").text("O's turn");

                    }
                    else {
                        this.innerHTML = "O";
                        selections[this.id] = "O";
                        $(".user").text("X's turn");
                    }
                }
            }
            checkWinner();
            if (win === true) {
                selections = {"zero":"a", "one":"b", "two":"c", "three":"d",
                    "four":"e", "five":"f", "six":"g", "seven":"h", "eight":"i"}
            }
        });
    console.log(win+"zzz");
    function checkWinner() {
        if (counter >= 5) {
            if ((selections["zero"] === selections["one"] && selections["zero"] === selections["two"]) ||
                (selections["zero"] === selections["three"] && selections["zero"] === selections["six"]) ||
                (selections["zero"] === selections["four"] && selections["zero"] === selections["eight"]) ||
                (selections["two"] === selections["five"] && selections["two"] === selections["eight"]) ||
                (selections["two"] === selections["four"] && selections["two"] === selections["six"]) ||
                (selections["three"] === selections["four"] && selections["three"] === selections["five"]) ||
                (selections["one"] === selections["four"] && selections["one"] === selections["seven"]) ||
                (selections["six"] === selections["seven"] && selections["six"] === selections["eight"])
            ) {
                if (counter % 2 === 0) {
                    alert("X is the winner!  Click reset to play again.");
                    $('.user').html("X is the winner!");
                    win = true;
                    xScore += 1;
                    $(".x-score").html(`X score: ${xScore}`);
                }
                else {
                    alert("O is the winner!  Click reset to play again.");
                    $('.user').html("O is the winner!");
                    win = true;
                    oScore += 1;
                    $(".o-score").html(`O score: ${oScore}`);
                }
            }
            if (counter === 9) {
                alert("Tie!");
                win = true;
            }
        }
    }

    $(".btn").on("click", function() {
        counter = 0;
        selections = {"zero":"a", "one":"b", "two":"c", "three":"d",
            "four":"e", "five":"f", "six":"g", "seven":"h", "eight":"i"}
        for (i = 0; i<9; i++) {
            $(".box")[i].innerHTML = "";
        }
        $(".user").text("O's turn");
        win = false;
    })

});
