const mensajes = [
  { texto: "Un placer amor lo Hago con mucho amor", tipo: "sent" },
  { texto: "¿Recuerdas nuestro primer beso? 💋", tipo: "received" },
  { texto: "¡Sí fue el mejor dia de mi vida.", tipo: "sent" },
  {
    texto:
      "¡Megusta que te sientas segura conmigo mi amorcito! 💖",
    tipo: "received",
  },
  {
    texto: "Te adoro mi 💕 hermosa mi princesa bella te amo mi vida",
    tipo: "received",
  },
  { texto: "Awwwwww chi amorcito lindo Te amo Mucho", tipo: "sent" },
  {
    texto:
      "Nuestra primera foto juntos amorcito",
    tipo: "received",
    imagen: "Imagenes/HD.jpg",
  },
  {
    texto:
      "Chi fue donde tu tia sjsjsjs",
    tipo: "sent",
  },
  {
    texto:
      "Espero estés despierta mi cosita preciosa te adoro mucho 💕",
    tipo: "received",
  },
  {
    texto:
      "Chi amorcito Buenos Dias mi rey❤️",
    tipo: "sent",
  },
  {
    texto:
      "Hay amor como te cambió si eres mi mundo 🌎💖",
    tipo: "received",
  },
  {
    texto: "Awwwww que lindo tu tambien para mi💕",
    tipo: "sent",
  },
  { texto: "¡Recuerdos completados! 😊", tipo: "received" },
];

let indiceMensaje = 0;

const chatBox = document.getElementById("chat-box");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  if (indiceMensaje < mensajes.length) {
    const mensaje = mensajes[indiceMensaje];
    agregarMensaje(mensaje.texto, mensaje.tipo, mensaje.imagen);
    indiceMensaje++;
  } else {
    nextButton.disabled = true;
  }
});

function agregarMensaje(texto, tipo, imagen = null) {
  let mensaje = document.createElement("div");
  mensaje.classList.add("message", tipo);
  mensaje.textContent = texto;

  if (imagen) {
    let img = document.createElement("img");
    img.src = imagen;
    img.alt = "Recuerdo especial";
    img.style.maxWidth = "100%";
    mensaje.appendChild(img);
  }

  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;
}
