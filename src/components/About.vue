<template>
    <section id="about">
        <div class="hero">
            <div class="container">
                <h2 class="topic">Sobre nós</h2>
                <p class="paragraph">A ZXY Tecnologia é uma empresa líder no setor de tecnologia, especializada em fornecer serviços de consultoria de TI, desenvolvimento de aplicações desktop e suporte a infraestrutura especializado em cloud. Com uma equipe altamente qualificada de especialistas em tecnologia da informação, a ZXY Tecnologia oferece soluções inovadoras e personalizadas para empresas de todos os tamanhos.</p>
                <p class="paragraph">A consultoria de TI da ZXY Tecnologia é projetada para ajudar as empresas a alcançarem seus objetivos estratégicos por meio do uso eficiente e eficaz da tecnologia. Os consultores especializados trabalham em estreita colaboração com os clientes, identificando suas necessidades específicas e desenvolvendo soluções personalizadas para maximizar a eficiência operacional e impulsionar o crescimento dos negócios.</p>
                <p class="paragraph">O desenvolvimento de aplicações desktop é uma das áreas de especialização da ZXY Tecnologia. Com uma vasta experiência em desenvolvimento de software, a equipe de desenvolvedores da empresa cria aplicações desktop sob medida para atender às necessidades exclusivas de cada cliente. Desde aplicativos de gerenciamento de negócios até ferramentas de produtividade, a ZXY Tecnologia oferece soluções inovadoras que melhoram a eficiência e a competitividade das empresas.</p>
                <p class="paragraph">Além disso, a ZXY Tecnologia é reconhecida por seu suporte a infraestrutura especializado em cloud. Com a crescente demanda por serviços de computação em nuvem, a ZXY Tecnologia ajuda as empresas a migrarem com sucesso para ambientes de nuvem, fornecendo suporte técnico especializado, monitoramento proativo e gerenciamento de infraestrutura em nuvem para garantir a disponibilidade e desempenho dos sistemas.</p>
                <p class="paragraph">Com sua abordagem centrada no cliente, expertise técnica e soluções inovadoras, a ZXY Tecnologia é a parceira ideal para empresas que buscam obter vantagem competitiva por meio da tecnologia. Seja para consultoria de TI, desenvolvimento de aplicações desktop ou suporte a infraestrutura em nuvem, a ZXY Tecnologia está comprometida em fornecer serviços de alta qualidade e soluções sob medida para atender às necessidades de seus clientes em um mercado tecnológico em constante evolução.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

    *{
        color: #ebdbc2;
    }

    #about{
        text-align: center;
    }

    .topic{
        padding-bottom: 30px;
    }
    .hero{
        padding: 64px 0;
        background-image: url(../assets/images/foto-de-fundo.jpg) ;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .paragraph{
        text-align: left;
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

</style>