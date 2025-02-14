export interface Translation {
  welcome: {
    title: string;
    subtitle: string;
    start: string;
  };
  questions: {
    fullName: string;
    email: string;
    nationality: string;
    travelAgent: string;
    experienceStatement: string;
    wildlifeExperience: string;
    guide: string;
    guideRating: string;
    keySightings: string;
    keySightingsSubtitle: string;
    activities: string;
    activitiesSubtitle: string;
    wildlifeComments: string;
    hospitalityStatement: string;
    hospitalitySubtitle: string;
    accommodationRating: string;
    facilitiesRating: string;
    foodRating: string;
    housekeepingRating: string;
    staffRating: string;
    staffStandout: string;
    staffStandoutSubtitle: string;
    hospitalityComments: string;
    recommendTuludi: string;
    communicationStatement: string;
    communicationSubtitle: string;
    communicationRating: string;
    communicationRatingSubtitle: string;
    marketingSource: string;
    marketingSourceSubtitle: string;
    overallScoreStatement: string;
    overallScoreSubtitle: string;
    overallExperience: string;
  };
  placeholders: {
    fullName: string;
    email: string;
    nationality: string;
    travelAgent: string;
    guide: string;
    wildlifeComments: string;
    hospitalityComments: string;
    marketingSource: string;
  };
  buttons: {
    next: string;
    back: string;
    clear: string;
    submit: string;
    yes: string;
    no: string;
  };
  completion: {
    title: string;
    subtitle: string;
    welcomePackButton: string;
    googleButton: string;
    tripadvisorButton: string;
  };
  viewLink: {
    click: string;
    here: string;
    toView: string;
  };
  options: {
    wordOfMouth: string;
    travelAgent: string;
    travelPlatform: string;
    onlineAds: string;
    websiteArticle: string;
    previousVisit: string;
    influencer: string;
    other: string;
  };
}

