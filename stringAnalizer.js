

function analyzeString() {
      const sentence = document.getElementById("sentence").value;

      const totalCharacters = sentence.length;
      const words = sentence.trim().split(" ");
      const totalWords = sentence.trim() === "" ? 0 : words.length;
      const containsJavaScript = sentence.includes("JavaScript");

      document.getElementById("characterCount").textContent = "Total characters: " + totalCharacters;
      document.getElementById("wordCount").textContent = "Total words: " + totalWords;
      document.getElementById("containsJS").textContent = "Contains 'JavaScript': " + containsJavaScript;
    }