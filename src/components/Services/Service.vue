<template>
    <section id="service">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4">
                    <img data-aos="fade-right" class="images" src="../../assets/images/consultoria-ti-page.webp" alt="">
                </div>
                <div data-aos="fade-left" class="col-md-12 col-lg-8">
                    <h3 class="subtopic">Consultoria de TI</h3>
                    <p class="paragraph">A ZXY Tecnologia é uma empresa líder em consultoria de TI, especializada em fornecer 
                        soluções abrangentes para empresas de todos os tamanhos. Com uma equipe altamente 
                        qualificada de especialistas em tecnologia da informação, a ZXY Tecnologia oferece 
                        um serviço completo de consultoria que abrange desde a avaliação de necessidades 
                        tecnológicas até a implementação e gerenciamento de soluções inovadoras.</p>
                </div>
                <div class="col-md-12 col-lg-4">
                    <img data-aos="fade-right" class="images" src="../../assets/images/desenvolvimento-page.jpg" alt="">
                </div>
                <div data-aos="fade-left" class="col-md-12 col-lg-8">
                    <h3 class="subtopic">Desenvolvimento de Aplicações Desktop</h3>
                    <p class="paragraph">A ZXY Tecnologia é uma empresa especializada em desenvolvimento de aplicações desktop 
                        personalizadas para atender às necessidades exclusivas de negócios de seus clientes. Com anos de 
                        experiência no setor de TI, a ZXY Tecnologia oferece um serviço completo de desenvolvimento de aplicações 
                        desktop de alta qualidade, desde a concepção até a implementação e suporte contínuo.</p>
                </div>
                <div class="col-md-12 col-lg-4">
                    <img data-aos="fade-right" class="images" src="../../assets/images/cloud-page.jpg" alt="">
                </div>
                <div data-aos="fade-left" class="col-md-12 col-lg-8">
                    <h3 class="subtopic">Suporte a Infraestrutura Especializado em Cloud.</h3>
                    <p class="paragraph">A ZXY Tecnologia é uma empresa líder em suporte de infraestrutura especializado em cloud, 
                        oferecendo serviços abrangentes para empresas que buscam aproveitar o poder da computação em nuvem. Com 
                        uma equipe experiente de especialistas em infraestrutura e cloud computing, a ZXY Tecnologia oferece suporte 
                        técnico, monitoramento e gerenciamento de infraestrutura em nuvem de forma eficiente e confiável.</p>
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

#service{
    padding: 60px 0;
}

.subtopic{
    font-weight: 600;
    padding-bottom: 20px;
}

.images{
    width: 100%;
    border-radius: 6px;
    padding-bottom: 100px;
}

@media (max-width:991px) and (min-width: 768px){

    .images{
        padding-bottom: 0px;
        margin-bottom: 10px;
    }

    .paragraph{
        padding-bottom: 120px;
    }

    
}

@media (max-width:767px){
    .images{
        padding-bottom: 20px;
    }

    .paragraph{
        padding-bottom: 80px;
    }

    #service{
        padding-bottom: 0;
    }
}


</style>