<template>
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-12 col-lg-8">
                    <h2 class="topic">Fale conosco</h2>
                    <p class="paragraph">Precisando de um orçamento de maneira agilizada e super rápida.
                        Entre em contato conosco agora para resolver o seu problema.</p>
                    <form class="form">
                        <input type="text" id="name" class="input first-column" placeholder="Seu nome*">
                        <input type="text" id="company" class="input" placeholder="Sua empresa*">
                        <input type="email" id="email" class="input first-column" placeholder="Seu e-mail*">
                        <input type="tel" id="phone" class="input" placeholder="Seu telefone">
                        <textarea type="textarea" id="help" class="input text-area" placeholder="Como podemos te ajudar?"></textarea>
                    </form>
                    <button class="button" type="submit">Enviar</button>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                    <h3 class="subtopic">Endereços</h3>
                    <h4 class="city">João Pessoa</h4>
                    <h6 class="street">Av. Ingá, 379 - Manaíra</h6>
                    <h4 class="city">Recife</h4>
                    <h6 class="street">Rua Pinhal, 736 - Boa Viagem</h6>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

*{
        background-color:#2B4257;
        color: #ebdbc2;
    }

    #contact{
        padding-bottom: 40px;
    }

    .topic{
        padding: 40px 0 30px 0;
        text-align: left;
        font-weight:600;
    }

    .subtopic{
        padding: 140px 0 30px 20px;
        font-weight: 600;
    }

    .paragraph{
        padding: 20px 0;
        width: 610px;
    }

    .form{
        display: block;
    }

    .button{
        background-color: #03273d;
        border-radius: 6px;
        border: 1px solid #ebdbc2;
        width: 150px;
        padding: 5px 10px;
        font-weight: bold;
    }

    .button:hover{
        background-color: #ebdbc2;
        color: #2B4257;
        transform: scale(1.1);
        transition: .5s;
    }

    .input{
        margin-bottom: 40px;
        background-color: #ebdbc2;
        border: none;
        border-radius: 6px;
        width:285px;
        padding: 10px 15px;
        color: #2B4257;;
        font-weight: 600;
    }

    .input::placeholder{
        color: #2B4257;
    }

    .first-column{
        margin-right: 40px;
    }

    .text-area{
        width: 610px;
        height: 150px;
        resize: none;
    }

    .text-area::placeholder{
        color: #2B4257;
    }

    .city{
        font-weight: 600;
        padding: 0 0 10px 50px;
    }

    .street{
        padding-left: 50px;
        padding-bottom: 40px;
    }

    @media (max-width:991px){
        .subtopic{
            padding-top: 60px;
        }
    }

    @media (max-width:767px){
        .text-area,
        .paragraph{
            width: 500px;
        }
    }

    @media (max-width:544px){
        .text-area,
        .paragraph{
            width: 285px;
        }
    }

</style>