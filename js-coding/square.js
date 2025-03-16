const array = [1, 2, 3, 4];

const newFuct = () => {
    let value = array.map(a => a * a)
    console.log(value)

    let sum = value.reduce((a, b) => (a + b), 0)
    console.log(sum)
}
newFuct();