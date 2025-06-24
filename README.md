**Calculadora de partidas Rankeadas**

Este projeto contém uma solução para o desafio de lógica: Calcular o saldo de vitórias de um jogador e determinar seu nível de ranqueamento, com base em uma regra pré-definida de faixas de vitórias.

**Descrição**

O código foi criado em JavaScript e está dividido de forma modular, com funções separadas para:

- Calcular o saldo de vitórias
- Determinar o nível do jogador
- Gerar a mensagem final com o resultado

**Regras do Desafio**

**Saldo de Vitórias | Nível**

Menor ou igual a 10 = Ferro
Entre 11 e 20 = Bronze
Entre 21 e 50 = Prata
Entre 51 e 80 = Ouro
Entre 81 e 90 = Diamante
Entre 91 e 100 = Lendário
Maior ou igual a 101 = Imortal

**Estrutura das funções**

calculoDoSaldo(vitorias, derrotas)
Calcula o saldo de vitórias.

descobrindoONivel(saldoVitorias)
Determina o nível com base no saldo.

mainPartidaRankeada(vitorias, derrotas)
Chama as outras funções e retorna a mensagem final com o resultado.

**Possíveis melhorias futuras:**

Aceitar entrada do usuário via terminal (prompt-sync ou readline)
Criar testes automatizados
Transformar em uma API simples
Fazer uma versão web com HTML/CSS/JavaScript

**Tecnologias utilizadas**
Javascript
Node.js - para executar o código de forma local
