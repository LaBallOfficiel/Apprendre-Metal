const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", function () {
    document.body.classList.toggle("invert");

    if (document.body.classList.contains("invert")) {
        switchBtn.src = "img/dark.png";
    } else {
        switchBtn.src = "img/light.png";
    }
});

document.querySelectorAll(".quizimg")[0].addEventListener("click", function () {
    window.location.href = "index2.html";
});

const translations = {
    fr: {
        titre0: "Apprendre Metal",
        titre1: "Apprendre Metal",
        titre2: "Les origines ?",
        titre3: "Comprendre en vidéo",
        titre4: "Comprendre par l'écoute",
        titre5: "Le Metal Quiz !",
        titre6: "Apprendre Metal",
        para1: "Nous allons commencer par expliquer d'où vient ce style de musique, le Metal",
        para2: "Tout d'abord le Metal est un genre musical dérivé du rock apparu au Royaume-Uni et aux États-Unis à la fin des années 60",
        para3: "À cette époque, plusieurs groupes de rock expérimentent des sons plus lourds, mais c’est véritablement Black Sabbath qui va poser les fondations du Metal. Leur musique, sombre, lente et oppressante, tranche radicalement avec le rock classique. Les riffs massifs de Tony Iommi, associés à l’atmosphère inquiétante de leurs textes, créent quelque chose d’entièrement nouveau.",
        para4: "Black Sabbath est donc considéré comme le groupe fondateur du Metal. Leur premier album, sorti en 1970, marque un tournant : c’est la naissance officielle du Heavy Metal. Leur influence se retrouve dans presque tous les sous-genres du Metal, des plus mélodiques aux plus extrêmes.",
        para5: "Au même moment, d'autres groupes importants comme Deep Purple et Led Zeppelin participent à durcir le son du rock. Même s’ils ne sont pas toujours considérés comme du 'Metal pur', ils ont largement contribué à l’esthétique du genre : puissance sonore, solos techniques et thèmes plus sombres.",
        para6: "À partir du milieu des années 70, le Metal évolue avec l’arrivée du Heavy Metal tel qu’on le connaît. Des groupes comme Judas Priest retirent presque totalement l’influence blues du rock pour créer un son plus rapide, plus agressif et plus métallique. C’est aussi l’époque où l’imagerie Metal commence à se définir : cuir, clous, motos, attitudes rebelles.",
        para7: "À la fin des années 70, ce style inspire une nouvelle vague : la New Wave of British Heavy Metal (NWOBHM). Ce mouvement, avec des groupes comme Iron Maiden ou Saxon, accélère encore les tempos, introduit des mélodies plus épiques et pose les bases du Metal moderne. C’est une période essentielle qui préparera l’arrivée du Thrash, du Power Metal, du Death et d’autres sous-genres.",
        para8: "Le Metal a souvent été un style profondément engagé, qui aborde des thèmes sociaux, politiques et humains. Même si tous les groupes ne prennent pas position de la même manière, une grande partie de la scène défend des idées liées à la liberté, à la lutte contre les injustices, à la critique du pouvoir ou encore à la dénonciation des inégalités sociales. Ces prises de parole, parfois associées à une vision rebelle et anti-autoritaire, donnent au Metal une dimension politique forte.",
        para9: "Le Metal parle aussi de sujets sombres et personnels : douleur, solitude, colère, santé mentale, traumatisme, perte, questionnement existentiel… Comme beaucoup de styles alternatifs, il s’éloigne des thèmes plus 'mainstream' pour aller explorer ce que la société préfère souvent éviter. Le Metal n’est donc pas simplement une musique agressive : c’est un moyen d’exprimer ce que les autres styles n’osent pas toujours dire, sans filtre et sans détour.",
        para10: "Vous trouverez dans cette vidéo (qui commence à vieilire un peu) une description du metal ainsi qu'une explication de ces origines bien plus approfondie que le texte précédent.",
        para11: "Voici le groupe considéré comme l’un des “fondateurs” du genre. Comme dit précédemment, il s’agit de Heavy Metal. Nous vous laissons écouter l’une de leurs musiques les plus iconiques : “Paranoid”.",
        para12: "Voici un groupe qui a largement contribué à durcir le son du rock et à façonner l’esthétique du Metal. Même s’ils ne sont pas toujours considérés comme du 'Metal pur', Deep Purple a influencé le genre avec sa puissance sonore, ses solos techniques et ses  thèmes plus sombres. Nous vous laissons écouter l’un de leurs morceaux les plus emblématiques : “Smoke on the Water”.",
        para13: "À partir du milieu des années 70, Judas Priest transforme le Heavy Metal en retirant presque totalement l’influence blues du rock. Leur son devient plus rapide, plus agressif et véritablement métallique. L’imagerie Metal, cuir, clous et attitudes rebelles, commence également à se dessiner avec eux. Écoutez l’un de leurs classiques pour ressentir cette puissance : “Breaking the Law”.",
        para14: "Iron Maiden fait partie de la New Wave of British Heavy Metal (NWOBHM) qui accélère les tempos et introduit des mélodies plus épiques. Ce mouvement pose les bases du Metal moderne et a inspiré de nombreux sous-genres. Pour découvrir leur style légendaire, écoutez : “The Number of the Beast”.",
        para15: "Pour passer à la suite, répondez correctement.",
        para16: "Quel groupe est considéré comme le père fondateur du Metal ?",
    },

    en: {
        titre0: "Learn Metal",
        titre1: "Learn Metal",
        titre2: "The origins?",
        titre3: "Understand in video",
        titre4: "Understanding through listening",
        titre5: "The Metal Quiz !",
        titre6: "Learn Metal",
        para1: "We will start by explaining where this music style comes from, Metal",
        para2: "First of all, is a musical genre derived from rock that appeared in the UK and USA at the end of the 60s",
        para3: "At that time, several rock groups were experimenting with heavier sounds, but it was truly Black Sabbath who laid the foundations of metal. Their music, dark, slow, and oppressive, was a radical departure from classic rock. Tony Iommi's massive riffs, combined with the unsettling atmosphere of their lyrics, created something entirely new.", 
        para4: "Black Sabbath is therefore considered the founding band of Metal. Their first album, released in 1970, marked a turning point: it was the official birth of Heavy Metal. Their influence can be found in almost all subgenres of Metal, from the most melodic to the most extreme.",
        para5: "At the same time, other important groups like Deep Purple and Led Zeppelin contributed to hardening the sound of rock. Even if they are not always considered 'pure Metal', they largely contributed to the aesthetics of the genre: powerful sound, technical solos and darker themes.",
        para6: "From the mid-1970s onwards, metal evolved with the arrival of heavy metal as we know it. Bands like Judas Priest almost completely removed the blues influence from rock to create a faster, more aggressive, and more metallic sound. This was also the era when metal imagery began to take shape: leather, studs, motorcycles, and rebellious attitudes.",
        para7: "In the late 1970s, this style inspired a new wave: the New Wave of British Heavy Metal (NWOBHM). This movement, with bands like Iron Maiden and Saxon, further accelerated tempos, introduced more epic melodies, and laid the foundations for modern metal. It was a pivotal period that paved the way for the arrival of thrash, power metal, death metal, and other subgenres.",
        para8: "Metal has often been a deeply politically engaged genre, addressing social, political, and human themes. While not all bands take the same stance, a large part of the scene champions ideas related to freedom, the fight against injustice, criticism of power, and the denunciation of social inequalities. These pronouncements, sometimes associated with a rebellious and anti-authoritarian outlook, give metal a strong political dimension.",
        para9: "Metal also deals with dark and personal subjects: pain, loneliness, anger, mental health, trauma, loss, existential questioning… Like many alternative styles, it moves away from more 'mainstream' themes to explore what society often prefers to avoid. Metal is therefore not simply aggressive music: it's a way to express what other styles don't always dare to say, unfiltered and direct.",
        para10: "In this video (which is starting to get a bit old) you will find a description of metal and an explanation of its origins that is much more in-depth than the previous text.",
        para11: "Here is the group considered one of the “founders” of the genre. As mentioned earlier, it's Heavy Metal. We invite you to listen to one of their most iconic songs: “Paranoid”.",
        para12: "Here's a band that has largely contributed to hardening the sound of rock and shaping the aesthetics of metal. Even if they aren't always considered 'pure metal', Deep Purple has influenced the genre with its powerful sound, technical solos, and darker themes. We invite you to listen to one of their most iconic tracks: “Smoke on the Water”.",
        para13: "From the mid-1970s onward, Judas Priest transformed heavy metal by almost entirely removing the blues influence from rock. Their sound became faster, more aggressive, and truly metallic. The metal imagery—leather, studs, and rebellious attitudes—also began to take shape with them. Listen to one of their classics to feel this power: “Breaking the Law.”",
        para14: "Iron Maiden is part of the New Wave of British Heavy Metal (NWOBHM), which accelerated tempos and introduced more epic melodies. This movement laid the foundations of modern metal and has inspired numerous subgenres. To discover their legendary style, listen to “The Number of the Beast”.",
        para15: "To proceed, answer correctly.",
        para16: "Which group is considered the founding father of Metal ?",
    },
};

function setLang(lang) {

    document.getElementById("titre0").textContent = translations[lang].titre1;
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
}

document.getElementById("flagFR").addEventListener("click", () => setLang("fr"));
document.getElementById("flagEN").addEventListener("click", () => setLang("en"));