//=================================== CHANGE LANGUAGE ===================================


const content = {
            

    "pt-BR": {                
        description: "Descrição em Português.",
        title: "Furfect - Cuidado e Saúde para Animais",

        header: {
            serviceDescription: "Serviços de saúde e bem-estar animal",
            mainTitle: "Pet feliz, veterinário feliz",



            navTitle:"Serviços",
            serviceBriefText:"Na nossa clínica veterinária, oferecemos uma variedade de serviços para cuidar do seu animal de estimação.",
            btnTextTransl:"Lista de Serviços",
            btnAppointment:"Agendar Consulta",
            
            CheckUp:"consultas de Check-Up ",
            CheckUpResume:"Essenciais para garantir a saúde do seu animal. Incluem exames completos, vacinação atualizada, testes laboratoriais, orientação nutricional e deteção precoce de doenças.",
            
            Vaccination:"Serviços de Vacinação de Animais de Estimação",
            VaccinationResume:"Mantenha os seus animais de estimação saudáveis com os nossos serviços de vacinação, que oferecem uma variedade de vacinas para proteger contra doenças comuns.",
            
            UrgencyHour:"Clínica Veterinária 24 Horas",
            UrgencyHourResume:"A nossa clínica veterinária 24 horas oferece cuidados de emergência abrangentes, com veterinários experientes disponíveis 24 horas para o seu pet.",
            
            PetSterilization:"Esterilização de Animais de Estimação",
            PetSterilizationResume:"A esterilização é um procedimento cirúrgico que controla a população de animais e promove a saúde, prevenindo doenças e comportamentos indesejados.",
            
            PetGrooming:"Serviços de Estética",
            PetGroomingResume:"Oferecemos serviços de estética na clínica e em casa, incluindo banhos, cortes de cabelo e corte de unhas. A estética regular é fundamental para a higiene do seu animal.",
            
            HomeVeterinaryCare:"Cuidados Veterinários Domiciliares",
            HomeVeterinaryCareResume:"Oferecemos atendimento de emergência completo para pets, com veterinários experientes disponíveis a qualquer hora para garantir o melhor tratamento.",
            
            ChipPlacement:"Colocação de Chip",
            ChipPlacementResume:"A colocação de um chip de identificação é vital para a segurança dos animais, permitindo a sua recuperação em caso de perda e ajudando a prevenir o abandono."
       
        },

        main: {
            ourMission:"A nossa missão é proporcionar o melhor cuidado para os animais, sempre com um enfoque naturalista e comunitário. ",
            teamBriefText:"A nossa equipa é composta por profissionais dedicados e apaixonados pelo bem-estar animal. Cada membro traz uma vasta experiência e um profundo amor pelos animais, garantindo que o seu pet receba o melhor cuidado possível.",
            blogBriefText:"Aqui está um resumo do nosso blog, com dicas e histórias inspiradoras.",
            maisConteudo:"--colocar conteudo--EM PT"
        },        
    },
  
  
    "en": {
        description: "Description in English.",
        title: "Furfect-Health & Care",
        
        header: {
            serviceDescription: "Animal health and welfare services",
            mainTitle: "Happy pet, happy vet",
            navTitle:"Services",
            serviceBriefText:"At our veterinary clinic, we offer a variety of services to care for your pet.",
            btnTextTransl:"Check our services",
            btnAppointment:"make an appointment",

            CheckUp:"Check-up Consultations",
            CheckUpResume:"Crucial for your pet's health, which include thorough exams, current vaccinations, lab tests, nutritional advice, and early disease detection.",
            
            Vaccination:"Pet Vaccination Services",
            VaccinationResume:"Keep your pets healthy with our vaccination services. We offer a range of vaccines to protect against common diseases.",
            
            UrgencyHour:"24-Hour Veterinary Clinic",
            UrgencyHourResume:"Our 24-hour veterinary clinic provides comprehensive emergency care, with experienced veterinarians available at all times to ensure the best treatment for your pet.",
            
            PetSterilization:"Pet Sterilization",
            PetSterilizationResume:"Sterilization is a surgical procedure that controls pet population and promotes health by preventing diseases and undesirable behaviors.",
            
            PetGrooming:"Pet Grooming",
            PetGroomingResume:"We offer grooming services both in-clinic and at home, including bathing, haircuts, and nail trimming. Regular grooming is essential for your pet's hygiene.",
            
            HomeVeterinaryCare:"Home Veterinary Services",
            HomeVeterinaryCareResume:"Our 24-hour veterinary clinic provides comprehensive emergency care for pets. Our experienced veterinarians are available around the clock at any time of day or night..",
            
            ChipPlacement:"Chip Placement Services",
            ChipPlacementResume:"The placement of an identification chip is vital for the safety of animals, allowing for their recovery if lost and helping to prevent abandonment."
        },

        main: {
            ourMission:"Our mission is to provide the best care for animals, always with a natural and community-focused approach.",
            teamBriefText:"Our team is made up of dedicated professionals who are passionate about animal well-being. Each member brings extensive experience and a deep love for animals, ensuring your pet receives the best possible care.",
            blogBriefText:"Here is a summary of our blog, with tips and inspiring stories.",
            maisConteudo:"--colocar conteudo--EM EN"
        }

    },
};

