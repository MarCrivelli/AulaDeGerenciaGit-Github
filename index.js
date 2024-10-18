document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".verMais");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = button.closest(".card"); // Encontra o card mais próximo ao botão clicado
            const title = card.getAttribute("data-title");
            const description = card.getAttribute("data-description");
            const image = card.getAttribute("data-image");

            // Armazena os dados no localStorage
            localStorage.setItem("selectedCardTitle", title);
            localStorage.setItem("selectedCardDescription", description);
            localStorage.setItem("selectedCardImage", image);

            // Redireciona para a página de detalhes
            window.location.href = "verMais.html";  // Alterado de "detalhes.html" para "verMais.html"
        });
    });
});
