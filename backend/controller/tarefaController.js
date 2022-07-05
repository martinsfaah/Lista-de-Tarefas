const tarefaService = require('../service/tarefaService');
const tarefaModel = require('../model/tarefaModel');

const listarTarefas = async (_req, res, next) => {
    try {
        const tarefas = await tarefaModel.tarefas();
        return res.status(200).json(tarefas);
    } catch (erro) {
        next(erro);
    }
};

const tarefaId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tarefaPorId = await tarefaModel.tarefaPorId(id);
        if (!tarefaPorId.length) {
        return res.status(404).json({ message: 'Tarefa não encontrada :(' });
        }
        return res.status(200).json(tarefaPorId[0]);

    } catch (erro) {
      next(erro);
    }
};

const cadastrarTarefa = async (req, res, next) => {
    try {
        const { descricaoTarefa } = req.body;
        const tarefaCriada = await tarefaService.cadastrarTarefa(descricaoTarefa);
        return res.status(200).json(tarefaCriada[0]);
    } catch (erro) {
        next(erro);
    }
};

const atualizarTarefa = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await tarefaService.atualizarTarefa(id, status);
        return res.status(200).end();
    } catch (erro) {
        next(erro);
    }
};

const deletarTarefa = async (req, res, next) => {
    try {
        const { id } = req.params;
        const message = 'Não tem essa tarefa aqui...';
        const deletar = await tarefaService.deletarTarefa(id);
        if (deletar === message) {
          return res.status(404).json({ message });
        }
        return res.status(200).json({ message: 'Deletado!' });
      } catch (erro) {
        next(erro);
      }
};

module.exports = {
    listarTarefas,
    tarefaId,
    cadastrarTarefa,
    atualizarTarefa,
    deletarTarefa,
};

