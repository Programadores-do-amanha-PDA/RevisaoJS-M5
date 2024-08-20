const main = document.getElementsByTagName("main")[0];

// Criar a estrutura do card
function createCard(name, firstData, secondData, img){
    // criando tags div/img/h1
    const divContainer = document.createElement("div");
    const divInfos = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h1");
    const firstInfo = document.createElement("p");
    const secondInfo = document.createElement("p");
    // const btn = document.createAttribute("button");

    // alterando valores 
    image.src = img;
    title.innerHTML = name;
    firstInfo.innerHTML = firstData;
    secondInfo.innerHTML = secondData;
    // btn.innerHTMT = 'Mais Detalhes';

    // inserindo classe para estilização
    divContainer.setAttribute("class", "card");
    divInfos.setAttribute("class","infos");
    firstInfo.setAttribute("class","firstInfo");
    secondInfo.setAttribute("class","secondInfo");
    image.setAttribute("class", "image");
    // btn.setAttribute("class", "button");
    

    // adicionando elementos no html
    divInfos.appendChild(firstInfo);
    divInfos.appendChild(secondInfo);
    divContainer.appendChild(image);
    divContainer.appendChild(title);
    divContainer.appendChild(divInfos);
    // divContainer.appendChild(btn);
    main.appendChild(divContainer);
}

async function getPerson(){
    const result = await fetch('http://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265').then(res => res.json());
    console.log(result);
    result.map(item => {
        createCard(item.name,item.gender,item.hair,item.image)
    })
}

getPerson();

