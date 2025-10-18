## 📱 App Calculadora de IMC - React Native

Uma aplicação mobile desenvolvida em React Native para calcular o Índice de Massa Corporal (IMC) com funcionalidades de histórico e compartilhamento.

## 📋 Sobre o Projeto

Esta aplicação permite aos usuários calcular seu IMC inserindo peso e altura, visualizar o resultado, compartilhar o resultado e manter um histórico de todos os cálculos realizados.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **React Navigation** - Navegação entre telas
- **React Native Share** - Funcionalidade de compartilhamento

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js instalado
- Expo CLI instalado globalmente
- Dispositivo móvel com Expo Go ou emulador

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/dvsantoss/app-calculador-imc
cd imc-project
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto:
```bash
npm start
# ou
yarn start
```

4. Escaneie o QR code com o app Expo Go ou execute em um emulador.

## 🎯 Funcionalidades

### 1. Cálculo de IMC
- **Entrada de dados**: Campos para peso e altura
- **Validação**: Verificação de campos obrigatórios
- **Cálculo automático**: Fórmula IMC = peso / (altura)²
- **Formatação**: Suporte para vírgula e ponto decimal

### 2. Validação e Tratamento de Erros
- **Campos obrigatórios**: Validação de preenchimento
- **Valores inválidos**: Verificação de números válidos
- **Feedback visual**: Mensagens de erro em vermelho
- **Vibração**: Feedback tátil para erros

### 3. Histórico de Resultados
- **Lista persistente**: Armazenamento de todos os cálculos
- **Ordenação**: Resultados mais recentes primeiro
- **Scroll**: Lista com scroll para visualizar histórico
- **Identificação única**: Cada resultado com ID único

### 4. Compartilhamento
- **Botão compartilhar**: Disponível na tela de resultado
- **Mensagem personalizada**: "Meu imc hoje é: [valor]"
- **Integração nativa**: Usa React Native Share

### 5. Interface Responsiva
- **Design moderno**: Interface limpa e intuitiva
- **Cores contrastantes**: Vermelho para destaque, branco para fundo
- **Botões arredondados**: Design moderno com bordas arredondadas
- **Layout flexível**: Adaptável a diferentes tamanhos de tela

## 📱 Estados da Aplicação

### Estado Inicial
- Campos de peso e altura vazios
- Botão "Calcular" habilitado
- Mensagem padrão: "Preencha o peso e a altura"
- Histórico vazio

### Estado de Erro
- Campos obrigatórios não preenchidos
- Mensagem de erro: "Campo obrigatório*"
- Vibração do dispositivo
- Campos destacados em vermelho

### Estado de Resultado
- IMC calculado e exibido
- Botão muda para "Calcular novamente"
- Botão "Compartilhar" disponível
- Resultado adicionado ao histórico

## 🔧 Estrutura do Projeto

```
imc-project/
├── App.js                 # Componente principal
├── src/
│   └── components/
│       ├── Form/          # Formulário principal
│       │   ├── index.js   # Lógica do formulário
│       │   ├── style.js   # Estilos do formulário
│       │   └── ResultImc/ # Componente de resultado
│       │       ├── index.js
│       │       └── style.js
│       └── Title/         # Título da aplicação
│           ├── index.js
│           └── style.js
├── assets/               # Imagens e ícones
└── package.json         # Dependências
```

## 🎨 Componentes Principais

### Form (Formulário Principal)
- **Estados gerenciados**: height, weight, messageImc, imc, textButton, errorMessage, imcList
- **Funções principais**: imcCalculator(), verificationImc(), validationImc()
- **Validações**: Campos obrigatórios, valores numéricos válidos
- **Renderização condicional**: Formulário ou resultado

### ResultImc (Resultado do IMC)
- **Props**: messageResultImc, resultImc
- **Funcionalidade**: Exibição do resultado e botão de compartilhamento
- **Integração**: React Native Share API

### Title (Título)
- **Função**: Exibição do título "CALCULADORA DE IMC"
- **Estilo**: Texto em vermelho, centralizado

## ⚠️ Validações e Tratamentos

### Campos Obrigatórios
- **Peso**: Deve ser preenchido
- **Altura**: Deve ser preenchida
- **Comportamento**: Vibração + mensagem de erro se vazio

### Valores Inválidos
- **Verificação**: isNaN() para valores não numéricos
- **Altura zero**: Impede divisão por zero
- **Formatação**: Suporte para vírgula e ponto decimal

### Tratamento de Erros
- **Mensagens claras**: "Campo obrigatório*" e "Valores inválidos"
- **Feedback visual**: Texto em vermelho
- **Feedback tátil**: Vibração do dispositivo
- **Reset de estado**: Limpeza de campos após erro

## 📸 Capturas de Tela

### 1. Tela de Início Normal
![Tela de Início](https://github.com/user-attachments/assets/0ec34305-75ec-4e99-b532-e374a79eb87e)

### 2. Tela de Início com Aviso de Campo Obrigatório
*[Espaço para captura de tela mostrando mensagem de erro "Campo obrigatório*"]*

### 3. Tela do Resultado Normal
*[Espaço para captura de tela exibindo o resultado do IMC calculado]*

### 4. Clicando em Compartilhar na Tela de Resultado
*[Espaço para captura de tela mostrando o menu de compartilhamento nativo]*

### 5. Mostrando a Lista de Resultados com Scroll
*[Espaço para captura de tela exibindo o histórico de resultados com scroll]*

## 🔄 Fluxo de Uso

1. **Início**: Usuário abre o app
2. **Entrada**: Preenche peso e altura
3. **Validação**: Sistema verifica campos obrigatórios
4. **Cálculo**: IMC é calculado e exibido
5. **Histórico**: Resultado é salvo na lista
6. **Compartilhamento**: Usuário pode compartilhar resultado
7. **Repetição**: Processo pode ser repetido

---

**Nota**: Esta aplicação é apenas para fins educacionais e não substitui consultas médicas profissionais.


Desenvolvido com ❤️ por Davi
