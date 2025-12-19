const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", function () {
    document.body.classList.toggle("invert");

    if (document.body.classList.contains("invert")) {
        switchBtn.src = "img/dark.png";
    } else {
        switchBtn.src = "img/light.png";
    }
});

document.querySelectorAll(".quizimg")[2].addEventListener("click", function () {
    const width = 600;
    const height = 400;
    
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    
    window.open(
        "index3.html",
        "FélicitationsPopup",
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
});

const translations = {
    fr: {
        titre1: "Apprendre Metal",
        titre2: "Apprendre Metal",
        titre3: "Un genre très riche !",
        titre4: "Comprendre par l'écoute",
        titre5: "Le Metal Quiz !",
        para1: "Le metal est un genre musical extrêmement riche, avec énormément de genres et de sous-genres. Contrairement aux idées reçues, il ne se limite pas à un seul style ou à un son uniforme. Au fil des décennies, le metal s'est diversifié pour proposer une palette musicale très large, capable de toucher des publics très différents.",
        para2: "Le metal s'est surtout développé par une immense diversité de styles et d'approches musicales. À partir d'une base commune, les artistes ont exploré différentes manières de composer, de jouer et de transmettre des émotions, ce qui a rapidement mené à une multiplication des genres et sous-genres.",
        para3: "Parmi les sous-genres les plus connus, on retrouve le heavy metal traditionnel. Ce style met en avant des mélodies fortes, des solos de guitare techniques et une identité musicale marquée. Il constitue souvent une première porte d'entrée dans l'univers du metal pour de nombreux auditeurs.",
        para4: "Avec le temps, des genres plus agressifs apparaissent, comme le thrash metal. Plus rapide et plus brutal, ce style se caractérise par des rythmes soutenus, des riffs rapides et une énergie très directe. Il a joué un rôle majeur dans l'évolution du metal moderne.",
        para5: "D'autres courants vont encore plus loin dans l'intensité, comme le death metal ou le black metal. Le death metal se distingue par ses voix gutturales et sa technicité, tandis que le black metal mise davantage sur des ambiances sombres et atmosphériques. Ces styles montrent la grande liberté artistique du metal.",
        para6: "À l'inverse, le metal peut aussi être très mélodique. Le power metal, par exemple, met l'accent sur des refrains accrocheurs et des thèmes épiques. Le metal symphonique mélange quant à lui guitares saturées et éléments orchestraux, créant une musique à la fois puissante et accessible.",
        para7: "Le metal ne cesse également de se mélanger à d'autres genres musicaux, donnant naissance à des styles hybrides comme le metalcore. Ce sous-genre combine la puissance du metal avec l'énergie du hardcore punk, notamment à travers des breakdowns et des alternances entre agressivité et mélodie.",
        para8: "Un groupe emblématique du metalcore est Bullet for My Valentine. Leur musique illustre parfaitement l'équilibre entre riffs lourds, solos travaillés et refrains mélodiques. Ils ont permis à de nombreux auditeurs de découvrir le metal grâce à un son intense mais émotionnel.",
        para9: "Au-delà des styles musicaux, le metal est aussi une culture à part entière. Chaque sous-genre possède ses codes, ses esthétiques et ses thématiques, tout en restant lié à une grande communauté. Cette diversité culturelle renforce le sentiment d'appartenance des fans.",
        para10: "En définitive, le metal est un genre extrêmement vaste dans lequel chacun peut trouver sa place. Que l'on préfère des sons mélodiques, agressifs ou expérimentaux, il existe toujours un style de metal adapté. Cette richesse explique la longévité et l'influence durable du metal dans le paysage musical.",
        para11: "Le nu metal est un genre qui mélange le metal avec des influences extérieures comme le hip-hop, l'électro ou le rock alternatif. Il se caractérise par des riffs souvent simples mais très lourds, des rythmes marqués et une forte place accordée aux émotions et aux paroles. Linkin Park représente un nu metal accessible et mélodique, avec une alternance entre chant clair, rap et passages plus intenses.",
        para12: "Le nu metal peut aussi être extrêmement violent. Slipknot propose une version beaucoup plus agressive du nu metal, avec une batterie très présente, des cris et une atmosphère chaotique. L'écoute permet de comprendre que le nu metal peut être aussi bien introspectif que extrêmement violent.",
        para13: "Le metalcore est un genre hybride qui mélange la brutalité du metal et l'énergie du hardcore punk. Il se reconnaît par l'utilisation fréquente de breakdowns, de riffs puissants et par l'alternance entre chant crié et chant mélodique. Longtemps critiqué au sein de la scène metal, le metalcore est aujourd'hui devenu l'un des genres les plus populaires. Bullet for My Valentine est un groupe emblématique de ce genre. Leur musique combine des riffs tranchants, des solos techniques et des refrains très accrocheurs.",
        para14: "Le thrash metal est un genre rapide et très énergique, basé sur la vitesse et la précision. Il se distingue par des riffs rapides, une batterie intense et une agressivité constante. Metallica est l'un des groupes les plus représentatifs du thrash metal. Leurs morceaux mettent en avant la puissance, la rapidité et des compositions complexes.",
        para15: "Le heavy metal traditionnel est plus mélodique et structuré. Il met en avant les solos de guitare, les mélodies marquantes et une voix souvent claire. Iron Maiden illustre parfaitement ce genre avec des morceaux longs, des solos reconnaissables et des thèmes épiques.",
        para16: "Le death metal est un genre extrême, caractérisé par des voix gutturales, des rythmes complexes et une grande technicité musicale. À l'écoute, ce genre peut sembler chaotique au premier abord, mais il repose en réalité sur une structure très travaillée. Il montre la dimension technique et exigeante du metal.",
        para17: "Le black metal se distingue par son atmosphère sombre et froide. Il privilégie souvent l'ambiance à la technique pure, avec des sons plus bruts. À l'écoute, le black metal crée une impression de malaise ou de mystère, montrant que le metal peut aussi être très atmosphérique.",
        para18: "Le metal symphonique mélange le metal avec des éléments de musique classique, comme les orchestres ou les chœurs. Nightwish est un groupe emblématique de ce genre. À l'écoute, on ressent une impression de grandeur et d'émotion, très différente des autres styles de metal.",
        paraquiz1: "Pour passer à la suite, répondez correctement.",
        paraquiz2: "Quel genre de Metal est le plus populaire aujourd'hui ?",
    },

    en: {
        titre1: "Learn Metal",
        titre2: "Learn Metal",
        titre3: "A very rich genre!",
        titre4: "Understanding through listening",
        titre5: "The Metal Quiz!",
        para1: "Metal is an extremely rich musical genre, with a huge number of genres and subgenres. Contrary to popular belief, it is not limited to a single style or uniform sound. Over the decades, metal has diversified to offer a very wide musical palette, capable of appealing to very different audiences.",
        para2: "Metal has developed primarily through an immense diversity of styles and musical approaches. Starting from a common base, artists have explored different ways of composing, playing, and conveying emotions, which quickly led to a proliferation of genres and subgenres.",
        para3: "Among the best-known subgenres is traditional heavy metal. This style emphasizes strong melodies, technical guitar solos, and a distinctive musical identity. It often serves as a first entry point into the world of metal for many listeners.",
        para4: "Over time, more aggressive genres emerged, such as thrash metal. Faster and more brutal, this style is characterized by sustained rhythms, fast riffs, and very direct energy. It has played a major role in the evolution of modern metal.",
        para5: "Other currents go even further in intensity, such as death metal or black metal. Death metal is distinguished by its guttural vocals and technicality, while black metal focuses more on dark and atmospheric vibes. These styles demonstrate metal's great artistic freedom.",
        para6: "Conversely, metal can also be very melodic. Power metal, for example, emphasizes catchy choruses and epic themes. Symphonic metal blends distorted guitars with orchestral elements, creating music that is both powerful and accessible.",
        para7: "Metal also constantly blends with other musical genres, giving birth to hybrid styles like metalcore. This subgenre combines the power of metal with the energy of hardcore punk, particularly through breakdowns and alternations between aggression and melody.",
        para8: "An iconic metalcore band is Bullet for My Valentine. Their music perfectly illustrates the balance between heavy riffs, crafted solos, and melodic choruses. They have allowed many listeners to discover metal through an intense yet emotional sound.",
        para9: "Beyond musical styles, metal is also a culture in its own right. Each subgenre has its own codes, aesthetics, and themes, while remaining connected to a large community. This cultural diversity strengthens the sense of belonging among fans.",
        para10: "Ultimately, metal is an extremely vast genre in which everyone can find their place. Whether you prefer melodic, aggressive, or experimental sounds, there is always a style of metal that fits. This richness explains the longevity and lasting influence of metal in the musical landscape.",
        para11: "Nu metal is a genre that blends metal with outside influences like hip-hop, electronic music, or alternative rock. It is characterized by often simple but very heavy riffs, marked rhythms, and a strong emphasis on emotions and lyrics. Linkin Park represents an accessible and melodic nu metal, with an alternation between clear vocals, rap, and more intense passages.",
        para12: "Nu metal can also be extremely violent. Slipknot offers a much more aggressive version of nu metal, with a very prominent drum presence, screams, and a chaotic atmosphere. Listening allows us to understand that nu metal can be both introspective and extremely violent.",
        para13: "Metalcore is a hybrid genre that blends the brutality of metal with the energy of hardcore punk. It is recognized by the frequent use of breakdowns, powerful riffs, and the alternation between screamed and melodic vocals. Long criticized within the metal scene, metalcore has today become one of the most popular genres. Bullet for My Valentine is an iconic band of this genre. Their music combines sharp riffs, technical solos, and very catchy choruses.",
        para14: "Thrash metal is a fast and highly energetic genre, based on speed and precision. It is distinguished by fast riffs, intense drumming, and constant aggression. Metallica is one of the most representative bands of thrash metal. Their tracks showcase power, speed, and complex compositions.",
        para15: "Traditional heavy metal is more melodic and structured. It emphasizes guitar solos, striking melodies, and often clear vocals. Iron Maiden perfectly illustrates this genre with long tracks, recognizable solos, and epic themes.",
        para16: "Death metal is an extreme genre, characterized by guttural vocals, complex rhythms, and great musical technicality. Upon listening, this genre may seem chaotic at first, but it actually relies on a very elaborate structure. It shows the technical and demanding dimension of metal.",
        para17: "Black metal is distinguished by its dark and cold atmosphere. It often favors ambiance over pure technique, with rawer sounds. Upon listening, black metal creates an impression of unease or mystery, showing that metal can also be very atmospheric.",
        para18: "Symphonic metal blends metal with elements of classical music, such as orchestras or choirs. Nightwish is an iconic band of this genre. Upon listening, one feels an impression of grandeur and emotion, very different from other metal styles.",
        paraquiz1: "To proceed, answer correctly.",
        paraquiz2: "Which genre of Metal is the most popular today?",
    },
};

function setLang(lang) {
    document.getElementById("titre1").textContent = translations[lang].titre1;
    document.getElementById("titre2").textContent = translations[lang].titre2;
    document.getElementById("titre3").textContent = translations[lang].titre3;
    document.getElementById("titre4").textContent = translations[lang].titre4;
    document.getElementById("titre5").textContent = translations[lang].titre5;
    document.getElementById("para1").textContent = translations[lang].para1;
    document.getElementById("para2").textContent = translations[lang].para2;
    document.getElementById("para3").textContent = translations[lang].para3;
    document.getElementById("para4").textContent = translations[lang].para4;
    document.getElementById("para5").textContent = translations[lang].para5;
    document.getElementById("para6").textContent = translations[lang].para6;
    document.getElementById("para7").textContent = translations[lang].para7;
    document.getElementById("para8").textContent = translations[lang].para8;
    document.getElementById("para9").textContent = translations[lang].para9;
    document.getElementById("para10").textContent = translations[lang].para10;
    document.getElementById("para11").textContent = translations[lang].para11;
    document.getElementById("para12").textContent = translations[lang].para12;
    document.getElementById("para13").textContent = translations[lang].para13;
    document.getElementById("para14").textContent = translations[lang].para14;
    document.getElementById("para15").textContent = translations[lang].para15;
    document.getElementById("para16").textContent = translations[lang].para16;
    document.getElementById("para17").textContent = translations[lang].para17;
    document.getElementById("para18").textContent = translations[lang].para18;
    document.getElementById("paraquiz1").textContent = translations[lang].paraquiz1;
    document.getElementById("paraquiz2").textContent = translations[lang].paraquiz2;
}

document.getElementById("flagFR").addEventListener("click", () => setLang("fr"));
document.getElementById("flagEN").addEventListener("click", () => setLang("en"));