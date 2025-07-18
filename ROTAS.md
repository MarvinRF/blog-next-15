```
SSR -> Server Side Rendering -> Renderização/execução no lado do servidor
CSR -> Client Side Rendering -> Renderização/execução no lado do cliente

 Static Route / SSG <- Tenho o HTML pronto (estático) -> Static Site Generation

 Dynamic Route <- Não tenho nada pronto -> precisa ir na DB pegar os dados para depois montar a page no cliente

ISR <- Incremental Static Regeneration -> Combinação de Static e Dynamic ex: posso gerar uma pagina estatica e após 60s atualizar o conteudo dela.

/ <- ISR -> Depois de 60s quero atualizar o conteúdo dela
/ <- ISR -> Depois que eu atualizar algum conteúdo ela atualiza ex: tables etc.

/ (Rota Pública)
/post/[slug] (Rota Pública)

/admin/post (Rota Privado - Dynamic) - Ler (R) Lista de posts / (D) Delete
/admin/post/[id] (Rota Privado - Dynamic) - Atualizar um post (U)
/admin/post/new (Rota Privado - Dynamic) - Criar um post (C)

/admin/login (Rota Dynamic) - Fazer o login do usuário
```
