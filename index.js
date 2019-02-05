fetch('http://amishin.pythonanywhere.com/', {
  mode: "cors"
})
  .then(function(response) {
    console.log(`https://amishin.pythonanywhere.com/ ${response}`);
  });

fetch('https://www.edmunds.com/api/inventory/v5/find?zip=44241&sortby=_geo&radius=500&pagenum=1&pagesize=3&type=USED&vehicleInfo.styleInfo.make=Mazda&vehicleInfo.styleInfo.model=CX-3')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(`edmunds.com ${JSON.stringify(myJson)}`);
  });