// Write your solution here!
// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

// drivers.push('Ralph');
function destructivelyAppendDriver(name)
{
    drivers.push(name);
}

function destructivelyPrependDriver(name)
{
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver()
{
    drivers.pop();
}

function destructivelyRemoveFirstDriver()
{
    drivers.shift();
}

function appendDriver(name)
{
    return drivers.concat(new Array(name));
}

function prependDriver(name)
{
    return new Array(name).concat(drivers);
}

function removeLastDriver()
{
    return drivers.slice(0,drivers.length -1);
}

function removeFirstDriver()
{
    return drivers.slice(1);
}
