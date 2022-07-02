<template>
    <div>
        <h2>Lista de Afazeres</h2>
    
        <!--cabecalho-->
        <div id="header">
            <input type="text" id="inputTexto" v-model="itemInput">
            <button type="button" id="inserir" @click="inserirItem()">+</button>
        </div>
        <!--lista-->
        <ul id="toDoList">
            <li id="lista" v-for="(item, index) in aLista" :key="index">
                <span :id="`itemParaChecar${index}`">{{ item }}</span>
                <div>
                    <input type="checkbox" id="checarLista" title="Checar" @click="checarItem(`itemParaChecar${index}`)">
                    <button type="button" id="excluir" @click="excluirItem(index)">X</button>
                </div>
            </li>
        </ul>
    
        <!--alerta-->
        <div id="alerta"><span :class="alerta">{{ alertaMsg }}</span></div>
    </div>
</template>

<script>
export default {
    name: 'App',
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

}
</script>

<style lang="scss">
@import '@/assets/color.scss';


* {
    margin: 0;
    padding: 0;
    font-family: "Trebuchet MS", sans-serif;
    box-sizing: border-box;
    border: none;
}

body {
    background-color: $color1;
    color: $color4;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

#app {
    max-width: 350px;
    padding: 5px 10px;
}

h2 {
    margin-bottom: 10px;
    text-decoration: underline;
}

#header {
    background-color: $color3;
    display: flex;
    padding: 5px;
    justify-content: space-between;

    input {
        font-size: 1.4em;
        width: 80%;
        margin-right: 2px;
        padding: 3px 10px;
        color: $color1;
        
        &:hover, &:focus {
            outline: none;
        }
    }

    button {
        width: 20%;
        margin-left: 2px;
        font-size: 2em;
        color: $color4;
        background-color: $color2;
        
        &:hover {
            cursor: pointer;
            opacity: .7;
        }
    }
}

ul {
    list-style-type: none;
}

#toDoList {
    background-color: $color1;
    padding: 10px 0;

li {
    background-color: $color2;
    font-size: 1.1em;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    
    span {
        width: 80%;
        word-wrap: break-word;
        
        &.itemParaChecar {
            text-decoration: line-through;
            opacity: .7;
            transition: all .4s ease-in;
        } 
    }
    
    div {
        display: flex;
        align-items: center;
        
        #excluir {
            background-color: $red;
            padding: 3px 8px;
            margin-left: 7px;
            font-size: .9em;
            color: $color2;
            position: relative;
            cursor: pointer;
            font-weight: 600;
        }
        
        #checarLista {
            all: unset;
            border: 2px solid $color4;
            padding: 8px;
            display: inline-block;
            cursor: pointer;

            &:hover {
                background-color: rgba($color1, .9);
            }

            &:checked {
                background-color: $green;
            }
        }
    }
}
}

#alerta {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;

    span {
        display: inline-block;
        padding: 7px 15px;
        transition: all .3s ease-in;
        margin-left: 30%;
        color: $color1;
        
        &.alertaSucesso, &.alertaErro {
            margin-left: 0;
        }

        &.alertaSucesso {
            background-color: $green;
        }

        &.alertaErro {
            background-color: $red;
        }
    }
}
</style>
