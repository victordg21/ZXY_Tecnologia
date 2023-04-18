<template>
    <section id="about">
        <div class="container">
            <h2 class="topic">Sobre Nós</h2>
            <div class="row">
                <img data-aos="fade-right" class="image" src="../../assets/images/foto-sobre-nos.png" alt="Foto com números apresentando pensamentos da empresa">
            </div>
            <div data-aos="fade-left" class="row">
                <div class="col-md-12 col-lg-4">
                    <img data-aos="fade-right" class="image-smartphone" src="../../assets/images/circulo-1.png" alt="Círculo com número 1">
                    <h3 class="subtopic">Missão</h3>
                    <p class="paragraph text-left">A missão da ZXY Tecnologia é transformar a maneira como o mundo se conecta, simplificando 
                        e otimizando processos por meio de soluções tecnológicas inovadoras. Buscamos constantemente superar os limites do 
                        possível, desenvolvendo produtos e serviços que impulsionam a eficiência, a produtividade e o progresso.</p>
                </div>
                <div class="col-md-12 col-lg-4">
                    <img data-aos="fade-right" class="image-smartphone" src="../../assets/images/circulo-2.png" alt="Círculo com número 2">
                    <h3 class="subtopic">Visão</h3>
                    <p class="paragraph text-center">A ZXY Tecnologia enxerga um mundo onde a inovação é a força motriz para o progresso. 
                        Com uma visão centrada no futuro, a empresa busca constantemente criar soluções tecnológicas 
                        revolucionárias que transformam a maneira como vivemos e trabalhamos.</p>
                </div>
                <div class="col-md-12 col-lg-4">
                    <img data-aos="fade-right" class="image-smartphone" src="../../assets/images/circulo-3.png" alt="Círculo com número 3">
                    <h3 class="subtopic">Valores</h3>
                    <p class="paragraph text-right">Os valores fundamentais da ZXY Tecnologia são a inovação, integridade, excelência e 
                        colaboração. Acreditamos que a inovação é a chave para criar soluções tecnológicas disruptivas e impactar 
                        positivamente a sociedade. Valorizamos a integridade em todas as nossas ações, mantendo altos padrões 
                        éticos e transparência em nossos negócios.</p>
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

    #about{
        padding: 40px 0;
    }

    .topic{
        text-align: center;
        font-weight: 600;
    }
    .text-center{
        text-align: center;
        padding: 0 10px;
    }

    .text-left{
        text-align: center;
        padding-right: 30px;
    }

    .text-right{
        text-align: center;
        padding-left: 30px;
    }

    .subtopic{
        font-weight: 600;
        text-align: center;
        padding-bottom: 20px;
    }

    .image-smartphone{
        display: none;
    }

    @media (max-width: 991px){
        .image{
            display: none;
        }

        .image-smartphone{
            padding: 60px 0 30px;
            display: block;
            width: 15%;
            margin: 0 auto;
        }
    }

</style>