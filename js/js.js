$(document).ready(function () {
$('#dtVerticalScrollExample').DataTable({
"scrollY": "200px",
"scrollCollapse": true,
});
$('.dataTables_length').addClass('bs-select');
});

let t = document.getElementById("dtVerticalScrollExample");
let trs = t.getElementsByTagName("td");
for (let j = 0; j < trs.length; j++) {
        trs[j].id = "td"+Math.floor(j/5)+(j%5);
}


function quest() {

$.getJSON("https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function(data) {
  for (let i = 0; i<61; i++) {
      for (let k = 0; k<5; k++) {
        let res = "#td"+i+k;
        let num = "№"+i+k;  
          switch (k) {
              case 0: $(res).html(data[i].r030);
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

quest();