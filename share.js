function generateShareURL() {
    const data = {
        machineCost: document.getElementById('machineCost').value,
        sugarWhiteCost: document.getElementById('sugarWhiteCost').value,
        sugarRedCost: document.getElementById('sugarRedCost').value,
        sugarBlueCost: document.getElementById('sugarBlueCost').value,
        sugarYellowCost: document.getElementById('sugarYellowCost').value,
        chopstickCost: document.getElementById('chopstickCost').value,
        decorationCost: document.getElementById('decorationCost').value,
        otherCost: document.getElementById('otherCost').value,
        pricePerUnit: document.getElementById('pricePerUnit').value,
        forecastNumber: document.getElementById('forecastNumber').value
    };

    const code = btoa(JSON.stringify(data));
    const shareURL = `${window.location.origin}${window.location.pathname}?key=${code}`;
    copyToClipboard(shareURL);
    showPopup(`共有URLがクリップボードにコピーされました`);
}

function loadFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('key');

    if (code) {
        try {
            const data = JSON.parse(atob(code));

            document.getElementById('machineCost').value = data.machineCost;
            document.getElementById('sugarWhiteCost').value = data.sugarWhiteCost;
            document.getElementById('sugarRedCost').value = data.sugarRedCost;
            document.getElementById('sugarBlueCost').value = data.sugarBlueCost;
            document.getElementById('sugarYellowCost').value = data.sugarYellowCost;
            document.getElementById('chopstickCost').value = data.chopstickCost;
            document.getElementById('decorationCost').value = data.decorationCost;
            document.getElementById('otherCost').value = data.otherCost;
            document.getElementById('pricePerUnit').value = data.pricePerUnit;
            document.getElementById('forecastNumber').value = data.forecastNumber;

            updatePlan();
            showPopup("データがURLから復元されました。");
        } catch (error) {
            showPopup("URLからの復元に失敗しました。");
        }
    }
}

function copyToClipboard(text) {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

// ページ読み込み時にURLパラメータからデータを復元
window.onload = function() {
    loadFromURL();
};
