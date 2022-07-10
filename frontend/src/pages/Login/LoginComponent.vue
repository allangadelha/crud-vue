<template>
    <div class="main">
        <div class="login">
            <div class="content-login">
                <header>
                    <h1>Login</h1>
                </header>
                <div class="form">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" v-model="LoginData.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Senha</label>
                            <input type="password" class="form-control" v-model="LoginData.password" id="exampleInputPassword1" placeholder="Digite sua senha">
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="login">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'LoginComponent',
    data() {
        return {
            LoginData: new Object(),
        }
    },

    methods: {
        login () {
            var data = {
                email: this.LoginData.email,
                password: this.LoginData.password
            }
            axios.post('http://localhost:3001/api/authenticate', data)
            .then((res) => {
                var user = res.data.user;
                var token = res.data.token;
                if(user) {
                    localStorage.setItem('token', JSON.stringify(token));
                    this.$router.push('/dashboard');
                }
            });
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />