<template>
    <div>
        <div class="addclient">
            <div class="content-addclient">
                <header>
                    <h1>Cadastrar cliente</h1>
                </header>
                <div class="form">
                    <form>
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" class="form-control" v-model="dataClient.name" id="name" placeholder="Digite seu nome">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="dataClient.email" id="email" placeholder="Digite seu email">
                        </div>
                        <div class="form-group">
                            <label for="cpf">CPF</label>
                            <input type="text" class="form-control" v-model="dataClient.cpf" id="cpf" placeholder="Digite seu CPF">
                        </div>
                        <div class="form-group">
                            <label for="phone">Telefone</label>
                            <input type="text" class="form-control" v-model="dataClient.phone" id="phone" placeholder="Digite seu telefone">
                        </div>
                        <div class="form-group">
                            <label for="address">Endereço</label>
                            <input type="text" class="form-control" v-model="dataClient.address" id="address" placeholder="Digite seu endereço">
                        </div>
                        <button type="submit" class="btn btn-success" @click.prevent="newClient">Cadastrar</button>
                        <button class="btn-primary float-right goback" @click="goBack">Voltar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'AddClientComponent',

    data() {
        return {
            dataClient: new Object(),
            token: JSON.parse(localStorage.getItem('token'))
        }
    },

    methods: {
        newClient () {
            var data = {
                name: this.dataClient.name,
                email: this.dataClient.email,
                cpf: this.dataClient.cpf,
                phone: this.dataClient.email,
                address: this.dataClient.address,
            }
            axios.post('http://localhost:3001/api/clients', data, {
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
            this.$router.push('/dashboard');
        },

        goBack() {
            this.$router.push('/dashboard');
        }
    },
}
</script>

<style lang="scss" src="./style.scss" scoped />