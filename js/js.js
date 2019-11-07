$(document).ready(function () {
$('#dtVerticalScrollExample').DataTable({
"scrollY": "200px",
"scrollCollapse": true,
});
$('.dataTables_length').addClass('bs-select');
});

function addID() {
    let t = document.getElementById("dtVerticalScrollExample");
    let trs = t.getElementsByTagName("td");
    for (let j = 0; j < trs.length; j++) {
        trs[j].id = "td"+Math.floor(j/5)+(j%5);
    }
}

function addRow(rowNum){
    var tbody = document.getElementsByTagName("TBODY")[0];
    for (var i = 0; i < rowNum; i++) {
        var row = document.createElement("TR");
        tbody.appendChild(row);
            for (var j = 0; j < 5; j++) {
                let newTd = document.createElement('td');
                row.appendChild(newTd);
        }
       
    }
    
}

function request() {
$.getJSON("https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function(data) {
  addRow(data.length);
  addID();
  for (let i = 0; i<data.length; i++) {
      for (let k = 0; k<5; k++) {
        let res = "#td"+i+k;
        let num = "№"+i+k;  
          switch (k) {
              case 0: $(res).html(i+k);
                break;
              case 1: $(res).html(data[i].txt);
                break;
              case 2: $(res).html(data[i].cc);
                break;
              case 3: $(res).html(data[i].exchangedate);
                break;
              case 4: $(res).html(data[i].rate);
                break;
              default: alert(`Виникла помилка`);
                break;    
                  
          }
      }
     }
});
   
}


request();