let count = 0;

const value = document.querySelector('#counter');
const btns = document.querySelectorAll('.button');

btns.forEach(function (btn) {
    btn.addEventListener('click',function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("minus")) {
            count--;
        } else if (styles.contains("plus")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0 ) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    })
})