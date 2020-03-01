// EX1.
// let data = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
// let newdata = []
// data.forEach(a => {
//     if (!(newdata.includes(a))) {
//         newdata.push(a)
//     }
// })
// for (j = 0; j < newdata.length; j++) {
//     let s = 0
//     for (i = 0; i < data.length; i++) {
//         if (data[i] === newdata[j]) {
//             s = s + 1
//         }
//     }
//     console.log(newdata[j], s)
// }

// EX2.
const inventory = [{
    name: 'HP Envy 13aq',
    price: 21000,
    brand: 'HP',
    quantity: 5,
}, {
    name: 'Dell XPS 9370',
    price: 30000,
    brand: 'Dell',
    quantity: 1,
}, {
    name: 'Dell Inspiron 3567',
    price: 9300,
    brand: 'Dell',
    quantity: 12,
}, {
    name: 'Dell Latitude E5450',
    price: 8600,
    brand: 'Dell',
    quantity: 2,
}, {
    name: 'Asus Zenbook',
    brand: 'Asus',
    price: 20000,
    quantity: 4,
}, {
    name: 'HP Pavilion',
    brand: 'HP',
    price: 14000,
    quantity: 7,
},]
let inventoryByBrand = {}
inventoryByBrand.HP = []
inventoryByBrand.Dell = []
inventoryByBrand.Asus = []
inventory.forEach((value, index) => {
    if (inventory[index].brand == "HP") {
        inventoryByBrand.HP.push(value)
    } else if (inventory[index].brand == "Dell") {
        inventoryByBrand.Dell.push(value)
    } else {
        inventoryByBrand.Asus.push(value)
    }
})
console.log(inventoryByBrand);
while (true) {
    let generations = prompt('Which brand?')
    let brand_name = []
    let total = 0
    inventoryByBrand[generations].forEach((value, index) => {
        total = total + value.price * value.quantity * 1000
        brand_name.push(value.name)
    })
    total = total.toLocaleString('vi', { style: 'currency', currency: 'VND' })
    Object.keys(inventoryByBrand).forEach((value, index) => {
        if (generations === value) {
            alert(`There are ${inventoryByBrand[value].length} of "${generations}" in inventory:
${brand_name.join('\n')}

With total value: ${total}`)
        }
    })
}
