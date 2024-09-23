// function of show and hide 
function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// add and remove background-color of button//
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
// toggle blog //
document.getElementById('blog-info').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './blog.html'
})
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

const btnCon = document.getElementById('btn-donate-con');
const btnCon2 = document.getElementById('btn-donate2-con');
const btnCon3 = document.getElementById('btn-donate3-con');
// noakhali donation//
document.getElementById('btn-noa').addEventListener('click', function (event) {
    event.preventDefault();
    const inputNoa = getInputAmount('input-amount-noa');
    const totalNoa = getTextValue('total-amount-noa');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputNoa) || inputNoa < 0 || inputNoa > availableAmount || availableAmount <= 0) {
        document.getElementById('my_modal_1').close();
        return alert('Please provide valid data');
    }
    const newTotalNoa = totalNoa + inputNoa;
    document.getElementById('total-amount-noa').innerText = newTotalNoa;

    // add to transaction history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${newTotalNoa} Taka is Donated for Noakhali, Bangladesh</p>
    <p class="text-sm text-gray-500">Date: ${dateString}</p>
    </div>`;
    document.getElementById('transaction-history').appendChild(div);
    const newAvailableAmout = availableAmount - inputNoa;
    document.getElementById('available-balance').innerText = newAvailableAmout;
    document.getElementById('input-amount-noa').value = "";
})
// feni donation //
document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputFeni = getInputAmount('input-amount-feni');
    const totalFeni = getTextValue('total-amount-feni');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputFeni) || inputFeni < 0 || inputFeni > availableAmount || availableAmount <= 0) {
        document.getElementById('my_modal_2').close();
        return alert('Please provide valid data');
    }
    const newTotalFeni = totalFeni + inputFeni;
    document.getElementById('total-amount-feni').innerText = newTotalFeni;
    // add to transaction history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${newTotalFeni} Taka is Donated for Feni, Bangladesh</p>
    <p class="text-sm text-gray-500">Date: ${dateString}</p>
    </div>`;
    document.getElementById('transaction-history').appendChild(div);
    const newAvailableAmout = availableAmount - inputFeni;
    document.getElementById('available-balance').innerText = newAvailableAmout;
    console.log('clear')
    document.getElementById('input-amount-feni').value = "";

})
// quota movement //
document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputQuota = getInputAmount('input-amount-quota');
    const totalQuota = getTextValue('total-amount-quota');
    const availableAmount = getTextValue('available-balance');
    if (isNaN(inputQuota) || inputQuota < 0 || inputQuota > availableAmount || availableAmount <= 0) {
        document.getElementById('my_modal_3').close();
        return alert('Please provide valid data');
    }
    const newTotalQuota = totalQuota + inputQuota;
    document.getElementById('total-amount-quota').innerText = newTotalQuota;
    // add to transaction history //
    const currentDate = new Date();
    const dateString = currentDate.toString();
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-2 border-gray w-8/12 mx-auto p-8 rounded-lg mb-10 space-y-2">
    <p class="text-lg font-bold">${newTotalQuota} Taka is Donated for injured brave individuals in Quota Movement, Bangladesh</p>
    <p class="text-sm text-gray-500">Date: ${dateString}</p>
    </div>`;
    document.getElementById('transaction-history').appendChild(div);
    const newAvailableAmout = availableAmount - inputQuota;
    document.getElementById('available-balance').innerText = newAvailableAmout;
    document.getElementById('input-amount-quota').value = "";

})
// modal handler //

btnCon.addEventListener('click', function () {
    const modal = document.getElementById('my_modal_1');
    modal.close();
});
btnCon2.addEventListener('click', function () {
    const modal = document.getElementById('my_modal_2');
    modal.close();
})
btnCon3.addEventListener('click', function () {
    const modal = document.getElementById('my_modal_3');
    modal.close();
})