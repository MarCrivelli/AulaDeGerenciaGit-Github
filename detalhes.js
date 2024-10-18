document.addEventListener("DOMContentLoaded", function () {
    const title = localStorage.getItem("selectedCardTitle");
    const description = localStorage.getItem("selectedCardDescription");
    const image = localStorage.getItem("selectedCardImage");

    // Preenche os elementos da página com os dados do localStorage
    document.getElementById("tituloFilme").innerText = title;
    document.getElementById("descricaoFilme").innerText = description;
    document.getElementById("imagemFilme").setAttribute("src", image);
});
