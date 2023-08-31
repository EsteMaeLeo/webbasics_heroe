let xmlhttp;
const btnAirtport = document.querySelector(".getList")

function loadXMLDoc() {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    // Request finished and response
    // is ready and Status is "OK"
    if (this.readyState == 4 && this.status == 200) {
      airportDetails(this);
    }
  };

  // employee.xml is the external xml file
  xmlhttp.open("GET", "airports.xml", true);
  xmlhttp.setRequestHeader("Content-Type", "text/xml");
  xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

  xmlhttp.send();
}

function airportDetails(xml) {
  let i;
  let xmlDoc = xml.responseXML;
  let table = `<thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Time Zone</th>
                        </thead>
                    </tr>`;

  //get all elements ITEM inside XML
  let x = xmlDoc.getElementsByTagName("item");

  // Start to fetch the data by using TagName
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TIME_ZONE")[0].childNodes[0].nodeValue;
  }

  // Print the xml data in table form
  document.getElementById("airportList").innerHTML = table;
}
btnAirtport.addEventListener("click", clickList);

function clickList(e){
  loadXMLDoc();
}


