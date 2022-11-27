const CovidData = [
  {title: 'Covid Cases', body: 'Number'},
];

fonction getCovidData() {
  setTimeout(=> {
    let output = '';
    CovidData.forEach((CovidData, indes)=> {
      output += `<li>${CovidData.title}</li>`
    })
  }, 1000)
}

getCovidData();