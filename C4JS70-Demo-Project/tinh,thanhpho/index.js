let table = document.getElementById('table')
let city

window.onload = async () => {
    await getData();
    tablecity()
}

async function getData() {
    let api = await fetch("https://ncov-data.herokuapp.com/api/corona?fbclid=IwAR0WyLosDC2c0nIygwBybdPbw2YrtRKZ3kUspCh-oLMJFDgTi9wqIgkv44k")
    data = await api.json()
    city = data.data.vietnam.list
    console.log(city)
}

function tablecity() {
for(i=0;i<city.length;i++){
    table.innerHTML += `<tr>
                <td>${city[i].name}</td>
                <td>${city[i].confirmed}</td>
                <td>${city[i].recovered}</td>
                <td>${city[i].deaths}</td>
            </tr>`
}
}