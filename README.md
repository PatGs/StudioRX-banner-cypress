
# 📄 Documentação do Projeto de Automação de Banners Animados com Cypress

📌 Descrição do Projeto
Este projeto tem como objetivo automatizar o processo de validação de banners animados, comparando cada frame da animação com o layout de referência esperado. O sistema utiliza o Cypress para capturar os frames, salvar imagens e realizar comparações visuais. Caso existam diferenças entre o layout e a animação, o teste indicará erro.

🛠 Pré-requisitos
Antes de iniciar, você precisa ter instalado:
- Node.js (versão 18 ou superior)
- npm ou yarn (para gerenciamento de pacotes)
- Git (para clonar o repositório)
- Cypress (será instalado via npm/yarn)

📥 Instalação do Projeto
1. Clone este repositório:
   git clone https://github.com/PatGs/StudioRX-banner-cypress.git
2. Acesse a pasta do projeto: cd nome-da-pasta
3. Instale as dependências: npm install ou yarn install

📂 Estrutura de Pastas
studiorx-banner-cypress/
│
├── cypress/
│   ├── e2e/             # Testes automatizados
│   ├── fixtures/        # Arquivos de dados e imagens de referência
│   ├── snapshots/       # Capturas de tela geradas nos testes
│   ├── videos/          # Gravações dos testes
│
├── package.json         # Dependências e scripts do projeto
├── cypress.config.js    # Configurações do Cypress
└── README.md            # Instruções do projeto

▶ Executando os Testes
Para rodar os testes, utilize um dos comandos abaixo:
   npx cypress open  → Abre a interface do Cypress para rodar testes manualmente
   npx cypress run   → Roda todos os testes no modo headless (sem interface)

⚙ Funcionamento do Projeto
1. O Cypress acessa a URL do banner animado.
2. A animação é pausada para captura.
3. Cada frame é capturado e salvo.
4. As imagens capturadas são comparadas com as imagens de referência.
5. Se houver diferenças visuais, o teste falha.

🤝 Contribuição
Caso queira contribuir com o projeto, crie um fork, desenvolva suas alterações e envie um pull request.

📜 Licença
Este projeto é de uso interno e não possui licença pública definida.











