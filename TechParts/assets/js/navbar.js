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

        // Se a div tiver class="black"
        if (navbarContainer.classList.contains("black")) {

            const navbar = document.getElementById("navbar");
            const offcanvas = document.getElementById("offcanvasDarkNavbar");

            navbar.classList.add(
                "navbar-dark",
                "bg-dark",
                "fixed-top"
            );

            offcanvas.classList.add(
                "text-bg-dark"
            );
        }

    })
    .catch(error => {
        console.error("Erro ao carregar a navbar:", error);
    });