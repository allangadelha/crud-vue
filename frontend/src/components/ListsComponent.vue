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
                        <td>{{ client.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ListsComponent',
    
    props: {
        clients: Array,
    }
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