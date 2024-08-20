const respostaAPI = [
    { "id": 1, "descricao": "Varrer a sala" },
    { "id": 2, "descricao": "Lavar a louça" },
    { "id": 3, "descricao": "Revisar a matéria" },
    { "id": 4, "descricao": "Arrumar o ármario" },
    { "id": 5, "descricao": "Fazer o almoço" },
]

const taskList = document.getElementById("pendentes")

function init() {
    carregarLista()
    alert("Chegou à função init()")
}

function carregarLista() {
    // 1 -> chamar API com a lista de tarefas atual
    // 2 -> iterar a respostaAPI 
    //2.1-> Mesclar HTML com respostaAPI para exibir em tela
    // length ==> diz quantos elementos há no array

    let idx = -1
    while (respostaAPI.length > 0 && + +idx < respostaAPI.length) {
        taskList.innerHTML +=  `<ul> <input type="checkbox"> ${respostaAPI[idx].descricao}
                        <button>
                            <img src="./—Pngtree—pencil line black icon_3746331.png" alt="">
                        </button>
                        <button>
                            <img src="./—Pngtree—vector trash icon_4152654.png" alt="">
                        </button>
                    </ul>`
    }
}