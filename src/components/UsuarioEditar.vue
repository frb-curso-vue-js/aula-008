<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
        <button @click="mudarIdadeFn">Alterar idade (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: Number,
        mudarIdadeFn: Function
    },
    methods: {
        alterarIdade() {
            this.idade += 1
            barramento.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
