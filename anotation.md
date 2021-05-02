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