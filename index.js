
let drivers = ['Milo', 'Otis', 'Garfield' ];

function destructivelyAppendDriver(name) {
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
    return drivers
}

function appendDriver(name) {
    let new_arr = [...drivers, name]
    return new_arr
}

function prependDriver(name) {
    let new_arr = [name, ...drivers]
    return new_arr
}

function removeFirstDriver() {
    let new_arr = drivers.slice(1)
    return new_arr
}

function removeLastDriver() {
    let new_arr = drivers.slice(0, 2)
    return new_arr
}