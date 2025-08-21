const countValue = document.querySelector('#container');

function increment() {
    let value = parseInt(countValue.innerText);
    value += 1;
    countValue.innerText = value;

} ;

function decrement() {
     let value = parseInt(countValue.innerText);
    value -= 1;
    countValue.innerText = value;

};

