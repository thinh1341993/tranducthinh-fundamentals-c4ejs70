let item = ['Jeans','T-Shirt','Socks']

while(true){
    let hello = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?')
    if(hello === 'r'){
        // item.forEach((value,index)=>{
        //     alert(index,value)
        alert(item.join("\n"))
        }
        // )
    // }
    else if(hello === 'c'){
        item.push(prompt('Enter the name of the new item'))
        alert('Done')
    }
    else if(hello === 'u'){
        var t = Number(prompt('Enter the position you want to update'))
        alert('Done')
        var n = prompt('Enter the new name')
        item[t]= n
    }
    else if(hello === 'd'){
        var d = Number(prompt("Enter the posotion you want to delete"))
        alert('Done')
        item.splice(d,1)
    }
    else {
        alert('This command is not supported')
    }
}