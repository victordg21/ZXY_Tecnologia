<template>
    <section id="comments">
        <div class="container">
            <h2 class="topic">Depoimentos</h2>
            <div class="carousel slide" data-bs-ride="carousel" id="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">"Contratar a ZXY Tecnologia para fornecer serviços de consultoria de TI foi uma das melhores decisões que tomei! A equipe da ZXY Tecnologia foi extremamente profissional, experiente e dedicada em entender as necessidades específicas do meu negócio. Eles desenvolveram soluções personalizadas que me ajudaram a otimizar minha infraestrutura de TI, melhorar a segurança dos dados e aumentar a eficiência operacional."<br><br><b>Teresa, Maria. CEO Engeselt Softwares</b></p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../assets/images/depoimento1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">Estou completamente satisfeito por ter escolhido a ZXY Tecnologia para desenvolver aplicações desktop para a minha empresa. A qualidade do trabalho deles é simplesmente incrível! A equipe foi altamente profissional, compreendeu minhas necessidades e entregou um produto final excepcional. Agora tenho uma solução desktop eficiente, intuitiva e personalizada que realmente impulsiona meu negócio."<br><br><b>Randolfe, Carlos. CEO Google</b></p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../assets/images/depoimento2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">"Estou maravilhado com os serviços da ZXY Tecnologia em suporte de infraestrutura com especialização em cloud! A equipe deles é altamente qualificada e resolveu todos os desafios técnicos com rapidez e eficiência. Agora, minha empresa tem uma infraestrutura de cloud robusta e segura, o que nos permite operar de forma mais ágil e escalável. A ZXY Tecnologia tem sido um parceiro confiável e estou extremamente feliz por ter escolhido a empresa para cuidar da nossa infraestrutura."<br><br><b>Rodrigues, Marcos. CEO Microsoft</b></p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../assets/images/depoimento3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-indicators">
                    <button type="button" class="active" data-bs-target="#carousel" data-bs-slide-to="0"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

*{
    background-color: #2B4257;
    color: #ebdbc2;
}

#comments{
    padding-bottom: 40px;
}

.topic{
    padding: 40px 0;
    text-align: center;
}

.depositions{
    display: flex;
}
.text{
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #03273d;
    border-radius: 6px;
    height: 200px;
    width: 650px;
    height: 300px;
    position: absolute;
}

.paragraph{
    padding-top: 50px;
    padding-left: 200px;
}

.image{
    padding-left: 600px;
}
.photo{
    width: 300px;
    height: 400px;
    border-radius: 6px;
}

.carousel-indicators{
    position: relative;
}

@media (max-width: 1400px) and (min-width: 1200px){
    .paragraph{
    padding-top: 50px;
    padding-left: 90px;
    }

    .image{
        padding-left: 620px;
    }
}

@media (max-width: 1199px) and (min-width: 992px){


    .paragraph{
    padding-top: 50px;
    padding-left: 10px;
    }

    .image{
        padding-left: 600px;
    }
}

@media (max-width: 991px) and (min-width: 768px){
    .depositions{
        display: flex;
    }

    .paragraph{
        padding-top: 0;
        padding-left: 0;
    }

    .image{
        padding-left: 0px;
    }

    .photo{
        margin: 0 auto;
    }

    .text{
        position: relative;
        width: 390px;
        height: 400px;
    }
}

@media (max-width: 767px){
    
    .depositions{
        display: flex;
    }
    .text{
        width: 300px;
        height: 570px;
        margin-top: 300px;
    }

    .paragraph{
        padding-top: 0;
        padding-left: 0;
        height: 900px;
        margin: 0 auto;
    }

    .image{
        padding-left: 0px;
        margin: 0 auto;
        display: block;
        }
}
</style>