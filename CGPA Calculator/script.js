function generateInputs() {
    let n = document.getElementById("subjects").value;
    let gradesDiv = document.getElementById("grades");

    gradesDiv.innerHTML = "";

    for (let i = 0; i < n; i++) {
        gradesDiv.innerHTML +=
            '<input type="number" class="grade" placeholder="Grade Point ' + (i + 1) + '"><br>';
    }
}

function calculateCGPA() {
    let grades = document.getElementsByClassName("grade");
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += Number(grades[i].value);
    }

    let cgpa = sum / grades.length;

    document.getElementById("result").innerHTML =
        "Your CGPA is: " + cgpa.toFixed(2);
}