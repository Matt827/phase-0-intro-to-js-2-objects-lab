const employee = {
    name: 'tim' ,
    address: 'cloverfield ln.'
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const newObj = {...employeeObject}

    newObj[key] = value

    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value

    return employeeObject
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const newObj = {...employeeObject}

    delete newObj[key]

    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key]

    return employeeObject
}