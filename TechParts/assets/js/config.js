// Liga os controles da página de configurações ao TechPartsTheme (theme.js)
document.addEventListener("DOMContentLoaded", function () {
    var themeDarkInput = document.getElementById("themeDarkInput");
    var colorblindInput = document.getElementById("colorblindInput");
    var fontScaleValue = document.getElementById("fontScaleValue");
    var increaseFontBtn = document.getElementById("increaseFontBtn");
    var decreaseFontBtn = document.getElementById("decreaseFontBtn");
    var resetFontBtn = document.getElementById("resetFontBtn");

    function refreshUI() {
        var settings = window.TechPartsTheme.getSettings();
        themeDarkInput.checked = settings.theme === "dark";
        colorblindInput.checked = settings.colorblind;
        fontScaleValue.textContent = settings.fontScale + "%";
    }

    themeDarkInput.addEventListener("change", function () {
        window.TechPartsTheme.setTheme(themeDarkInput.checked ? "dark" : "light");
        refreshUI();
    });

    colorblindInput.addEventListener("change", function () {
        window.TechPartsTheme.setColorblind(colorblindInput.checked);
        refreshUI();
    });

    increaseFontBtn.addEventListener("click", function () {
        window.TechPartsTheme.increaseFont();
        refreshUI();
    });

    decreaseFontBtn.addEventListener("click", function () {
        window.TechPartsTheme.decreaseFont();
        refreshUI();
    });

    resetFontBtn.addEventListener("click", function () {
        window.TechPartsTheme.resetFont();
        refreshUI();
    });

    refreshUI();
});