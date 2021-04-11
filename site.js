
let questions = [
  {
      id:1,
      question:"Mentalidade: Para você, seus medos são:",
      answer:"Oportunidades para crescer",
      options:["Oportunidades para crescer",
      "Algo a se evitar a qualquer custo",
      "Encaro alguns,mas tenho dificuldade com outros"]
  },

  {
      id:2,
      question:"Mentalidade: Geralmente, Eu...",
      answer:"Proativamente mudo as coisas com que não estou satisfeito ",
      options:["Ignoro problemas e espero que eles se resolvam sozinhos",
      "Proativamente mudo as coisas com que não estou satisfeito ",
      "Sei que provavelmente deveria realizar mudanças mas tenho dificuldades para começar"]
  },
  {
      id:3,
      question:"Mentalidade: Suponha que dançar não é o seu forte, qual seria sua resposta?",
      answer:"Não sei dançar, mas posso aprender se eu quiser",
      options:["Sou péssimo dançarino e nunca serei bom,pra que tentar ?",
      "Não sei dançar, mas posso aprender se eu quiser ","Gosto de dançar, mas tenho vergonha ",]
  },
  {
      id:4,
      question:"Carreira e Finanças: Se você pudesse fazer tudo o que quiser e nada desse errado, sua vida...",
      answer:"Seria irreconhecível",
      options:["Não seria tão diferente","Seria irreconhecível","Algo no meio-termo",]
  },
  {
      id:5,
      question:"Carreira e Finanças: Toda manhã eu....",
      answer:"Mal posso esperar para levantar e ir trabalhar com o que amo fazer",
      options:["Tenho que me arrastar pra fora da cama",
      "Mal posso esperar para levantar e ir trabalhar com o que amo fazer",
      "Depende do dia, mas geralmente prefiro estar fazendo outra coisa "]
  },{
    id:6,
    question:"Carreira e Finanças: Qual frase melhor lhe descreve?",
    answer:"Eu tenho metas específicas e escritas",
    options:["Eu tenho metas específicas e escritas","Eu Prefiro \"ir com a maré  \" e deixar a vida se resolver","Algo no meio-termo"]
  },
  {
    id:7,
    question:"Relacionamento: Geralmente, me considero alguém...",
    answer:"Com controle das próprias emoções,que está ciente das emoções dos outros e responde apropriadamente",
    options:[
      "Com controle das próprias emoções,que está ciente das emoções dos outros e responde apropriadamente",
      "Controlado pelas Próprias emoções, e isso frequentemente me causa problemas",
      "Algo no meio-termo"]
  },
  {
    id:8,
    question:"Relacionamento: Eu costumo... ",
    answer:"Algo no meio-termo",
    options:["Ouvir mais do que falar","Falar mais do que ouvir","Algo no meio-termo"],
  },
  {
    id:9,
    question:"Relacionamento: Geralmente,eu...",
    answer:"Mantenho contato com as pessoas que eu me importo",
    options:["Mantenho contato com as pessoas que eu me importo",
    "Espero os outros se aproximarem de mim ou demonstro meu afeto pela rede social","Algo no meio-termo"],
  },
  {
    id:10,
    question:"Saúde Física: Quando ouve a palavra exercício,seu primeiro pensamento é:",
    answer:"Amo - Me mantenho ativo sempre ue posso e tenho uma rotina semanal",
    options:["Amo - Me mantenho ativo sempre ue posso e tenho uma rotina semanal",
    "Odeio - Se eu ver uma esteira de corrida, eu corro dela ",
    "Eu sei que deveria me exercitar mais, porém não tenho tempo ou motivação para fazer"]
  },
  {id:11,
   question:"Saúde Física: Você controla sua alimentação?(Industrializados, quantidade de açúcar,sal,etc)?",
   answer: "Sim" ,
   options: ["Sim","De vez em quando","Não"],
  },
  {
    id:12,
    question:"Saúde Física: Você utiliza algum método para registrar sua saúde (aplicativos de exercício,dieta,etc)?",
    answer:"Sim",
    options:["Sim","De vez em quando","Não"],
  },
  {
    id:13,
    question:"Saúde Emocional: Você se lembra das coisas pelas quais você é grato?",
    answer:"Sim, todo dia",
    options:["Às vezes","Sim, todo dia","Não, raramente"],
  },
  {
    id:14,
    question:"Saúde Emocional: Me considero alguém que...",
    answer:"Aproveito a vida quando posso, mas tenho prioridades que ficam no caminho.",
    options:["Passa os dias de cabeça baixa,e sou constantemente jogado de uma direção pra outra","Para para sentir o cheiro das rosas porque a vida é curta e é preciso viver cada dia ao máximo",
    "Aproveito a vida quando posso, mas tenho prioridades que ficam no caminho."],
  },
  {
    id:15,
    question:"Saúde Emocional: Quão frequentemente você é caridoso com os outros( doar R$1 aqui ou ali não conta)?  ",
    answer:"Diariamente(faz parte da minha vida)",
    options:["Não me lembro a última vez","De vez em quando, eu deveria fazer mais","Diariamente(faz parte da minha vida)"],
  },
]
let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2> ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
