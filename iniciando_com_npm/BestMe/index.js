const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que poderia fazer para melhorar?",
    "O que mais gosto de fazer?",
    "O que me deixou feliz hoje",
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n\n");
}

ask();


const answers = []

process.stdin.on("data", data => {
    answers.push(process.stdout.write(data.toString().trim() + '\n'))
    answers.length < questions.length ? ask(answers.length) : process.exit();
});