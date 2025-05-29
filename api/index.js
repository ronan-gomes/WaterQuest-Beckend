const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// 🔹 Substitui db.json por dados em memória:
const router = jsonServer.router({
  "quizzes": [
    {
      "id": "1",
      "name": "Água no Processo Evolutivo",
      "numQuestions": 10,
      "questions": [
        {
          "question": "Qual é uma maneira eficiente de economizar água ao regar plantas?",
          "res1": "Regar as plantas no início da manhã ou no fim da tarde",
          "res2": "Usar mangueira em horários de sol forte",
          "res3": "Regar com água potável durante o meio-dia",
          "res4": "Lavar as folhas com mangueira todos os dias"
        },
        {
          "question": "Por que é importante proteger as nascentes de água?",
          "res1": "Porque são fontes que abastecem rios e reservatórios",
          "res2": "Porque são locais próprios para despejo de lixo",
          "res3": "Porque são boas para prática de esportes",
          "res4": "Porque servem apenas para turismo"
        },
        {
          "question": "Como o uso de torneiras com arejadores ajuda na economia de água?",
          "res1": "Misturam ar à água, reduzindo o consumo sem perder eficiência",
          "res2": "Aumentam a pressão da água",
          "res3": "Deixam a água mais quente",
          "res4": "Facilitam o desperdício"
        },
        {
          "question": "O que acontece quando há poluição dos rios?",
          "res1": "Compromete a qualidade da água e afeta a vida aquática",
          "res2": "Melhora a fertilidade da água",
          "res3": "Aumenta a quantidade de peixes",
          "res4": "Deixa a água mais potável"
        },
        {
          "question": "Por que devemos evitar lavar calçadas com mangueira?",
          "res1": "Porque isso desperdiça muita água potável",
          "res2": "Porque suja a rua",
          "res3": "Porque a água evapora rapidamente",
          "res4": "Porque deixa a mangueira danificada"
        },
        {
          "question": "Qual atitude contribui para preservar rios e lagos?",
          "res1": "Não jogar lixo e resíduos nas ruas e esgotos",
          "res2": "Despejar óleo de cozinha no ralo",
          "res3": "Lavar veículos nas margens dos rios",
          "res4": "Queimar lixo próximo às nascentes"
        },
        {
          "question": "O que significa captar água da chuva?",
          "res1": "Armazenar água da chuva para usos não potáveis",
          "res2": "Usar a chuva para gerar energia elétrica",
          "res3": "Deixar a chuva lavar telhados sem controle",
          "res4": "Beber diretamente da calha"
        },
        {
          "question": "Como pequenas atitudes diárias ajudam na preservação da água?",
          "res1": "Reduzindo o desperdício e evitando a poluição",
          "res2": "Aumentando o consumo sempre que possível",
          "res3": "Jogando lixo orgânico nos rios",
          "res4": "Utilizando mangueiras para todas as atividades"
        },
        {
          "question": "Por que é importante tratar o esgoto antes de descartá-lo na natureza?",
          "res1": "Para evitar poluição e proteger a saúde pública e ambiental",
          "res2": "Para deixar o esgoto mais cheiroso",
          "res3": "Porque o esgoto tratado evapora mais rápido",
          "res4": "Porque é mais barato jogar esgoto sem tratar"
        },
        {
          "question": "Qual das ações abaixo contribui diretamente para a preservação dos recursos hídricos?",
          "res1": "Preservar a vegetação próxima a rios e lagos",
          "res2": "Desmatar as margens dos rios para construção",
          "res3": "Canalizar rios para áreas urbanas sem controle",
          "res4": "Construir aterros sanitários em áreas de mananciais"
        }
      ]
    },
    {
      "id": "b5d6",
      "name": "Preservacao e Reutilização de Água",
      "numQuestions": 5,
      "questions": [
        {
          "question": "Qual é a principal forma de evitar o desperdício de água em residências?",
          "res1": "Consertar vazamentos rapidamente",
          "res2": "Lavar a calçada todos os dias com mangueira",
          "res3": "Deixar a torneira aberta enquanto escova os dentes",
          "res4": "Usar a máquina de lavar com pouca roupa"
        },
        {
          "question": "Por que é importante preservar a água?",
          "res1": "Porque ela é um recurso finito e essencial para a vida",
          "res2": "Porque ela não tem fim",
          "res3": "Porque é obrigação da empresa de saneamento",
          "res4": "Porque deixa as contas mais caras"
        },
        {
          "question": "Ao lavar o carro, qual é a maneira mais sustentável?",
          "res1": "Usar balde e pano",
          "res2": "Usar mangueira com alta pressão",
          "res3": "Lavar todos os dias",
          "res4": "Jogar sabão diretamente na rua"
        },
        {
          "question": "Qual das atitudes abaixo ajuda na preservação da água?",
          "res1": "Reutilizar a água da chuva",
          "res2": "Jogar óleo de cozinha na pia",
          "res3": "Deixar torneiras pingando",
          "res4": "Usar produtos químicos no esgoto"
        },
        {
          "question": "O que podemos fazer para evitar a contaminação da água?",
          "res1": "Não descartar produtos químicos no esgoto",
          "res2": "Jogar lixo nos rios",
          "res3": "Usar rios como depósito de entulho",
          "res4": "Jogar restos de comida na pia"
        }
      ]
    }
  ]
});

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1"
  })
);
server.use(router);

module.exports = server;
