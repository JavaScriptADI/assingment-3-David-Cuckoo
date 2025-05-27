function mathFunction() {
      const input = document.getElementById("numbers").value;
      const parts = input.split(" ").map(num => parseFloat(num.trim()));

      const min = Math.min(...parts);
      const max = Math.max(...parts);
      const average = Math.round((parts[0] + parts[1] + parts[2]) / 3);

      document.getElementById("smallest").textContent = "Smallest: " + min;
      document.getElementById("largest").textContent = "Largest: " + max;
      document.getElementById("average").textContent = "Average: " + average;
    }