<template>
    <div class="lists">
        <div class="top">
            <p>Clientes</p>
            <button class="btn-success float-right addclient" @click="addClient">Adicionar cliente</button>

            <hr>
        </div>
        <div class="content">
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients" :key="client._id">
                        <td>{{ client.name}}</td>
                        <td>{{ client.email}}</td>
                        <td>{{ client.cpf}}</td>
                        <td>{{ client.phone}}</td>
                        <td><button class="btn btn-primary">Editar</button></td>
                        <td><button class="btn btn-danger" @click="deleteClient(client._id)">Excluir</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'ListsComponent',
    
    props: {
        clients: Array,
    },

    data() {
        return {
            token: JSON.parse(localStorage.getItem('token'))
        }
    },


    methods: {
        deleteClient(id) {
            if(confirm("Deseja realmente excluir?")){
                axios.delete(`http://localhost:3001/api/clients/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })
                .then((res) => {
                    if(res.data.status == 200) {
                        return true;
                    }
                }).catch((err) => {
                    throw err;
                });
                document.location.reload(true);
            } else {
                return false;
            }

        },

        addClient() {
            return this.$router.push('/addclient')
        }
    },
}
</script>

<style>
    .list {
        width: 100%;
        padding: 15px;
        border: 1px solid #CCCCCC;
        border-radius: 3px;
    }

    .addclient {
        padding: 10px 20px;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
    }
</style>

