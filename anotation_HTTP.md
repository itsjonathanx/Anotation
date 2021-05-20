## HyperText Transfer Protocol
  * Protocolo de Transferência de HyperTexto
  * HyperTexto são texto que podem ter audios, videos, imagens, links para outros texto e etc.

## Visão Geral
  * Permite troca de informações e dados na internet;
  * Uma troca de mensagens
  * HTML, CSS, Scripts, Imagens, Vídeo
  * Uma chamada para cada um desses recursos

  ---

## Recurso
  * Recurso
    * Local que será enviado o pedido
    * Uma URL é usada para acessar o recurso
    * Exemplos: 
      * https://google.com
      * https://localhost:3000/post?q=oracle

## Mensagem
  * Pedido(request)
    * Methods
      * Definição do tipo do pedido
      * Qual ação deve ser feita no servidor
      * Exemplos:
        * GET - Pegar um recurso
        * POST - Criar um recurso
      * Headers
      * Body
  * Resposta(response)
    * Status Code
      * Resposta do servidor sobre o estado do pedido/resposta
      * Exemplo:
        * 200 -seu pedido foi OK
        * 301 - pedido de redirecionamento
        * 404 - o recurso não foi encontrado/página não encontrada
        * 500 - erro interno de servidor
      * Headers
      * Body
  * Request / Response
    * Headers 
      * Campos informativos
      * Propriedade: Valor
        * Exemplo:
          * Content-Type: application/json
          * User-Agent: Chrome
          * Request URL: www.google.com
    * Body
      * HTML
      * Conteúdo
      * JSON

  ### REQUEST MESSAGE
    GET/index.html HTTP/1.1
    User-Agent: Mozilla/4.0
    Accept: text/html

  ### RESPONSE MESSAGE
    HTTP/1.1 200 OK
    Server: Express
    Content-Type: text/html

  ``<html>...</html> ``

---

## Instalando JSON Server
  * https://github.com/typicode/json-server
  * npm install -g json-server

  #### Criar um arquivo db.json
    {
      "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
    }
  #### Start JSON-Server
    json-server --watch db.json

  #### Se você entrar no http://localhost:3000/posts, vai pegar
    { 
      "id": 1, 
      "title": "json-server", 
      "author": "typicode" 
    }

**Idempotente - que sempre vem a mesma resposta**

## Métodos 
  ### GET
    * Pegar um recurso
    * Somente recebe dados
    * Características 
      * Seguro: Sim
      * Idempotente: Sim
      * Body
        * REQUEST: Não
        * RESPONSE: Sim
      * Cacheable: Sim
      * Uso em formulários HTML: Sim
  
  ### HEAD
    * Semelhante ao GET, porém, recebemos somente o cabeçalho
      * HEAD /post
    * Características
      * Seguro: Sim
      * Idempotente: Sim
      * BODY
        * REQUEST: Não
        * RESPONSE: Não
      * Uso em formulários HTML: Não
      * Cachable: Sim
  
  ### POST
    * Publicar/Cadastrar um Recurso
    * Características
      * Seguro: Não
      * Idempotente: Não
      * Body
        * REQUEST
        * RESPONSE
      * Uso em formulários HTML: Sim
      * Poderá ser cacheable

  ### PUT
    * Cria um novo ou Atualiza um Recurso
      * PUT /profile HTTP/1.1
      * Muito utilizado para atualizar
      * Criação 
        * Status code 201
      * Atualização 
        * Status code 204 ou 200
    * Características
      * Seguro: Não
      * Idempotente: Sim
      * Body
        * Request: Sim
        * Response: Não
      * Uso em formulários HTML: Não
      * Cacheable: Não
  
  ### PATCH
    * Modificação parcial de um recurso
      * Atualizar parte do recurso, diferente do PUT que atualiza por completo
      * PATCH /posts/1 HTTP/1.1
    * Características
      * Seguro: Não
      * Idempotente: Não
      * Body
        * Request: Sim
        * Response: Sim
      * Uso em formulários HTML: Não
      * Cacheable: Não

  ### DELETE
    * Remover um recurso
      * DELETE /posts HTTP/1.1
      * Status code
        * 202: Accepted
        * 204: No content
        * 200: OK
    * Características
      * Seguro: Não
      * Idempotente: Sim
      * Body
        * Request: Possibilidade
        * Response: Possibilidade
      * Uso em formulários HTML: Não
      * Cacheable: Não
## Headers
  

## Um pouco mais sobre Status Code
  ### 100
    * 100: Continue
  
  ### 200
    * 200: OK(GET, POST)
    * 201: Created(PUT)
    * 204: No Content(DELETE, PUT)
  
  ### 300
    * 301: Moved Permanently
    * 302: Found
    * 307: Temporary Redirect
    * 308: Created(PUT)

  ### 400
    * 400: Bad Request
    * 401: Unauthorized
    * 403: Forbidden
    * 404: Not Found
    * 405: Method Not Allowed
    * 429: Too Many Requests
  
  ### 500
    * 500: Internal Server Error
    * 503: Service Unavailable
