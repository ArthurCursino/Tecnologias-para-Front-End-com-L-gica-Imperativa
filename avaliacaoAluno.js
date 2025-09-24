const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main() {
  console.log("=== Sistema de Avaliação Acadêmica ===");

  try {
    const totalAulas = parseInt(await perguntar("Número de aulas do semestre: "));
    const faltas = parseInt(await perguntar("Número de faltas do aluno: "));
    const p1 = parseFloat(await perguntar("Primeira nota (P1): "));
    const p2 = parseFloat(await perguntar("Segunda nota (P2): "));

    const presenca = ((totalAulas - faltas) / totalAulas) * 100;
    console.log("\n--- Dados do Aluno ---");
    console.log(`Número de aulas do semestre: ${totalAulas}`);
    console.log(`Número de faltas do aluno: ${faltas}`);
    console.log(`Percentual de presença do aluno: ${presenca.toFixed(2)}%`);

    if (presenca < 75) {
      console.log("Situação final do aluno: REPROVADO por falta.");
      rl.close();
      return;
    }

    const media = (p1 + p2) / 2;
    console.log(`\nPrimeira nota: ${p1}`);
    console.log(`Segunda nota: ${p2}`);
    console.log(`Média: ${media.toFixed(2)}`);

    if (media >= 7) {
      console.log("Situação final do aluno: APROVADO.");
    } else if (media >= 5) {
      const rec = parseFloat(await perguntar("Nota da prova de recuperação: "));
      const mediaFinal = (media + rec) / 2;
      console.log(`Nota complementar (recuperação): ${rec}`);
      console.log(`Média final após recuperação: ${mediaFinal.toFixed(2)}`);

      if (mediaFinal >= 5) {
        console.log("Situação final do aluno: APROVADO na recuperação.");
      } else {
        console.log("Situação final do aluno: REPROVADO na recuperação.");
      }
    } else {
      console.log("Situação final do aluno: REPROVADO por nota.");
    }
  } catch (err) {
    console.log("Erro ao processar os dados. Verifique as entradas.");
  } finally {
    rl.close();
  }
}

main();
