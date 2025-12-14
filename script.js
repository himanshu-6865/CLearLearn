let chunks = [];
let index = 0;

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function startLearning() {
  const text = document.getElementById("contentInput").value;
  if (!text) return;

  chunks = text.split(".").filter(s => s.trim());
  index = 0;

  document.getElementById("learningSection").classList.remove("hidden");
  showChunk();
}

function showChunk() {
  document.getElementById("contentBox").innerText = chunks[index];
}

function nextChunk() {
  if (index < chunks.length - 1) index++;
  showChunk();
}

function prevChunk() {
  if (index > 0) index--;
  showChunk();
}
