export const getitems = () => {
  const myQuestions = [
    {
      q: "¿A que rama de la programacion web crees que me dedico?",
      ans1: "Front-End",
      ans2: "Back-End",
      correct: "Front-End",
      hidden: "",
      id: "0",
    },
    {
      q: "Hoy con Javascript vanilla solo no basta, ¿En que framework elegi especializarme?",
      ans1: "Angular",
      ans2: "React",
      correct: "React",
      hidden: "Aunque en realidad React no es un framework 🤭",
      id: "1",
    },
    {
      q: "Uno de mis proyectos es una trivia interactiva que consumo una API para obtener preguntas y respuestas, te animas a probarlas?",
      ans1: "Listo, ya la probe!",
      ans2: "Prefiero verla despues",
      correct: "Listo, ya la probe!",
      hidden: ``,
      id: "2",
    },
    {
      q: "Ya estas pensando en contratarme?",
      ans1: "Si! Obvio",
      ans2: "No gracias",
      correct: "Si! Obvio",
      hidden: "Parece que me olvide de configurar un boton 🤫",
      id: "3",
    },
  ];
  return myQuestions;
};
