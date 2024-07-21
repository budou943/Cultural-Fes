function updatePlan() {
    const machineCost = parseInt(document.getElementById('machineCost').value) || 0;
    const sugarWhiteCost = parseInt(document.getElementById('sugarWhiteCost').value) || 0;
    const sugarRedCost = parseInt(document.getElementById('sugarRedCost').value) || 0;
    const sugarBlueCost = parseInt(document.getElementById('sugarBlueCost').value) || 0;
    const sugarYellowCost = parseInt(document.getElementById('sugarYellowCost').value) || 0;
    const chopstickCost = parseInt(document.getElementById('chopstickCost').value) || 0;
    const decorationCost = parseInt(document.getElementById('decorationCost').value) || 0;
    const otherCost = parseInt(document.getElementById('otherCost').value) || 0;

    const totalCost = machineCost + sugarWhiteCost + sugarRedCost + sugarBlueCost + sugarYellowCost + chopstickCost + decorationCost + otherCost;
    document.getElementById('totalCost').innerText = totalCost;
    document.getElementById('displayTotalCost').innerText = totalCost;

    const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value) || 0;
    const forecastNumber = parseInt(document.getElementById('forecastNumber').value) || 0;

    const zeroSalesNumber = totalCost / pricePerUnit;
    const zeroSalesPrice = totalCost / forecastNumber;
    const revenue = pricePerUnit * forecastNumber;
    const profit = revenue - totalCost;

    document.getElementById('zeroSalesNumber').innerText = isFinite(zeroSalesNumber) ? zeroSalesNumber.toFixed(2) : '---';
    document.getElementById('zeroSalesPrice').innerText = isFinite(zeroSalesPrice) ? zeroSalesPrice.toFixed(2) : '---';
    document.getElementById('revenue').innerText = revenue.toFixed(2);
    document.getElementById('profit').innerText = profit.toFixed(2);
}

function saveData() {
    const machineCost = document.getElementById('machineCost').value;
    const sugarWhiteCost = document.getElementById('sugarWhiteCost').value;
    const sugarRedCost = document.getElementById('sugarRedCost').value;
    const sugarBlueCost = document.getElementById('sugarBlueCost').value;
    const sugarYellowCost = document.getElementById('sugarYellowCost').value;
    const chopstickCost = document.getElementById('chopstickCost').value;
    const decorationCost = document.getElementById('decorationCost').value;
    const otherCost = document.getElementById('otherCost').value;
    const pricePerUnit = document.getElementById('pricePerUnit').value;
    const forecastNumber = document.getElementById('forecastNumber').value;

    document.cookie = `machineCost=${machineCost};path=/`;
    document.cookie = `sugarWhiteCost=${sugarWhiteCost};path=/`;
    document.cookie = `sugarRedCost=${sugarRedCost};path=/`;
    document.cookie = `sugarBlueCost=${sugarBlueCost};path=/`;
    document.cookie = `sugarYellowCost=${sugarYellowCost};path=/`;
    document.cookie = `chopstickCost=${chopstickCost};path=/`;
    document.cookie = `decorationCost=${decorationCost};path=/`;
    document.cookie = `otherCost=${otherCost};path=/`;
    document.cookie = `pricePerUnit=${pricePerUnit};path=/`;
    document.cookie = `forecastNumber=${forecastNumber};path=/`;

    showPopup("データが保存されました。");
}

function loadData() {
    const cookies = document.cookie.split(';');
    const cookieData = {};
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        cookieData[name.trim()] = value;
    });

    document.getElementById('machineCost').value = cookieData.machineCost || 0;
    document.getElementById('sugarWhiteCost').value = cookieData.sugarWhiteCost || 0;
    document.getElementById('sugarRedCost').value = cookieData.sugarRedCost || 0;
    document.getElementById('sugarBlueCost').value = cookieData.sugarBlueCost || 0;
    document.getElementById('sugarYellowCost').value = cookieData.sugarYellowCost || 0;
    document.getElementById('chopstickCost').value = cookieData.chopstickCost || 0;
    document.getElementById('decorationCost').value = cookieData.decorationCost || 0;
    document.getElementById('otherCost').value = cookieData.otherCost || 0;
    document.getElementById('pricePerUnit').value = cookieData.pricePerUnit || 0;
    document.getElementById('forecastNumber').value = cookieData.forecastNumber || 0;

    updatePlan();
    showPopup("データが呼び出されました。");
}

function showPopup(message) {
    alert(message);
}

// 初期計算
updatePlan();
