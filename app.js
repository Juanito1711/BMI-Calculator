let button = document.getElementById('btn-calculate');

button.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let name_status = false, height_status = false, weight_status = false;

    if (name === '') {
        document.getElementById('name-error').innerHTML = "Please provide a name";
    } else {
        document.getElementById('name-error').innerHTML = '';
        name_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.getElementById('weight-error').innerHTML = "Please input a correct weight";
    } else {
        document.getElementById('weight-error').innerHTML = '';
        weight_status = true;
    }

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height-error').innerHTML = "Please input a correct height";
    } else {
        document.getElementById('height-error').innerHTML = '';
        height_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height/100) * (height/100)).toFixed(2));

        if (bmi < 18.6) {
            result.innerHTML = name + ' is Under Weight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = name + ' is Normal : ' + bmi;
        } else {
            result.innerHTML = name + ' is Over Weight : ' + bmi;
        }
    } else {
        alert("The form has an error");
        result.innerHTML = "";
    }

});