[
    {
        "id": 266,
        "name": "Large Tommy",
        "relatives": [],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Large_Tommy",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/266.jpg",
        "gender": "Male",
        "hair": "Auburn",
        "age": "9",
        "occupation": "Student at Wagstaff School",
        "allOccupations": [
            "Student at Wagstaff School"
        ],
        "firstEpisode": "\"Human Flesh\"",
        "voicedBy": "H. Jon Benjamin",
        "url": "https://bobsburgers-api.herokuapp.com/characters/266"
    },
    {
        "id": 267,
        "name": "Larissa",
        "relatives": [],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Larissa",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/267.jpg",
        "gender": "Female",
        "hair": "Black",
        "occupation": "Student",
        "allOccupations": [
            "Student"
        ],
        "firstEpisode": "\"Tina Tailor Soldier Spy\"",
        "url": "https://bobsburgers-api.herokuapp.com/characters/267"
    },
    {
        "id": 268,
        "name": "Larry",
        "relatives": [],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Larry_(student)",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/268.jpg",
        "gender": "Male",
        "hair": "Black",
        "occupation": "Student at Wagstaff School",
        "allOccupations": [
            "Student at Wagstaff School"
        ],
        "firstEpisode": "\"Ain't Miss Debatin'\"",
        "url": "https://bobsburgers-api.herokuapp.com/characters/268"
    },
    {
        "id": 269,
        "name": "Larry Goodwin",
        "relatives": [
            {
                "_id": "66bd7100b46dfb3787122d48",
                "name": "Helen",
                "relationship": "wife",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Helen",
                "url": "https://bobsburgers-api.herokuapp.com/characters/193"
            }
        ],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Larry_Goodwin",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/269.jpg",
        "gender": "Male",
        "hair": "Black",
        "occupation": "Clock Mandate for Goodwin Clocks",
        "allOccupations": [
            "Clock Mandate for Goodwin Clocks"
        ],
        "firstEpisode": "\"Housetrap\"",
        "url": "https://bobsburgers-api.herokuapp.com/characters/269"
    },
    {
        "id": 270,
        "name": "Laverne Enerny",
        "relatives": [
            {
                "_id": "66bd7100b46dfb3787122d49",
                "name": "Kurt Enerny",
                "relationship": "brother",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Kurt_Enerny",
                "url": "https://bobsburgers-api.herokuapp.com/characters/263"
            }
        ],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Laverne_Enerny",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/270.jpg",
        "gender": "Female",
        "hair": "Blonde",
        "occupation": "Pilot",
        "allOccupations": [
            "Pilot"
        ],
        "firstEpisode": "\"Live and Let Fly\"",
        "voicedBy": "Brooke Dillman",
        "url": "https://bobsburgers-api.herokuapp.com/characters/270"
    },
    {
        "id": 271,
        "name": "Lenny DeStefano",
        "relatives": [],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Lenny_DeStefano",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/271.jpg",
        "gender": "Male",
        "hair": "Brown",
        "age": "12",
        "occupation": "Student at Wagstaff School",
        "allOccupations": [
            "Student at Wagstaff School"
        ],
        "firstEpisode": "\"The Unbearable Like-Likeness of Gene\"",
        "voicedBy": "Larry Murphy",
        "url": "https://bobsburgers-api.herokuapp.com/characters/271"
    },
    {
        "allOccupations": [],
        "id": 272,
        "name": "Leslie",
        "relatives": [
            {
                "_id": "66bd7100b46dfb3787122d4a",
                "name": "Zeke",
                "relationship": "cousin",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Zeke",
                "url": "https://bobsburgers-api.herokuapp.com/characters/496"
            }
        ],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Leslie",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/272.jpg",
        "gender": "Male",
        "hair": "Dark Blonde (\"Boyz 4 Now\"), Brown (\"So You Stink You Can Dance\")",
        "firstEpisode": "\"Boyz 4 Now\"",
        "voicedBy": "Jack McBrayer",
        "url": "https://bobsburgers-api.herokuapp.com/characters/272"
    },
    {
        "id": 273,
        "name": "Lillian Bosco",
        "relatives": [
            {
                "_id": "66bd7100b46dfb3787122d4b",
                "name": "Sergeant Bosco",
                "relationship": "son",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Sergeant_Bosco"
            }
        ],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Lillian_Bosco",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/273.jpg",
        "gender": "Female",
        "hair": "White",
        "occupation": "Retired",
        "allOccupations": [
            "Retired"
        ],
        "firstEpisode": "\"Bobby Driver\"",
        "voicedBy": "David Herman",
        "url": "https://bobsburgers-api.herokuapp.com/characters/273"
    },
    {
        "allOccupations": [],
        "id": 274,
        "name": "Lily Belcher",
        "relatives": [
            {
                "_id": "66bd7100b46dfb3787122d4c",
                "name": "Bob Belcher",
                "relationship": "son",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Bob_Belcher",
                "url": "https://bobsburgers-api.herokuapp.com/characters/51"
            },
            {
                "_id": "66bd7100b46dfb3787122d4d",
                "name": "Big Bob",
                "relationship": "husband",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Big_Bob",
                "url": "https://bobsburgers-api.herokuapp.com/characters/48"
            },
            {
                "_id": "66bd7100b46dfb3787122d4e",
                "name": "Ernest Lombard",
                "relationship": "brother",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Ernest_Lombard",
                "url": "https://bobsburgers-api.herokuapp.com/characters/147"
            },
            {
                "_id": "66bd7100b46dfb3787122d4f",
                "name": "Billy Lombard",
                "relationship": "father"
            },
            {
                "_id": "66bd7100b46dfb3787122d50",
                "name": "Alice Lombard",
                "relationship": "mother",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Alice_Lombard",
                "url": "https://bobsburgers-api.herokuapp.com/characters/11"
            },
            {
                "_id": "66bd7100b46dfb3787122d51",
                "name": "Gertie",
                "relationship": "maternal grandmother",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Gertie",
                "url": "https://bobsburgers-api.herokuapp.com/characters/169"
            },
            {
                "_id": "66bd7100b46dfb3787122d52",
                "name": "Linda Belcher",
                "relationship": "daughter-in-law",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Linda_Belcher",
                "url": "https://bobsburgers-api.herokuapp.com/characters/275"
            },
            {
                "_id": "66bd7100b46dfb3787122d53",
                "name": "Tina Belcher",
                "relationship": "grandchild",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Tina_Belcher",
                "url": "https://bobsburgers-api.herokuapp.com/characters/467"
            },
            {
                "_id": "66bd7100b46dfb3787122d54",
                "name": "Gene Belcher",
                "relationship": "grandchild",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Gene_Belcher",
                "url": "https://bobsburgers-api.herokuapp.com/characters/167"
            },
            {
                "_id": "66bd7100b46dfb3787122d55",
                "name": "Louise Belcher",
                "relationship": "grandchild",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Louise_Belcher",
                "url": "https://bobsburgers-api.herokuapp.com/characters/280"
            },
            {
                "_id": "66bd7100b46dfb3787122d56",
                "name": "Cousin Vanessa",
                "relationship": "niece or niece by marriage",
                "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Cousin_Vanessa",
                "url": "https://bobsburgers-api.herokuapp.com/characters/104"
            }
        ],
        "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Lily_Belcher",
        "image": "https://bobsburgers-api.herokuapp.com/images/characters/274.jpg",
        "gender": "Female",
        "firstEpisode": "\"God Rest Ye Merry Gentle-Mannequins (mentioned)\"",
        "url": "https://bobsburgers-api.herokuapp.com/characters/274"
    }
]