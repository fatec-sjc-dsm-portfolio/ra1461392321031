# portfolio_digital_dsm
## Autor: Renato Fernandes da Cruz Júnior

<p align="center">
<img src="./mgt/perfil.png" width="200" height="200" alt="Foto de perfil"/>
</p>

## Descrição das pastas
* mgt: Diretório com imagens.
* api: Diretório com o código-fonte.

## Como inicializar o diretório (Windows / prompt de comando)
1. Crie uma pasta vazia.
2. Clone o repositório com:
```console 
	git clone https://github.com/Renato-Cruz-Jr/portfolio_digital_dsm.git  .
```

## Linguagens
As linguagens utilizadas para desenvolver o projeto serão as seguintes:
* HTML: linguagem de marcação utilizada para produção de páginas na web. Com HTML, é possível criar documentos que podem ser lidos em praticamente qualquer tipo de computador e transmitidos pela internet.
* CSS: linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML, a forma como os elementos devem ser renderizados na tela, entre outros.
* Python: linguagem de alto nível, orientada a objetos, usada para programação. Ela tem semântica dinâmica e é interpretada e vem com estruturas de dados integradas que, quando combinadas com tipagem dinâmica e vinculação dinâmica, a tornam excelente para o desenvolvimento rápido de aplicações. Ela também pode ser utilizada como uma linguagem de colagem ou de script para unir componentes existentes.

## Pré-requisitos
1. Ter um computador.
2. Instalar uma ferramenta de desenvolvimento web. Clique [aqui](https://cynoteck.com/pt/blog-post/web-development-tools/) para acessar um website que aponta algumas dessas ferramentas que você pode instalar em sua máquina.


# Como executar o projeto:

## 1. Instale o [Python](https://www.python.org/downloads/) em seu computador.

## 2. Após a instalação, abra o terminal do seu sistema e navegue para a pasta Desktop.

## 3. Clone o repositório do GitHub com o seguinte comando:

```
git clone https://github.com/Renato-Cruz-Jr/portfolio_digital_dsm
```

## 4. Dentro do diretório baixado, abra o terminal.

## 5. Crie e inicie o ambiente virtual:

```
python -m venv venv
.\venv\Scripts\activate
```

Caso você esteja utilizando Linux:

```
python3 -m venv venv
source venv\bin\activate
```

## 6. Instale o Flask e os componentes necessários:

```
pip install -r requirements.txt
```

## 7. Navegue para a pasta da aplicação:

```
cd api
```

## 8. Inicie a execução da aplicação Flask:

```
flask run
```

Ou use:

```
python app.py
```

## 9. Navegue para o endereço http://127.0.0.1:5000 para acessar a aplicação.

## 10. Para encerrar a instância, utilize:

```
deactivate
```

## 11. Para verificar o website através do [Vercel](https://www.alura.com.br/artigos/heroku-vercel-outras-opcoes-cloud-plataforma), clique [AQUI](https://portfolio-dsm-renatojr.vercel.app/).

# Como implementar o Vercel

## 1. Instale o [Node.js](https://nodejs.org/en/download) em seu computador.

## 2. Após a instalação do Node.js, abra o terminal e execute o seguinte comando para instalar o Vercel CLI:

```
npm install -g vercel
```

## 3. Crie uma conta no [site do Vercel](https://vercel.com/) e faça login.

## 4. No terminal, navegue até a pasta raiz do seu projeto.

## 5. Execute o seguinte comando:

```
vercel
```

## 6. Siga as instruções para publicar o projeto no Vercel. Você pode configurar opções como o nome do projeto, domínio, entre outras configurações.

(Validação professor FGMC - 1DSM - 2023-02)
