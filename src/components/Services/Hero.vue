<template>
    <section id="hero">
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-lg-8">
                        <h1 class="topic">Serviços Profissionais</h1>
                        <p class="paragraph">Conheça nossos serviços empresarias de consultoria de TI, 
                            desenvolvimento de aplicações desktop e suporte a infraestrutura especializado 
                            em cloud. Nosso time de especialistas é o ideal para ajudar a cuidar do seu negócio</p>
                        </div>
                    <div class="col-md-4 col-lg-4">
                        <img class="image" src="../../assets/images/mackbook-page-service.png" alt="Laptop">
                    </div>
                    <button class="button" type="button">Confira</button>
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
        background-image: url(../../assets/images/foto-de-fundo-service-page.jpg) ;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .button{
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

    .image{
        padding-top: 60px;
        width: 350px;
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
            margin-top: 230px;
            position: absolute;
        }

        .image{
            padding-top: 10px;
        }
    }

    @media (max-width: 767px) {
        
        .topic{
            padding-top: 10px;
        }
        .button{
            margin-left: 10px;
            margin: 0 auto;
        }

        img{
            display: none;
        }
    }

</style>