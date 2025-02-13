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
    birthday: string;
    idNumber: string;
    insurance: string;
    hasChildren: string;
    childrenNames: string;
    termsAccepted: string;
    signature: string;
    travelAgent: string;
    experienceStatement: string;
    wildlifeExperience: string;
  };
  placeholders: {
    fullName: string;
    email: string;
    nationality: string;
    idNumber: string;
    insurance: string;
    childrenNames: string;
    birthday: string;
    travelAgent: string;
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
  };
  viewLink: {
    click: string;
    here: string;
    toView: string;
  };
}

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'it', name: 'Italiano' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh', name: '中文' },
] as const;

export type LanguageCode = typeof languages[number]['code'];

export const translations: Record<LanguageCode, Translation> = {
  en: {
    welcome: {
      title: 'Talude Feedback',
      subtitle: 'Please complete your review',
      start: 'Start',
    },
    questions: {
      fullName: 'Full Name',
      email: 'Email Address',
      nationality: 'Nationality',
      travelAgent: 'Name of Travel Agent',
      birthday: 'What is your date of birth?',
      idNumber: 'What is your ID/Passport Number?',
      insurance: 'What is your Insurance Provider & Policy Number?',
      hasChildren: 'Do you have children traveling with you?',
      childrenNames: 'What are the names of the children traveling with you?',
      termsAccepted: 'I accept the terms & conditions of the Indemnity, Waiver & Disclaimer Form.',
      signature: 'Please sign below to complete the form',
      experienceStatement: ', we pride ourselves on giving a world class wildlife experience. Please rate the experience you had.',
      wildlifeExperience: 'Overall Wildlife Experience',
    },
    placeholders: {
      fullName: 'Enter your full name',
      email: 'name@example.com',
      nationality: 'Select your nationality',
      travelAgent: 'Enter your travel agent\'s name',
      idNumber: 'Enter your ID or passport number',
      insurance: 'e.g., Provider Name - Policy #12345',
      childrenNames: 'Enter children names',
      birthday: 'Select your date of birth',
    },
    buttons: {
      next: 'Next',
      back: 'Back',
      clear: 'Clear Signature',
      submit: 'Submit Form',
      yes: 'Yes',
      no: 'No',
    },
    completion: {
      title: 'Thank you, {name}!',
      subtitle: 'We hope you enjoy your stay at Tuludi.',
      welcomePackButton: 'Click to view the Welcome Pack',
    },
    viewLink: {
      click: 'Click',
      here: 'here',
      toView: 'to view',
    },
  },
  es: {
    welcome: {
      title: 'Comentarios de Talude',
      subtitle: 'Por favor complete su reseña',
      start: 'Comenzar',
    },
    questions: {
      fullName: 'Nombre Completo',
      email: 'Correo Electrónico',
      nationality: 'Nacionalidad',
      travelAgent: 'Nombre del Agente de Viajes',
      birthday: '¿Cuál es su fecha de nacimiento?',
      idNumber: '¿Cuál es su número de identificación/pasaporte?',
      insurance: '¿Cuál es su proveedor de seguros y número de póliza?',
      hasChildren: '¿Viaja con niños?',
      childrenNames: '¿Cuáles son los nombres de los niños que viajan con usted?',
      termsAccepted: 'Acepto los términos y condiciones del Formulario de Indemnización, Renuncia y Descargo.',
      signature: 'Por favor firme abajo para completar el formulario',
      experienceStatement: ', nos enorgullecemos de ofrecer una experiencia de vida silvestre de clase mundial. Por favor, califique la experiencia que tuvo.',
      wildlifeExperience: 'Experiencia General con la Vida Silvestre',
    },
    placeholders: {
      fullName: 'Ingrese su nombre completo',
      email: 'nombre@ejemplo.com',
      nationality: 'Seleccione su nacionalidad',
      travelAgent: 'Ingrese el nombre de su agente de viajes',
      idNumber: 'Ingrese su número de identificación o pasaporte',
      insurance: 'ej., Nombre del Proveedor - Póliza #12345',
      childrenNames: 'Ingrese los nombres de los niños',
      birthday: 'Seleccione su fecha de nacimiento',
    },
    buttons: {
      next: 'Siguiente',
      back: 'Atrás',
      clear: 'Borrar Firma',
      submit: 'Enviar Formulario',
      yes: 'Sí',
      no: 'No',
    },
    completion: {
      title: '¡Gracias, {name}!',
      subtitle: 'Esperamos que disfrute su estancia en Tuludi.',
      welcomePackButton: 'Haga clic para ver el paquete de bienvenida',
    },
    viewLink: {
      click: 'Haga clic',
      here: 'aquí',
      toView: 'para ver',
    },
  },
  fr: {
    welcome: {
      title: 'Avis Talude',
      subtitle: 'Veuillez compléter votre évaluation',
      start: 'Commencer',
    },
    questions: {
      fullName: 'Nom Complet',
      email: 'Adresse Email',
      nationality: 'Nationalité',
      travelAgent: 'Nom de l\'Agent de Voyage',
      birthday: 'Quelle est votre date de naissance ?',
      idNumber: 'Quel est votre numéro de carte d\'identité/passeport ?',
      insurance: 'Quel est votre assureur et numéro de police ?',
      hasChildren: 'Voyagez-vous avec des enfants ?',
      childrenNames: 'Quels sont les noms des enfants qui voyagent avec vous ?',
      termsAccepted: 'J\'accepte les termes et conditions du formulaire d\'indemnisation, de renonciation et de décharge.',
      signature: 'Veuillez signer ci-dessous pour compléter le formulaire',
      experienceStatement: ', nous sommes fiers d\'offrir une expérience de la faune de classe mondiale. Veuillez évaluer l\'expérience que vous avez eue.',
      wildlifeExperience: 'Expérience Globale de la Faune',
    },
    placeholders: {
      fullName: 'Entrez votre nom complet',
      email: 'nom@exemple.com',
      nationality: 'Sélectionnez votre nationalité',
      travelAgent: 'Entrez le nom de votre agent de voyage',
      idNumber: 'Entrez votre numéro de carte d\'identité ou de passeport',
      insurance: 'ex., Nom de l\'assureur - Police #12345',
      childrenNames: 'Entrez les noms des enfants',
      birthday: 'Sélectionnez votre date de naissance',
    },
    buttons: {
      next: 'Suivant',
      back: 'Retour',
      clear: 'Effacer la signature',
      submit: 'Soumettre le formulaire',
      yes: 'Oui',
      no: 'Non',
    },
    completion: {
      title: 'Merci, {name} !',
      subtitle: 'Nous espérons que vous apprécierez votre séjour à Tuludi.',
      welcomePackButton: 'Cliquez pour voir le pack de bienvenue',
    },
    viewLink: {
      click: 'Cliquez',
      here: 'ici',
      toView: 'pour voir',
    },
  },
  de: {
    welcome: {
      title: 'Talude Feedback',
      subtitle: 'Bitte vervollständigen Sie Ihre Bewertung',
      start: 'Beginnen',
    },
    questions: {
      fullName: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      nationality: 'Nationalität',
      travelAgent: 'Name des Reiseberaters',
      birthday: 'Was ist Ihr Geburtsdatum?',
      idNumber: 'Wie lautet Ihre Ausweis-/Passnummer?',
      insurance: 'Wie lauten Ihr Versicherungsanbieter und Ihre Policennummer?',
      hasChildren: 'Reisen Sie mit Kindern?',
      childrenNames: 'Wie heißen die Kinder, die mit Ihnen reisen?',
      termsAccepted: 'Ich akzeptiere die Bedingungen des Entschädigungs-, Verzichts- und Haftungsausschlussformulars.',
      signature: 'Bitte unterschreiben Sie unten, um das Formular abzuschließen',
      experienceStatement: ', wir sind stolz darauf, ein erstklassiges Wildtier-Erlebnis zu bieten. Bitte bewerten Sie Ihre Erfahrung.',
      wildlifeExperience: 'Gesamte Wildlife-Erfahrung',
    },
    placeholders: {
      fullName: 'Geben Sie Ihren vollständigen Namen ein',
      email: 'name@beispiel.com',
      nationality: 'Wählen Sie Ihre Nationalität',
      travelAgent: 'Geben Sie den Namen Ihres Reiseberaters ein',
      idNumber: 'Geben Sie Ihre Ausweis- oder Passnummer ein',
      insurance: 'z.B., Versicherungsname - Police #12345',
      childrenNames: 'Geben Sie die Namen der Kinder ein',
      birthday: 'Wählen Sie Ihr Geburtsdatum',
    },
    buttons: {
      next: 'Weiter',
      back: 'Zurück',
      clear: 'Unterschrift löschen',
      submit: 'Formular absenden',
      yes: 'Ja',
      no: 'Nein',
    },
    completion: {
      title: 'Vielen Dank, {name}!',
      subtitle: 'Wir wünschen Ihnen einen angenehmen Aufenthalt in Tuludi.',
      welcomePackButton: 'Klicken Sie hier, um das Willkommenspaket anzusehen',
    },
    viewLink: {
      click: 'Klicken Sie',
      here: 'hier',
      toView: 'zum Ansehen',
    },
  },
  nl: {
    welcome: {
      title: 'Talude Feedback',
      subtitle: 'Vul alstublieft uw beoordeling in',
      start: 'Start',
    },
    questions: {
      fullName: 'Volledige Naam',
      email: 'E-mailadres',
      nationality: 'Nationaliteit',
      travelAgent: 'Naam Reisagent',
      birthday: 'Wat is uw geboortedatum?',
      idNumber: 'Wat is uw ID/paspoortnummer?',
      insurance: 'Wat is uw verzekeringsmaatschappij en polisnummer?',
      hasChildren: 'Reist u met kinderen?',
      childrenNames: 'Wat zijn de namen van de kinderen die met u meereizen?',
      termsAccepted: 'Ik accepteer de voorwaarden van het vrijwarings-, afstands- en disclaimerformulier.',
      signature: 'Teken hieronder om het formulier te voltooien',
      experienceStatement: ', we zijn er trots op een wereldklasse wildlife-ervaring te bieden. Beoordeel alstublieft uw ervaring.',
      wildlifeExperience: 'Algemene Wildlife Ervaring',
    },
    placeholders: {
      fullName: 'Voer uw volledige naam in',
      email: 'naam@voorbeeld.com',
      nationality: 'Selecteer uw nationaliteit',
      travelAgent: 'Voer de naam van uw reisagent in',
      idNumber: 'Voer uw ID- of paspoortnummer in',
      insurance: 'bijv., Verzekeraar - Polis #12345',
      childrenNames: 'Voer de namen van de kinderen in',
      birthday: 'Selecteer uw geboortedatum',
    },
    buttons: {
      next: 'Volgende',
      back: 'Terug',
      clear: 'Handtekening wissen',
      submit: 'Formulier verzenden',
      yes: 'Ja',
      no: 'Nee',
    },
    completion: {
      title: 'Bedankt, {name}!',
      subtitle: 'We hopen dat u geniet van uw verblijf in Tuludi.',
      welcomePackButton: 'Klik om het welkomstpakket te bekijken',
    },
    viewLink: {
      click: 'Klik',
      here: 'hier',
      toView: 'om te bekijken',
    },
  },
  it: {
    welcome: {
      title: 'Feedback Talude',
      subtitle: 'Per favore completa la tua recensione',
      start: 'Inizia',
    },
    questions: {
      fullName: 'Nome Completo',
      email: 'Indirizzo Email',
      nationality: 'Nazionalità',
      travelAgent: 'Nome dell\'Agente di Viaggio',
      birthday: 'Qual è la tua data di nascita?',
      idNumber: 'Qual è il tuo numero di carta d\'identità/passaporto?',
      insurance: 'Qual è il tuo assicuratore e numero di polizza?',
      hasChildren: 'Viaggi con bambini?',
      childrenNames: 'Quali sono i nomi dei bambini che viaggiano con te?',
      termsAccepted: 'Accetto i termini e le condizioni del modulo di indennizzo, rinuncia e dichiarazione di non responsabilità.',
      signature: 'Per favore firma qui sotto per completare il modulo',
      experienceStatement: ', siamo orgogliosi di offrire un\'esperienza naturalistica di livello mondiale. Per favore valuta l\'esperienza che hai avuto.',
      wildlifeExperience: 'Esperienza Complessiva della Fauna Selvatica',
    },
    placeholders: {
      fullName: 'Inserisci il tuo nome completo',
      email: 'nome@esempio.com',
      nationality: 'Seleziona la tua nazionalità',
      travelAgent: 'Inserisci il nome del tuo agente di viaggio',
      idNumber: 'Inserisci il tuo numero di carta d\'identità o passaporto',
      insurance: 'es., Nome Assicuratore - Polizza #12345',
      childrenNames: 'Inserisci i nomi dei bambini',
      birthday: 'Seleziona la tua data di nascita',
    },
    buttons: {
      next: 'Avanti',
      back: 'Indietro',
      clear: 'Cancella firma',
      submit: 'Invia modulo',
      yes: 'Sì',
      no: 'No',
    },
    completion: {
      title: 'Grazie, {name}!',
      subtitle: 'Speriamo che ti piaccia il tuo soggiorno a Tuludi.',
      welcomePackButton: 'Clicca per vedere il pacchetto di benvenuto',
    },
    viewLink: {
      click: 'Clicca',
      here: 'qui',
      toView: 'per vedere',
    },
  },
  ru: {
    welcome: {
      title: 'Отзывы о Talude',
      subtitle: 'Пожалуйста, заполните свой отзыв',
      start: 'Начать',
    },
    questions: {
      fullName: 'Полное Имя',
      email: 'Электронная Почта',
      nationality: 'Гражданство',
      travelAgent: 'Имя Турагента',
      birthday: 'Какая у вас дата рождения?',
      idNumber: 'Какой у вас номер паспорта/удостоверения личности?',
      insurance: 'Кто ваш страховщик и номер полиса?',
      hasChildren: 'Путешествуете ли вы с детьми?',
      childrenNames: 'Как зовут детей, которые путешествуют с вами?',
      termsAccepted: 'Я принимаю условия формы об освобождении от ответственности, отказе от претензий и оговорке.',
      signature: 'Пожалуйста, поставьте подпись ниже, чтобы завершить форму',
      experienceStatement: ', мы гордимся тем, что предоставляем первоклассный опыт наблюдения за дикой природой. Пожалуйста, оцените ваш опыт.',
      wildlifeExperience: 'Общее Впечатление от Дикой Природы',
    },
    placeholders: {
      fullName: 'Введите ваше полное имя',
      email: 'имя@пример.com',
      nationality: 'Выберите ваше гражданство',
      travelAgent: 'Введите имя вашего турагента',
      idNumber: 'Введите номер паспорта или удостоверения личности',
      insurance: 'напр., Название страховщика - Полис #12345',
      childrenNames: 'Введите имена детей',
      birthday: 'Выберите дату рождения',
    },
    buttons: {
      next: 'Далее',
      back: 'Назад',
      clear: 'Очистить подпись',
      submit: 'Отправить форму',
      yes: 'Да',
      no: 'Нет',
    },
    completion: {
      title: 'Спасибо, {name}!',
      subtitle: 'Надеемся, вам понравится ваше пребывание в Tuludi.',
      welcomePackButton: 'Нажмите, чтобы посмотреть приветственный пакет',
    },
    viewLink: {
      click: 'Нажмите',
      here: 'здесь',
      toView: 'чтобы посмотреть',
    },
  },
  zh: {
    welcome: {
      title: 'Talude 反馈',
      subtitle: '请完成您的评价',
      start: '开始',
    },
    questions: {
      fullName: '全名',
      email: '电子邮件地址',
      nationality: '国籍',
      travelAgent: '旅行社代理人姓名',
      birthday: '您的出生日期是什么？',
      idNumber: '您的身份证/护照号码是什么？',
      insurance: '您的保险公司和保单号码是什么？',
      hasChildren: '您是否携带儿童旅行？',
      childrenNames: '与您同行的儿童姓名是什么？',
      termsAccepted: '我接受赔偿、豁免和免责声明表格的条款和条件。',
      signature: '请在下方签名以完成表格',
      experienceStatement: '，我们以提供世界级的野生动物体验为荣。请为您的体验打分。',
      wildlifeExperience: '整体野生动物体验',
    },
    placeholders: {
      fullName: '请输入您的全名',
      email: 'name@example.com',
      nationality: '选择您的国籍',
      travelAgent: '请输入您的旅行社代理人姓名',
      idNumber: '输入您的身份证或护照号码',
      insurance: '例如：保险公司名称 - 保单 #12345',
      childrenNames: '输入儿童姓名',
      birthday: '选择您的出生日期',
    },
    buttons: {
      next: '下一步',
      back: '返回',
      clear: '清除签名',
      submit: '提交表格',
      yes: '是',
      no: '否',
    },
    completion: {
      title: '谢谢您，{name}！',
      subtitle: '希望您享受在Tuludi的住宿。',
      welcomePackButton: '点击查看欢迎包',
    },
    viewLink: {
      click: '点击',
      here: '这里',
      toView: '查看',
    },
  },
};