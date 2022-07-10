<template>
    <div class="lists">
        <div class="top">
            <p>Clientes</p>
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
                    <th scope="col">Endereço</th>
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
                console.log("id: ", id)
                console.log("token: ", this.token)
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
                    console.log('deu mago:', err);
                    return false;
                });
                document.location.reload(true);
            } else {
                return false;
            }

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
</style>

