const displayGPAResult = (creditSum, gradeSum, gpaResult) => {
    document.querySelector(".modal-content").innerHTML = `
        <div class="modal-header">
            <h4 class="modal-title">Congratulations!!</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body p-4">
            Your GPA is <strong id="result1">${gpaResult.toFixed(2)}</strong>
        </div>
        <div class="modal-footer text-center">
            <strong>Stay Happy!!!</strong>
        </div>`;

    let res = document.getElementById("result2")
    res.classList.add("alert")
    res.classList.add("alert-success")
    document.getElementById("result2").innerText = "Congratulations!! Your GPA is " + gpaResult.toFixed(2);
};

//Semester 1
const calculateSem1GPA = (page) => {
    let c1 = 3;
    let c2 = 4;
    let c3 = 3;
    let c4 = 3;
    let c5 = 3;
    let c6 = 3;
    let c7 = 2;
    let c8 = 2;
    let g1, g2, g3, g4, g5, g6, g7, g8;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem1g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem1g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem1g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem1g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem1g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem1g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem1g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem1g8");
    g8 = a8.options[a8.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1) {
        alert("SEM 1 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Semester 2
const calculateSem2GPA = (page) => {
    let c1 = 3;
    let c2 = 4;
    let c3 = 3;
    let c4 = 4;
    let c5 = 3;
    let c6 = 4;
    let c7 = 2;
    let c8 = 2;
    let c9 = 2;
    let g1, g2, g3, g4, g5, g6, g7, g8, g9;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem2g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem2g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem2g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem2g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem2g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem2g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem2g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem2g8");
    g8 = a8.options[a8.selectedIndex].value;
    let a9 = document.getElementById("sem2g9");
    g9 = a9.options[a9.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1 || g9 == -1) {
        alert("SEM 2 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8) + (c9 * g9);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Semester 3
const calculateSem3GPA = (page) => {
    let c1 = 4;
    let c2 = 3;
    let c3 = 3;
    let c4 = 4;
    let c5 = 3;
    let c6 = 3;
    let c7 = 2;
    let c8 = 2;
    let c9 = 2;
    let g1, g2, g3, g4, g5, g6, g7, g8, g9;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem3g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem3g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem3g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem3g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem3g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem3g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem3g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem3g8");
    g8 = a8.options[a8.selectedIndex].value;
    let a9 = document.getElementById("sem3g9");
    g9 = a9.options[a9.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1 || g9 == -1) {
        alert("SEM 3 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8) + (c9 * g9);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Semester 4
const calculateSem4GPA = (page) => {
    let c1 = 4;
    let c2 = 3;
    let c3 = 4;
    let c4 = 3;
    let c5 = 4;
    let c6 = 3;
    let c7 = 2;
    let c8 = 2;
    let c9 = 2;
    let g1, g2, g3, g4, g5, g6, g7, g8, g9;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem4g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem4g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem4g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem4g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem4g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem4g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem4g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem4g8");
    g8 = a8.options[a8.selectedIndex].value;
    let a9 = document.getElementById("sem4g9");
    g9 = a9.options[a9.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1 || g9 == -1) {
        alert("SEM 4 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8) + (c9 * g9);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Semester 5
const calculateSem5GPA = (page) => {
    let c1 = 4;
    let c2 = 3;
    let c3 = 3;
    let c4 = 3;
    let c5 = 3;
    let c6 = 4;
    let c7 = 2;
    let c8 = 2;
    let c9 = 2;
    let c10 = 3;
    let g1, g2, g3, g4, g5, g6, g7, g8, g9, g10;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem5g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem5g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem5g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem5g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem5g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem5g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem5g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem5g8");
    g8 = a8.options[a8.selectedIndex].value;
    let a9 = document.getElementById("sem5g9");
    g9 = a9.options[a9.selectedIndex].value;
    let a10 = document.getElementById("sem5g10");
    g10 = a10.options[a10.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1 || g9 == -1 || g10 == -1) {
        alert("SEM 5 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8) + (c9 * g9) + (c10 * g10);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Semester 6
const calculateSem6GPA = (page) => {
    let c1 = 2;
    let c2 = 4;
    let c3 = 4;
    let c4 = 3;
    let c5 = 3;
    let c6 = 3;
    let c7 = 2;
    let c8 = 2;
    let c9 = 2;
    let g1, g2, g3, g4, g5, g6, g7, g8, g9;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem6g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem6g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem6g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem6g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem6g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem6g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem6g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem6g8");
    g8 = a8.options[a8.selectedIndex].value;
    let a9 = document.getElementById("sem6g9");
    g9 = a9.options[a9.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1 || g9 == -1) {
        alert("SEM 6 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8) + (c9 * g9);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Semester 7
const calculateSem7GPA = (page) => {
    let c1 = 3;
    let c2 = 3;
    let c3 = 2;
    let c4 = 2;
    let c5 = 2;
    let c6 = 3;
    let c7 = 3;
    let c8 = 3;
    let c9 = 2;
    let g1, g2, g3, g4, g5, g6, g7, g8, g9, g10;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem7g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem7g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem7g3");
    g3 = a3.options[a3.selectedIndex].value;
    let a4 = document.getElementById("sem7g4");
    g4 = a4.options[a4.selectedIndex].value;
    let a5 = document.getElementById("sem7g5");
    g5 = a5.options[a5.selectedIndex].value;
    let a6 = document.getElementById("sem7g6");
    g6 = a6.options[a6.selectedIndex].value;
    let a7 = document.getElementById("sem7g7");
    g7 = a7.options[a7.selectedIndex].value;
    let a8 = document.getElementById("sem7g8");
    g8 = a8.options[a8.selectedIndex].value;
    let a9 = document.getElementById("sem7g9");
    g9 = a9.options[a9.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1 || g4 == -1 || g5 == -1 || g6 == -1 || g7 == -1 || g8 == -1 || g9 == -1) {
        alert("SEM 7 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3) + (c4 * g4) + (c5 * g5) + (c6 * g6) + (c7 * g7) + (c8 * g8) + (c9 * g9);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

// Semester 8
const calculateSem8GPA = (page) => {
    let c1 = 3;
    let c2 = 3;
    let c3 = 8;
    let g1, g2, g3;
    let creditSum, gradeSum, gpaResult;
    let a1 = document.getElementById("sem8g1");
    g1 = a1.options[a1.selectedIndex].value;
    let a2 = document.getElementById("sem8g2");
    g2 = a2.options[a2.selectedIndex].value;
    let a3 = document.getElementById("sem8g3");
    g3 = a3.options[a3.selectedIndex].value;

    if (g1 == -1 || g2 == -1 || g3 == -1) {
        alert("SEM 8 : Please fill all the details")
    } else {
        creditSum = c1 + c2 + c3;
        gradeSum = (c1 * g1) + (c2 * g2) + (c3 * g3);
        gpaResult = gradeSum / creditSum;
        if (page === "gpa") {
            displayGPAResult(creditSum, gradeSum, gpaResult);
        } else {
            return [creditSum, gradeSum, gpaResult];
        }
    }
}

//Alert Success
const displayCGPA = (gpa) => {
    return `<div class="alert alert-success">
                <div>Grade Points: <strong>${gpa[1]}</strong></div>
                <div>Total Credits: <strong>${gpa[1]}</strong></div>
                <div><strong>GPA: ${gpa[2].toFixed(2)}</strong></div>
            </div>`;
}

//Overall CGPA
const overallCGPA = async() => {
    let gpa1 = calculateSem1GPA();
    let gpa2 = calculateSem2GPA();
    let gpa3 = calculateSem3GPA();
    let gpa4 = calculateSem4GPA();
    let gpa5 = calculateSem5GPA();
    let gpa6 = calculateSem6GPA();
    let gpa7 = calculateSem7GPA();
    let gpa8 = calculateSem8GPA();
    document.getElementById('resultSem1').innerHTML = displayCGPA(gpa1);
    document.getElementById('resultSem2').innerHTML = displayCGPA(gpa2);
    document.getElementById('resultSem3').innerHTML = displayCGPA(gpa3);
    document.getElementById('resultSem4').innerHTML = displayCGPA(gpa4);
    document.getElementById('resultSem5').innerHTML = displayCGPA(gpa5);
    document.getElementById('resultSem6').innerHTML = displayCGPA(gpa6);
    document.getElementById('resultSem7').innerHTML = displayCGPA(gpa7);
    document.getElementById('resultSem8').innerHTML = displayCGPA(gpa8);

    let creditSum = gpa1[0] + gpa2[0] + gpa3[0] + gpa4[0] + gpa5[0] + gpa6[0] + gpa7[0] + gpa8[0];
    let gradeSum = gpa1[1] + gpa2[1] + gpa3[1] + gpa4[1] + gpa5[1] + gpa6[1] + gpa7[1] + gpa8[1];
    let cgpa = gradeSum / creditSum;

    document.querySelector(".modal-content").innerHTML = `
        <div class="modal-header">
            <h4 class="modal-title">Finally Mr. Engineer!!</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body p-4">
            <div>Semester 1 : <strong>${gpa1[2].toFixed(2)}</strong></div>
            <div>Semester 2 : <strong>${gpa2[2].toFixed(2)}</strong></div>
            <div>Semester 3 : <strong>${gpa3[2].toFixed(2)}</strong></div>
            <div>Semester 4 : <strong>${gpa4[2].toFixed(2)}</strong></div>
            <div>Semester 5 : <strong>${gpa5[2].toFixed(2)}</strong></div>
            <div>Semester 6 : <strong>${gpa6[2].toFixed(2)}</strong></div>
            <div>Semester 7 : <strong>${gpa7[2].toFixed(2)}</strong></div>
            <div>Semester 8 : <strong>${gpa8[2].toFixed(2)}</strong></div>
            <br>
            <div>Your overall CGPA is <strong>${cgpa.toFixed(2)}</strong></div>
        </div>
        <div class="modal-footer text-center">
            <strong>Stay Happy!!!</strong>
        </div>`;

    document.getElementById('CGPAresult').innerHTML = `<div class="alert alert-success">
            <div>Total Grade Points: <strong>${gradeSum}</strong></div>
            <div>Total Credits: <strong>${creditSum}</strong></div>
            <div><strong>Overall CGPA: ${cgpa.toFixed(2)}</strong></div>
        </div>`;
}

// Save my page
const convertToImage = () => {
    var container = document.body; // full page 
    html2canvas(container).then(function(canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "myresult.png";
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });
}