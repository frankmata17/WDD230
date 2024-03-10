document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.getElementById('r');
    const rangeOutput = document.getElementById('rangeOutput');
    const rangeValuesDatalist = document.getElementById('rangevalues');

    function updateRangeOutput(value) {
        rangeOutput.textContent = value;
        
        rangeValuesDatalist.innerHTML = '';

        for (let i = 1; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            rangeValuesDatalist.appendChild(option);
        }
    }

    rangeInput.addEventListener('input', function () {
        updateRangeOutput(rangeInput.value);
    });

    updateRangeOutput(rangeInput.value);
});
