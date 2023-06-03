import self from "../img/selfme.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Guilherme",
    lastName: "Rodrigues",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Desenvolvedor Full Stack",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'amante de tecnologia'
        },
        {
            emoji: '🌎',
            text: 'moro no BR'
        },
        {
            emoji: "💼",
            text: "Freelancer e Dev FullStack na Siad"
        },
        {
            emoji: "📧",
            text: "guilhermerg1234@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://instagram.com/euguigaldino",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Gui027",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/euguigaldino/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Olá! Me chamo Guilherme. Desenvolvedor Full-Stack, apaixonado por tecnologia, inovação e elaboração de projetos, com muita vontade de aprender. Com formação em Desenvolvimento Web Full Stack pela Trybe, Analista de Dados pelo Google e cursando Engenharia da Computação. Dedicado à escrever código limpo, fácil de ler, escalável, e testado, tendo construído mais de 50 projetos incluindo tecnologias como HTML, CSS, React, Javascript, Typescript, Node.js, Mongo, MySQL, PHP e Python nos últimos anos, e no momento, estagiando em desenvolvimento mobile. Adoro trabalhar em ambientes onde as minhas habilidades podem ser constantemente desafiadas não só a melhorar, mas também para inovar e revolucionar produtos ou serviços. Estou ansioso para trabalhar remotamente com pessoas de todo o Brasil.",
    skills:
    {
        proficientWith: ['javascript', 'javascript', 'react', 'react native', 'nodejs', 'sequelize', 'prisma', 'sql', 'mysql', 'git', 'github', 'gitlab', 'bootstrap', 'html5', 'css3', 'figma', 'adobe photoshop'],
        exposedTo: ['php', 'python', 'adobe illustrator', 'mongodb', 'firebase', 'kotlin']
    }
    ,
    hobbies: [
        {
            label: 'ler',
            emoji: '📖'
        },
        {
            label: 'esportes',
            emoji: '🏋️‍♀️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'viajar',
            emoji: '🧳'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}