const { createApp } = Vue;

createApp({
    data() {
        return {
            itemInput: '',
            aLista: [
            'Criar um "To do List"'
            ],

            alerta: '',
            alertaMsg: ''
        }
    },

    methods: {
        inserirItem() {
            if((this.itemInput == '') || (this.itemInput == ' ')) {
                this.alerta = 'alertaErro'
                this.alertaMsg = 'Insira algo para ser adicionado.'

                setInterval(() => {
                    this.alerta = ''
                    this.alertaMsg = ''
                }, 3500)

            }else {
                this.aLista.push(this.itemInput)
                this.itemInput = ''
                this.alertaMsg = 'Item inserido com sucesso'
                this.alerta = 'alertaSucesso'

                setInterval(() => {
                    this.alertaMsg = ''
                    this.alerta = ''
                }, 3500);
            }
        },

        excluirItem(id) {
            this.aLista.splice(id,1)
            this.alertaMsg = 'Item removido com sucesso'
            this.alerta = 'alertaSucesso'

            setInterval(() => {
                this.alertaMsg = ''
                this.alerta = ''
            }, 3500);
        },

        checarItem(id) {
            document.getElementById(id).classList.toggle("itemParaChecar")
        }
    }
}).mount('#app')