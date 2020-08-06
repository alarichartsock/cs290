    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");

    for (var i = 1; i < 5; i++) {
        var cell = document.createElement("th");
        var cellText = document.createTextNode("Header "+i);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    tblBody.appendChild(row);

    for(var j=1;j<4;j++) {
        var row = document.createElement("tr");
        for(var k=1;k<5;k++) {
            var cell = document.createElement("td")
            var cellText = document.createTextNode(k + ", "+  j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    btn = document.createElement("button")
    btn.setAttribute('onclick','moveLeft()')
    var cellText = document.createTextNode("Move left");
    btn.appendChild(cellText)
    body.appendChild(btn)

    btn = document.createElement("button")
    btn.setAttribute('onclick','moveRight()')
    var cellText = document.createTextNode("Move right");
    btn.appendChild(cellText)
    body.appendChild(btn)

    btn = document.createElement("button")
    btn.setAttribute('onclick','moveUp()')
    var cellText = document.createTextNode("Move up");
    btn.appendChild(cellText)
    body.appendChild(btn)

    btn = document.createElement("button")
    btn.setAttribute('onclick','moveDown()')
    var cellText = document.createTextNode("Move down");
    btn.appendChild(cellText)
    body.appendChild(btn)

    btn = document.createElement("button")
    btn.setAttribute('onclick','markCell()')
    var cellText = document.createTextNode("Mark cell");
    btn.appendChild(cellText)
    body.appendChild(btn)

    tbl.setAttribute("border", "1");

    var xpos = 1;
    var ypos = 1;

    var selectedCell = document.getElementsByTagName("td")[0];
    selectedCell.setAttribute("border","1");
    selectedCell.setAttribute('style', 'border-width: 3pt');

    function moveLeft() {
        if(selectedCell.previousElementSibling != null) {
            selectedCell.style.borderWidth = "1pt";
            selectedCell = selectedCell.previousElementSibling;
            selectedCell.style.borderWidth = "3pt";
            xpos--;
        } else {
            //edge of table
        }

    }

    function moveRight() {
        if(selectedCell.nextElementSibling != null) {
            selectedCell.style.borderWidth = "1pt";
            selectedCell = selectedCell.nextElementSibling;
            selectedCell.style.borderWidth = "3pt";
            xpos++;
        } else {
            //edge of table
        }
    }

    function moveUp() {
        if(ypos > 1) {
            selectedCell.style.borderWidth = "1pt";
            selectedCell = selectedCell.parentElement;
            selectedCell = selectedCell.previousElementSibling;
            selectedCell = selectedCell.childNodes[xpos-1];
            selectedCell.style.borderWidth = "3pt";
            ypos--;
        } else {

        }

    }

    function moveDown() {
        if(ypos < 3) {
            selectedCell.style.borderWidth = "1pt";
            selectedCell = selectedCell.parentElement;
            selectedCell = selectedCell.nextElementSibling;
            selectedCell = selectedCell.childNodes[xpos-1];
            selectedCell.style.borderWidth = "3pt";
            ypos++;
        } else {

        }

    }

    function markCell() {
        selectedCell.setAttribute('style','background-color: yellow; border-width: 3pt');
    }