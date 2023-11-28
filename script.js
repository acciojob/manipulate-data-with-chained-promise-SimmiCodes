//your JS code here. If required.
function filterAndPrint(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredArr = arr.filter(num => num % 2 === 0);
            document.getElementById('output').innerText = filteredArr.join(', ');
            resolve(filteredArr);
        }, 1000);
    });
}

function multiplyAndPrint(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedArr = arr.map(num => num * 2);
            document.getElementById('output').innerText = multipliedArr.join(', ');
            resolve(multipliedArr);
        }, 2000);
    });
}

const inputArray = [1, 2, 3, 4];

const mainPromise = new Promise((resolve) => {
    setTimeout(() => {
        const oddFilteredArray = inputArray.filter(num => num % 2 === 0);
        document.getElementById('output').innerText = oddFilteredArray.join(', ');
        resolve(oddFilteredArray);
    }, 1000);
})
    .then(filterAndPrint)
    .then(multiplyAndPrint);

mainPromise.then(() => console.log('All operations completed.'));

