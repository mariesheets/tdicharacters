var question_one, question_two, question_three, question_four, question_five, question_six, question_seven, question_eight, question_nine, question_ten, question_eleven, question_twelve, question_thirteen, question_fourteen, question_fifteen, question_sixteen, question_seventeen, question_eighteen, question_nineteen, question_twenty, question_twentyone;
var answer

questions = [""]
questions[1] = {"question": "screaming gopher or killer bass?", "answers": {"answer1": "screaming gopher", "next_question1": 2, "answer2": "killer bass", "next_question2": 12}}
questions[2] = {"question": "boy or girl?", "answers": {"answer1": "boy", "next_question1": 3, "answer2": "girl", "next_question2": 7}}
questions[3] = {"question": "cannonically attractive?", "answers": {"answer1": "yes", "next_question1": 4, "answer2": "no", "next_question2": 5}}
questions[4] = {"question": "are they obsessed with vanity", "answers": {"answer1": "yes", "next_question1": "Justin", "answer2": "no", "next_question2": "Trent"}}
questions[5] = {"question": "are they a schemer?", "answers": {"answer1": "yes", "next_question1": "Noah", "answer2":"no", "next_question2": 6}}
questions[6] = {"question": "are they friends with everyone?", "answers": {"answer1": "yes", "next_question1": "Owen", "answer2": "no", "next_question2": "Cody"}}
questions[7] = {"question": "are they wild?", "answers": {"answer1": "yes", "next_question1": "Izzy", "answer2": "no", "next_question2": 8}}
questions[8] = {"question": "do they have more friends than enemies?", "answers": {"answer1": "yes", "next_question1": 9, "answer2": "no", "next_question2": "Heather"}}
questions[9] = {"question": "are they stupid?", "answers": {"answer1": "yes", "next_question1": 10, "answer2": "no", "next_question2": 11}}
questions[10] = {"question": "are they popular?", "answers": {"answer1": "yes", "next_question1": "Lindsey", "answer2":"no", "next_question2": "Beth"}}
questions[11] = {"question": "are they emo?", "answers": {"answer1": "yes", "next_question1": "Gwen", "answer2": "no", "next_question2": "Leshawna"}}
questions[12] = {"question": "boy or girl?", "answers": {"answer1": "boy", "next_question1": 13, "answer2": "girl", "next_question2": 18}}
questions[13] = {"question": "do they consider themselves weird or an outcast?", "answers": {"answer1": "yes", "next_question1": 14, "answer2": "no", "next_question2": 16}}
questions[14] = {"question": "do they become a zombie?", "answers": {"answer1": "yes", "next_question1": "Ezekiel", "answer2": "no", "next_question2": 15}}
questions[15] = {"question": "do they practice martial arts?", "answers": {"answer1": "yes", "next_question1": "Harold", "answer2": "no", "next_question2": "Duncan"}}
questions[16] = {"question": "are they a self proclaimed jock?", "answers": {"answer1": "yes", "next_question1": 17, "answer2": "no", "next_question2": "DJ"}}
questions[17] = {"question": "do they know surfer lingo?", "answers":{"answer1": "yes", "next_question1": "Geoff", "answer2": "no", "next_question2": "Tyler"}}
questions[18] = {"question": "are they always found in a pair?", "answers": {"answer1": "yes", "next_question1": 19, "answer2": "no", "next_question2": 20}}
questions[19] = {"question": "are they the forgotten, overlooked one?", "answers": {"answer1": "yes", "next_question1": "Sadie", "answer2":"no", "next_question2": "Katie"}}
questions[20] = {"question": "are they mean?", "answers": {"answer1": "yes", "next_question1": 21, "answer2": "no", "next_question2": "Bridgette"}}
questions[21] = {"question": "are they athletic?", "answers": {"answer1": "yes", "next_question1": "Eva", "answer2": "no", "next_question2": "Courtney"}}

var current_question = questions[1]

function display_question(answer){

    var yesbox = document.getElementById("yesbox")
    var nobox = document.getElementById("nobox")

if (answer == "yes") {
    if (current_question['answers']['next_question1'] == "Justin"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'justin.html'
    }    
    if (current_question['answers']['next_question1'] == "Noah"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'noah.html'
    }    
    if (current_question['answers']['next_question1'] == "Owen"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'owen.html'
    }  
    if (current_question['answers']['next_question1'] == "Izzy"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'izzy.html'
    }    
    if (current_question['answers']['next_question1'] == "Lindsey"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'lindsey.html'
    }
    if (current_question['answers']['next_question1'] == "Gwen"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'gwen.html'
    }
    if (current_question['answers']['next_question1'] == "Ezekiel"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'ezekiel.html'
    }
    if (current_question['answers']['next_question1'] == "Eva"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'eva.html'
    }
    if (current_question['answers']['next_question1'] == "Harold"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'harold.html'
    }
    if (current_question['answers']['next_question1'] == "Geoff"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'geoff.html'
    }
    if (current_question['answers']['next_question1'] == "Sadie"){
        console.log("boo")
        yesbox.onclick= window.location.href = 'sadie.html'
    }
    else{
        current_question = questions[current_question['answers']['next_question1']]
        current_question['answers']['next_question1']
    }}
    if (answer == "no") {
        if (current_question['answers']['next_question2'] == "Trent"){
            console.log("boo")
            nobox.onclick= window.location.href = 'trent.html'
        }
        if (current_question['answers']['next_question2'] == "Cody"){
            console.log("boo")
            nobox.onclick= window.location.href = 'cody.html'
        }
        if (current_question['answers']['next_question2'] == "Heather"){
            console.log("boo")
            nobox.onclick= window.location.href = 'heather.html'
        }
        if (current_question['answers']['next_question2'] == "Beth"){
            console.log("boo")
            nobox.onclick= window.location.href = 'beth.html'
        }
        if (current_question['answers']['next_question2'] == "Leshawna"){
            console.log("boo")
            nobox.onclick= window.location.href = 'leshawna.html'
        }
        if (current_question['answers']['next_question2'] == "Courtney"){
            console.log("boo")
            nobox.onclick= window.location.href = 'courtney.html'
        }
        if (current_question['answers']['next_question2'] == "Bridgette"){
            console.log("boo")
            nobox.onclick= window.location.href = 'bridgette.html'
        }
        if (current_question['answers']['next_question2'] == "Duncan"){
            console.log("boo")
            nobox.onclick= window.location.href = 'duncan.html'
        }
        if (current_question['answers']['next_question2'] == "DJ"){
            console.log("boo")
            nobox.onclick= window.location.href = 'dj.html'
        }
        if (current_question['answers']['next_question2'] == "Tyler"){
            console.log("boo")
            nobox.onclick= window.location.href = 'tyler.html'
        }
        if (current_question['answers']['next_question2'] == "Katie"){
            console.log("boo")
            nobox.onclick= window.location.href = 'katie.html'
        }
        else {
        current_question = questions[current_question['answers']['next_question2']]
        current_question['answers']['next_question2']
        }
    }
    console.log(current_question)
    document.getElementById("questionbox").innerHTML = current_question['question']
   yesbox.innerHTML = current_question['answers']['answer1']
    nobox.innerHTML = current_question['answers']['answer2']
}



