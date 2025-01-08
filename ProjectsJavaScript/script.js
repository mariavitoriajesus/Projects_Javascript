function classifyHero() {
    // Variáveis
    const name = document.getElementById('heroName').value;
    const xp = parseInt(document.getElementById('heroXP').value);
    let level;

    // Estruturas de decisão
    let classifications = [
        { min: 0, max: 999, level: 'Ferro' },
        { min: 1000, max: 2000, level: 'Bronze' },
        { min: 2001, max: 3000, level: 'Prata' },
        { min: 3001, max: 5000, level: 'Ouro' },
        { min: 5001, max: 8000, level: 'Platina' },
        { min: 8001, max: 9000, level: 'Ascendente' },
        { min: 9001, max: 10000, level: 'Imortal' },
        { min: 10001, max: Infinity, level: 'Radiante' }
      ];

      let i = 0;
      while (i < classifications.length) {
        const range = classifications[i];
        if (xp >= range.min && xp <= range.max) {
          level = range.level;
          break;
        }
        i++;
      }

    // Saída esperada
    const output = document.getElementById('output');
    output.textContent = `O herói de nome ${name} está no nível ${level}`;
  }