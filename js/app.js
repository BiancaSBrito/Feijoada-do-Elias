(function () {
  "use strict";

  
  function criarFoto(figura, src, alt) {
    var img = new Image();
    img.alt = alt;
    img.loading = "lazy";
    img.addEventListener("load", function () { figura.classList.add("tem-foto"); });
    img.addEventListener("error", function () { img.remove(); });
    img.src = src;
    figura.insertBefore(img, figura.firstChild);
  }

  
  document.querySelectorAll("figure[data-src]").forEach(function (f) {
    criarFoto(f, f.dataset.src, f.dataset.alt || "");
  });

  
  var destino = CONFIG.anotaAi || CONFIG.instagram;
  document.querySelectorAll("[data-pedir]").forEach(function (a) {
    a.href = destino;
    a.target = "_blank";
    a.rel = "noopener";
    if (!CONFIG.anotaAi && a.dataset.alt) a.textContent = a.dataset.alt;
  });


  var lista = document.getElementById("lista-pratos");
  PRATOS.forEach(function (p) {
    var li = document.createElement("li");
    li.className = "prato";
    li.dataset.categoria = p.categoria;
    li.innerHTML =
      '<figure class="foto ph"><figcaption></figcaption></figure>' +
      '<div class="prato-info"><h3></h3><p></p></div>';
    li.querySelector("figcaption").textContent = p.nome;
    li.querySelector("h3").textContent = p.nome;
    li.querySelector(".prato-info p").textContent = p.desc;
    criarFoto(li.querySelector("figure"), p.foto, p.nome);
    lista.appendChild(li);
  });

  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filtro = chip.dataset.filtro;
      chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
      lista.querySelectorAll(".prato").forEach(function (li) {
        li.hidden = !(filtro === "todos" || li.dataset.categoria === filtro);
      });
    });
  });

  var galeria = document.getElementById("lista-galeria");
  var janela = document.getElementById("ampliar");
  FOTOS.forEach(function (f) {
    var li = document.createElement("li");
    li.innerHTML = '<button type="button" class="foto ph" aria-label=""><span class="legenda"></span></button>';
    var botao = li.querySelector("button");
    botao.setAttribute("aria-label", "Ampliar foto: " + f.legenda);
    li.querySelector(".legenda").textContent = f.legenda;
    criarFoto(botao, f.src, f.legenda);
    botao.addEventListener("click", function () {
      if (!botao.classList.contains("tem-foto")) return;
      janela.querySelector("img").src = f.src;
      janela.querySelector("img").alt = f.legenda;
      janela.querySelector("p").textContent = f.legenda;
      janela.showModal();
    });
    galeria.appendChild(li);
  });
  janela.addEventListener("click", function (e) { if (e.target === janela) janela.close(); });

 
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  btn.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("aberto");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
