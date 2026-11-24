# Feijoada do Elias — site institucional

Site estático (HTML5, CSS3 e JavaScript) para o restaurante Feijoada do Elias, em Vitória de Santo Antão (PE).

## Como trocar as fotos
Coloque os arquivos `.jpg` na pasta `assets/fotos/` com estes nomes. Enquanto o arquivo não existir, o site mostra um fundo colorido no lugar.

- Capa: `hero.jpg`
- Seu Elias: `seu-elias.jpg`
- Pratos: `maminha.jpg`, `carne-de-sol.jpg`, `picanha-argentina.jpg`, `charque-na-brasa.jpg`, `arrumadinho-de-charque.jpg`, `baiao-de-dois.jpg`, `buchada.jpg`, `mistao.jpg`
- Galeria: `galeria-1.jpg` a `galeria-6.jpg`

Dica: use fotos com no máximo 1600 px de largura para o site carregar rápido.

## Como colocar o link do Anota Aí
Abra `js/dados.js` e cole o link do cardápio em `anotaAi`. Enquanto estiver vazio, os botões de pedido levam ao Instagram.

## Como editar pratos e legendas
Também em `js/dados.js`.

## Como publicar no GitHub Pages
1. Suba todo o conteúdo desta pasta para um repositório (o `index.html` fica na raiz).
2. No GitHub, vá em Settings, depois Pages.
3. Em Source, escolha a branch `main` e a pasta `/ (root)`, e salve.
4. O endereço do site aparece na mesma tela em alguns minutos.
