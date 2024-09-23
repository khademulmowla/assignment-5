// function of getting input field of write donation amount //
function getInputAmount(id) {
    const inputField = document.getElementById(id).value;
    const inputFieldAmount = parseFloat(inputField);
    return inputFieldAmount;

}
// function of getting total amount and total donation amount //
function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueAmount = parseFloat(textValue);
    return textValueAmount;
}
// noakhali donation//
document.getElementById('btn-noa').addEventListener('click', function (event) {
    event.preventDefault();
    const inputNoa = getInputAmount('input-amount-noa');
    const totalNoa = getTextValue('total-amount-noa');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputNoa) || inputNoa < 0 || inputNoa > availableAmount || availableAmount <= 0) {
        return alert('Failed to Donate Money')
    }
    const newTotalNoa = totalNoa + inputNoa;
    document.getElementById('total-amount-noa').innerText = newTotalNoa;

    // add to transaction history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${newTotalNoa} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p class="text-sm text-gray-500">${dateString}</p>
    </div>`;
    document.getElementById('transaction-history').appendChild(div);


    const newAvailableAmout = availableAmount - inputNoa;
    document.getElementById('available-balance').innerText = newAvailableAmout;
    document.getElementById('input-amount-noa').value = "";

})

// feni donation //
document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputNoa = getInputAmount('input-amount-feni');
    const totalNoa = getTextValue('total-amount-feni');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputNoa) || inputNoa < 0 || inputNoa > availableAmount || availableAmount <= 0) {
        return alert('Failed to Donate Money')
    }
    const newTotalNoa = totalNoa + inputNoa;
    document.getElementById('total-amount-feni').innerText = newTotalNoa;
    const newAvailableAmout = availableAmount - inputNoa;
    document.getElementById('available-balance').innerText = newAvailableAmout;
    console.log('clear')
    document.getElementById('input-amount-feni').value = "";

})
// quota movement //
document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputNoa = getInputAmount('input-amount-quota');
    const totalNoa = getTextValue('total-amount-quota');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputNoa) || inputNoa < 0 || inputNoa > availableAmount || availableAmount <= 0) {
        return alert('Failed to Donate Money')
    }
    const newTotalNoa = totalNoa + inputNoa;
    document.getElementById('total-amount-quota').innerText = newTotalNoa;
    const newAvailableAmout = availableAmount - inputNoa;
    document.getElementById('available-balance').innerText = newAvailableAmout;
    console.log('clear')
    document.getElementById('input-amount-quota').value = "";

})




// function of show and hide 
function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
function handleBtn(event) {

}
// show and hide 
const buttonDonation = document.getElementById('show-donation');
buttonDonation.addEventListener('click', function () {
    showSectionById('donation-section');
    buttonDonation.classList.add('bg-green');
    buttonHistory.classList.remove('bg-green');

})
const buttonHistory = document.getElementById('show-history');
buttonHistory.addEventListener('click', function () {
    showSectionById('transaction-history');
    buttonHistory.classList.add('bg-green');
    buttonDonation.classList.remove('bg-green');
})