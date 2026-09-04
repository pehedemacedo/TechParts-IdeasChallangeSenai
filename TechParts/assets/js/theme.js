// Aplica as preferências de tema (claro/escuro, daltonismo, tamanho do texto)
// em todas as páginas do site. As preferências ficam salvas no localStorage
// e são aplicadas assim que este script carrega, antes do resto da página.
(function () {
    var STORAGE_KEY = "techparts-settings";
    var MIN_SCALE = 80;
    var MAX_SCALE = 130;
    var STEP = 10;

    function loadSettings() {
        var defaults = { theme: "light", colorblind: false, fontScale: 100 };
        var raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return defaults;
        }

        try {
            var saved = JSON.parse(raw);
            return {
                theme: saved.theme || defaults.theme,
                colorblind: !!saved.colorblind,
                fontScale: saved.fontScale || defaults.fontScale
            };
        } catch (e) {
            return defaults;
        }
    }

    function saveSettings(settings) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    }

    function apply(settings) {
        var html = document.documentElement;
        html.setAttribute("data-theme", settings.theme);
        html.setAttribute("data-colorblind", settings.colorblind ? "true" : "false");
        html.style.fontSize = settings.fontScale + "%";
    }

    var settings = loadSettings();
    apply(settings);

    // API usada pela página de configurações (e por qualquer outra página)
    window.TechPartsTheme = {
        getSettings: function () {
            return settings;
        },
        setTheme: function (theme) {
            settings.theme = theme;
            saveSettings(settings);
            apply(settings);
        },
        setColorblind: function (enabled) {
            settings.colorblind = enabled;
            saveSettings(settings);
            apply(settings);
        },
        increaseFont: function () {
            settings.fontScale = Math.min(MAX_SCALE, settings.fontScale + STEP);
            saveSettings(settings);
            apply(settings);
        },
        decreaseFont: function () {
            settings.fontScale = Math.max(MIN_SCALE, settings.fontScale - STEP);
            saveSettings(settings);
            apply(settings);
        },
        resetFont: function () {
            settings.fontScale = 100;
            saveSettings(settings);
            apply(settings);
        }
    };
})();