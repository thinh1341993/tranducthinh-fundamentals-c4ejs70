let context = {}
let countrydata = document.getElementById('countrydata')
let seriesdata = [{
    name: 'Số ca nhiễm',
    data: [],
    color: '#ffff00'
}, {
    name: 'Số ca tử vong',
    data: [],
    color: '#FF0000'
}, {
    name: 'Số ca hồi phục',
    data: [],
    color: '#008000'
}]
let d = new Date()

let categore = ['Vietnam', 'France', 'Italy', 'Spain', 'USA']

async function getData() {
    let api = await fetch("https://ncovi.huynhhieu.com/api.php?code=external&fbclid=IwAR0gm9ozVQYo1iPA5oOwTR90HwSS-zC8GbJBVTL-Pq6Rwz03b2VhB6V7quA")
    context = await api.json()
    console.log(context)
}


function combobox() {
    for (j = 0; j < 5; j++) {
        countrydata.innerHTML += `<select id="country-${j}" style="margin-top: 33px;" onchange="changecountry()"><option style="text-align: center;">${categore[j]}</option></select><br>`
        let country = document.getElementById(`country-${j}`)
        for (i = 0; i < context.data.length; i++) {
            country.innerHTML += `<option>${context.data[i].country}</option>`
        }
    }
    console.dir(countrydata)
}

function changecountry() {
    for (j = 0; j < 5; j++) {
        let country = document.getElementById(`country-${j}`)
        for (i = 0; i < context.data.length; i++) {
            if (context.data[i].country == country.value) {
                categore[j] = context.data[i].country
            }
        }
    }
    highchart()
}

function highchart() {
    for (j = 0; j < 5; j++) {
        for (i = 0; i < context.data.length; i++) {
            if (categore[j] == context.data[i].country) {
                seriesdata[0].data[j] = Number(context.data[i].cases.replace(/,/g, ''))
                seriesdata[1].data[j] = Number(context.data[i].deaths.replace(/,/g, ''))
                seriesdata[2].data[j] = Number(context.data[i].recovered.replace(/,/g, ''))
            }
        }
    }
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: `Thống Kê Tình Hình Dịch Bệnh COVID-19 Các Nước Trên Thế Giới <br> Ngày ${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: categore,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'Người'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: seriesdata
    });
}