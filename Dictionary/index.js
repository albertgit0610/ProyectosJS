async function searchWord() {
  const inputElement = document.getElementById('searchInput');
  const word = inputElement.value.trim();

  if (word === '') {
    alert('Please enter a valid word.');
    return;
  }

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (Array.isArray(data) && data.length > 0) {
      const wordDefinition = data[0].word;
      const partOfSpeech = data[0].meanings[0].partOfSpeech;
      const definition = data[0].meanings[0].definitions[0].definition;

      const definitionElement = document.createElement('div');
      definitionElement.innerHTML = `
        <strong>Word:</strong> ${wordDefinition}<br>
        <strong>Part of speech:</strong> ${partOfSpeech}<br>
        <strong>Definition:</strong> ${definition}
      `;

      resultElement.appendChild(definitionElement);
    } else {
      resultElement.textContent = `"${word}" It is not a valid word.`;
    }
  } catch (error) {
    console.error('Error getting definition', error);
  }
}
