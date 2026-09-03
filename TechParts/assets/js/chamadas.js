let chamadas = JSON.parse(localStorage.getItem('chamadasTechParts')) || [];
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});

function renderTable() {
    const table = document.getElementById('chamadasTable');
    
    let tbody = table.querySelector('tbody');
    if (!tbody) {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }
    
    tbody.innerHTML = ''; 

    chamadas.forEach((item) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.chamada}</td>
            <td>${item.setor}</td>
            <td>${item.prioridade}</td>
            <td>${item.responsavel}</td>
            <td>${item.status}</td>
            <td>${item.data}</td>
        `;
        tbody.appendChild(tr);
    });
}

function addChamada(event) {
    event.preventDefault();

    const novaChamada = {
        chamada: document.getElementById("modalChamada").value,
        setor: document.getElementById("modalSetor").value,
        prioridade: document.getElementById("modalPrioridade").value,
        responsavel: document.getElementById("modalResponsavel").value,
        status: document.getElementById("modalStatus").value,
        data: document.getElementById("modalData").value
    };

    chamadas.push(novaChamada);

    localStorage.setItem('chamadasTechParts', JSON.stringify(chamadas));

    renderTable();
    closeModal();
}

function openModal() {
    document.getElementById("chamadaModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("chamadaModal").style.display = "none";
    document.getElementById("addChamadaForm").reset();
}

window.onclick = function(event) {
    const modal = document.getElementById("chamadaModal");
    if (event.target === modal) {
        closeModal();
    }
};