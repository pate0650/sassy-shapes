const colors = ['red', 'blue', 'green', 'purple', 'orange']
const shapes = ['square', 'circle', 'pentagon', 'hexagon', 'octagon']


// Create constant to Call DOM ID from HTML
const $shape = document.getElementById('shapes')

// Create empty aray to push html inside it
const shapeArray = []


//use loop method to push html at once for both array
// use $ method 
for (let shape of shapes) {
    for (let color of colors) {
        shapeArray.push(`<div class="${shape}-${color}"></div>`)
    }
}


// use 'join' function
$shape.innerHTML += shapeArray.join(' ')