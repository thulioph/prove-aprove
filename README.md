# ProveAprove

## Equipe

Leonardo Paiva | Thulio Philipe | Daniel Freitas
:------------:  |  :-------------:  |  :-------------:
<a href="https://github.com/leonardopaiva">![Leonardo Paiva](https://avatars.githubusercontent.com/u/6975831?v=3&s=128)</a> | <a href="https://github.com/thulioph">![Thulio Philipe](https://avatars2.githubusercontent.com/u/2343288?v=3&s=128)</a> | <a href="https://www.facebook.com/daniel.freitassatierf">![Daniel Freitas](https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p160x160/1925090_878411402183922_3742662771100211456_n.jpg?oh=fba82fb8d02eb4eea562734142018036&oe=55379FE9&__gda__=1430685062_c1dcc862f93ffda02d5e115e38742537)</a>
Front-End/Back-End | Front-End | Back-End

## O projeto

O **Prove & Aprove** é um webapp criado utilizando `PHP` + `CSS` + `JS` e foi desenvolvido para conclusão do curso de pós graduação em DWA pela Unibratec.

O app utilizada de alguns recursos como:
 - Chamadas Ajax
 - Detecção do status da rede
 - APP Cache
 - LocalStorage

> Existem algumas coisas que estão pendentes e serão listadas nas [`issues`](https://github.com/thulioph/prove-aprove/issues)

## Instalação

1. Se você não tem instalado [npm](http://npmjs.org), [bower](http://bower.io) e [grunt](http://gruntjs.com/), faça isso agora.

2. Depois da instalação execute o comando `npm install` para instalar todas as dependências.

    ```
    $ npm install
    ```

3. Execute o comando `grunt` para inicializar.

    ```
    $ grunt
    ```

## Preste Atenção!

1. Nós usamos o **bower** para gerenciamento de dependências.

    ```
      $ bower search nome-do-pacote
      $ bower install nome-do-pacote --save-dev
    ```

2. Nós usamos **grunt** para o trabalho duro.

3. Nós trabalhamos com dois caminhos para imagens:

* `src` para imagens em desenvolvimento.
* `dist` para imagens em produção.

> execute o comando `grunt img` para minificar e otimizar as imagens.

4. Nós usamos [browserSync](http://www.browsersync.io/) para testar em diferentes browsers e devices.

> remove este script quando estiver em produção.

    <script type='text/javascript'>//<![CDATA[
    ;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
    //]]></script>

4. Para um melhor controle do carregamento dos seus scripts, compilar e concatenar, no arquivo `grunt-config.json` adiciona os scripts na task do **uglify**.

## Tenha um ótimo trabalho!
