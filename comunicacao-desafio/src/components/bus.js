import Vue from 'vue'

export default new Vue()

/* export default new Vue({
    methods: {
        userSelected(usuario) {
                //alert(`Usuário de id ${usuario.id}, nome ${usuario.nome} e idade ${usuario.idade} foi clicado`);
                this.$emit('userSelected', usuario)
        },
        updateUser(callback) {
            this.$on('userSelected', callback)
        }
    }
}) */