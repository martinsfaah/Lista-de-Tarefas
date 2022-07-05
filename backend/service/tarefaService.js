const tarefaModel = require('../model/tarefaModel');

const cadastrarTarefa = async (descricao) => {
    const idTarefa = await tarefaModel.cadastrarTarefa(descricao);
    const id = idTarefa[0]['MAX( id )'];
    const tarefaCriada = await tarefaModel.tarefaPorId(id);

    return tarefaCriada;
};

const atualizarTarefa = async (id, status) => {
    await tarefaModel.atualizarTarefa(id, status);
};

const deletarTarefa = async (id) => {
    const tarefa = await tarefaModel.tarefaPorId(id);
    if (tarefa[0].length <= 0) {
        return 'Não tem essa tarefa aqui...';
    }
    const deletar = await tarefaModel.deletarTarefa(id);
    return deletar;
};

module.exports = {
    cadastrarTarefa,
    atualizarTarefa,
    deletarTarefa,
};