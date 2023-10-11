# Guia de Instalação do Aplicativo Next.js com AdOpt

Este guia descreve os passos necessários para configurar um aplicativo Next.js com o AdOpt instalado. Certifique-se de seguir estas etapas cuidadosamente para uma configuração bem-sucedida.

## Pré-requisitos

- Node.js e npm instalados.
- Um projeto Next.js configurado.

## Configuração da AdOpt

1. Crie e configure seu aviso dentro do dashboard da AdOpt.
2. No painel, localize o seu "disclaimer ID". Você precisará substituir o marcador `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` pelo seu "disclaimer ID" nas etapas a seguir.

## Configuração do Projeto

3. Abra o arquivo `src/app/layout.tsx` (ou outra página desejada) e substitua o `xxx` no código a seguir da Tag AdOpt pelo GUID do seu `disclaimer ID`:

```html
<meta name="adopt-website-id" content="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
<script
  src="//tag.goadopt.io/injector.js?website_code=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  class="adopt-injector"
></script>
```

Agora, você pode usar os componentes e funções do AdOpt no seu aplicativo Next.js.

## Executando o Servidor

No terminal, navegue até o diretório do seu projeto Next.js e execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```

O servidor Next.js será executado na porta padrão 3000, a menos que você tenha especificado uma porta diferente durante a configuração.

## Acessando o Aplicativo

Abra um navegador da web e acesse o seu aplicativo Next.js digitando o seguinte URL na barra de endereços:

```bash
http://localhost:3000
```

Se você especificou uma porta diferente durante a configuração, substitua 3000 pela porta que você escolheu.

Agora, o seu aplicativo Next.js com a AdOpt está em execução e acessível localmente. Certifique-se de testar e verificar se tudo está funcionando conforme o esperado.

Espero que este guia tenha sido útil para você configurar o seu aplicativo Next.js com a AdOpt. Se encontrar algum problema ou tiver alguma dúvida, consulte a documentação da AdOpt ou entre em contato com o suporte da AdOpt para obter assistência adicional.
