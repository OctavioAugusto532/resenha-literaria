document.addEventListener("DOMContentLoaded", () => {
  console.log("Bem-vindo ao Blog Literário!");
  
  
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Calma aí esse site é só pro trablho");
    });
  });
});
