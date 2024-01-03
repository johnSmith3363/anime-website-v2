import { Injectable } from '@angular/core';
import { Manga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  protected mangaList:Manga[] = [

    {
      id:0,
      name:"Chainsaw man",
      image:"./assets/Manga/chainsaw_man.png",
      description: "Denji's adolescent years were anything but typical as he was burdened with overwhelming debt from his deadbeat father. His sole companion was his fierce chainsaw devil pet, Pochita, with whom he hunted and slaughtered devils for the yakuza's profit. Despite his unfortunate circumstances, Denji longed for a peaceful existence with scrumptious meals and a lovely girlfriend by his side. But his aspirations were shattered when the treacherous yakuza orchestrated his cruel and premature demise, extinguishing any hope for future happiness. Miraculously, an ancient contract allowed Pochita to combine with Denji posthumously, endowing him with devil-like abilities that enabled him to transform his body parts into chainsaws. Given the considerable risk Denji's newfound powers posed to society, the esteemed devil hunter Makima of the Public Safety Bureau took him under her wing, granting him refuge on the grounds that he adhere to her every command. Driven by the prospect of a fulfilling life with an enticing woman, Denji poured all his energy into achieving his juvenile goals, vowing to fight for them with unwavering fervor."

    },

    {
      id:1,
      name:"Fullmetal Alchemist",
      image:"./assets/Manga/fullmetal.jpg",
      description:"The Elric brothers' alchemy experiment ended in tragedy, leaving them in a nightmare realm. Against the principle forbidding human transmutation, they attempted to revive their deceased mother, but it resulted in irreversible damage: Alphonse's body disintegrated, while Edward sacrificed an arm and leg to anchor his brother's soul to a metal suit.Pinako Rockbell and her granddaughter Winry rescued them. Using her bio-mechanical engineering talent, Winry equipped Edward with automail, a durable metal used for robots and armor. The brothers set out to regain their forms by searching for the Philosopher's Stone - a gem that defies the laws of Equivalent Exchange.As Edward gains notoriety as 'Fullmetal' and sharpens his alchemy skills, they become enmeshed in a vast conspiracy jeopardizing the world's destiny"
    },

    {
      id:2,
      name:"Guren Lagan",
      image:"./assets/Manga/guren_lagan1.jpg",
      description:"Humanity, in the distant future, dwells in vast caverns beneath the earth's surface, completely oblivious to the world above inhabited by the twinkling stars and endless sky. During an excavation in the humble community of Jiha, Simon, a timid laborer, unearths a curious glowing object. Kamina, an exuberant young man with a striking pair of sunglasses and contagious excitement, befriends Simon and forms a close-knit brotherhood, the Gurren Brigade. Together, they aspire to escape the village's confines and break through the cave ceiling, a seemingly impossible task.Despite the village chief's reluctance to entertain such lofty ambitions, the Brigade remains undeterred by their audacity. However, when a tragedy from above endangers the entire community, Simon, Kamina, Yoko, a sharpshooter, and their compact yet determined robot, Lagann, must take matters into their own hands and save the day.Their newfound alliance embarks on a journey to the world above, encountering a fierce battleground where they must fight back against the savage Beastmen to tilt the odds in humanity's favor! Rise to the skies, Gurren Lagann!"
    },

    {
      id:3,
      name:"Jobless Reincarnation",
      image:"./assets/Manga/jobless.jpg",
      description:"After the unfortunate death of a man at the age of 34, who had not achieved his full potential, his tale takes a surprising twist. He is reborn as an infant in an alternate realm, and decides to make the most of this exhilarating new experience. Along with his newfound acquaintances, he embarks on an exciting adventure, driven by his magic abilities and bold aspirations. Utilizing the knowledge he has gained from his past life, he blazes a trail towards success. It should be noted that the anime's first and second episodes were aired on December 27th via Nico Nico Live Broadcasting and D Anime Store platforms."
    },

    {
      id:4,
      name:"Jujutsu Kaisen",
      image:"./assets/Manga/jujutsu_kaisen.jpeg",
      description:"\"The right death\" is what a boy fights for in the midst of the curses that plague our daily lives. These curses are born from negative emotions like hardship, regret, and shame, and they can wreak havoc on people's lives, often resulting in death. Ironically, the only way to banish these curses is by invoking another curse. Itadori Yuji is an average high schooler with extraordinary physical abilities. But when he consumes the finger of the Double-Faced Specter to save a friend from the Curses' wrath, he unwittingly makes himself a host to the curse. Itadori shares a body with the Double-Faced Specter, and under the guidance of the powerful sorcerer Gojou Satoru, he enrolls in the Tokyo Metropolitan Technical High School of Sorcery. There, he joins an organization committed to battling the Curses, and embarks on a heroic quest to exorcise the curse he carries. But this quest comes at a steep price, for Itadori has become a curse himself, trapped in a life without any possibility of turning back.It is worth noting that the first episode of the show was released in advance on September 19th, 2020, while the regular television broadcast started on October 3rd, 2020."
    },

    {
      id:5,
      name:"Neon Genesis Evangelion",
      image: "./assets/Manga/neon_genesis.jpg",
      description:"In 2015, the world's demise looms and only Nerv, a specialized United Nations agency, and their Evangelions possess the power necessary to save humanity from the Angels. Gendou Ikari spearheads the search for capable pilots to connect with the colossal machines and unleash their full potential, aided by Tactical Operations Head Misato Katsuragi and Chief Scientist Ritsuko Akagi.For Shinji Ikari, a 14-year-old who has been estranged from his father, a chance encounter thrusts him into a daunting new reality. He must shoulder the burden of piloting Evangelion Unit-01, which carries the fate of humankind on his young shoulders.Neon Genesis Evangelion, penned by Hideaki Anno, tracks the brave journey of a young boy who is destined for greatness. As he conquers his fears and battles for his future, he unravels secrets beyond his wildest dreams, ultimately shaking the very foundation of the world as he knows it."
    },
    {
      id:6,
      name:"Ragna Crimson",
      image:"./assets/Manga/ragna_crimson.jpg",
      description:"In a realm dominated by dragons who reign over the sky, sea, and land, those who desire to defeat them must surpass the constraints of regular human might. Determined to triumph at all costs, Ragna, a dragon slayer, allies with the enigmatic Crimson. Although Crimson's intentions remain unclear, their objective is identical: to annihilate the dragon rulers."
    },

    {
      id:7,
      name:"Saint Seiya",
      image:"./assets/Manga/saint.png",
      description:"Long ago, a band of youthful men dedicated their lives to safeguarding Athena, the Goddess of Wisdom and War. These formidable individuals had the ability to fight unarmed, unleashing devastating power that could rend the sky and shatter the earth with a swing of their fists. These courageous champions, called Saints, could harness the Cosmos from within themselves.Now, a new wave of Saints is poised to emerge in modern times. Seiya, an ardent and tenacious fighter, must overcome fierce opposition to earn the Sacred Armor of Pegasus. After six years of arduous training and determination, he earns the coveted title of one of Athena's Saints.However, Seiya's trials are far from over. The series follows him and his fellow Saints as they face new obstacles, treacherous enemies, and perilous quests. What challenges await the heroes of the legendary Saint Seiya saga?"
    },

    {
      id:8,
      name:"Valvare The Liberator",
      image:"./assets/Manga/valvavre.png",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },

    {
      id:9,
      name:"Black Clover",
      image:"./assets/Manga/black_clover.jpeg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:10,
      name:"Trigun",
      image:"./assets/Manga/trigun.jpg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:11,
      name:"Darling in the Franxxx",
      image:"./assets/Manga/darling.jpg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:12,
      name:"Sword Art Onlinne",
      image:"./assets/Manga/sword.png",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:13,
      name:"Tokyo Ghoul",
      image:"./assets/Manga/ghoul.jpg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:14,
      name:"Inuyasha",
      image:"./assets/Manga/inuyasha.jpg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:15,
      name:"Blue Lock",
      image:"./assets/Manga/blue_lock.jpeg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:16,
      name:"Bleach",
      image:"./assets/Manga/bleach.jpg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:17,
      name:"The Eminence in Shadow",
      image:"./assets/Manga/em.jpeg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:18,
      name:"One Piece",
      image:"./assets/Manga/one_piece.png",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },
    {
      id:19,
      name:"Naruto Shippuden",
      image:"./assets/Manga/naruto.jpg",
      description:"The year is 71 in the True Calendar and most of the population of Earth now lives in an era of space exploration. This progress has been made possible through the development of the \"Dyson Sphere\"- a large space city. Global powers are divided into two rival factions- the Dorssia Military Pact Federation and the Atlantic Rim United States (ARUS). However, JIOR, a small and neutral nation, keeps the peace by focusing on economic prosperity and avoiding taking sides in the conflict.Haruto Tokishima is a typical high school student living in Module 77 in JIOR's Sphere. His life takes a dramatic turn when the Dorssian military suddenly invades. In the midst of the chaos, Haruto encounters the mysterious humanoid weapon, Valvrave, which changes the course of human history forever."
    },

  
  ];

  getAllMangas():Manga[]
  {
    return this.mangaList;
  }

  getMangaById(id:number): Manga|undefined
  {
    return this.mangaList.find(manga => manga.id === id);
  }
  constructor() { }
}
