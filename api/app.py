from flask import Flask, render_template

app = Flask(__name__)

@app.route('/sobre_mim')
def sobre_mim():
    sobre_mim_data = {
        'curriculo': {
            'titulo': 'Currículo',
            'itens': [
                {'Nome': 'Renato Fernandes da Cruz Júnior'},
                {'Data de nascimento': '27/03/2004'},
                {'Naturalidade': 'São José dos Campos - SP'},
                {'Formação Acadêmica': 'Ensino Médio integrado ao curso técnico de Informática - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP), Jacareí, SP'},
                {'Experiência Profissional': 'Professor Auxiliar - Kumon (2017 - Presente)'},
                {'Cursos Complementares': 'Cursos de Inglês e de Matemática do método Kumon. (2016 - 2022)'}
            ]
        },
        'trabalhos_academicos': {
            'titulo': 'Trabalhos Acadêmicos',
            'projetos': [
                {
                    'nome': 'Projeto API: Nefrologia (2023/2)',
                    'sobre': 'Desenvolvido por alunos da FATEC Prof. Jessen Vidal - SJC, SP. Tem a finalidade de conscientizar, ampliar e facilitar a comunicação de pacientes e famílias que possuem Doença Renal Crônica (DRC).',
                    'metodologia': 'Entre as ferramentas utilizadas no Scrum, uma é a divisão do projeto em Sprints...',
                    'visao_produto': 'Para pessoas que procuram se manter informadas sobre nefro pediatria...',
                    'tecnologias': 'Figma, GitHub, HTML, CSS, Discord, Microsoft Teams, Microsoft Excel, Python e Slack.',
                    'link': 'https://github.com/Code-Nine-FTC/Grupo-Code-Nine'
                },
                {
                    'nome': 'Projeto API: PostHelp (2024/2)',
                    'sobre': 'Desenvolvido por alunos da FATEC Prof. Jessen Vidal - SJC, SP. Tem a finalidade de implementar um sistema de comunicação entre cliente e empresa tendo gerenciamento de chamados e serviços.',
                    'metodologia': 'O framework de Metodologia Ágil utilizado no produto foi o Scrum, um método ágil adaptativo, iterativo, flexível e eficaz. Entre as ferramentas utilizadas no Scrum, uma é a divisão do projeto em Sprints. Para selecionar quais seriam as entregas das nossas Sprints, primeiro definimos nosso MVP, priorizando as tarefas que trariam maior entrega de valor para o cliente. Então, a partir das Tarefas foi construído o Backlog do Produto, o qual foi aprovado pelo cliente e dividido em 4 Backlogs de Sprint.',
                    'visao_produto': 'Para pessoas que desejam obter um melhor atendimento e informações a respeito de suas encomendas.',
                    'tecnologias': 'Figma, GitHub, HTML, CSS, Discord, Microsoft Teams, Microsoft Excel, Python, Slack, Typescript, Node.js, React.',
                    'link': 'https://github.com/Code-Nine-FTC/API-2024.1'
                },
                # Adicione mais projetos aqui se necessário
            ]
        },
        'projetos_pessoais': {
            'titulo': 'Projetos pessoais',
            'descricao': ''
        },
        'projetos_profissionais': {
            'titulo': 'Projetos profissionais',
            'descricao': ''
        }
    }

    return render_template('sobre_mim.html', sobre_mim_data=sobre_mim_data)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

if __name__ == '__main__':
    app.run(debug=True)