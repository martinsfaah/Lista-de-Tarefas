const connection = require('./connection');

const tarefas = async () => {
  const [tasks] = await connection
  .execute('SELECT * FROM TAREFA_DB.tarefa ORDER BY tarefa.id;');

  return tasks;
};

const tarefaPorId = async (id) => {
    const task = await connection.execute('SELECT * FROM TAREFA_DB.tarefa WHERE id = ?;', [id]);
  
    return task[0];
  };

const cadastrarTarefa = async (descricao) => {
  await connection.execute('INSERT INTO TAREFA_DB.tarefa (descricao) VALUES (?);',
  [descricao]);
  const [idTarefa] = await connection.execute('SELECT MAX( id ) FROM TAREFA_DB.tarefa;');
  
  return idTarefa;
};

const atualizarTarefa = async (id, status) => {
  await connection.execute(' UPDATE TAREFA_DB.tarefa SET status = ? WHERE id = ?;',
  [status, id]);
};

const deletarTarefa = async (id) => connection.execute('DELETE FROM TAREFA_DB.tarefa WHERE id = ?;', [id]);

module.exports = {
    tarefas,
    tarefaPorId,
    cadastrarTarefa,
    atualizarTarefa,
    deletarTarefa,
};
