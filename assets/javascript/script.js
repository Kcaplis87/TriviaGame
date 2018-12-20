var nbaQuestions = [{

    question: "Who has the most points scored of all time in NBA?",
    answer: ['A. Wilt Chamberlain', 'B. Michael Jordan', 'C. Kobe Bryant', 'D. Kareem Abdul-Jabbar'],
    correctAnswer: 3,
},
{
    question: "Which NBA player has the most technical fouls of all time?",
    answer: ['A. Karl Malone', 'B. Dennis Rodman', 'C. Rasheed Wallace', 'D. Metta World Peace',],
    correctAnswer: 0,
},
{
    question: "Who is the NBA's all time assists per game leader?",
    answer: ['A. Jason Kidd', 'B. Magic Johnson', 'C. John Stockton', 'D. Oscar Robertson',],
    correctAnswer: 1,
},
{
    question: "Besides Wilt Chamberlain's historic 100 point game, Who has the highest point total in a single NBA game?",
    answer: ['A. Kobe Bryant', 'B. Michael Jordan', 'C. Allen Iverson', 'D. Devin Booker',],
    correctAnswer: 0,
},
{
    question: "What NBA player holds the record for the most consecutive double-doubles in NBA history?",
    answer: ['A. Karl Malone', 'B. Tim Duncan', 'C. Kevin Love', 'D. Russel Westbrook',],
    correctAnswer: 2,
},
{
    question: "What NBA player has the most career player point?",
    answer: ['A. Michael Jordan','B. David Robinson', 'C. Lebron James', 'D. Hakeem Olajawon',],
    correctAnswer: 2,
},
{
    question: "What NBA player holds the record for most assists in a game?",
    answer: ['A. John Stockton', 'B. Scott Skiles', 'C. Jason Kidd', 'D. Christ Paul',],
    correctAnswer: 1,
},
{   
    question: "What NBA player holds the record for most rebounds in a game?",
    answer: ['A. Moses Malone', 'B. Dennis Rodman', 'C. Shaquille Oneal', 'D. Wilt Chamberlain',],
    correctAnswer: 3,

},
{
    question: "How many career three pointers did Shaquille Oneal make?",
    answer: ['A. 0', 'B. 9', 'C. 4', 'D. 1',],
    correctAnswer: 3,
},
{
    question: "What NBA player holds the record for the most points in an overtime period?",
    answer: ['A. Gilbert Arenas', 'B. Allen Iverson', 'C. Michael Jordan', 'D. Tracy McGrady',],
    correctAnswer: 0,
}];
console.log(nbaQuestions);

$(document).ready(function(){

    for (var i = 0; i < nbaQuestions.length; i++){

        var quiz = $('#quiz'), container;
        for (var key in nbaQuestions){
    container = $('<div id="quiz" class="container"></div>');
    quiz.append(container);
    container.append(nbaQuestions[key].question);
    container.append(nbaQuestions[key].answer);
            
        }}   

        
        


});