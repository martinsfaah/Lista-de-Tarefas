import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import {adicionarTarefa} from './api';

import { Component } from 'react';


const theme = createTheme();


class App extends Component {
  constructor(){
    super();
    this.state = {
      rows: [],
      descricaoTarefa: ""
    };
    this.adicionarTarefa = this.adicionarTarefa.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }


  
  componentDidMount() {
      fetch('http://localhost:8000/tarefa')
      .then(response => response.json())
      .then(data => { 
        this.setState({rows: data}) 
      });
  }  

  async adicionarTarefa () { 
    const { descricaoTarefa } = this.state;
    await adicionarTarefa({descricaoTarefa});
    this.componentDidMount();
    this.setState({descricaoTarefa: '' });
  }

  handleChange = (event, cellValues) => {
    this.setState({descricaoTarefa: event.target.value });
  };

  handleDeleteClick = (event, cellValues) => () => {
    console.log(cellValues);
  };

  handleEditClick = (id) => () => {
    alert("Todo :(");
  };

  render(){
    const { rows, descricaoTarefa } = this.state;

    const columns = [
      { 
        field: 'descricao', 
        headerName: 'Descrição',
        flex: 1
      },
      {
        field: 'data_criacao',
        headerName: 'Data de Criação',
        type: 'dateTime',
        minWidth: 200
      },    
      {
        field: 'status',
        headerName: 'Status',
        minWidth: 200
      },
      {
        field: "Ações",
        renderCell: (event, cellValues) => {
          return (
            <div>
              <IconButton onClick={this.handleDeleteClick(event, cellValues)} aria-label="delete" color="warning">
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={this.handleEditClick(event, cellValues)} aria-label="delete" color="primary">
                <EditIcon/>
              </IconButton>
            </div>
          );
        }
      }
    ];
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Lista de Tarefas
            </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Descrição tarefa"
                    autoFocus
                    value={descricaoTarefa}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1 }}
                    onClick={ this.adicionarTarefa }
                  >
                    Adicionar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12} sx={{ height: 400 }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      hideFooterPagination={true}
                      density="compact"
                    />
                </Grid>
                </Grid>
              </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    );
  } 
  
}


export default App;
