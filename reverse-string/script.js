function reverseString() {
  const inputElement = document.getElementById("inputString");
  const input = inputElement.value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("reversedString").textContent = reversed;

  document.getElementById("resultContainer").style.display = "block";

  inputElement.value = "";
}

function copyToClipboard() {
  const reversedString = document.getElementById("reversedString").textContent;
  navigator.clipboard.writeText(reversedString).then(
    () => {
      alert("Copied to clipboard!");
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
}
//Solucion Alvaro
/* document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseBtn = document.getElementById('reverseBtn');
    const resultDiv = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');
    const copyMsg = document.getElementById('copyMsg'); // Get the message span

    reverseBtn.addEventListener('click', () => {
        const reversedText = reverseText(inputText.value);
        resultDiv.textContent = reversedText;
        if (reversedText) {
            copyBtn.style.display = "block";
            copyMsg.textContent = ''; // Clear message when new text is reversed
        } else {
            copyBtn.style.display = "none";
        }
    });

    copyBtn.addEventListener('click', () => {
        copyToClipboard(resultDiv.textContent);
    });
});

function reverseText(input) {
    return input.split('').reverse().join('');
}

function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
 */
