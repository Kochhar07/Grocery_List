const forms = document.querySelector('#forms');
const totalcontainer = document.querySelector('#newtotal');
forms.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = forms.elements.username;
    const numInput = forms.elements.quantity;
    total(numInput.value, usernameInput.value);
    usernameInput.value = "";
    numInput.value = "";
})
const total = (username, num) => {
    const newtotal = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newtotal.append(bTag);
    newtotal.append(`- ${num}`);
    totalcontainer.append(newtotal);

}

totalcontainer.addEventListener('click', function (e) {
    e.target.remove();
})