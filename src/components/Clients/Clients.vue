<template>
    <section id="clients">
        <div class="container">
            <h2  class="topic"> Principais Clientes</h2>
            <div class="card" data-aos="fade-right">
                <div class="row">
                    <div class="col-md-12 col-lg-4">
                        <img src="../../assets/images/microsoft.png" class="images" alt="Logo Microsoft">
                    </div>
                    <div class="col-md-12 col-lg-8">
                        <div class="card-body">
                            <h5 class="card-title">Microsoft</h5>
                            <p class="card-text">A Microsoft é uma empresa multinacional de tecnologia sediada 
                                nos Estados Unidos, Ela é conhecida principalmente por seu software e serviços 
                                relacionados à computação, embora também esteja envolvida em outros segmentos de 
                                negócios, como a divisão de hardware Xbox.</p>
                                <button class="button">Acessar o Site</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" data-aos="fade-left">
                <div class="row">
                    <div class="col-md-12 col-lg-4">
                        <img src="../../assets/images/google.png" class="images" alt="Logo Google">
                    </div>
                    <div class="col-md-12 col-lg-8">
                        <div class="card-body">
                            <h5 class="card-title">Google</h5>
                            <p class="card-text">O Google é uma empresa multinacional de tecnologia e 
                                serviços online, conhecida principalmente por seu mecanismo de busca na 
                                internet. O Google é uma das maiores empresas de tecnologia do mundo e é amplamente 
                                conhecida por sua inovação e influência na indústria de tecnologia</p>
                                <button class="button">Acessar o Site</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" data-aos="fade-right">
                <div class="row">
                    <div class="col-md-12 col-lg-4">
                        <img src="../../assets/images/hbomax.png" class="images hbo" alt="Logo HBO Max">
                    </div>
                    <div class="col-md-12 col-lg-8">
                        <div class="card-body">
                            <h5 class="card-title">HBO MAX</h5>
                            <p class="card-text">A HBO Max é uma plataforma de streaming de vídeo sob demanda que oferece 
                                uma ampla variedade de conteúdo de entretenimento, incluindo programas de televisão, filmes, 
                                documentários e conteúdo infantil. É operada pela WarnerMedia, uma divisão da AT&T, e é a 
                                versão premium do serviço de streaming da HBO.</p>
                                <button class="button">Acessar o Site</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" data-aos="fade-left">
                <div class="row">
                    <div class="col-md-12 col-lg-4">
                        <img src="../../assets/images/netflix.png" class="images netflix" alt="Logo Netflix">
                    </div>
                    <div class="col-md-12 col-lg-8">
                        <div class="card-body">
                            <h5 class="card-title">Netflix</h5>
                            <p class="card-text">A Netflix é um serviço de streaming por assinatura que permite assistir a séries 
                                e filmes em um aparelho conectado à internet. Dependendo do seu plano, você também pode baixar seus 
                                títulos favoritos em aparelhos iOS, Android ou Windows 10 para assistir quando não tiver internet.</p>
                                <button class="button">Acessar o Site</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" data-aos="fade-right">
                <div class="row">
                    <div class="col-md-12 col-lg-4">
                        <img src="../../assets/images/samsung.png" class="images samsung" alt="Logo Samsung">
                    </div>
                    <div class="col-md-12 col-lg-8">
                        <div class="card-body">
                            <h5 class="card-title">Samsung</h5>
                            <p class="card-text"> Samsung é uma empresa multinacional sul-coreana que atua em diversos segmentos, incluindo 
                                eletrônicos de consumo, eletrodomésticos, dispositivos móveis, semicondutores, equipamentos de rede e 
                                muito mais. A Samsung é conhecida principalmente por sua ampla gama de produtos eletrônicos de consumo.</p>
                                <button class="button">Acessar o Site</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

    *{
        color: #ebdbc2;
    }

    #clients{
        background-color: #2B4257;
        padding-bottom: 40px;
    }

    .topic{
        padding: 40px 0;
        font-weight: 600;
    }

    .card{
        background-color: #03273d;
        margin-bottom: 60px;
    }

    .card-title{
        font-weight: 600;
    }

    .col-lg-8{
        border-left: 2px solid #ebdbc2;
    }

    .images{
        display: flex;
        margin: 0 auto;
        width: 300px;
        padding-top: 80px;
        padding-left: 20px;
    }

    .hbo, .samsung{
        padding-top: 90px;
    }

    .button{
        background-color: #2B4257;
        color: #ebdbc2;
        border: 1px solid #ebdbc2;
        border-radius: 6px;
        font-weight: 600;
        width: 150px;
        height: 40px;
    }

    .button:hover{
        transform: scale(1.1);
        background-color: #ebdbc2;
        color: #2B4257;
        transition: .5s;
    }

    @media (max-width: 991px) and (min-width:571px){
        .col-lg-8{
            border: none;
        }

        .card-body{
            border-top: 2px solid #ebdbc2;
        }

        .images{
            padding-bottom: 30px;
            width: 500px;
            padding-left: 0px;
        }
    }
    @media (max-width: 570px){
        .images{
            width: 300px;
            padding-bottom: 30px;
            padding-left: 0;
        }

        .col-lg-8{
            border: none;
        }

        .card-body{
            border-top: 2px solid #ebdbc2;
        }
    }

</style>