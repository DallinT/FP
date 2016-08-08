var score = 0;

function sub()
{
    document.getElementById("submit").disabled = true;
    check1();
    check2();
    check3();
    check4();
    check5();
    check6();
    check7();
    check8();
    check9();
    check10();
    document.getElementById("score").textContent = score + " /10";
}

function check1()
{
    if(document.getElementById("qOne1").checked)
        {
            document.getElementById("divOne3").style.backgroundColor = "blue";
            document.getElementById("divOne1").style.backgroundColor = "red";
            document.getElementById("message1").textContent = "Incorrect";
        }
    else if(document.getElementById("qOne2").checked)
        {
            document.getElementById("divOne3").style.backgroundColor = "blue";
            document.getElementById("divOne2").style.backgroundColor = "red";
            document.getElementById("message1").textContent = "Incorrect";
        }
    else if(document.getElementById("qOne3").checked)
        {
            document.getElementById("divOne3").style.backgroundColor = "blue";
            document.getElementById("message1").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qOne4").checked)
        {
            document.getElementById("divOne3").style.backgroundColor = "blue";
            document.getElementById("divOne4").style.backgroundColor = "red";
            document.getElementById("message1").textContent = "Incorrect";
        }
}

function check2()
{
    if(document.getElementById("qTwo1").checked)
        {
            document.getElementById("divTwo4").style.backgroundColor = "blue";
            document.getElementById("divTwo1").style.backgroundColor = "red";
            document.getElementById("message2").textContent = "Incorrect";
        }
    else if(document.getElementById("qTwo2").checked)
        {
            document.getElementById("divTwo4").style.backgroundColor = "blue";
            document.getElementById("divTwo2").style.backgroundColor = "red";
            document.getElementById("message2").textContent = "Incorrect";
        }
    else if(document.getElementById("qTwo3").checked)
        {
            document.getElementById("divTwo4").style.backgroundColor = "blue";
            document.getElementById("divTwo3").style.backgroundColor = "red";
            document.getElementById("message2").textContent = "Incorrect";
        }
    else if(document.getElementById("qTwo4").checked)
        {
            document.getElementById("divTwo4").style.backgroundColor = "blue";
            document.getElementById("message2").textContent = "Correct";
            score++;
        }
}

function check3()
{
    if(document.getElementById("qThree1").checked)
        {
            document.getElementById("divThree2").style.backgroundColor = "blue";
            document.getElementById("divThree1").style.backgroundColor = "red";
            document.getElementById("message3").textContent = "Incorrect";
        }
    else if(document.getElementById("qThree3").checked)
        {
            document.getElementById("divThree2").style.backgroundColor = "blue";
            document.getElementById("divThree3").style.backgroundColor = "red";
            document.getElementById("message3").textContent = "Incorrect";
        }
    else if(document.getElementById("qThree2").checked)
        {
            document.getElementById("divThree2").style.backgroundColor = "blue";
            document.getElementById("message3").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qThree4").checked)
        {
            document.getElementById("divThree2").style.backgroundColor = "blue";
            document.getElementById("divThree4").style.backgroundColor = "red";
            document.getElementById("message3").textContent = "Incorrect";
        }
}

function check4()
{
    if(document.getElementById("qFour1").checked)
        {
            document.getElementById("divFour3").style.backgroundColor = "blue";
            document.getElementById("divFour1").style.backgroundColor = "red";
            document.getElementById("message4").textContent = "Incorrect";
        }
    else if(document.getElementById("qFour3").checked)
        {
            document.getElementById("divFour3").style.backgroundColor = "blue";
            document.getElementById("message4").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qFour2").checked)
        {
            document.getElementById("divFour3").style.backgroundColor = "blue";
            document.getElementById("divFour2").style.backgroundColor = "red";
            document.getElementById("message4").textContent = "Incorrect";
        }
    else if(document.getElementById("qFour4").checked)
        {
            document.getElementById("divFour3").style.backgroundColor = "blue";
            document.getElementById("divFour4").style.backgroundColor = "red";
            document.getElementById("message4").textContent = "Incorrect";
        }
}

function check5()
{
    if(document.getElementById("qFive1").checked)
        {
            document.getElementById("divFive2").style.backgroundColor = "blue";
            document.getElementById("divFive1").style.backgroundColor = "red";
            document.getElementById("message5").textContent = "Incorrect";
        }
    else if(document.getElementById("qFive4").checked)
        {
            document.getElementById("divFive2").style.backgroundColor = "blue";
            document.getElementById("divFive4").style.backgroundColor = "red";
            document.getElementById("message5").textContent = "Incorrect";
        }
    else if(document.getElementById("qFive3").checked)
        {
            document.getElementById("divFive2").style.backgroundColor = "blue";
            document.getElementById("divFive3").style.backgroundColor = "red";
            document.getElementById("message5").textContent = "Incorrect";
        }
    else if(document.getElementById("qFive2").checked)
        {
            document.getElementById("divFive2").style.backgroundColor = "blue";
            document.getElementById("message5").textContent = "Correct";
            score++;
        }
}

function check6()
{
    if(document.getElementById("qSix2").checked)
        {
            document.getElementById("divSix2").style.backgroundColor = "blue";
            document.getElementById("message6").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qSix1").checked)
        {
            document.getElementById("divSix2").style.backgroundColor = "blue";
            document.getElementById("divSix1").style.backgroundColor = "red";
            document.getElementById("message6").textContent = "Incorrect";
        }
    else if(document.getElementById("qSix3").checked)
        {
            document.getElementById("divSix2").style.backgroundColor = "blue";
            document.getElementById("divSix3").style.backgroundColor = "red";
            document.getElementById("message6").textContent = "Incorrect";
        }
    else if(document.getElementById("qSix4").checked)
        {
            document.getElementById("divSix2").style.backgroundColor = "blue";
            document.getElementById("divSix4").style.backgroundColor = "red";
            document.getElementById("message6").textContent = "Incorrect";
        }
}

function check7()
{
    if(document.getElementById("qSeven1").checked)
        {
            document.getElementById("divSeven2").style.backgroundColor = "blue";
            document.getElementById("divSeven1").style.backgroundColor = "red";
            document.getElementById("message7").textContent = "Incorrect";
        }
    else if(document.getElementById("qSeven3").checked)
        {
            document.getElementById("divSeven2").style.backgroundColor = "blue";
            document.getElementById("divSeven3").style.backgroundColor = "red";
            document.getElementById("message7").textContent = "Incorrect";
        }
    else if(document.getElementById("qSeven2").checked)
        {
            document.getElementById("divSeven2").style.backgroundColor = "blue";
            document.getElementById("message7").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qSeven4").checked)
        {
            document.getElementById("divSeven2").style.backgroundColor = "blue";
            document.getElementById("divSeven4").style.backgroundColor = "red";
            document.getElementById("message7").textContent = "Incorrect";
        }
}

function check8()
{
    if(document.getElementById("qEight1").checked)
        {
            document.getElementById("divEight2").style.backgroundColor = "blue";
            document.getElementById("divEight1").style.backgroundColor = "red";
            document.getElementById("message8").textContent = "Incorrect";
        }
    else if(document.getElementById("qEight3").checked)
        {
            document.getElementById("divEight2").style.backgroundColor = "blue";
            document.getElementById("message8").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qEight2").checked)
        {
            document.getElementById("divEight2").style.backgroundColor = "blue";
            document.getElementById("divEight3").style.backgroundColor = "red";
            document.getElementById("message8").textContent = "Incorrect";
        }
    else if(document.getElementById("qEight4").checked)
        {
            document.getElementById("divEight2").style.backgroundColor = "blue";
            document.getElementById("divEight4").style.backgroundColor = "red";
            document.getElementById("message8").textContent = "Incorrect";
        }
}

function check9()
{
    if(document.getElementById("qNine1").checked)
        {
            document.getElementById("divNine3").style.backgroundColor = "blue";
            document.getElementById("divNine1").style.backgroundColor = "red";
            document.getElementById("message9").textContent = "Incorrect";
        }
    else if(document.getElementById("qNine2").checked)
        {
            document.getElementById("divNine3").style.backgroundColor = "blue";
            document.getElementById("divNine2").style.backgroundColor = "red";
            document.getElementById("message9").textContent = "Incorrect";
        }
    else if(document.getElementById("qNine4").checked)
        {
            document.getElementById("divNine3").style.backgroundColor = "blue";
            document.getElementById("divNine4").style.backgroundColor = "red";
            document.getElementById("message9").textContent = "Incorrect";
        }
    else if(document.getElementById("qNine3").checked)
        {
            document.getElementById("divNine3").style.backgroundColor = "blue";
            document.getElementById("message9").textContent = "Correct";
            score++;
        }
}

function check10()
{
    if(document.getElementById("qTen3").checked)
        {
            document.getElementById("divTen1").style.backgroundColor = "blue";
            document.getElementById("divTen3").style.backgroundColor = "red";
            document.getElementById("message10").textContent = "Incorrect";
        }
    else if(document.getElementById("qTen2").checked)
        {
            document.getElementById("divTen1").style.backgroundColor = "blue";
            document.getElementById("divTen2").style.backgroundColor = "red";
            document.getElementById("message10").textContent = "Incorrect";
        }
    else if(document.getElementById("qTen1").checked)
        {
            document.getElementById("divTen1").style.backgroundColor = "blue";
            document.getElementById("message10").textContent = "Correct";
            score++;
        }
    else if(document.getElementById("qTen4").checked)
        {
            document.getElementById("divTen1").style.backgroundColor = "blue";
            document.getElementById("divTen4").style.backgroundColor = "red";
            document.getElementById("message10").textContent = "Incorrect";
        }
}