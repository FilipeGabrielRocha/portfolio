alert('Status do Site: Em Desenvolvimento!')

function getAge(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    const yearOfBirth = 2000

    if (month === 11 && day >= 14){
        let age = year - yearOfBirth
        return age
    } else {
        let age = (year - yearOfBirth) - 1
        return age
    }

}

function showAge(){
    let age = getAge()
    document.getElementById('age').innerHTML = age
}

window.onload = showAge