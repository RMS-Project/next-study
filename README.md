yarn init -y
npm init -y

## Instala o React, React router dom e o next.
yarn create next-app <nome do projeto>

## Integrar TypeScript
yarn add typescript @types/react @types/node -D

## localhost:3000
yarn dev

## O Next entende que cada pasta criada dentro de pages é uma rota que fica acessível pela URL.
## Porém arquivos com "_", (_app.js), não são listados como rota.

## URLs com products/bermudas, criar a pasta e colocar o nome do arquivo entre colchetes ex: [slug].tsx

## Client side fetch
## Buscar dados pela API da forma tradicional. 
## User effect é disparda no Browser.
## Ao desabilitar o javascript no navegador vemos que os dados não são carregados.
## Desta forma quando for não se deve utilizar Client side fetch para realizar motor de busca.

## Servuce Size Render
## Carrega todo o conteúdo de uma só vez.

## Cria um roteador que expõe um arquivo JSON.
## -d - Delay de 2 segundos.
npx json-server server.json -p 3333 -d 2000 