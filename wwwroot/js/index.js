//assignments: 50%
//group project: 10%
//quizzes: 10%
//midterm exam: 10%
//final exam: 10%
//intex: 10%
//This function takes in each of the values in the submission to determine the students grade average
$("#submit").click(function () {
    let assignments = (parseInt($("#assignments").val()) / 100) * 50;
    let groupProject = (parseInt($("#groupProject").val()) / 100) * 10;
    let quizzes = (parseInt($("#quizzes").val()) / 100) * 10;
    let midtermExam = (parseInt($("#midterm").val()) / 100) * 10;
    let finalExam = (parseInt($("#finalExam").val()) / 100) * 10;
    let intex = (parseInt($("#intex").val()) / 100) * 10;

    //After grabbing all of the values, add them up and then put them through the if statement to determine their letter grade equivalent
    let totalPercent = assignments + groupProject + quizzes + midtermExam + finalExam + intex;
    let finalGrade = "";
    if (totalPercent >= 94) {
        finalGrade = "A";
    } else if (totalPercent >= 90) {
        finalGrade = "A-";
    } else if (totalPercent >= 87) {
        finalGrade = "B+";
    } else if (totalPercent >= 84) {
        finalGrade = "B";
    } else if (totalPercent >= 80) {
        finalGrade = "B-";
    } else if (totalPercent >= 77) {
        finalGrade = "C+";
    } else if (totalPercent >= 74) {
        finalGrade = "C";
    } else if (totalPercent >= 70) {
        finalGrade = "C-";
    } else if (totalPercent >= 67) {
        finalGrade = "D+";
    } else if (totalPercent >= 64) {
        finalGrade = "D";
    } else if (totalPercent >= 60) {
        finalGrade = "D";
    } else {
        finalGrade = "E";
    }
    $("#display").text(finalGrade);
});
