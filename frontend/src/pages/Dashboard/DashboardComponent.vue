<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-ad-6">
                    <ListsComponent :clients="clients" />
                </div>
            </div>
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
            await axios.get('https://crud-vue-backend.herokuapp.com/api/clients', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then((res) => {
                if(res.data.status == 200) {
                    let clients = res.data.clients;
                    console.log("sessao:", this.$session)
                    this.clients = clients;
                    return clients;
                }
            }).catch((err) => {
                this.$router.push('/');
                console.log(err);
            });
        }
    },
}
</script>

<style lang="scss" src="./style.scss" scoped />