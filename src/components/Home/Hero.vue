<template>
    <section id="hero">
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-lg-8">
                        <h1 data-aos="fade-right" class="topic">Garanta a segurança da sua empresa com o serviço de TI da ZXY Tecnologia</h1>
                        <p data-aos="fade-right" class="paragraph">Entre em contato com nossa equipe de especialistas e faça a melhor escolha de suporte para sua empresa com nossos serviços de consultoria de TI, 
                            desenvolvimento de aplicações desktop e suporte a infraestrutura com especialidade em cloud.</p>
                        </div>
                    <div class="col-md-4 col-lg-4">
                        <img data-aos="fade-left" src="../../assets/images/macbook.png" alt="Laptop">
                    </div>
                    <router-link data-aos="fade-right" to="/Contact" class="button" type="button">Garanta já seu orçamento</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

    *{
        color: #ebdbc2;
    }

    #hero{
        text-align: center;
    }

    .topic{
        padding-top: 50px;
        padding-bottom: 40px;
        font-weight:600;
        text-align: left;
    }
    .hero{
        padding: 64px 0;
        background-image: url(../../assets/images/foto-de-fundo.jpg) ;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .button{
        padding-top: 12px;
        text-align: center;
        text-decoration: none;
        background-color: #ebdbc2;
        font-weight: 600;
        color: #2B4257;
        height: 50px;
        width: 300px;
        border: none;
        border-radius: 6px;
        margin-left: 10px;
    }

    .button:hover{
        transition: .5s;
        transform: scale(1.05);
        background-color: #2B4257;
        color: #ebdbc2;
        border: 1px solid #ebdbc2;
    }

    img{
        padding-top: 10px;
        width: 400px;
    }

    .paragraph{
        text-align: left;
        padding-bottom: 50px;
    }

    .hero .container{
        position: relative;
    }

    .hero::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        content: '';
        opacity: .9;
    }

    @media (max-width: 991px) and (min-width: 768px){
        .button{
            margin-left: 400px;
            margin-top: 400px;
            position: absolute;
        }
    }

    @media (max-width: 767px) {
        
        .topic{
            padding-top: 10px;
        }
        .button{
            margin-left: 10px;
        }

        img{
            display: none;
        }
    }

</style>