<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-ad-6">
                    <ListsComponent :clients="clients" />
                </div>
            </div>
            <button class="btn-primary float-right logout" @click="logout">Sair</button>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import ListsComponent from '@/components/ListsComponent'

export default {
    name: 'DashboardComponent',
    components: {
        ListsComponent
    },

    data() {
        return {
            clients: [],
            token: JSON.parse(localStorage.getItem('token'))
        }
    },

    mounted() {
        this.getClients()
    },

    methods: {
        async getClients () {
            await axios.get('http://localhost:3001/api/clients', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then((res) => {
                if(res.data.status == 200) {
                    let clients = res.data.clients;
                    this.clients = clients;
                    this.$session.start();

                    return clients;
                }
            }).catch((err) => {
                this.$session.destroy();
                this.$router.push('/');
                console.log(err);
            });
        },

        logout() {
            localStorage.removeItem("token");
            this.logout = this.$session.destroy();
            this.$router.push('/');
        }
    },
}
</script>

<style lang="scss" src="./style.scss" scoped />