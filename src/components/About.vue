<template>
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="put-border">
                        <h2 class="topic">Sobre nós</h2>
                        <p class="paragraph">Somos uma empresa especializada em fornecer serviços de consultoria em TI, desenvolvimento de aplicações desktop e suporte à infraestrutura especializado em nuvem. Nossa equipe é composta por profissionais altamente qualificados e experientes, que estão comprometidos em fornecer soluções tecnológicas inovadoras e eficientes para nossos clientes.</p>
                        <p class="paragraph">Nós entendemos que a tecnologia é um elemento fundamental para o sucesso dos negócios no mundo atual. Por isso, nos dedicamos em ajudar nossos clientes a otimizar seus processos, melhorar a eficiência operacional e alcançar suas metas de negócio por meio de soluções de TI robustas e personalizadas.</p>
                        <button class="button" type="button">Ver tudo</button>
                        <p class="paragraph">Nossos serviços de consultoria em TI são projetados para ajudar nossos clientes a identificar oportunidades de melhoria, implementar melhores práticas e alcançar a transformação digital em suas organizações. Nossos consultores são especialistas em diversas áreas de TI, incluindo arquitetura de sistemas, segurança da informação, gestão de projetos e governança de TI.</p>
                        <p class="paragraph">Na ZXY Tecnologia, estamos comprometidos com a excelência em nosso trabalho e com a satisfação de nossos clientes. Nossa abordagem é baseada na parceria com nossos clientes, compreendendo suas necessidades e fornecendo soluções de TI que agregam valor real aos seus negócios. Estamos ansiosos para ajudá-lo a alcançar o sucesso tecnológico em sua organização. Entre em contato conosco e descubra como a ZXY Tecnologia pode ser seu parceiro confiável em soluções de TI.</p>
                        </div>
                    </div>
                <div class="col-md-12 col-lg-6">
                    <h2 class="topic">Missão</h2>
                    <p class="paragraph">A missão da ZXY Tecnologia é fornecer serviços de consultoria em TI, desenvolvimento de aplicações desktop e suporte à infraestrutura especializado em cloud de forma excepcional, ajudando nossos clientes a alcançar o sucesso em suas iniciativas tecnológicas. Nós nos dedicamos a entender as necessidades específicas de cada cliente e fornecer soluções personalizadas, inovadoras e eficientes, sempre buscando a excelência na qualidade de nossos serviços.</p>
                    <h2 class="topic">Valores</h2>
                    <p class="paragraph">1. <b>Excelência</b>: Buscamos constantemente a excelência em tudo o que fazemos, desde o atendimento ao cliente até a entrega final dos projetos. Nosso compromisso é com a qualidade, a precisão e a eficiência.</p>
                    <p class="paragraph">2. <b>Inovação</b>: Acreditamos que a inovação é a chave para o sucesso em um mercado em constante evolução. Buscamos sempre estar atualizados com as últimas tendências e tecnologias, e trabalhamos em conjunto com nossos clientes para desenvolver soluções inovadoras e criativas.</p>
                    <p class="paragraph">3. <b>Foco no Cliente</b>: Colocamos nossos clientes em primeiro lugar. Buscamos entender suas necessidades, fornecer soluções que agreguem valor real aos seus negócios e garantir sua satisfação.</p>
                    <button class="button" type="button">Ver menos</button>
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

    .col-lg-6{
        margin-top: 30px;
    }
    .put-border{
        border-right: 1px solid #ebdbc2;
        padding-right: 30px;
    }

    #about{
        padding-bottom: 40px;
    }
    .topic{
        padding-top: 20px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 10px;
    }

    
    .button{
        background-color: #ebdbc2;
        font-weight: 600;
        color: #2B4257;
        height: 40px;
        width: 110px;
        border: none;
        border-radius: 6px;
        display: none;
    }

    .paragraph{
            text-align: left;
            margin-bottom: 4px;
        }

    @media (max-width:991px){
        .put-border{
            border-right: none;
            padding-left: 0;
        }

        
    }

    @media (max-width: 767px){
        .button{
            display: show;
        }
    }


</style>