export const items = () => {
  const question = [
    {
      img1: "react",
      img2: "Angular",
      item1: "React",
      item2: "Angular",
      title: ["¿Cual crees que es mas utilizado?"],
      price1: [40.14, "%"],
      price2: [22.96, "%"],
      correct: "React",
      button1: "React",
      button2: "Angular",
    },
    {
      img2: "account",
      img1: "program",
      item2: "Contador publico",
      item1: "Programacion",
      title: [
        "¿Queres saber mis otras aficiones?",
        "¿Que crees que estudie por mas tiempo?",
      ],
      price2: [4, " años"],
      price1: [2, " años"],
      correct: "Contador publico",
      button2: "Contador Publico",
      button1: "Est. de programacion",
    },
    {
      img1: "heroe",
      img2: "dark",
      title: ["¿Crees que sera mejor elegirme a mi o a otro candidato?"],
      price1: [10, " puntos"],
      price2: [0, " puntos"],
      hidden: "Jaja nos vamos entendiendo",
      hidden1: "😡",
      button1: "A ti",
      button2: "A otro candidato",
    },
  ];

  return question;
};
