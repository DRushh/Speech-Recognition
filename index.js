const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("How are you?")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }

    if (
      text.includes("What's your name?") ||
      text.includes("What is your name?")
    ) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "My name is Chintu";
      texts.appendChild(p);
    }

    if (text.includes("Open Google")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "opening Google";
      texts.appendChild(p);
      console.log("opening Google");
      window.open("https://www.google.com");
    }
    
    if (text.includes("Open YouTube")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "opening YouTube";
      texts.appendChild(p);
      console.log("opening YouTube");
      window.open("https://www.YouTube.com");
    }

    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();