export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "nl", name: "Nederlands" },
  { code: "it", name: "Italiano" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const translations: Record<LanguageCode, Translation> = {
  en: {
    welcome: {
      title: "Tuludi Feedback",
      subtitle: "Please complete your review",
      start: "Start",
    },
    questions: {
      fullName: "Full Name",
      email: "Email Address",
      nationality: "Nationality",
      travelAgent: "Name of Travel Agent",
      experienceStatement:
        ", we pride ourselves on giving a world class wildlife experience. Please rate the experience you had.",
      wildlifeExperience: "Overall Wildlife Experience",
      guide: "Your Guide",
      guideRating: "Rate Your Guide",
      keySightings: "Key Sightings",
      keySightingsSubtitle: "Select which animals you saw on your game drive",
      activities: "What activities did you do?",
      activitiesSubtitle: "Select all the activities you did during your stay",
      wildlifeComments:
        "Any further comments or recommendations about our wildlife experience?",
      hospitalityStatement: ", please rate our hospitality.",
      hospitalitySubtitle:
        "Your valued opinion allows us to constantly improve our service and our camp.",
      accommodationRating: "Your Accommodation",
      facilitiesRating: "The Camp Facilities",
      foodRating: "The Food",
      housekeepingRating: "Housekeeping",
      staffRating: "Our Staff",
      staffStandout: "Did anyone in particular standout?",
      staffStandoutSubtitle: "Choose as many as you like",
      hospitalityComments:
        "Any further comments or recommendations about our hospitality?",
      recommendTuludi: "Would you recommend Tuludi to your friends?",
      communicationStatement: "We know communication is key.",
      communicationSubtitle:
        "We aim to listen, learn, and elevate—your voice ensures we keep raising the bar.",
      communicationRating: "Communication",
      communicationRatingSubtitle:
        "Rate our pre-arrival, check-in and daily communication.",
      marketingSource: "How did you hear about Tuludi?",
      marketingSourceSubtitle: "Choose as many as you like",
      overallScoreStatement: "How we measured up.",
      overallScoreSubtitle:
        "Your overall trip score reflects the magic of your experience—from the thrill of the wild to the warmth of our hospitality. Every detail matters, and we're curious to know how we measured up!",
      overallExperience: "Overall Trip Experience",
    },
    placeholders: {
      fullName: "Enter your full name",
      email: "name@example.com",
      nationality: "Select your nationality",
      travelAgent: "Enter your travel agent's name",
      guide: "Select your guide",
      wildlifeComments: "Enter your comments here",
      hospitalityComments: "Enter your comments here",
      marketingSource: "Select source",
    },
    buttons: {
      next: "Next",
      back: "Back",
      clear: "Clear Signature",
      submit: "Submit Form",
      yes: "Yes",
      no: "No",
    },
    completion: {
      title: "Thank you for your review, {name}",
      subtitle:
        "A public review makes a difference—it helps us grow and ensures others can enjoy the same unforgettable experience.",
      googleButton: "Click for Google Reviews",
      tripadvisorButton: "Click for TripAdvisor Reviews",
      welcomePackButton: "Click to view the Welcome Pack",
    },
    viewLink: {
      click: "Click",
      here: "here",
      toView: "to view",
    },
    options: {
      wordOfMouth: "Word of Mouth",
      travelAgent: "Travel Agent",
      travelPlatform: "Online Travel Platform",
      onlineAds: "Online Advertisement (Google, Social Media Ads)",
      websiteArticle: "Website or Blog Article",
      previousVisit: "Previous Visit to Another Natural Selection Camp",
      influencer: "Influencer or Celebrity Endorsement",
      other: "Other",
    },
  },
  es: {
    welcome: {
      title: "Comentarios de Tuludi",
      subtitle: "Por favor complete su reseña",
      start: "Comenzar",
    },
    questions: {
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      nationality: "Nacionalidad",
      travelAgent: "Nombre del Agente de Viajes",
      experienceStatement:
        ", nos enorgullecemos de ofrecer una experiencia de vida silvestre de clase mundial. Por favor, califique la experiencia que tuvo.",
      wildlifeExperience: "Experiencia General con la Vida Silvestre",
      guide: "Tu Guía",
      guideRating: "Califica a Tu Guía",
      keySightings: "Avistamientos Principales",
      keySightingsSubtitle: "Selecciona qué animales viste en tu safari",
      activities: "¿Qué actividades realizaste?",
      activitiesSubtitle:
        "Selecciona todas las actividades que hiciste durante tu estancia",
      wildlifeComments:
        "¿Algún comentario o recomendación adicional sobre nuestra experiencia con la vida silvestre?",
      hospitalityStatement: ", por favor califica nuestra hospitalidad.",
      hospitalitySubtitle:
        "Tu valiosa opinión nos permite mejorar constantemente nuestro servicio y nuestro campamento.",
      accommodationRating: "Tu Alojamiento",
      facilitiesRating: "Las Instalaciones del Campamento",
      foodRating: "La Comida",
      housekeepingRating: "Limpieza",
      staffRating: "Nuestro Personal",
      staffStandout: "¿Alguien destacó en particular?",
      staffStandoutSubtitle: "Elige tantos como quieras",
      hospitalityComments:
        "¿Algún comentario o recomendación adicional sobre nuestra hospitalidad?",
      recommendTuludi: "¿Recomendarías Tuludi a tus amigos?",
      communicationStatement: "Sabemos que la comunicación es clave.",
      communicationSubtitle:
        "Nuestro objetivo es escuchar, aprender y mejorar—tu voz nos asegura seguir elevando el nivel.",
      communicationRating: "Comunicación",
      communicationRatingSubtitle:
        "Evalúe nuestra comunicación previa a la llegada, el registro y la comunicación diaria.",
      marketingSource: "¿Cómo se enteró de Tuludi?",
      marketingSourceSubtitle: "Elija tantos como desee",
      overallScoreStatement: "¿Cómo lo hicimos?",
      overallScoreSubtitle:
        "La puntuación general de tu viaje refleja la magia de tu experiencia, desde la emoción de la naturaleza hasta la calidez de nuestra hospitalidad. Cada detalle importa, ¡y nos interesa saber cómo lo hicimos!",
      overallExperience: "Experiencia General del Viaje",
    },
    placeholders: {
      fullName: "Ingrese su nombre completo",
      email: "nombre@ejemplo.com",
      nationality: "Seleccione su nacionalidad",
      travelAgent: "Ingrese el nombre de su agente de viajes",
      guide: "Selecciona tu guía",
      wildlifeComments: "Ingrese sus comentarios aquí",
      hospitalityComments: "Ingrese sus comentarios aquí",
      marketingSource: "Seleccionar fuente",
    },
    buttons: {
      next: "Siguiente",
      back: "Atrás",
      clear: "Borrar Firma",
      submit: "Enviar Formulario",
      yes: "Sí",
      no: "No",
    },
    completion: {
      title: "Gracias por tu reseña, {name}",
      subtitle:
        "Una reseña pública hace la diferencia: nos ayuda a crecer y asegura que otros puedan disfrutar de la misma experiencia inolvidable.",
      googleButton: "Haz clic para las reseñas de Google",
      tripadvisorButton: "Haz clic para las reseñas de TripAdvisor",
      welcomePackButton: "Haga clic para ver el paquete de bienvenida",
    },
    viewLink: {
      click: "Haga clic",
      here: "aquí",
      toView: "para ver",
    },
    options: {
      wordOfMouth: "Recomendación Personal",
      travelAgent: "Agente de Viajes",
      travelPlatform: "Plataforma de Viajes en Línea",
      onlineAds: "Publicidad en Línea (Google, Anuncios en Redes Sociales)",
      websiteArticle: "Sitio Web o Artículo de Blog",
      previousVisit: "Visita Previa a Otro Campamento de Natural Selection",
      influencer: "Recomendación de Influencer o Celebridad",
      other: "Otro",
    },
  },
  fr: {
    welcome: {
      title: "Avis Tuludi",
      subtitle: "Veuillez compléter votre évaluation",
      start: "Commencer",
    },
    questions: {
      fullName: "Nom Complet",
      email: "Adresse Email",
      nationality: "Nationalité",
      travelAgent: "Nom de l'Agent de Voyage",
      experienceStatement:
        ", nous sommes fiers d'offrir une expérience de la faune de classe mondiale. Veuillez évaluer l'expérience que vous avez eue.",
      wildlifeExperience: "Expérience Globale de la Faune",
      guide: "Votre Guide",
      guideRating: "Évaluez Votre Guide",
      keySightings: "Observations Principales",
      keySightingsSubtitle:
        "Sélectionnez les animaux que vous avez vus lors de votre safari",
      activities: "Quelles activités avez-vous faites ?",
      activitiesSubtitle:
        "Sélectionnez toutes les activités que vous avez faites pendant votre séjour",
      wildlifeComments:
        "Avez-vous d'autres commentaires ou recommandations concernant notre expérience de la faune ?",
      hospitalityStatement: ", merci d'évaluer notre hospitalité.",
      hospitalitySubtitle:
        "Votre précieux avis nous permet d'améliorer constamment notre service et notre camp.",
      accommodationRating: "Votre Hébergement",
      facilitiesRating: "Les Installations du Camp",
      foodRating: "La Nourriture",
      housekeepingRating: "Service de Chambre",
      staffRating: "Notre Personnel",
      staffStandout: "Quelqu'un s'est-il particulièrement démarqué ?",
      staffStandoutSubtitle: "Choisissez autant que vous le souhaitez",
      hospitalityComments:
        "Avez-vous d'autres commentaires ou recommandations concernant notre hospitalité ?",
      recommendTuludi: "Recommanderiez-vous Tuludi à vos amis ?",
      communicationStatement:
        "Nous savons que la communication est essentielle.",
      communicationSubtitle:
        "Notre objectif est d'écouter, d'apprendre et de progresser—votre voix nous aide à continuer à élever la barre.",
      communicationRating: "Communication",
      communicationRatingSubtitle:
        "Évaluez notre communication avant l'arrivée, à l'enregistrement et au quotidien.",
      marketingSource: "Comment avez-vous entendu parler de Tuludi ?",
      marketingSourceSubtitle: "Choisissez autant que vous le souhaitez",
      overallScoreStatement: "Comment nous avons répondu à vos attentes.",
      overallScoreSubtitle:
        "Votre note globale reflète la magie de votre expérience, de l'émotion de la nature à la chaleur de notre hospitalité. Chaque détail compte, et nous sommes curieux de savoir comment nous avons répondu à vos attentes !",
      overallExperience: "Expérience Globale du Voyage",
    },
    placeholders: {
      fullName: "Entrez votre nom complet",
      email: "nom@exemple.com",
      nationality: "Sélectionnez votre nationalité",
      travelAgent: "Entrez le nom de votre agent de voyage",
      guide: "Sélectionnez votre guide",
      wildlifeComments: "Entrez vos commentaires ici",
      hospitalityComments: "Entrez vos commentaires ici",
      marketingSource: "Sélectionner la source",
    },
    buttons: {
      next: "Suivant",
      back: "Retour",
      clear: "Effacer la signature",
      submit: "Soumettre le formulaire",
      yes: "Oui",
      no: "Non",
    },
    completion: {
      title: "Merci pour votre avis, {name}",
      subtitle:
        "Un avis public fait la différence—il nous aide à grandir et permet aux autres de profiter de la même expérience inoubliable.",
      googleButton: "Cliquez pour les avis Google",
      tripadvisorButton: "Cliquez pour les avis TripAdvisor",
      welcomePackButton: "Cliquez pour voir le pack de bienvenue",
    },
    viewLink: {
      click: "Cliquez",
      here: "ici",
      toView: "pour voir",
    },
    options: {
      wordOfMouth: "Bouche à Oreille",
      travelAgent: "Agent de Voyage",
      travelPlatform: "Plateforme de Voyage en Ligne",
      onlineAds: "Publicité en Ligne (Google, Réseaux Sociaux)",
      websiteArticle: "Site Web ou Article de Blog",
      previousVisit: "Visite Précédente dans un Autre Camp Natural Selection",
      influencer: "Recommandation d'Influenceur ou de Célébrité",
      other: "Autre",
    },
  },
  de: {
    welcome: {
      title: "Tuludi Feedback",
      subtitle: "Bitte vervollständigen Sie Ihre Bewertung",
      start: "Beginnen",
    },
    questions: {
      fullName: "Vollständiger Name",
      email: "E-Mail-Adresse",
      nationality: "Nationalität",
      travelAgent: "Name des Reiseberaters",
      experienceStatement:
        ", wir sind stolz darauf, ein erstklassiges Wildtier-Erlebnis zu bieten. Bitte bewerten Sie Ihre Erfahrung.",
      wildlifeExperience: "Gesamte Wildlife-Erfahrung",
      guide: "Ihr Guide",
      guideRating: "Bewerten Sie Ihren Guide",
      keySightings: "Wichtige Sichtungen",
      keySightingsSubtitle:
        "Wählen Sie aus, welche Tiere Sie auf Ihrer Safaritour gesehen haben",
      activities: "Welche Aktivitäten haben Sie unternommen?",
      activitiesSubtitle:
        "Wählen Sie alle Aktivitäten aus, die Sie während Ihres Aufenthalts gemacht haben",
      wildlifeComments:
        "Haben Sie weitere Kommentare oder Empfehlungen zu unserem Wildlife-Erlebnis?",
      hospitalityStatement: ", bitte bewerten Sie unsere Gastfreundschaft.",
      hospitalitySubtitle:
        "Ihre wertvolle Meinung ermöglicht es uns, unseren Service und unser Camp stetig zu verbessern.",
      accommodationRating: "Ihre Unterkunft",
      facilitiesRating: "Die Camp-Einrichtungen",
      foodRating: "Das Essen",
      housekeepingRating: "Zimmerservice",
      staffRating: "Unser Personal",
      staffStandout: "Ist jemand besonders aufgefallen?",
      staffStandoutSubtitle: "Wählen Sie so viele wie Sie möchten",
      hospitalityComments:
        "Haben Sie weitere Kommentare oder Empfehlungen zu unserer Gastfreundschaft?",
      recommendTuludi: "Würden Sie Tuludi Ihren Freunden empfehlen?",
      communicationStatement:
        "Wir wissen, dass Kommunikation der Schlüssel ist.",
      communicationSubtitle:
        "Unser Ziel ist es zu zuhören, zu lernen und uns weiterzuentwickeln—Ihre Stimme hilft uns dabei, die Messlatte immer höher zu legen.",
      communicationRating: "Kommunikation",
      communicationRatingSubtitle:
        "Bewerten Sie unsere Kommunikation vor der Ankunft, beim Check-in und im täglichen Ablauf.",
      marketingSource: "Wie haben Sie von Tuludi erfahren?",
      marketingSourceSubtitle: "Wählen Sie so viele wie Sie möchten",
      overallScoreStatement: "Wie wir abgeschnitten haben.",
      overallScoreSubtitle:
        "Ihre Gesamtbewertung spiegelt die Magie Ihres Erlebnisses wider—vom Nervenkitzel der Wildnis bis zur Wärme unserer Gastfreundschaft. Jedes Detail zählt, und wir sind gespannt zu erfahren, wie wir abgeschnitten haben!",
      overallExperience: "Gesamte Reiseerfahrung",
    },
    placeholders: {
      fullName: "Geben Sie Ihren vollständigen Namen ein",
      email: "name@beispiel.com",
      nationality: "Wählen Sie Ihre Nationalität",
      travelAgent: "Geben Sie den Namen Ihres Reiseberaters ein",
      guide: "Wählen Sie Ihren Guide",
      wildlifeComments: "Geben Sie hier Ihre Kommentare ein",
      hospitalityComments: "Geben Sie hier Ihre Kommentare ein",
      marketingSource: "Quelle auswählen",
    },
    buttons: {
      next: "Weiter",
      back: "Zurück",
      clear: "Unterschrift löschen",
      submit: "Formular absenden",
      yes: "Ja",
      no: "Nein",
    },
    completion: {
      title: "Danke für Ihre Bewertung, {name}",
      subtitle:
        "Eine öffentliche Bewertung macht einen Unterschied—sie hilft uns zu wachsen und stellt sicher, dass andere das gleiche unvergessliche Erlebnis genießen können.",
      googleButton: "Klicken Sie für Google-Bewertungen",
      tripadvisorButton: "Klicken Sie für TripAdvisor-Bewertungen",
      welcomePackButton: "Klicken Sie, um das Willkommenspaket anzusehen",
    },
    viewLink: {
      click: "Klicken Sie",
      here: "hier",
      toView: "zum Ansehen",
    },
    options: {
      wordOfMouth: "Mundpropaganda",
      travelAgent: "Reisebüro",
      travelPlatform: "Online-Reiseplattform",
      onlineAds: "Online-Werbung (Google, Social Media)",
      websiteArticle: "Website oder Blog-Artikel",
      previousVisit: "Früherer Besuch in einem anderen Natural Selection Camp",
      influencer: "Influencer oder Prominenten-Empfehlung",
      other: "Andere",
    },
  },
  nl: {
    welcome: {
      title: "Tuludi Feedback",
      subtitle: "Vul alstublieft uw beoordeling in",
      start: "Start",
    },
    questions: {
      fullName: "Volledige Naam",
      email: "E-mailadres",
      nationality: "Nationaliteit",
      travelAgent: "Naam Reisagent",
      experienceStatement:
        ", we zijn er trots op een wereldklasse wildlife-ervaring te bieden. Beoordeel alstublieft uw ervaring.",
      wildlifeExperience: "Algemene Wildlife Ervaring",
      guide: "Uw Gids",
      guideRating: "Beoordeel Uw Gids",
      keySightings: "Belangrijke Waarnemingen",
      keySightingsSubtitle:
        "Selecteer welke dieren u heeft gezien tijdens uw gamedrive",
      activities: "Welke activiteiten heeft u gedaan?",
      activitiesSubtitle:
        "Selecteer alle activiteiten die u tijdens uw verblijf heeft gedaan",
      wildlifeComments:
        "Heeft u nog andere opmerkingen of aanbevelingen over onze wildlife-ervaring?",
      hospitalityStatement: ", beoordeel alstublieft onze gastvrijheid.",
      hospitalitySubtitle:
        "Uw waardevolle mening stelt ons in staat onze service en ons kamp voortdurend te verbeteren.",
      accommodationRating: "Uw Accommodatie",
      facilitiesRating: "De Kampfaciliteiten",
      foodRating: "Het Eten",
      housekeepingRating: "Huishouding",
      staffRating: "Ons Personeel",
      staffStandout: "Viel iemand in het bijzonder op?",
      staffStandoutSubtitle: "Kies zoveel als je wilt",
      hospitalityComments:
        "Heeft u nog andere opmerkingen of aanbevelingen over onze gastvrijheid?",
      recommendTuludi: "Zou u Tuludi aanbevelen aan uw vrienden?",
      communicationStatement: "We weten dat communicatie essentieel is.",
      communicationSubtitle:
        "Ons doel is om te luisteren, te leren en te verbeteren—uw stem zorgt ervoor dat we de lat steeds hoger leggen.",
      communicationRating: "Communicatie",
      communicationRatingSubtitle:
        "Beoordeel onze communicatie voor aankomst, bij inchecken en dagelijkse communicatie.",
      marketingSource: "Hoe heeft u over Tuludi gehoord?",
      marketingSourceSubtitle: "Kies zoveel als u wilt",
      overallScoreStatement: "Hoe we hebben gepresteerd.",
      overallScoreSubtitle:
        "Uw algemene reisscore weerspiegelt de magie van uw ervaring—van de spanning van het wild tot de warmte van onze gastvrijheid. Elk detail telt, en we zijn benieuwd hoe we hebben gepresteerd!",
      overallExperience: "Algemene Reiservaring",
    },
    placeholders: {
      fullName: "Voer uw volledige naam in",
      email: "naam@voorbeeld.com",
      nationality: "Selecteer uw nationaliteit",
      travelAgent: "Voer de naam van uw reisagent in",
      guide: "Selecteer uw gids",
      wildlifeComments: "Voer hier uw opmerkingen in",
      hospitalityComments: "Voer hier uw opmerkingen in",
      marketingSource: "Bron selecteren",
    },
    buttons: {
      next: "Volgende",
      back: "Terug",
      clear: "Handtekening wissen",
      submit: "Formulier verzenden",
      yes: "Ja",
      no: "Nee",
    },
    completion: {
      title: "Bedankt voor uw beoordeling, {name}",
      subtitle:
        "Een openbare beoordeling maakt verschil—het helpt ons groeien en zorgt ervoor dat anderen dezelfde onvergetelijke ervaring kunnen beleven.",
      googleButton: "Klik voor Google beoordelingen",
      tripadvisorButton: "Klik voor TripAdvisor beoordelingen",
      welcomePackButton: "Klik om het welkomstpakket te bekijken",
    },
    viewLink: {
      click: "Klik",
      here: "hier",
      toView: "om te bekijken",
    },
    options: {
      wordOfMouth: "Mond-tot-mond",
      travelAgent: "Reisbureau",
      travelPlatform: "Online Reisplatform",
      onlineAds: "Online Advertenties (Google, Social Media)",
      websiteArticle: "Website of Blog Artikel",
      previousVisit: "Eerder Bezoek aan een Ander Natural Selection Kamp",
      influencer: "Influencer of Celebrity Aanbeveling",
      other: "Anders",
    },
  },
  it: {
    welcome: {
      title: "Feedback Tuludi",
      subtitle: "Per favore completa la tua recensione",
      start: "Inizia",
    },
    questions: {
      fullName: "Nome Completo",
      email: "Indirizzo Email",
      nationality: "Nazionalità",
      travelAgent: "Nome dell'Agente di Viaggio",
      experienceStatement:
        ", siamo orgogliosi di offrire un'esperienza naturalistica di livello mondiale. Per favore valuta l'esperienza che hai avuto.",
      wildlifeExperience: "Esperienza Complessiva della Fauna Selvatica",
      guide: "La Tua Guida",
      guideRating: "Valuta La Tua Guida",
      keySightings: "Avvistamenti Principali",
      keySightingsSubtitle:
        "Seleziona quali animali hai visto durante il tuo safari",
      activities: "Quali attività hai fatto?",
      activitiesSubtitle:
        "Seleziona tutte le attività che hai fatto durante il tuo soggiorno",
      wildlifeComments:
        "Hai altri commenti o suggerimenti sulla nostra esperienza con la fauna selvatica?",
      hospitalityStatement: ", ti preghiamo di valutare la nostra ospitalità.",
      hospitalitySubtitle:
        "La tua preziosa opinione ci permette di migliorare costantemente il nostro servizio e il nostro campo.",
      accommodationRating: "Il Tuo Alloggio",
      facilitiesRating: "Le Strutture del Campo",
      foodRating: "Il Cibo",
      housekeepingRating: "Pulizie",
      staffRating: "Il Nostro Staff",
      staffStandout: "Qualcuno si è distinto in particolare?",
      staffStandoutSubtitle: "Scegli quanti ne vuoi",
      hospitalityComments:
        "Hai altri commenti o suggerimenti sulla nostra ospitalità?",
      recommendTuludi: "Consiglieresti Tuludi ai tuoi amici?",
      communicationStatement: "Sappiamo che la comunicazione è fondamentale.",
      communicationSubtitle:
        "Il nostro obiettivo è ascoltare, imparare e migliorare—la vostra voce ci assicura di continuare ad alzare l'asticella.",
      communicationRating: "Comunicazione",
      communicationRatingSubtitle:
        "Valuta la nostra comunicazione pre-arrivo, check-in e comunicazione quotidiana.",
      marketingSource: "Come hai sentito parlare di Tuludi?",
      marketingSourceSubtitle: "Scegli quante opzioni vuoi",
      overallScoreStatement: "Come ci siamo misurati.",
      overallScoreSubtitle:
        "Il punteggio complessivo del tuo viaggio riflette la magia della tua esperienza—dall'emozione della natura selvaggia al calore della nostra ospitalità. Ogni dettaglio conta, e siamo curiosi di sapere come ci siamo misurati!",
      overallExperience: "Esperienza Complessiva del Viaggio",
    },
    placeholders: {
      fullName: "Inserisci il tuo nome completo",
      email: "nome@esempio.com",
      nationality: "Seleziona la tua nazionalità",
      travelAgent: "Inserisci il nome del tuo agente di viaggio",
      guide: "Seleziona la tua guida",
      wildlifeComments: "Inserisci qui i tuoi commenti",
      hospitalityComments: "Inserisci qui i tuoi commenti",
      marketingSource: "Seleziona fonte",
    },
    buttons: {
      next: "Avanti",
      back: "Indietro",
      clear: "Cancella firma",
      submit: "Invia modulo",
      yes: "Sì",
      no: "No",
    },
    completion: {
      title: "Grazie per la tua recensione, {name}",
      subtitle:
        "Una recensione pubblica fa la differenza—ci aiuta a crescere e assicura che altri possano godere della stessa esperienza indimenticabile.",
      googleButton: "Clicca per le recensioni Google",
      tripadvisorButton: "Clicca per le recensioni TripAdvisor",
      welcomePackButton: "Clicca per vedere il pacchetto di benvenuto",
    },
    viewLink: {
      click: "Clicca",
      here: "qui",
      toView: "per vedere",
    },
    options: {
      wordOfMouth: "Passaparola",
      travelAgent: "Agente di Viaggio",
      travelPlatform: "Piattaforma di Viaggi Online",
      onlineAds: "Pubblicità Online (Google, Social Media)",
      websiteArticle: "Sito Web o Articolo Blog",
      previousVisit: "Visita Precedente a un Altro Campo Natural Selection",
      influencer: "Raccomandazione di Influencer o Celebrità",
      other: "Altro",
    },
  },
  ru: {
    welcome: {
      title: "Отзывы о Tuludi",
      subtitle: "Пожалуйста, заполните свой отзыв",
      start: "Начать",
    },
    questions: {
      fullName: "Полное Имя",
      email: "Электронная Почта",
      nationality: "Гражданство",
      travelAgent: "Имя Турагента",
      experienceStatement:
        ", мы гордимся тем, что предоставляем первоклассный опыт наблюдения за дикой природой. Пожалуйста, оцените ваш опыт.",
      wildlifeExperience: "Общее Впечатление от Дикой Природы",
      guide: "Ваш Гид",
      guideRating: "Оцените Вашего Гида",
      keySightings: "Ключевые Наблюдения",
      keySightingsSubtitle:
        "Выберите, каких животных вы видели во время сафари",
      activities: "Какие мероприятия вы посетили?",
      activitiesSubtitle:
        "Выберите все мероприятия, которые вы посетили во время пребывания",
      wildlifeComments:
        "Есть ли у вас дополнительные комментарии или рекомендации о нашем опыте наблюдения за дикой природой?",
      hospitalityStatement: ", пожалуйста, оцените наше гостеприимство.",
      hospitalitySubtitle:
        "Ваше ценное мнение позволяет нам постоянно улучшать наш сервис и наш лагерь.",
      accommodationRating: "Ваше Размещение",
      facilitiesRating: "Удобства Лагеря",
      foodRating: "Питание",
      housekeepingRating: "Обслуживание Номеров",
      staffRating: "Наш Персонал",
      staffStandout: "Кто-нибудь особенно выделился?",
      staffStandoutSubtitle: "Выберите столько, сколько хотите",
      hospitalityComments:
        "Есть ли у вас дополнительные комментарии или рекомендации о нашем гостеприимстве?",
      recommendTuludi: "Порекомендовали бы вы Tuludi своим друзьям?",
      communicationStatement: "Мы знаем, что коммуникация - это ключ к успеху.",
      communicationSubtitle:
        "Наша цель - слушать, учиться и развиваться—ваш голос помогает нам постоянно повышать планку.",
      communicationRating: "Коммуникация",
      communicationRatingSubtitle:
        "Оцените нашу коммуникацию до прибытия, при регистрации и ежедневное общение.",
      marketingSource: "Как вы узнали о Tuludi?",
      marketingSourceSubtitle: "Выберите столько вариантов, сколько хотите",
      overallScoreStatement: "Как мы справились.",
      overallScoreSubtitle:
        "Общая оценка вашего путешествия отражает магию вашего опыта—от захватывающих встреч с дикой природой до теплоты нашего гостеприимства. Каждая деталь имеет значение, и нам интересно узнать, как мы справились!",
      overallExperience: "Общее Впечатление от Поездки",
    },
    placeholders: {
      fullName: "Введите ваше полное имя",
      email: "имя@пример.com",
      nationality: "Выберите ваше гражданство",
      travelAgent: "Введите имя вашего турагента",
      guide: "Выберите вашего гида",
      wildlifeComments: "Введите ваши комментарии здесь",
      hospitalityComments: "Введите ваши комментарии здесь",
      marketingSource: "Выберите источник",
    },
    buttons: {
      next: "Далее",
      back: "Назад",
      clear: "Очистить подпись",
      submit: "Отправить форму",
      yes: "Да",
      no: "Нет",
    },
    completion: {
      title: "Спасибо за ваш отзыв, {name}",
      subtitle:
        "Публичный отзыв имеет значение—он помогает нам расти и гарантирует, что другие смогут насладиться таким же незабываемым опытом.",
      googleButton: "Нажмите для отзывов Google",
      tripadvisorButton: "Нажмите для отзывов TripAdvisor",
      welcomePackButton: "Нажмите, чтобы посмотреть приветственный пакет",
    },
    viewLink: {
      click: "Нажмите",
      here: "здесь",
      toView: "чтобы посмотреть",
    },
    options: {
      wordOfMouth: "Сарафанное радио",
      travelAgent: "Турагент",
      travelPlatform: "Онлайн-платформа для путешествий",
      onlineAds: "Онлайн-реклама (Google, реклама в соцсетях)",
      websiteArticle: "Веб-сайт или статья в блоге",
      previousVisit: "Предыдущий визит в другой лагерь Natural Selection",
      influencer: "Рекомендация инфлюенсера или знаменитости",
      other: "Другое",
    },
  },
  zh: {
    welcome: {
      title: "Tuludi 反馈",
      subtitle: "请完成您的评价",
      start: "开始",
    },
    questions: {
      fullName: "全名",
      email: "电子邮件地址",
      nationality: "国籍",
      travelAgent: "旅行社代理人姓名",
      experienceStatement:
        "，我们以提供世界级的野生动物体验为荣。请为您的体验打分。",
      wildlifeExperience: "整体野生动物体验",
      guide: "您的向导",
      guideRating: "评价您的向导",
      keySightings: "重要观察",
      keySightingsSubtitle: "选择您在游猎过程中看到的动物",
      activities: "您参加了哪些活动？",
      activitiesSubtitle: "选择您在住宿期间参加的所有活动",
      wildlifeComments: "对我们的野生动物体验有任何其他意见或建议吗？",
      hospitalityStatement: "，请评价我们的待客之道。",
      hospitalitySubtitle: "您的宝贵意见使我们能够不断改进我们的服务和营地。",
      accommodationRating: "您的住宿",
      facilitiesRating: "营地设施",
      foodRating: "餐饮",
      housekeepingRating: "客房服务",
      staffRating: "我们的员工",
      staffStandout: "有谁特别出色吗？",
      staffStandoutSubtitle: "可以选择多个",
      hospitalityComments: "对我们的待客之道有任何其他意见或建议吗？",
      recommendTuludi: "您会向朋友推荐Tuludi吗？",
      communicationStatement: "我们深知沟通至关重要。",
      communicationSubtitle:
        "我们致力于倾听、学习和提升—您的声音确保我们不断提高标准。",
      communicationRating: "沟通",
      communicationRatingSubtitle: "评价我们的到达前、登记入住和日常沟通。",
      marketingSource: "您是如何听说Tuludi的？",
      marketingSourceSubtitle: "可以选择多个选项",
      overallScoreStatement: "我们的表现如何。",
      overallScoreSubtitle:
        "您的整体旅行评分反映了您体验的魔力—从野外的刺激到我们热情的款待。每个细节都很重要，我们很想知道我们的表现如何！",
      overallExperience: "整体旅行体验",
    },
    placeholders: {
      fullName: "请输入您的全名",
      email: "name@example.com",
      nationality: "选择您的国籍",
      travelAgent: "请输入您的旅行社代理人姓名",
      guide: "选择您的向导",
      wildlifeComments: "在此输入您的评论",
      hospitalityComments: "在此输入您的评论",
      marketingSource: "选择来源",
    },
    buttons: {
      next: "下一步",
      back: "返回",
      clear: "清除签名",
      submit: "提交表格",
      yes: "是",
      no: "否",
    },
    completion: {
      title: "感谢您的评价, {name}",
      subtitle:
        "公开评价带来改变—它帮助我们成长，确保他人也能享受同样难忘的体验。",
      welcomePackButton: "点击查看欢迎包",
      googleButton: "点击查看谷歌评价",
      tripadvisorButton: "点击查看猫途鹰评价",
    },
    viewLink: {
      click: "点击",
      here: "这里",
      toView: "查看",
    },
    options: {
      wordOfMouth: "口碑相传",
      travelAgent: "旅行社",
      travelPlatform: "在线旅游平台",
      onlineAds: "在线广告（谷歌，社交媒体广告）",
      websiteArticle: "网站或博客文章",
      previousVisit: "之前参观过其他Natural Selection营地",
      influencer: "网红或名人推荐",
      other: "其他",
    },
  },
};