function changeLanguage(lang) {
    // Atualiza o título da página
    document.title = content[lang].title;

    // Atualiza a descrição
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', content[lang].description);
    } else {
        console.error("Elemento de descrição não encontrado.");
    }

    // Atualiza o conteúdo da página com base no idioma selecionado
    const elementsToUpdate = [
        { selector: '.serviceDescription', text: content[lang].header.serviceDescription },
        { selector: '.mainTitle', text: content[lang].header.mainTitle },
        { selector: '.ourMission', text: content[lang].main.ourMission },
        { selector: '.teamBriefText', text: content[lang].main.teamBriefText },
        { selector: '.blogBriefText', text: content[lang].main.blogBriefText },
        { selector: '.navTitle', text: content[lang].header.navTitle },
        { selector: '.serviceBriefText', text: content[lang].header.serviceBriefText },
        { selector: '.btnTextTransl', text: content[lang].header.btnTextTransl },
        { selector: '.btnAppointment', text: content[lang].header.btnAppointment },
        { selector: '.CheckUp', text: content[lang].header.CheckUp },
        { selector: '.CheckUpResume', text: content[lang].header.CheckUpResume },
        { selector: '.Vaccination', text: content[lang].header.Vaccination },
        { selector: '.VaccinationResume', text: content[lang].header.VaccinationResume },
        { selector: '.UrgencyHour', text: content[lang].header.UrgencyHour },
        { selector: '.UrgencyHourResume', text: content[lang].header.UrgencyHourResume },
        { selector: '.PetSterilization', text: content[lang].header.PetSterilization },
        { selector: '.PetSterilizationResume', text: content[lang].header.PetSterilizationResume },
        { selector: '.PetGrooming', text: content[lang].header.PetGrooming },
        { selector: '.PetGroomingResume', text: content[lang].header.PetGroomingResume },
        { selector: '.HomeVeterinaryCare', text: content[lang].header.HomeVeterinaryCare },
        { selector: '.HomeVeterinaryCareResume', text: content[lang].header.HomeVeterinaryCareResume },
        { selector: '.ChipPlacement', text: content[lang].header.ChipPlacement },
        { selector: '.ChipPlacementResume', text: content[lang].header.ChipPlacementResume },
    ];

    elementsToUpdate.forEach(element => {
        const el = document.querySelector(element.selector);
        if (el) {
            el.innerText = element.text;
        } else {
            console.error(`Elemento '${element.selector}' não encontrado.`);
        }
    });
}

// Inicializa o conteúdo com o idioma padrão
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('en'); // ou 'pt-BR' para Português
});

// Inicializa o conteúdo com o idioma padrão
changeLanguage('en'); // ou 'pt-BR' para Português
//================================= END CHANGE LANGUAGE =================================