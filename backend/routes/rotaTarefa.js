const express = require('express');
const rotaTarefa = express.Router();
const tarefaController = require('../controller/tarefaController');

rotaTarefa.post('/', tarefaController.cadastrarTarefa);

rotaTarefa.get('/', tarefaController.listarTarefas);
rotaTarefa.get('/:id', tarefaController.tarefaId);

rotaTarefa.put('/:id', tarefaController.atualizarTarefa);

rotaTarefa.delete('/:id', tarefaController.deletarTarefa);

module.exports = rotaTarefa;