fetch("../assets/navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Não foi possível carregar a navbar.");
        }

        return response.text();
    })
    .then(data => {

        const navbarContainer = document.getElementById("Navbar");

        if (!navbarContainer) {
            console.error("Elemento #Navbar não encontrado.");
            return;
        }

        navbarContainer.innerHTML = data;

        // Se a div tiver class="black", a navbar fica fixa no topo
        // (usada nas páginas cujo layout já reserva espaço para isso).
        // A cor da navbar (branco no modo claro / escuro no modo escuro)
        // não depende mais dessa classe: ela segue o tema do site
        // automaticamente, via variáveis CSS em theme.css.
        if (navbarContainer.classList.contains("black")) {

            const navbar = document.getElementById("navbar");

            navbar.classList.add("fixed-top");
        }

    })
    .catch(error => {
        console.error("Erro ao carregar a navbar:", error);
    });