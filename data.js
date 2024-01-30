let pets = [
    {
        name: "Baxter",
        image: "images/beagle_dog.jpg",
        type: "Dog",
        breed: "Beagle",
        sex: "Male",
        color: "Tri-color (Black Brown White)",
        spayedNeutered: "Yes",
        age: "5 Years",
        animalID: "34621",
        microchipNumber: "982000364789210",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter wasrescued from a shelter and has blossomed into a friendly and outgoing boy. Heloves long walks and has a keen sense of smell. He's great with kids and otherdogs, making him the perfect family pet. His favorite pastime is chasing squirrelsin the park and curling up for naps. Baxter is looking for a loving home where hecan share his endless affection and playful spirit."
    },
    {
        name: "Luna",
        image: "images/Maine_coon.jpg",
        type: "Cat",
        breed: "Maine Coon",
        sex: "Female",
        color: "Grey with white markings",
        spayedNeutered: "Yes",
        age: "3 Years",
        animalId: "57281",
        microchipNumber: "981120019776432",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings.She was found as a stray and has since become a gentle and affectionatecompanion. Luna enjoys perching on windowsills, watching birds, and being thecenter of attention. She's a bit shy at first but warms up quickly, especially if youhave treats! Luna would thrive in a calm environment where she can relax and bepampered like the queen she is."
    },
    {
        name: "Sandy",
        image: "images/Golden_Retriever.jpg",
        type: "Dog",
        breed: "Golden Retriever",
        sex: "Female",
        color: "Golden",
        spayedNeutered: "Yes",
        age: "7 Years",
        animalId: "41382",
        microchipNumber: "985112004567890",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Sandy is a heartwarming Golden Retriever with a golden coat as bright as herpersonality. Rescued from a neglectful situation, she has shown incredibleresilience and love for life. Sandy is great with children and other pets, makingher an ideal family dog. She enjoys outdoor adventures, especially swimming andfetching. Sandy is looking for a forever home where she can spread her joy andlove."
    },
    {
        name: "Oliver",
        image: "images/siamese_cat.jpg",
        type: "Cat",
        breed: "Siamese",
        sex: "Male",
        color: "Seal Point",
        spayedNeutered: "Yes",
        age: "2 Years",
        animalID: "62894",
        microchipNumber: "981120025678902",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Oliver is a sleek Siamese cat with striking blue eyes and a seal pointcoat. Found wandering in a neighborhood, he's adapted well to shelter life but is eagerfor a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoysinteractive playtime. He's affectionate and loves to be close to his human companions,often following them around the house. Oliver would do best in a home where he canreceive plenty of attention and love."
    },
    {
        name: "Max",
        image: "images/Labrador_Retriever_dog.webp",
        type: "Dog",
        breed: "Labrador Retriever",
        sex: "Male",
        color: "Chocolate",
        spayedNeutered: "Yes",
        age: "4 Years",
        animalId: "47920",
        microchipNumber: "985120031478902",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Max is a charming Chocolate Labrador with a love for life and a tail that neverstops wagging. Rescued from an overcrowded shelter, Max has shown immensegratitude and loyalty to his caregivers. He is full of energy and would thrive in ahome with a backyard or regular access to outdoor activities. Max is great withchildren and other dogs, and he's always up for a game of fetch or a leisurelywalk. His ideal home would be with an active family who can match his energyand zest for life."
    },
    {
        name: "Daisy",
        image: "images/persian_cat.webp",
        type: "Cat",
        breed: "Persian",
        sex: "Female",
        color: "White",
        spayedNeutered: "Yes",
        age: "6 Years",
        animalId: "58329",
        microchipNumber: "981120036712345",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor.She was surrendered by an owner who could no longer care for her. Daisy is a bitof a diva and loves being the center of attention. She enjoys being groomed andwill happily sit in your lap for hours. She's not fond of loud noises or fastmovements, so a quiet and calm household would be ideal. Daisy is looking for aloving home where she can be pampered and adored."
    },{
        name: "Charlie",
        image: "images/Dachshund.webp",
        type: "Dog",
        breed: "Dachsund",
        sex: "Male",
        color: "Dapple (Black and Gray)",
        spayedNeutered: "Yes",
        age: "3 Years",
        animalID: "49583",
        microchipNumber: "982000367829101",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give."
    }, {
        name: "George",
        image: "images/british_shorthair.jpg",
        type: "Cat",
        breed: "British shorthair",
        sex: "Male",
        color: "Blue(gray)",
        spayedNeutered: "Yes",
        age: "4 years",
        animalID: "61029",
        microchipNumber: "985112007651234",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "George is a robust British Shorthair with a striking blue-gray coat and a calm, dignified demeanor. Rescued from a busy city environment, he's adapted well to a quieter life. George enjoys leisurely days, lounging in sunny spots, and watching the world go by. He's not overly demanding for attention but appreciates a good chin scratch and will purr loudly in response. George is a bit reserved at first but becomes a loyal companion once he feels comfortable. He would be perfect for someone seeking a low- maintenance, independent cat" 
        },
    {
        name: "Bella",
        image: "images/Boxer_dog.jpg",
        type: "Dog",
        breed: "Boxer",
        sex: "Female",
        color: "Fawn with white markings",
        spayedNeutered: "Yes",
        age: "6 Years",
        animalId: "50824",
        microchipNumber: "982000360234567",
        status: ["Health checked", "Vaccinations up to date", "Regularly dewormed", "Microchipped"],
        about: "Bella is a spirited Boxer with a fawn coat and charming white markings. She wasrescued from a neglectful situation and has shown immense love and gratitudeto her caregivers. Bella is energetic and playful, enjoying activities like runningand playing fetch. She's great with older children and would thrive in a homewhere she can be active and engaged. Bella has a big personality and would be afantastic companion for someone who loves adventure and fun."
    },
    {
        name: "Sophie",
        image: "images/Ragdoll_cat.jpg",
        type: "Cat",
        breed: "Ragdoll",
        sex: "Female",
        color: "Seal point with blue eyes",
        spayedNeutered: "Yes",
        age: "1 year",
        animalId: "63845",
        microchipNumber: "985112008765432",
        status: ["Health checked", "Vaccinations up to date","Regularly dewormed", "Microchipped"],
        about: "Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly affectionate, often seeking out laps to curl up in. She's playful and enjoys interactive toys, but she's also content to relax and watch the world go by. Sophie gets along well with other pets and would be an excellent addition to a loving family or individual looking for a gentle and loving companion"
    },
];
