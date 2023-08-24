let students = [
    {
        name: 'Gabriel',
        score1: 8.0,
        score2: 9.0, 
    },
    {
        name: 'Suzi',
        score1: 10.0,
        score2: 8.0, 
    },
    {
        name: 'Adriana',
        score1: 5.0,
        score2: 6.0, 
    }
];

let finalMedian;

for($i = 0; $i < students.length; $i++){
    let median = (Number(students[$i].score1) + Number(students[$i].score2)) / 2;
    let aproveMessage = `Não foi dessa vez, ${students[$i].name}! Tente novamente!`
    if(median >= 7){
        aproveMessage = `Parabéns! ${students[$i].name}! Você foi aprovado(a) no concurso!`
    }
    alert(`
        A média do(a) aluno(a) ${students[$i].name} é: ${median}
        ${aproveMessage}
    `)
}
