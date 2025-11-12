const names = ["Alice", "Bob", "Charlie", "Diana"];
const capitalizeNames = names.map(name => {
    return name.toUpperCase()
})

console.log(capitalizeNames);

const numberedeNames1 = names.map(
    (name, index) => `${index + 1}. ${name}`
)
console.log(numberedeNames1)