# Instalando a AdOpt em uma página HTML simples

Siga os passos abaixo para instalar a AdOpt em uma página HTML simples:

1. Substitua o `XXX` no código a seguir da Tag AdOpt pelo GUID do seu ID de Disclaimer, que pode ser encontrado no painel de controle do AdOpt:

```markdown
<meta
  name="adopt-website-id"
  content="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
/>
<script
  src="//tag.goadopt.io/injector.js?website_code=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
  class="adopt-injector"
></script>
```

2. Inicie um servidor local para abrir este arquivo HTML. Se estiver utilizando o VSCode, você pode utilizar a extensão Live Server. Clique com o botão direito no arquivo HTML e selecione "Abrir com Live Server."

3. Acesse a página HTML navegando para a porta aberta pela extensão Live Server. Normalmente, a URL será algo como http://localhost:5500 no seu navegador, mas pode variar dependendo da sua configuração específica.

É isso! Agora você deve ser capaz de visualizar e interagir com a sua página HTML com a AdOpt instalada.
