<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id" @click="userSelected(usuario)">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                    <td>{{ usuario.idade }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="reset">Limpar</button>
    </div>
</template>

<script>
import bus from './bus'

export default {
    props: { usuarios: Array },
    methods: {
        userSelected(usuario) {
            //alert(`Usuário de id ${usuario.id}, nome ${usuario.nome} e idade ${usuario.idade} foi clicado`);
            bus.$emit('userSelected', usuario)
            },
        /* userSelected(usuario) {
            //alert(`Usuário de id ${usuario.id}, nome ${usuario.nome} e idade ${usuario.idade} foi clicado`);
            bus.userSelected(usuario)
        } */
        reset(){
            bus.$emit('reset')
        }
    },
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
</style>
