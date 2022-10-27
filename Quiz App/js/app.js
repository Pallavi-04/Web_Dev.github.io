//A particular object containing a single question
const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },

    {
        'que': 'Who is making the Web standards?',
        'a': 'Mozilla',
        'b': 'Microsoft',
        'c': 'Google',
        'd': 'The World Wide Web Consortium',
        'correct': 'c'
    },

    {
        'que': 'Which character is used to indicate an end tag?',
        'a': '*',
        'b': '/',
        'c': '^',
        'd': '<',
        'correct': 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quebox = document.getElementById("quebox");
const optionInputs = document.querySelectorAll('.opti');

const loadQue = () => {
    if (index === total)
        return endQuiz();
    else
        reset();
    const data = questions[index];
    // console.log(data);
    quebox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct)
        right++;
    else
        wrong++;

    index++;
    loadQue();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked)
                answer = input.value;
            // else
            //     console.log("No");
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
        <h3> Thank you for attempting the Quiz! </h3>
        <h2> ${right} / ${total} are correct.</h2>
    </div>`;

}
//iniial call
loadQue();
