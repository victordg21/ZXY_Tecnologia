<script setup>

    let faq1 = false
    const number1 = 1
    let faq2 = false
    const number2 = 2
    let faq3 = false
    const number3 = 3
    let faq4 = false
    const number4 = 4
    let faq5 = false
    const number5 = 5
    let faq6 = false
    const number6 = 6
    let faq7 = false
    const number7 = 7
    let faq8 = false
    const number8 = 8

    function addOrRemove (faq, number){
        const answer = document.querySelector(`#answer${number}`)
        const question = document.querySelector(`#question${number}`)

        if (faq1 == false){
            question.classList.add('is-open-question')
            answer.classList.add('is-open-answer')
            return faq1 = true
        }else{
            question.classList.remove('is-open-question')
            answer.classList.remove('is-open-answer')
            return faq1 = false
        }
}



</script>

<template>
    <section id="answers">
                <div class="container">
                    <h2 class="faq">Perguntas Frequentes</h2>
                    <ul class="faq-questions">
                        <li @click="addOrRemove(faq1, number1)" class="faq-questions-item">
                            <div class="question" id="question1">
                                Como a ZXY Tecnologia pode me ajudar na migração para a nuvem?
                            </div>
                            <div class="answer" id="answer1">
                                A ZXY Tecnologia possui uma equipe especializada em suporte a infraestrutura em cloud, 
                                que pode ajudá-lo em todas as etapas do processo de migração para a nuvem. Isso inclui 
                                a avaliação das necessidades da sua empresa, o planejamento da migração, a implementação 
                                dos serviços em nuvem mais adequados, a migração de dados e aplicativos, e o suporte contínuo 
                                para garantir um ambiente em nuvem seguro e eficiente.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq2, number2)" class="faq-questions-item">
                            <div class="question" id="question2">
                                Quais são os benefícios de desenvolver aplicações desktop com a ZXY Tecnologia?
                            </div>
                            <div class="answer" id="answer2">
                                Desenvolver aplicações desktop com a ZXY Tecnologia oferece várias vantagens, incluindo soluções 
                                personalizadas de acordo com as necessidades específicas da sua empresa, interfaces de usuário amigáveis 
                                e intuitivas, integração com outros sistemas, funcionalidades avançadas, e suporte técnico especializado 
                                durante todo o ciclo de desenvolvimento.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq3, number3)" class="faq-questions-item">
                            <div class="question" id="question3">
                                Quais são as vantagens de utilizar serviços em nuvem para minha infraestrutura de TI?
                            </div>
                            <div class="answer" id="answer3">
                                As vantagens de utilizar serviços em nuvem para a infraestrutura de TI incluem a redução de custos de 
                                hardware e manutenção, a flexibilidade para escalar recursos de acordo com as necessidades da empresa, 
                                a possibilidade de acessar dados e aplicativos de qualquer lugar e dispositivo com conexão à internet, 
                                a atualização automática de software e segurança, e a capacidade de fazer backup e recuperação de dados 
                                de forma mais eficiente.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq4, number4)" class="faq-questions-item">
                            <div class="question" id="question4">
                                Quais tecnologias são utilizadas no desenvolvimento de aplicações desktop?
                            </div>
                            <div class="answer" id="answer4">
                                O desenvolvimento de aplicações desktop pode envolver o uso de várias tecnologias, como linguagens de 
                                programação (C#, Java, Python), frameworks de desenvolvimento de software, ferramentas de interface 
                                gráfica do usuário (GUI), bancos de dados, entre outros, dependendo dos requisitos específicos do projeto.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq5, number5)" class="faq-questions-item">
                            <div class="question" id="question5">
                                Quais são os principais serviços oferecidos pela ZXY Tecnologia na consultoria de TI?
                            </div>
                            <div class="answer" id="answer5">
                                Os principais serviços oferecidos pela ZXY Tecnologia incluem avaliação e planejamento de infraestrutura 
                                de TI, estratégias de transformação digital, gerenciamento de projetos de TI, consultoria em segurança 
                                cibernética, implementação e migração de sistemas, suporte a usuários, entre outros.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq6, number6)" class="faq-questions-item">
                            <div class="question" id="question6">
                                A ZXY Tecnologia oferece suporte técnico após a implementação dos serviços de consultoria de TI?
                            </div>
                            <div class="answer" id="answer6">
                                Sim, a ZXY Tecnologia oferece suporte técnico pós-implementação para garantir que os sistemas e serviços 
                                de TI estejam funcionando de forma eficiente e segura. Nossa equipe de suporte técnico está disponível 
                                para auxiliar em eventuais problemas, realizar atualizações e manutenções, e oferecer suporte remoto ou 
                                presencial, de acordo com as necessidades da sua empresa.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq7, number7)" class="faq-questions-item">
                            <div class="question" id="question7">
                                A ZXY Tecnologia oferece soluções de segurança cibernética?
                            </div>
                            <div class="answer" id="answer7">
                                Sim, a ZXY Tecnologia oferece soluções de segurança cibernética para proteger os sistemas e dados da sua 
                                empresa contra ameaças online. Nossos serviços de segurança cibernética incluem análise de 
                                vulnerabilidades, proteção contra malware, firewall, monitoramento de atividades suspeitas, gerenciamento 
                                de acesso, e outras medidas para garantir a segurança dos dados e a integridade dos sistemas.
                            </div>
                        </li>
                        <li @click="addOrRemove(faq8, number8)" class="faq-questions-item">
                            <div class="question" id="question8">
                                A ZXY Tecnologia atende a empresas de todos os tamanhos?
                            </div>
                            <div class="answer" id="answer8">
                                Sim, a ZXY Tecnologia atende a empresas de todos os tamanhos, desde pequenas e médias empresas até grandes 
                                corporações. Nossos serviços são adaptados para atender às necessidades específicas de cada cliente, 
                                independentemente do tamanho ou do setor de atuação.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
</template>

<style scoped>

    #answers{
        background-color: #2B4257;
        color: #ebdbc2;
        padding-bottom: 30px;
    }

    .faq{
        padding: 30px 0;
        text-align: center;
    }
    .faq-questions{
        padding: 0;
    }
    .faq-questions-item{
        background-color: #03273d;
        list-style: none;
        margin-bottom: 16px;
    }

    .question{
        font-size: 20px;
        padding: 24px;
        display: block;
        cursor: pointer;
        position: relative;
    }

    .question::after{
        content: '+';
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 40px;
    }

    .is-open-question::after{
        content: '-';
    }
    .answer{
        background-color: #ebdbc2;
        color:#03273d;
        font-size: 20px;
        height: 0px;
        overflow: hidden;
    }

    .is-open-answer{
        height: auto;
        padding: 24px;
    }

    @media (min-width: 768px) and (max-width: 1023px){
        .question{
        padding-right: 80px;
        }
    }

    @media (max-width: 767px){
        .question{
        font-size: 18px;
        padding-right: 40px;
        }
        .question::after{
            right: 12px;
        }
    }
</style>