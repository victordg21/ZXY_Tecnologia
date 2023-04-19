<template>
    <section id="comments">
        <div class="container">
            <h2 class="topic">Depoimentos</h2>
            <div class="carousel slide" data-bs-ride="carousel" id="carousel">  <!-- Utilização do Bootstrap para fazer o Carousel -->
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">"Contratar a ZXY Tecnologia para fornecer serviços de consultoria de TI foi uma das melhores decisões que tomei! A equipe da ZXY Tecnologia foi extremamente 
                                    profissional, experiente e dedicada em entender as necessidades específicas do meu negócio. Eles desenvolveram soluções personalizadas que me ajudaram a otimizar minha 
                                    infraestrutura de TI, melhorar a segurança dos dados e aumentar a eficiência operacional."<br><br>Teresa, Maria. CEO Microsoft</p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../../assets/images/depoimento1.jpg" alt="Teresa Maria">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">"Estou completamente satisfeito por ter escolhido a ZXY Tecnologia para desenvolver aplicações desktop para a minha empresa. A qualidade do trabalho 
                                    deles é simplesmente incrível! A equipe foi altamente profissional, compreendeu minhas necessidades e entregou um produto final excepcional. Agora tenho uma solução 
                                    desktop eficiente, intuitiva e personalizada que realmente impulsiona meu negócio."<br><br>Magno, Carlos. CEO Google</p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../../assets/images/depoimento2.jpg" alt="Carlos Randolfe">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">"Estou maravilhado com os serviços da ZXY Tecnologia em suporte de infraestrutura com especialização em cloud! A equipe deles é altamente qualificada e 
                                    resolveu todos os desafios técnicos com rapidez e eficiência. Agora, minha empresa tem uma infraestrutura de cloud robusta e segura, o que nos permite operar de forma 
                                    mais ágil e escalável. A ZXY Tecnologia tem sido um parceiro confiável e estou extremamente feliz por ter escolhido a empresa para cuidar da nossa infraestrutura."
                                    <br><br>Franca, Marcos. CEO HBO</p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../../assets/images/depoimento3.jpg" alt="Marcos Rodrigues">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="depositions">
                            <div class="paragraph">
                                <p class="text">"Estamos extremamente satisfeitos com os serviços prestados pela ZXY Tecnologia. Desde o primeiro contato, ficou evidente que a equipe da ZXY está altamente 
                                    qualificada e comprometida em atender às nossas necessidades. Através da parceria com a ZXY, conseguimos melhorar significativamente a eficiência e a segurança de nossos 
                                    sistemas. A empresa oferece soluções personalizadas e eficazes, sempre de forma ágil e transparente."<br><br>Costa, Fábio. CEO Netflix</p>
                            </div>
                            <div class="image">
                                <img class="photo" src="../../assets/images/depoimento4.jpg" alt="Marcos Rodrigues">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-indicators">
                    <button type="button" class="active" data-bs-target="#carousel" data-bs-slide-to="0"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button> <!-- Utilização do Bootstrap para fazer o Indicador -->
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
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
    font-weight:600;
}

.name{
    padding: 8px;
    color: #2B4257;
    font-weight: lighter;
}

.depositions{
    display: flex;
}
.text{
    color: #2B4257;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #ebdbc2;   
    border-radius: 6px;
    height: 200px;
    width: 650px;
    height: 300px;
    font-weight:600;
    position: absolute;  /* Colocando o texto em posição absoluta para sobrepor a imagem*/
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

@media (max-width: 991px) and (min-width: 768px){ /* Mudando layout dos depoimentos para encaixe em tela de tablet */
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
        height: 430px;
    }

    .text{
        position: relative;
        width: 390px;
        height: 430px;
    }
}

@media (max-width: 767px){ /* Mudando layout dos depoimentos para encaixe em tela de celular */
    
    .depositions{
        display: flex;
    }
    .text{
        width: 300px;
        height: 500px;
        margin-top: 300px;
    }

    .paragraph{
        padding-top: 0;
        padding-left: 0;
        height: 820px;
        margin: 0 auto;
    }

    .image{
        padding-left: 0px;
        margin: 0 auto;
        display: block;
        }

}
</style>