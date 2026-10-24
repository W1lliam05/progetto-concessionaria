
(() => {
  'use strict';
  const AUDI_FAMILIES = [
  {
    "id": "a1",
    "name": "A1",
    "image": "assets/models/family-a1.webp"
  },
  {
    "id": "a2-e-tron",
    "name": "A2 e-tron",
    "image": "assets/models/family-a2-e-tron.webp"
  },
  {
    "id": "a3",
    "name": "A3",
    "image": "assets/models/family-a3.webp"
  },
  {
    "id": "a5",
    "name": "A5",
    "image": "assets/models/family-a5.webp"
  },
  {
    "id": "a6",
    "name": "A6",
    "image": "assets/models/family-a6.webp"
  },
  {
    "id": "a6-e-tron",
    "name": "A6 e-tron",
    "image": "assets/models/family-a6-e-tron.webp"
  },
  {
    "id": "a8",
    "name": "A8",
    "image": "assets/models/family-a8.webp"
  },
  {
    "id": "q2",
    "name": "Q2",
    "image": "assets/models/family-q2.webp"
  },
  {
    "id": "q3",
    "name": "Q3",
    "image": "assets/models/family-q3.webp"
  },
  {
    "id": "q4-e-tron",
    "name": "Q4 e-tron",
    "image": "assets/models/family-q4-e-tron.webp"
  },
  {
    "id": "q5",
    "name": "Q5",
    "image": "assets/models/family-q5.webp"
  },
  {
    "id": "q6-e-tron",
    "name": "Q6 e-tron",
    "image": "assets/models/family-q6-e-tron.webp"
  },
  {
    "id": "q7",
    "name": "Q7",
    "image": "assets/models/family-q7.webp"
  },
  {
    "id": "q8",
    "name": "Q8",
    "image": "assets/models/family-q8.webp"
  },
  {
    "id": "q9",
    "name": "Q9",
    "image": "assets/models/family-q9.webp"
  },
  {
    "id": "e-tron-gt",
    "name": "e-tron GT",
    "image": "assets/models/family-e-tron-gt.webp"
  }
];
  const AUDI_MODELS = [
  {
    "id": "a1sb",
    "name": "A1 Sportback",
    "family": "a1",
    "image": "assets/models/a1sb.webp",
    "url": "https://www.audi.it/it/modelli/a1/a1-sportback/",
    "price": 27800,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportback",
      "sport"
    ]
  },
  {
    "id": "a1allstreet",
    "name": "A1 allstreet",
    "family": "a1",
    "image": "assets/models/a1allstreet.webp",
    "url": "https://www.audi.it/it/modelli/a1/a1-allstreet/",
    "price": 29700,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sport",
      "allstreet"
    ]
  },
  {
    "id": "a2etron",
    "name": "Nuova A2 e-tron",
    "family": "a2-e-tron",
    "image": "assets/models/a2etron.webp",
    "url": "https://www.audi.it/it/modelli/a2-e-tron/a2-e-tron/",
    "price": 38350,
    "fuel": "Elettrico",
    "new": true,
    "categories": [
      "compact"
    ]
  },
  {
    "id": "a3sb",
    "name": "Nuova A3 Sportback",
    "family": "a3",
    "image": "assets/models/a3sb.webp",
    "url": "https://www.audi.it/it/modelli/a3/a3_sportback/",
    "price": 32600,
    "fuel": "Benzina/Diesel",
    "new": true,
    "categories": [
      "sportback"
    ]
  },
  {
    "id": "a3allstreet",
    "name": "Nuova A3 allstreet",
    "family": "a3",
    "image": "assets/models/a3allstreet.webp",
    "url": "https://www.audi.it/it/modelli/a3/a3-allstreet/",
    "price": 40050,
    "fuel": "Benzina/Diesel",
    "new": true,
    "categories": [
      "allstreet"
    ]
  },
  {
    "id": "a3limo",
    "name": "Nuova A3 Sedan",
    "family": "a3",
    "image": "assets/models/a3limo.webp",
    "url": "https://www.audi.it/it/modelli/a3/a3-sedan/",
    "price": 34400,
    "fuel": "Benzina/Diesel",
    "new": true,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "a3sbehybrid",
    "name": "Nuova A3 Sportback e-hybrid",
    "family": "a3",
    "image": "assets/models/a3sbehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a3/a3-sportback-e-hybrid/",
    "price": 43100,
    "fuel": "Ibrido",
    "new": true,
    "categories": [
      "sportback"
    ]
  },
  {
    "id": "a3allstreetehybrid",
    "name": "Nuova A3 allstreet e-hybrid",
    "family": "a3",
    "image": "assets/models/a3allstreetehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a3/a3-allstreet-e-hybrid/",
    "price": 47100,
    "fuel": "Ibrido",
    "new": true,
    "categories": [
      "allstreet"
    ]
  },
  {
    "id": "s3sb",
    "name": "Nuova S3 Sportback",
    "family": "a3",
    "image": "assets/models/s3sb.webp",
    "url": "https://www.audi.it/it/modelli/a3/s3-sportback/",
    "price": 57250,
    "fuel": "Benzina",
    "new": true,
    "categories": [
      "sportback",
      "sportscar"
    ]
  },
  {
    "id": "s3limo",
    "name": "Nuova S3 Sedan",
    "family": "a3",
    "image": "assets/models/s3limo.webp",
    "url": "https://www.audi.it/it/modelli/a3/s3-sedan/",
    "price": 58550,
    "fuel": "Benzina",
    "new": true,
    "categories": [
      "sportscar",
      "limo"
    ]
  },
  {
    "id": "rs3sb",
    "name": "Nuova RS 3 Sportback",
    "family": "a3",
    "image": "assets/models/rs3sb.webp",
    "url": "https://www.audi.it/it/modelli/a3/rs-3-sportback/",
    "price": 71500,
    "fuel": "Benzina",
    "new": true,
    "categories": [
      "sportback",
      "sportscar",
      "roadster"
    ]
  },
  {
    "id": "rs3limo",
    "name": "Nuova RS 3 Sedan",
    "family": "a3",
    "image": "assets/models/rs3limo.webp",
    "url": "https://www.audi.it/it/modelli/a3/rs-3-sedan/",
    "price": 72800,
    "fuel": "Benzina",
    "new": true,
    "categories": [
      "sportscar",
      "limo",
      "roadster"
    ]
  },
  {
    "id": "a5limo",
    "name": "A5",
    "family": "a5",
    "image": "assets/models/a5limo.webp",
    "url": "https://www.audi.it/it/modelli/a5/a5/",
    "price": 48550,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "a5limoehybrid",
    "name": "A5 e-hybrid",
    "family": "a5",
    "image": "assets/models/a5limoehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a5/a5-e-hybrid/",
    "price": 63800,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "a5avant",
    "name": "A5 Avant",
    "family": "a5",
    "image": "assets/models/a5avant.webp",
    "url": "https://www.audi.it/it/modelli/a5/a5-avant/",
    "price": 50950,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "avant"
    ]
  },
  {
    "id": "a5avantehybrid",
    "name": "A5 Avant e-hybrid",
    "family": "a5",
    "image": "assets/models/a5avantehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a5/a5-avant-e-hybrid/",
    "price": 66200,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "avant"
    ]
  },
  {
    "id": "s5limo",
    "name": "S5",
    "family": "a5",
    "image": "assets/models/s5limo.webp",
    "url": "https://www.audi.it/it/modelli/a5/s5/",
    "price": 86450,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "limo"
    ]
  },
  {
    "id": "s5avant",
    "name": "S5 Avant",
    "family": "a5",
    "image": "assets/models/s5avant.webp",
    "url": "https://www.audi.it/it/modelli/a5/s5-avant/",
    "price": 88850,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "avant"
    ]
  },
  {
    "id": "rs5limo",
    "name": "Nuova RS 5",
    "family": "a5",
    "image": "assets/models/rs5limo.webp",
    "url": "https://www.audi.it/it/modelli/a5/rs-5/",
    "price": 112700,
    "fuel": "Ibrido",
    "new": true,
    "categories": [
      "sportscar",
      "roadster"
    ]
  },
  {
    "id": "rs5avant",
    "name": "Nuova RS 5 Avant",
    "family": "a5",
    "image": "assets/models/rs5avant.webp",
    "url": "https://www.audi.it/it/modelli/a5/rs-5-avant/",
    "price": 115100,
    "fuel": "Ibrido",
    "new": true,
    "categories": [
      "sportscar",
      "roadster"
    ]
  },
  {
    "id": "a6limo",
    "name": "A6",
    "family": "a6",
    "image": "assets/models/a6limo.webp",
    "url": "https://www.audi.it/it/modelli/a6/a6/",
    "price": 66450,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "a6limoehybrid",
    "name": "A6 e-hybrid",
    "family": "a6",
    "image": "assets/models/a6limoehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a6/a6-e-hybrid/",
    "price": 72200,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "a6avant",
    "name": "A6 Avant",
    "family": "a6",
    "image": "assets/models/a6avant.webp",
    "url": "https://www.audi.it/it/modelli/a6/a6-avant/",
    "price": 69350,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "avant"
    ]
  },
  {
    "id": "a6avantehybrid",
    "name": "A6 Avant e-hybrid",
    "family": "a6",
    "image": "assets/models/a6avantehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a6/a6-avant-e-hybrid/",
    "price": 75100,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "avant"
    ]
  },
  {
    "id": "a6allroad",
    "name": "A6 allroad",
    "family": "a6",
    "image": "assets/models/a6allroad.webp",
    "url": "https://www.audi.it/it/modelli/a6/a6-allroad-quattro/",
    "price": 82350,
    "fuel": "Diesel",
    "new": false,
    "categories": []
  },
  {
    "id": "a6allroadehybrid",
    "name": "A6 allroad e-hybrid",
    "family": "a6",
    "image": "assets/models/a6allroadehybrid.webp",
    "url": "https://www.audi.it/it/modelli/a6/a6-allroad-quattro-e-hybrid/",
    "price": 88650,
    "fuel": "Ibrido",
    "new": false,
    "categories": []
  },
  {
    "id": "a6avantetron",
    "name": "A6 Avant e-tron",
    "family": "a6-e-tron",
    "image": "assets/models/a6avantetron.webp",
    "url": "https://www.audi.it/it/modelli/a6-e-tron/a6-avant-e-tron/",
    "price": 68000,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sport",
      "avant"
    ]
  },
  {
    "id": "a6sbetron",
    "name": "A6 Sportback e-tron",
    "family": "a6-e-tron",
    "image": "assets/models/a6sbetron.webp",
    "url": "https://www.audi.it/it/modelli/a6-e-tron/a6-sportback-e-tron/",
    "price": 65500,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportback",
      "sport"
    ]
  },
  {
    "id": "a8",
    "name": "A8",
    "family": "a8",
    "image": "assets/models/a8.webp",
    "url": "https://www.audi.it/it/modelli/a8/a8/",
    "price": 108200,
    "fuel": "Diesel",
    "new": false,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "a8tfsie",
    "name": "A8 TFSI e",
    "family": "a8",
    "image": "assets/models/a8tfsie.webp",
    "url": "https://www.audi.it/it/modelli/a8/a8-tfsi-e/",
    "price": 123700,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "limo"
    ]
  },
  {
    "id": "q2",
    "name": "Q2",
    "family": "q2",
    "image": "assets/models/q2.webp",
    "url": "https://www.audi.it/it/modelli/q2/q2/",
    "price": 32500,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "sport",
      "suv"
    ]
  },
  {
    "id": "sq2",
    "name": "SQ2 TFSI",
    "family": "q2",
    "image": "assets/models/sq2.webp",
    "url": "https://www.audi.it/it/modelli/q2/sq2/",
    "price": 55600,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "suv"
    ]
  },
  {
    "id": "q3",
    "name": "Q3",
    "family": "q3",
    "image": "assets/models/q3.webp",
    "url": "https://www.audi.it/it/modelli/q3/q3/",
    "price": 44200,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q3ehybrid",
    "name": "Q3 e-hybrid",
    "family": "q3",
    "image": "assets/models/q3ehybrid.webp",
    "url": "https://www.audi.it/it/modelli/q3/q3-e-hybrid/",
    "price": 49000,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q3sb",
    "name": "Q3 Sportback",
    "family": "q3",
    "image": "assets/models/q3sb.webp",
    "url": "https://www.audi.it/it/modelli/q3/q3-sportback/",
    "price": 46200,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "sportback"
    ]
  },
  {
    "id": "q3sbehybrid",
    "name": "Q3 Sportback e-hybrid",
    "family": "q3",
    "image": "assets/models/q3sbehybrid.webp",
    "url": "https://www.audi.it/it/modelli/q3/q3-sportback-e-hybrid/",
    "price": 51000,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "sportback"
    ]
  },
  {
    "id": "q4etron",
    "name": "Q4 e-tron",
    "family": "q4-e-tron",
    "image": "assets/models/q4etron.webp",
    "url": "https://www.audi.it/it/modelli/q4-e-tron/q4-e-tron/",
    "price": 43350,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q4sbetron",
    "name": "Q4 Sportback e-tron",
    "family": "q4-e-tron",
    "image": "assets/models/q4sbetron.webp",
    "url": "https://www.audi.it/it/modelli/q4-e-tron/q4-e-tron-sportback/",
    "price": 52900,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportback",
      "suv"
    ]
  },
  {
    "id": "q5",
    "name": "Q5",
    "family": "q5",
    "image": "assets/models/q5.webp",
    "url": "https://www.audi.it/it/modelli/q5/q5/",
    "price": 63750,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q5ehybrid",
    "name": "Q5 e-hybrid",
    "family": "q5",
    "image": "assets/models/q5ehybrid.webp",
    "url": "https://www.audi.it/it/modelli/q5/q5-e-hybrid/",
    "price": 69650,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q5sb",
    "name": "Q5 Sportback",
    "family": "q5",
    "image": "assets/models/q5sb.webp",
    "url": "https://www.audi.it/it/modelli/q5/q5-sportback/",
    "price": 70950,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "sportback",
      "suv"
    ]
  },
  {
    "id": "q5sbehybrid",
    "name": "Q5 Sportback e-hybrid",
    "family": "q5",
    "image": "assets/models/q5sbehybrid.webp",
    "url": "https://www.audi.it/it/modelli/q5/q5-sportback-e-hybrid/",
    "price": 76150,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "sportback",
      "suv"
    ]
  },
  {
    "id": "sq5",
    "name": "SQ5",
    "family": "q5",
    "image": "assets/models/sq5.webp",
    "url": "https://www.audi.it/it/modelli/q5/sq5/",
    "price": 94600,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "suv"
    ]
  },
  {
    "id": "sq5sb",
    "name": "SQ5 Sportback",
    "family": "q5",
    "image": "assets/models/sq5sb.webp",
    "url": "https://www.audi.it/it/modelli/q5/sq5-sportback/",
    "price": 97600,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportback",
      "sportscar",
      "suv"
    ]
  },
  {
    "id": "q6etron",
    "name": "Q6 e-tron",
    "family": "q6-e-tron",
    "image": "assets/models/q6etron.webp",
    "url": "https://www.audi.it/it/modelli/q6-e-tron/q6-e-tron/",
    "price": 67800,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q6sbetron",
    "name": "Q6 Sportback e-tron",
    "family": "q6-e-tron",
    "image": "assets/models/q6sbetron.webp",
    "url": "https://www.audi.it/it/modelli/q6-e-tron/q6-sportback-e-tron/",
    "price": 73500,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportback",
      "suv"
    ]
  },
  {
    "id": "q7",
    "name": "Q7",
    "family": "q7",
    "image": "assets/models/q7.webp",
    "url": "https://www.audi.it/it/modelli/q7/q7/",
    "price": 87150,
    "fuel": "Diesel",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q7tfsie",
    "name": "Q7 TFSI e",
    "family": "q7",
    "image": "assets/models/q7tfsie.webp",
    "url": "https://www.audi.it/it/modelli/q7/q7-tfsi-e/",
    "price": 89850,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q8",
    "name": "Q8",
    "family": "q8",
    "image": "assets/models/q8.webp",
    "url": "https://www.audi.it/it/modelli/q8/q8-suv/",
    "price": 93050,
    "fuel": "Benzina/Diesel",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "q8ehybrid",
    "name": "Q8 e-hybrid",
    "family": "q8",
    "image": "assets/models/q8ehybrid.webp",
    "url": "https://www.audi.it/it/modelli/q8/q8-suv-e-hybrid/",
    "price": 98950,
    "fuel": "Ibrido",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "sq8",
    "name": "SQ8",
    "family": "q8",
    "image": "assets/models/sq8.webp",
    "url": "https://www.audi.it/it/modelli/q8/sq8-suv/",
    "price": 122450,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "suv"
    ]
  },
  {
    "id": "rsq8",
    "name": "RS Q8",
    "family": "q8",
    "image": "assets/models/rsq8.webp",
    "url": "https://www.audi.it/it/modelli/q8/rs-q8/",
    "price": 160850,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "suv",
      "roadster"
    ]
  },
  {
    "id": "rsq8performance-eos",
    "name": "RS Q8 performance",
    "family": "q8",
    "image": "assets/models/rsq8performance-eos.webp",
    "url": "https://www.audi.it/it/modelli/q8/rs-q8-performance/",
    "price": null,
    "fuel": "Benzina",
    "new": false,
    "categories": [
      "sportscar",
      "suv",
      "roadster"
    ]
  },
  {
    "id": "q9",
    "name": "Q9",
    "family": "q9",
    "image": "assets/models/q9.webp",
    "url": "https://www.audi.it/it/modelli/q9/q9/",
    "price": 116900,
    "fuel": "Diesel",
    "new": false,
    "categories": [
      "suv"
    ]
  },
  {
    "id": "etrongt",
    "name": "e-tron GT quattro",
    "family": "e-tron-gt",
    "image": "assets/models/etrongt.webp",
    "url": "https://www.audi.it/it/modelli/e-tron-gt/e-tron-gt-quattro/",
    "price": 112900,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportscar"
    ]
  },
  {
    "id": "setrongt",
    "name": "S e-tron GT",
    "family": "e-tron-gt",
    "image": "assets/models/setrongt.webp",
    "url": "https://www.audi.it/it/modelli/e-tron-gt/s-e-tron-gt/",
    "price": 128400,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportscar"
    ]
  },
  {
    "id": "rsetrongt",
    "name": "RS e-tron GT",
    "family": "e-tron-gt",
    "image": "assets/models/rsetrongt.webp",
    "url": "https://www.audi.it/it/modelli/e-tron-gt/audi-rs-e-tron-gt/",
    "price": 159400,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportscar",
      "roadster"
    ]
  },
  {
    "id": "rsetrongtperformance",
    "name": "RS e-tron GT performance",
    "family": "e-tron-gt",
    "image": "assets/models/rsetrongtperformance.webp",
    "url": "https://www.audi.it/it/modelli/e-tron-gt/rs-e-tron-gt-performance/",
    "price": 175400,
    "fuel": "Elettrico",
    "new": false,
    "categories": [
      "sportscar",
      "roadster"
    ]
  }
];

  // 1. CATALOGO — modifica qui i dati dimostrativi dei veicoli.
  const CARS = [
    {
      "id": "a5-avant",
      "name": "Audi A5 Avant",
      "trim": "Eleganza, in una nuova dimensione.",
      "type": "Avant",
      "fuel": "Ibrida",
      "condition": "Nuovo",
      "price": 58900,
      "year": 2026,
      "km": 0,
      "image": "a5.jpg",
      "gallery": [
        "a5.jpg",
        "a5-rear.jpg"
      ],
      "power": "150 kW / 204 CV",
      "gear": "Automatico",
      "drive": "Anteriore",
      "color": "Argento metallizzato",
      "text": "Proporzioni dinamiche, linee pulite e tutto lo spazio di una Avant. Un modo di interpretare il viaggio che unisce carattere e versatilità.",
      "features": [
        "Abitacolo digitale",
        "Cambio automatico",
        "Fari a LED",
        "Portellone elettrico",
        "Integrazione smartphone",
        "Sensori di parcheggio"
      ]
    },
    {
      "id": "q5-suv",
      "name": "Audi Q5 SUV",
      "trim": "Il tuo prossimo orizzonte.",
      "type": "SUV",
      "fuel": "Diesel",
      "condition": "Nuovo",
      "price": 64900,
      "year": 2026,
      "km": 0,
      "image": "q5.jpg",
      "gallery": [
        "q5.jpg"
      ],
      "power": "150 kW / 204 CV",
      "gear": "Automatico",
      "drive": "quattro",
      "color": "Grigio metallizzato",
      "text": "Una presenza decisa, una prospettiva più ampia. Audi Q5 interpreta la vita di ogni giorno con comfort, spazio e il carattere di un SUV.",
      "features": [
        "Trazione quattro",
        "Cambio S tronic",
        "Fari a LED",
        "Cockpit digitale",
        "Climatizzatore automatico",
        "Assistenza al parcheggio"
      ]
    },
    {
      "id": "a3-sportback",
      "name": "Audi A3 Sportback",
      "trim": "Compatta. Il carattere, immenso.",
      "type": "Sportback",
      "fuel": "Benzina",
      "condition": "Nuovo",
      "price": 36900,
      "year": 2026,
      "km": 0,
      "image": "a3.jpg",
      "gallery": [
        "a3.jpg"
      ],
      "power": "110 kW / 150 CV",
      "gear": "Automatico",
      "drive": "Anteriore",
      "color": "Verde metallizzato",
      "text": "Design sportivo e dimensioni adatte alla città. La A3 Sportback mette al centro il piacere di guidare, con una personalità riconoscibile al primo sguardo.",
      "features": [
        "Cambio S tronic",
        "Fari a LED",
        "Volante multifunzione",
        "Display digitale",
        "Connettività smartphone",
        "Sensori posteriori"
      ]
    },
    {
      "id": "q6-etron",
      "name": "Audi Q6 e-tron",
      "trim": "Una nuova energia. La stessa passione.",
      "type": "SUV",
      "fuel": "Elettrica",
      "condition": "Nuovo",
      "price": 74900,
      "year": 2026,
      "km": 0,
      "image": "q6.jpg",
      "gallery": [
        "q6.jpg"
      ],
      "power": "185 kW / 252 CV",
      "gear": "Automatico",
      "drive": "Posteriore",
      "color": "Blu metallizzato",
      "text": "Il linguaggio dei quattro anelli incontra la mobilità elettrica. Silenzio, fluidità e un abitacolo pensato per trasformare ogni spostamento in un’esperienza.",
      "features": [
        "Motorizzazione elettrica",
        "Ricarica AC e DC",
        "Cockpit digitale",
        "Climatizzatore automatico",
        "Navigazione integrata",
        "Connettività smartphone"
      ]
    },
    {
      "id": "a3-usata",
      "name": "Audi A3 Sportback",
      "trim": "35 TFSI · Selezione usato",
      "type": "Sportback",
      "fuel": "Benzina",
      "condition": "Usato",
      "price": 28900,
      "year": 2024,
      "km": 24500,
      "image": "a3.jpg",
      "gallery": [
        "a3.jpg"
      ],
      "power": "110 kW / 150 CV",
      "gear": "Automatico",
      "drive": "Anteriore",
      "color": "Verde metallizzato",
      "text": "Un esempio della nostra selezione usato. Una compatta versatile, da conoscere attraverso lo storico di manutenzione e una prova su strada.",
      "features": [
        "Cambio automatico",
        "Fari a LED",
        "Volante multifunzione",
        "Climatizzatore",
        "Sensori parcheggio",
        "Connessione smartphone"
      ]
    },
    {
      "id": "q5-usata",
      "name": "Audi Q5 SUV",
      "trim": "TDI quattro · Selezione usato",
      "type": "SUV",
      "fuel": "Diesel",
      "condition": "Usato",
      "price": 52900,
      "year": 2025,
      "km": 18200,
      "image": "q5.jpg",
      "gallery": [
        "q5.jpg"
      ],
      "power": "150 kW / 204 CV",
      "gear": "Automatico",
      "drive": "quattro",
      "color": "Grigio metallizzato",
      "text": "Spazio e personalità per i tuoi viaggi. Un esempio di SUV usato: chiedi sempre la scheda dell’esemplare, lo storico e le condizioni di garanzia.",
      "features": [
        "Trazione quattro",
        "Cambio automatico",
        "Navigazione",
        "Fari a LED",
        "Portellone elettrico",
        "Climatizzatore automatico"
      ]
    }
  ];

  // 2. UTILITA' — selezione elementi e formattazione.
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const money = value => new Intl.NumberFormat('it-IT', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0
  }).format(value);
  const cloneTemplate = id => document.getElementById(id).content.cloneNode(true);

  // 3. MODEL — catalogo, preferiti e confronto. Non modifica la pagina.
  const Model = (() => {
    const storageKey = 'audi-preferiti';
    let favorites = [];
    const comparison = new Set();

    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(saved)) {
        favorites = [...new Set(saved.filter(id => CARS.some(car => car.id === id)))];
      }
    } catch {
      // Se lo storage è disabilitato, i preferiti funzionano nella sessione.
    }

    return {
      all: () => [...CARS],
      find: id => CARS.find(car => car.id === id),
      favorites: () => [...favorites],
      isFavorite: id => favorites.includes(id),
      comparison: () => [...comparison],

      toggleFavorite(id) {
        if (!this.find(id)) return false;
        favorites = this.isFavorite(id)
          ? favorites.filter(value => value !== id)
          : [...favorites, id];
        try {
          localStorage.setItem(storageKey, JSON.stringify(favorites));
          return true;
        } catch {
          return false;
        }
      },

      setCompared(id, selected) {
        if (!this.find(id)) return false;
        if (selected && !comparison.has(id) && comparison.size >= 3) return false;
        selected ? comparison.add(id) : comparison.delete(id);
        return true;
      },

      clearComparison() {
        comparison.clear();
      },

      search({ condition, query = '', fuel = '', type = '', budget = '', sort = '' }) {
        const limit = Number(budget) || Infinity;
        const term = query.trim().toLowerCase();
        const results = CARS.filter(car =>
          car.condition === condition &&
          car.name.toLowerCase().includes(term) &&
          (!fuel || car.fuel === fuel) &&
          (!type || car.type === type) &&
          car.price <= limit
        );
        if (sort === 'low') results.sort((a, b) => a.price - b.price);
        if (sort === 'high') results.sort((a, b) => b.price - a.price);
        if (sort === 'name') results.sort((a, b) => a.name.localeCompare(b.name));
        return results;
      }
    };
  })();

  // 4. VIEW — riempie i template HTML. Nessun blocco HTML è scritto nel JS.
  const View = {
    toastTimer: null,

    bindCar(root, car) {
      const data = {
        ...car,
        formattedPrice: money(car.price),
        kilometers: car.km.toLocaleString('it-IT') + ' km',
        conditionLabel: car.condition === 'Usato' ? 'Selezione usato' : 'La gamma Audi',
        shortSpec: car.condition === 'Usato' ? car.km.toLocaleString('it-IT') + ' km' : car.type,
        badge: car.condition === 'Usato' ? 'SELEZIONE USATO'
          : car.fuel === 'Elettrica' ? '100% ELETTRICA' : 'GAMMA AUDI'
      };
      $$('[data-bind]', root).forEach(element => {
        element.textContent = data[element.dataset.bind] ?? '';
      });
      $$('[data-car-image]', root).forEach(image => {
        image.src = 'assets/' + car.image;
        image.alt = car.name + ', fotografia illustrativa';
      });
      $$('[data-detail-link]', root).forEach(link => {
        link.href = '#/auto?id=' + encodeURIComponent(car.id);
        link.setAttribute('aria-label', 'Vedi scheda ' + car.name);
      });
      $$('[data-contact]', root).forEach(link => {
        const params = new URLSearchParams({ modello: car.id, motivo: link.dataset.contact });
        link.href = '#/contatti?' + params;
      });
      $$('[data-favorite]', root).forEach(button => {
        button.dataset.favorite = car.id;
        button.setAttribute('aria-label', 'Salva ' + car.name + ' nei preferiti');
        button.setAttribute('aria-pressed', Model.isFavorite(car.id));
        button.textContent = Model.isFavorite(car.id) ? '♥' : '♡';
      });
      $$('[data-compare]', root).forEach(input => {
        input.dataset.compare = car.id;
        input.checked = Model.comparison().includes(car.id);
      });
    },

    cards(target, cars) {
      target.replaceChildren();
      if (!cars.length) {
        target.append(cloneTemplate('empty-state'));
        return;
      }
      cars.forEach(car => {
        const fragment = cloneTemplate('vehicle-card');
        this.bindCar(fragment, car);
        target.append(fragment);
      });
    },

    favorites() {
      $('#fav-count').textContent = Model.favorites().length;
      $$('[data-favorite]').forEach(button => {
        const selected = Model.isFavorite(button.dataset.favorite);
        button.setAttribute('aria-pressed', selected);
        button.textContent = selected ? '♥' : '♡';
      });
    },

    comparison() {
      const ids = Model.comparison();
      $('.compare-tray').hidden = !ids.length;
      $('#compare-count').textContent = ids.length + ' auto selezionate';
      $('#open-compare').disabled = ids.length < 2;
      $$('[data-compare]').forEach(input => {
        input.checked = ids.includes(input.dataset.compare);
      });
    },

    comparisonTable() {
      $('#comparison-table caption').textContent = 'Confronto di configurazioni dimostrative';
      const cars = Model.comparison().map(id => Model.find(id));
      const head = $('#comparison-table thead');
      const body = $('#comparison-table tbody');
      head.replaceChildren();
      body.replaceChildren();
      const addRow = (parent, label, values, header = false) => {
        const row = document.createElement('tr');
        const title = document.createElement('th');
        title.scope = header ? 'col' : 'row';
        title.textContent = label;
        row.append(title);
        values.forEach(value => {
          const cell = document.createElement(header ? 'th' : 'td');
          if (header) cell.scope = 'col';
          cell.textContent = value;
          row.append(cell);
        });
        parent.append(row);
      };
      addRow(head, 'Caratteristiche', cars.map(car => car.name), true);
      const photoRow = document.createElement('tr');
      const photoLabel = document.createElement('th');
      photoLabel.scope = 'row';
      photoLabel.textContent = 'Modello';
      photoRow.append(photoLabel);
      cars.forEach(car => {
        const cell = document.createElement('td');
        const image = document.createElement('img');
        image.src = 'assets/' + car.image;
        image.alt = car.name;
        cell.append(image);
        photoRow.append(cell);
      });
      body.append(photoRow);
      [
        ['Prezzo di esempio', 'price'], ['Alimentazione', 'fuel'],
        ['Potenza indicativa', 'power'], ['Carrozzeria', 'type'],
        ['Trazione', 'drive'], ['Condizione', 'condition'], ['Anno di esempio', 'year']
      ].forEach(([label, key]) => {
        addRow(body, label, cars.map(car => key === 'price' ? money(car[key]) : car[key]));
      });
      $('#compare-dialog').showModal();
    },

    toast(message) {
      clearTimeout(this.toastTimer);
      $('#toast').textContent = message;
      $('#toast').hidden = false;
      this.toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 3500);
    }
  };

  // 5. CONTROLLER — navigazione e interazioni dell'utente.
  const Controller = {
    route: null,
    pageEvents: null,

    start() {
      $('[data-year]').textContent = new Date().getFullYear();
      window.addEventListener('hashchange', () => this.navigate());
      document.addEventListener('click', event => this.onClick(event));
      document.addEventListener('change', event => this.onChange(event));
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') this.menu(false);
      });
      this.navigate();
    },

    listen(target, event, callback) {
      target.addEventListener(event, callback, { signal: this.pageEvents.signal });
    },

    menu(open) {
      $('#navigation').classList.toggle('open', open);
      $('.menu-toggle').setAttribute('aria-expanded', open);
      $('.menu-toggle').setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
    },

    navigate() {
      this.pageEvents?.abort();
      this.pageEvents = new AbortController();
      clearTimeout(View.toastTimer);
      $('#toast').hidden = true;
      $('#compare-dialog').close();
      const hash = location.hash.startsWith('#/') ? location.hash.slice(2) : 'home';
      const separator = hash.indexOf('?');
      const requested = separator < 0 ? hash : hash.slice(0, separator);
      const params = new URLSearchParams(separator < 0 ? '' : hash.slice(separator + 1));
      const template = document.getElementById('page-' + requested) || $('#page-home');
      const page = template.id.replace('page-', '');
      this.route = { page, params };
      document.body.dataset.page = page;
      document.title = template.dataset.title;
      $('video.hero-video')?.pause();
      $('#main').replaceChildren(template.content.cloneNode(true));
      $$('[data-nav]').forEach(link => {
        link.dataset.nav === page
          ? link.setAttribute('aria-current', 'page')
          : link.removeAttribute('aria-current');
      });
      this.menu(false);

      if (page === 'home') this.home();
      if (page === 'gamma') AudiCatalog.mount(params);
      if (page === 'elettrico') AudiCatalog.mount(params, true);
      if (page === 'modello') AudiCatalog.detail(params);
      if (page === 'usato') UsedCatalog.mount(params);
      if (page === 'preferiti') this.preferredCars();
      if (page === 'auto') this.detail();
      if (page === 'contatti') this.contact();
      View.favorites();
      View.comparison();
      requestAnimationFrame(() => {
        const anchor = params.get('anchor');
        const target = anchor ? document.getElementById(anchor) : null;
        target ? target.scrollIntoView() : window.scrollTo(0, 0);
        const heading = $('main h1');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
      });
    },

    onClick(event) {
      if (event.target.closest('.menu-toggle')) {
        this.menu($('.menu-toggle').getAttribute('aria-expanded') !== 'true');
      }
      if (event.target.closest('a[href="#main"]')) {
        event.preventDefault();
        $('#main').focus();
        $('#main').scrollIntoView();
      }
      const favorite = event.target.closest('[data-favorite]');
      if (favorite) {
        const stored = Model.toggleFavorite(favorite.dataset.favorite);
        View.favorites();
        if (this.route.page === 'preferiti') this.preferredCars();
        View.toast(stored ? 'Preferiti aggiornati.' : 'Preferiti aggiornati per questa sessione.');
      }
      if (event.target.closest('#clear-compare')) {
        Model.clearComparison();
        View.comparison();
      }
      if (event.target.closest('#open-compare') && Model.comparison().length >= 2) {
        View.comparisonTable();
      }
      if (event.target.closest('.close-dialog')) $('#compare-dialog').close();
    },

    onChange(event) {
      if (!event.target.matches('[data-compare]')) return;
      if (!Model.setCompared(event.target.dataset.compare, event.target.checked)) {
        View.toast('Puoi confrontare fino a 3 auto.');
      }
      View.comparison();
    },

    home() {
      UsedCatalog.home();
      const video = $('.hero-video');
      video.muted = true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.autoplay = false;
        video.pause();
      } else {
        video.play().catch(() => { /* Il poster resta visibile se l'avvio automatico è bloccato. */ });
      }
      const track = $('#home-cars');
      AUDI_MODELS.forEach(car => {
        const fragment = cloneTemplate('home-model-card');
        $('a', fragment).href = '#/modello?id=' + car.id;
        $('img', fragment).src = car.image;
        $('img', fragment).alt = 'Audi ' + car.name;
        $('h3', fragment).textContent = car.name;
        $('.home-model-fuel', fragment).textContent = car.fuel === 'Ibrido' ? 'Plug-in hybrid' : car.fuel;
        $('.home-model-price', fragment).textContent = AudiCatalog.price(car);
        track.append(fragment);
      });
      const updateArrows = () => {
        $('#home-prev').disabled = track.scrollLeft <= 2;
        $('#home-next').disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      };
      const scrollCards = direction => {
        const card = $('.home-model-card', track);
        track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 24),
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      };
      this.listen($('#home-prev'), 'click', () => scrollCards(-1));
      this.listen($('#home-next'), 'click', () => scrollCards(1));
      this.listen(track, 'scroll', updateArrows);
      this.listen(window, 'resize', updateArrows);
      this.listen(track, 'keydown', event => {
        if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault(); scrollCards(event.key === 'ArrowRight' ? 1 : -1);
      });
      requestAnimationFrame(updateArrows);
    },

    catalog() {
      const form = $('#filters');
      const { page, params } = this.route;
      ['search', 'fuel', 'type', 'budget'].forEach(key => {
        if (params.has(key)) form.elements[key].value = params.get(key);
      });
      if (params.has('sort')) $('#sort').value = params.get('sort');
      const refresh = () => {
        const data = Object.fromEntries(new FormData(form));
        const sort = $('#sort').value;
        const cars = Model.search({
          ...data, query: data.search, sort,
          condition: page === 'usato' ? 'Usato' : 'Nuovo'
        });
        View.cards($('#catalog-grid'), cars);
        $('#result-count').textContent = cars.length + ' auto nella selezione';
        const query = new URLSearchParams();
        Object.entries({ ...data, sort }).forEach(([key, value]) => {
          if (value && value !== 'recommended') query.set(key, value);
        });
        try {
          history.replaceState(null, '', '#/' + page + (query.size ? '?' + query : ''));
        } catch {

        }
      };
      this.listen(form, 'input', refresh);
      this.listen(form, 'submit', event => event.preventDefault());
      this.listen($('#sort'), 'change', refresh);
      this.listen(form, 'reset', event => {
        event.preventDefault();
        ['search', 'fuel', 'type', 'budget'].forEach(key => {
          form.elements[key].value = '';
        });
        $('#sort').value = 'recommended';
        refresh();
      });
      refresh();
    },

    preferredCars() {
      View.cards($('#favorites-grid'), Model.all().filter(car => Model.isFavorite(car.id)));
    },

    detail() {
      const car = Model.find(this.route.params.get('id'));
      if (!car) {
        $('#main').replaceChildren(cloneTemplate('missing-car'));
        return;
      }
      document.title = car.name + ' | Audi Showroom';
      View.bindCar($('#main'), car);
      const catalogLink = $('[data-catalog-link]');
      catalogLink.href = car.condition === 'Usato' ? '#/usato' : '#/gamma';
      catalogLink.textContent = car.condition === 'Usato' ? 'Usato' : 'Gamma Audi';
      car.features.forEach(feature => {
        const item = document.createElement('li');
        item.textContent = feature;
        $('#car-features').append(item);
      });
      car.gallery.forEach((filename, index) => {
        const fragment = cloneTemplate('gallery-item');
        const button = $('button', fragment);
        const image = $('img', fragment);
        button.classList.toggle('active', index === 0);
        button.setAttribute('aria-label', 'Vista ' + (index + 1) + ' di ' + car.name);
        image.src = 'assets/' + filename;
        image.alt = 'Vista ' + (index + 1);
        this.listen(button, 'click', () => {
          $('#main-photo').src = image.src;
          $$('#gallery-thumbnails button').forEach(item => {
            item.classList.toggle('active', item === button);
          });
        });
        $('#gallery-thumbnails').append(fragment);
      });
      $('#deposit').max = Math.floor(car.price * 0.7);
      $('#deposit').value = Math.round(car.price * 0.2);
      const calculate = () => {
        const deposit = Number($('#deposit').value);
        $('#deposit-label').textContent = money(deposit);
        $('#monthly').textContent = money((car.price - deposit) / Number($('#months').value));
      };
      this.listen($('#deposit'), 'input', calculate);
      this.listen($('#months'), 'change', calculate);
      calculate();
    },

    contact() {
      const form = $('#contact-form');
      const select = $('#model');
      select.add(new Option('Vorrei un consiglio', ''));
      Model.all().forEach(car => select.add(new Option(car.name + ' · ' + car.condition, car.id)));
      const { params } = this.route;
      AUDI_MODELS.forEach(car => select.add(new Option(car.name + ' · Gamma Audi', car.id)));
      if (Model.find(params.get('modello')) || AUDI_MODELS.some(car => car.id === params.get('modello'))) select.value = params.get('modello');
      if (['Test drive', 'Informazioni', 'Service', 'Valutazione usato'].includes(params.get('motivo'))) {
        $('#reason').value = params.get('motivo');
      }
      const today = new Date();
      today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
      $('#date').min = today.toISOString().slice(0, 10);
      let summary = '';
      this.listen(form, 'submit', event => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const data = Object.fromEntries(new FormData(form));
        const car = Model.find(data.model) || AUDI_MODELS.find(item => item.id === data.model);
        summary = [
          'RICHIESTA DIMOSTRATIVA — NON INVIATA', '',
          'Nome: ' + data.name, 'Email: ' + data.email,
          'Telefono: ' + (data.phone || 'Non indicato'),
          'Motivo: ' + data.reason,
          'Modello: ' + (car ? car.name + ' (' + (car.condition || 'Gamma Audi') + ')' : 'Da definire'),
          'Data preferita: ' + (data.date || 'Da concordare'),
          'Messaggio: ' + (data.message || '—'), '',
          'Questa richiesta è stata creata localmente. Non costituisce prenotazione.'
        ].join('\n');
        $('#form-result').hidden = false;
        $('#form-result').focus();
        $('#form-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      this.listen($('#download-request'), 'click', () => {
        const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'richiesta-audi.txt';
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      });
    }
  };

  const AudiCatalog = {
    selected: new Set(),

    price(car) {
      return car.price === null ? 'Prezzo su richiesta' : 'Da ' + money(car.price);
    },

    mount(params, electricOnly = false) {
      const form = $('#model-filters');
      let showVersions = params.get('view') === 'models';
      form.elements.query.value = params.get('query') || '';
      ['traction', 'family', 'category'].forEach(group => {
        const values = (params.get(group) || '').split(',');
        $$('input[name="' + group + '"]', form).forEach(input => {
          input.checked = values.includes(input.value);
        });
      });
   
      if (!electricOnly && params.get('fuel') === 'Elettrica') $('input[value="electric"]', form).checked = true;
      if (params.get('type')) {
        const categories = { SUV: 'suv', Avant: 'avant', Sportback: 'sportback' };
        const input = $('input[value="' + categories[params.get('type')] + '"]', form);
        if (input) input.checked = true;
      }

      const refresh = () => {
        const data = new FormData(form);
        const query = data.get('query').trim().toLocaleLowerCase('it');
        const traction = data.getAll('traction');
        const family = data.getAll('family');
        const category = data.getAll('category');
        const filtered = AUDI_MODELS.filter(car => {
          const drive = car.fuel === 'Elettrico' ? 'electric' : car.fuel === 'Ibrido' ? 'hybrid' : 'combustion';
          return (!electricOnly || car.fuel === 'Elettrico') &&
            (!query || car.name.toLocaleLowerCase('it').includes(query)) &&
            (!traction.length || traction.includes(drive)) &&
            (!family.length || family.includes(car.family) || (family.includes('new') && car.new)) &&
            (!category.length || category.some(value => car.categories.includes(value)));
        });
        const grouped = !electricOnly && !showVersions && !query && !traction.length && !family.length && !category.length;
        const grid = $('#model-grid');
        grid.classList.toggle('is-families', grouped);
        grid.replaceChildren();
        if (grouped) {
          AUDI_FAMILIES.forEach(family => {
            const fragment = cloneTemplate('family-card');
            const button = $('button', fragment);
            button.dataset.family = family.id;
            $('.family-name', fragment).textContent = family.name;
            const count = AUDI_MODELS.filter(car => car.family === family.id).length;
            $('.family-count', fragment).textContent = count + (count === 1 ? ' modello' : ' modelli');
            $('img', fragment).src = family.image;
            $('img', fragment).alt = 'Audi ' + family.name;
            grid.append(fragment);
          });
        } else {
          filtered.forEach(car => {
            const fragment = cloneTemplate('official-card');
            $('h2', fragment).textContent = car.name;
            $('img', fragment).src = car.image;
            $('img', fragment).alt = 'Audi ' + car.name;
            $('.model-fuel', fragment).textContent = car.fuel === 'Ibrido' ? 'Plug-in hybrid' : car.fuel;
            $('.model-new', fragment).hidden = !car.new;
            $('.model-price', fragment).textContent = this.price(car);
            $$('a', fragment).forEach(link => { link.href = '#/modello?id=' + car.id; });
            const checkbox = $('input', fragment);
            checkbox.dataset.officialCompare = car.id;
            checkbox.checked = this.selected.has(car.id);
            checkbox.setAttribute('aria-label', 'Confronta ' + car.name);
            grid.append(fragment);
          });
        }
        $('#model-count').textContent = grouped ? 'Mostra tutti · 58 modelli / 16 famiglie' : filtered.length + ' modelli nella selezione';
        $('#model-empty').hidden = filtered.length > 0;
        $('#show-all-models').textContent = grouped ? 'Mostra tutte le versioni' : 'Torna alle famiglie';
        const state = new URLSearchParams();
        if (query) state.set('query', data.get('query'));
        for (const [key, values] of Object.entries({ traction, family, category })) {
          if (values.length) state.set(key, values.join(','));
        }
        if (showVersions) state.set('view', 'models');
        history.replaceState(null, '', (electricOnly ? '#/elettrico' : '#/gamma') + (state.size ? '?' + state : ''));
        this.updateComparison();
      };
      const clearFilters = () => {
        $$('input[type="checkbox"]', form).forEach(input => { input.checked = false; });
        form.elements.query.value = '';
        showVersions = false;
      };
      Controller.listen(form, 'input', refresh);
      Controller.listen(form, 'submit', event => event.preventDefault());
      Controller.listen(form, 'reset', event => {
        event.preventDefault(); clearFilters(); refresh();
      });
      Controller.listen($('#show-all-models'), 'click', () => {
        const wasGrouped = $('#model-grid').classList.contains('is-families');
        clearFilters(); showVersions = wasGrouped; refresh();
      });
      Controller.listen($('#model-grid'), 'click', event => {
        const card = event.target.closest('[data-family]');
        if (!card) return;
        clearFilters();
        $('input[name="family"][value="' + card.dataset.family + '"]', form).checked = true;
        refresh();
        $('#model-count').scrollIntoView({ block: 'center', behavior: 'smooth' });
      });
      Controller.listen($('#model-grid'), 'change', event => {
        const input = event.target;
        if (!input.matches('[data-official-compare]')) return;
        if (input.checked && this.selected.size === 3) {
          input.checked = false;
          View.toast('Puoi confrontare fino a 3 modelli.');
          return;
        }
        input.checked ? this.selected.add(input.dataset.officialCompare) : this.selected.delete(input.dataset.officialCompare);
        this.updateComparison();
      });
      Controller.listen($('#clear-models'), 'click', () => { this.selected.clear(); refresh(); });
      Controller.listen($('#compare-models'), 'click', () => this.compare());
      refresh();
    },

    updateComparison() {
      $('#model-compare-bar').hidden = this.selected.size === 0;
      $('#model-compare-count').textContent = this.selected.size + ' modelli selezionati · scegli da 2 a 3';
      $('#compare-models').disabled = this.selected.size < 2;
    },

    compare() {
      const cars = AUDI_MODELS.filter(car => this.selected.has(car.id));
      if (cars.length < 2) return;
      const head = $('#comparison-table thead');
      const body = $('#comparison-table tbody');
      head.replaceChildren(); body.replaceChildren();
      $('#comparison-table caption').textContent = 'Gamma Audi — dati consultati il 21/10/2026';
      const row = (parent, label, values, heading = false) => {
        const tr = document.createElement('tr');
        [label, ...values].forEach((value, index) => {
          const cell = document.createElement(heading || index === 0 ? 'th' : 'td');
          if (heading || index === 0) cell.scope = heading ? 'col' : 'row';
          cell.textContent = value;
          tr.append(cell);
        });
        parent.append(tr);
      };
      row(head, 'Modello', cars.map(car => car.name), true);
      row(body, 'Prezzo di partenza', cars.map(car => this.price(car)));
      row(body, 'Famiglia', cars.map(car => AUDI_FAMILIES.find(f => f.id === car.family).name));
      row(body, 'Alimentazione', cars.map(car => car.fuel === 'Ibrido' ? 'Plug-in hybrid' : car.fuel));
      const links = document.createElement('tr');
      const title = document.createElement('th'); title.scope = 'row'; title.textContent = 'Scheda completa'; links.append(title);
      cars.forEach(car => {
        const cell = document.createElement('td');
        const link = document.createElement('a');
        link.href = car.url; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Consulta Audi.it ↗';
        cell.append(link); links.append(cell);
      });
      body.append(links);
      $('#compare-dialog').showModal();
    },

    detail(params) {
      const car = AUDI_MODELS.find(item => item.id === params.get('id'));
      if (!car) { $('#main').replaceChildren(cloneTemplate('missing-car')); return; }
      document.title = car.name + ' | Audi Showroom';
      $('#official-name').textContent = car.name;
      $('#official-family').textContent = 'Gamma ' + AUDI_FAMILIES.find(f => f.id === car.family).name;
      $('#official-fuel').textContent = car.fuel === 'Ibrido' ? 'Plug-in hybrid' : car.fuel;
      $('#official-price').textContent = this.price(car);
      $('#official-photo').src = car.image; $('#official-photo').alt = 'Audi ' + car.name;
      $('#official-url').href = car.url;
      $('#official-contact').href = '#/contatti?modello=' + car.id + '&motivo=Informazioni';
    }
  };

  // USATO — Model: copia degli annunci Audi Italia consultati il 23/10/2026.
  // Non è un collegamento in tempo reale; aggiornare i dati con una nuova verifica.
  const USED_CARS = [
  {
    "id": "SVRBMzE4ODE4ODE1MDQ3=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Admired Advanced 30 TFSI 81 kW (110 PS) 6-marce",
    "price": 19400,
    "km": 69200,
    "fuel": "Benzina",
    "registration": "1 feb 2022",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6853/4753026853.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODE4ODE1MDQ3="
  },
  {
    "id": "SVRBMzE5MTYxMDM1ODc3OA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 21000,
    "km": 19031,
    "fuel": "Benzina",
    "registration": "1 apr 2023",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/6898/4511776898.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDM1ODc3OA="
  },
  {
    "id": "SVRBMDA5NTYxMDQ4ODMzMA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 21500,
    "km": 70129,
    "fuel": "Benzina",
    "registration": "1 apr 2023",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1383/4750801383.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDQ4ODMzMA="
  },
  {
    "id": "SVRBMDA4MDU4NDY2MDQ3=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 23200,
    "km": 43599,
    "fuel": "Benzina",
    "registration": "1 mar 2023",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/5848/4785755848.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDU4NDY2MDQ3="
  },
  {
    "id": "SVRBMzE4ODExMDE0MTAyNg=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 23400,
    "km": 12260,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1233/4753031233.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDE0MTAyNg="
  },
  {
    "id": "SVRBMzE4ODExMDI5NDYxOQ=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "",
    "price": 23400,
    "km": 7135,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0460/4753030460.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDI5NDYxOQ="
  },
  {
    "id": "SVRBMzE4ODE5NTg3NjMx=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "",
    "price": 23400,
    "km": 3410,
    "fuel": "Benzina",
    "registration": "1 lug 2024",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1330/4753031330.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODE5NTg3NjMx="
  },
  {
    "id": "SVRBMzE4ODE5OTY4ODMy=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24400,
    "km": 39500,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0448/4802260448.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODE5OTY4ODMy="
  },
  {
    "id": "SVRBMzE2MDAxMDUwOTgxMA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24900,
    "km": 60747,
    "fuel": "Benzina",
    "registration": "1 gen 2023",
    "city": "ALTAMURA",
    "dealer": "MAGNIFICA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0711/4769420711.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDAxMDUwOTgxMA="
  },
  {
    "id": "SVRBMDA3ODQxMDU4OTk3NQ=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 10760,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4873/4785754873.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDU4OTk3NQ="
  },
  {
    "id": "SVRBMDA3ODQxMDU5MzE4NQ=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 5145,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7743/4750697743.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDU5MzE4NQ="
  },
  {
    "id": "SVRBMzE4ODExMDYzMzYzNw=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 25300,
    "km": 30000,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0410/4753030410.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDYzMzYzNw="
  },
  {
    "id": "SVRBMDA4MDU4NDc2ODQ2=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25500,
    "km": 35000,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/1747/4750711747.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDU4NDc2ODQ2="
  },
  {
    "id": "SVRBMDA4NjUxMDYwNjA0OA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "",
    "price": 26700,
    "km": 5301,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1794/4785781794.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDYwNjA0OA="
  },
  {
    "id": "SVRBMDA4NzAxMDU0ODQzMg=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 14955,
    "fuel": "Benzina",
    "registration": "1 dic 2024",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5773/4785775773.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDU0ODQzMg="
  },
  {
    "id": "SVRBMDA4NjExMDI4MjAwMA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 4660,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/3505/4785763505.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDI4MjAwMA="
  },
  {
    "id": "SVRBMDA4MDU5OTA4OTY0=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27600,
    "km": 10027,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4656/4750714656.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDU5OTA4OTY0="
  },
  {
    "id": "SVRBMzE4NDIxMDEzNTIxMA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28200,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/3125/4767133125.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDEzNTIxMA="
  },
  {
    "id": "SVRBMDA4NjM5NDU4NTgy=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 28900,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 dic 2024",
    "city": "FAVARA",
    "dealer": "MERIDIANO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6117/4785776117.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjM5NDU4NTgy="
  },
  {
    "id": "SVRBMDA3ODQxMDU5MzE4Nw=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31400,
    "km": 7095,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4724/4785754724.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDU5MzE4Nw="
  },
  {
    "id": "SVRBMDA4MDUxMDUwNzcyOQ=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31900,
    "km": 12,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/5907/4785755907.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDUwNzcyOQ="
  },
  {
    "id": "SVRBMDA4MDUxMDU5ODQzMA=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32900,
    "km": 11,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/9246/4789969246.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDU5ODQzMA="
  },
  {
    "id": "SVRBMDA4MDUxMDM3OTc3Nw=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32950,
    "km": 12,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4741/4750714741.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDM3OTc3Nw="
  },
  {
    "id": "SVRBMDA4MDU5NzQxNzYw=",
    "name": "Audi A1",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33200,
    "km": 8,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4170/4750714170.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDU5NzQxNzYw="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDk2NzQx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 PS) 5-marce",
    "price": 15900,
    "km": 116003,
    "fuel": "Benzina",
    "registration": "1 nov 2021",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3892/4750753892.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDk2NzQx="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDk2NzM4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 PS) 5-marce",
    "price": 15900,
    "km": 111053,
    "fuel": "Benzina",
    "registration": "1 ott 2021",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1839/4785781839.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDk2NzM4="
  },
  {
    "id": "SVRBMzE4ODExMDAwNTQxMTA4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 30 TFSI 85 kW (116 PS) S tronic",
    "price": 16400,
    "km": 135630,
    "fuel": "Benzina",
    "registration": "1 dic 2019",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1231/4790051231.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNTQxMTA4="
  },
  {
    "id": "SVRBMzE4ODExMDAwNTc1MTI3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 85 kW (116 PS) S tronic",
    "price": 17400,
    "km": 99190,
    "fuel": "Benzina",
    "registration": "1 apr 2019",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9355/4758439355.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNTc1MTI3="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNDA1OTE2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "30 TFSI 85 kW (116 PS) 6-marce",
    "price": 17900,
    "km": 26789,
    "fuel": "Benzina",
    "registration": "1 feb 2019",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2002/4802922002.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNDA1OTE2="
  },
  {
    "id": "SVRBMzE5MTYxMDgxODY4MQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 18400,
    "km": 89580,
    "fuel": "Benzina",
    "registration": "1 mag 2023",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/4575/4528834575.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDgxODY4MQ="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMzQ3NjYx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 18500,
    "km": 91560,
    "fuel": "Benzina",
    "registration": "1 mag 2019",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3211/4750753211.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMzQ3NjYx="
  },
  {
    "id": "SVRBMDA3ODQxMDAwMTkxMjAw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 85 kW (116 PS) S tronic",
    "price": 18600,
    "km": 86923,
    "fuel": "Benzina",
    "registration": "1 lug 2019",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7503/4750697503.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwMTkxMjAw="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNjgwOTgy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 18600,
    "km": 57158,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/6133/4813706133.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNjgwOTgy="
  },
  {
    "id": "SVRBMDA4OTkxMDAwMjAxMTM2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 PS) S tronic",
    "price": 18800,
    "km": 75926,
    "fuel": "Benzina",
    "registration": "1 gen 2021",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6840/4785786840.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwMjAxMTM2="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNDUzMDk2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 35 TFSI 110 kW (150 PS) S tronic",
    "price": 18800,
    "km": 104344,
    "fuel": "Benzina",
    "registration": "1 mag 2020",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/0649/4785790649.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNDUzMDk2="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNjEzNzc0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 18800,
    "km": 52703,
    "fuel": "Benzina",
    "registration": "1 gen 2020",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/4177/4816074177.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNjEzNzc0="
  },
  {
    "id": "SVRBMDA1MzgxMDAwMTE2NzIz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 25 TFSI 70 kW (95 PS) 5-marce",
    "price": 18900,
    "km": 63557,
    "fuel": "Benzina",
    "registration": "1 feb 2021",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/8646/4816728646.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDAwMTE2NzIz="
  },
  {
    "id": "SVRBMDA4NDIxMDAwNTY4MzIz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 PS) S tronic",
    "price": 18900,
    "km": 119901,
    "fuel": "Benzina",
    "registration": "1 giu 2021",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/8078/4768268078.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDAwNTY4MzIz="
  },
  {
    "id": "SVRBMDA4NDIxMDAwNzA0NjY0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 18900,
    "km": 60780,
    "fuel": "Benzina",
    "registration": "1 gen 2020",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/7495/4797327495.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDAwNzA0NjY0="
  },
  {
    "id": "SVRBMDA4NjExMDAwNjMxODAx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 PS) 5-marce",
    "price": 18900,
    "km": 43000,
    "fuel": "Benzina",
    "registration": "1 mag 2020",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/1061/4799091061.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDAwNjMxODAx="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNjM3ODk1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 30 TFSI 81 kW (110 PS) S tronic",
    "price": 18900,
    "km": 68327,
    "fuel": "Benzina",
    "registration": "1 ago 2021",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/4340/4813774340.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNjM3ODk1="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNDEzNjUw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 18950,
    "km": 56079,
    "fuel": "Benzina",
    "registration": "1 giu 2019",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/4343/4785794343.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNDEzNjUw="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDg4Nzcz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 30 TFSI 81 kW (110 PS) 6-marce",
    "price": 19400,
    "km": 70637,
    "fuel": "Benzina",
    "registration": "1 lug 2021",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3602/4750753602.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDg4Nzcz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNTM5MTUw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 19400,
    "km": 67327,
    "fuel": "Benzina",
    "registration": "1 ott 2022",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/5983/4750725983.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNTM5MTUw="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNTg2ODEx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 30 TFSI 85 kW (116 PS) S tronic",
    "price": 19400,
    "km": 75275,
    "fuel": "Benzina",
    "registration": "1 feb 2020",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2487/4763402487.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNTg2ODEx="
  },
  {
    "id": "SVRBMDA3ODQxMDAwMjE0NjU5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 PS) 6-marce",
    "price": 19500,
    "km": 84440,
    "fuel": "Benzina",
    "registration": "1 feb 2021",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2211/4777022211.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwMjE0NjU5="
  },
  {
    "id": "SVRBMDA3ODQxMDAwNTY5OTk2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 35 TFSI 110 kW (150 PS) S tronic",
    "price": 19500,
    "km": 108903,
    "fuel": "Benzina",
    "registration": "1 lug 2019",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6697/4754366697.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwNTY5OTk2="
  },
  {
    "id": "SVRBMzE1NjMxMDAwNTk5Mzkw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 PS) S tronic",
    "price": 19500,
    "km": 83800,
    "fuel": "Benzina",
    "registration": "1 gen 2021",
    "city": "LA SPEZIA",
    "dealer": "BROTINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6098/4767116098.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NjMxMDAwNTk5Mzkw="
  },
  {
    "id": "SVRBMDA3ODQxMDAwNTU1MTI4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 PS) S tronic",
    "price": 19500,
    "km": 89235,
    "fuel": "Benzina",
    "registration": "1 gen 2021",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9176/4775059176.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwNTU1MTI4="
  },
  {
    "id": "SVRBMDA2MDgxMDAwMTEwMDcy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 PS) S tronic",
    "price": 19900,
    "km": 46564,
    "fuel": "Benzina",
    "registration": "1 feb 2022",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/8979/4750658979.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwMTEwMDcy="
  },
  {
    "id": "SVRBMDA4NDkxMDAwNTA1MDM4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 PS) S tronic",
    "price": 19900,
    "km": 72309,
    "fuel": "Benzina",
    "registration": "1 ott 2020",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1121/4750711121.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwNTA1MDM4="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNjY5NDcw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 19900,
    "km": 43983,
    "fuel": "Benzina",
    "registration": "1 nov 2022",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6117/4789976117.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNjY5NDcw="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNDI0NjI0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 19900,
    "km": 43563,
    "fuel": "Benzina",
    "registration": "1 nov 2022",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6111/4791186111.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNDI0NjI0="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNDI0MTI1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 20400,
    "km": 47798,
    "fuel": "Benzina",
    "registration": "1 feb 2023",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/6161/4816076161.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNDI0MTI1="
  },
  {
    "id": "SVRBMDA3ODQxMDAwMzk2NDAy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 20500,
    "km": 72317,
    "fuel": "Benzina",
    "registration": "1 set 2023",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7100/4750697100.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwMzk2NDAy="
  },
  {
    "id": "SVRBMDA3ODQxMDAwNTM1NTYz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 PS) 6-marce",
    "price": 20500,
    "km": 23570,
    "fuel": "Benzina",
    "registration": "1 mag 2021",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4231/4785754231.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwNTM1NTYz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzA3MjQ1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 20950,
    "km": 35828,
    "fuel": "Benzina",
    "registration": "1 ott 2022",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6895/4750726895.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzA3MjQ1="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNzAzMDk2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 21200,
    "km": 31868,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0524/4797380524.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNzAzMDk2="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNzI2NDg4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 21200,
    "km": 46050,
    "fuel": "Benzina",
    "registration": "1 feb 2023",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/1941/4802261941.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNzI2NDg4="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMTM5NjI2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 21400,
    "km": 38571,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/4214/4750764214.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMTM5NjI2="
  },
  {
    "id": "SVRBMDA3ODQxMDAwNzc5OTY5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 81 kW (110 CV) S tronic",
    "price": 21400,
    "km": 42351,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8842/4813668842.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwNzc5OTY5="
  },
  {
    "id": "SVRBMzE5NjExMDU5ODY1NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 21490,
    "km": 42330,
    "fuel": "Benzina",
    "registration": "1 nov 2022",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0418/4802260418.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDU5ODY1NQ="
  },
  {
    "id": "SVRBMzExMDAxMDAwNTI1NTA4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 PS) 6-marce",
    "price": 21500,
    "km": 88327,
    "fuel": "Benzina",
    "registration": "1 mar 2021",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/3715/4752883715.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNTI1NTA4="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNzUzNDIx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 21500,
    "km": 34847,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/7590/4815487590.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNzUzNDIx="
  },
  {
    "id": "SVRBMzE5MTYxMDczNTY2MA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 PS) S tronic",
    "price": 21800,
    "km": 38962,
    "fuel": "Benzina",
    "registration": "1 giu 2022",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/5287/4528835287.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDczNTY2MA="
  },
  {
    "id": "SVRBMDA4OTkxMDAwNjQyODYy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 21800,
    "km": 54748,
    "fuel": "Benzina",
    "registration": "1 ott 2022",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6132/4789986132.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwNjQyODYy="
  },
  {
    "id": "SVRBMDA2MjIxMDkxNTkxOQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 PS) 6-marce",
    "price": 21900,
    "km": 24000,
    "fuel": "Benzina",
    "registration": "1 nov 2021",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/9526/4789919526.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDkxNTkxOQ="
  },
  {
    "id": "SVRBMDAzMDYxMDAwMDYxMDY0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 PS) S tronic",
    "price": 21900,
    "km": 72814,
    "fuel": "Benzina",
    "registration": "1 nov 2021",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2784/4785702784.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwMDYxMDY0="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNDQzNTA5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 25 TFSI 70 kW (95 CV) S tronic",
    "price": 21900,
    "km": 48514,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6203/4750706203.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNDQzNTA5="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNDk0MzM0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 25 TFSI 70 kW (95 CV) S tronic",
    "price": 21900,
    "km": 36078,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/9311/4797449311.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNDk0MzM0="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNzQxOTkx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 35 TFSI 110 kW (150 PS) S tronic",
    "price": 21990,
    "km": 88110,
    "fuel": "Benzina",
    "registration": "1 gen 2022",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/1631/4802941631.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNzQxOTkx="
  },
  {
    "id": "SVRBMzE2NTExMDAwMTcyNzEz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 22400,
    "km": 29482,
    "fuel": "Benzina",
    "registration": "1 apr 2023",
    "city": "PARMA",
    "dealer": "EUROCAR PARMA",
    "image": "https://vtpimages.audi.com/carimg2/6051/4753006051.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2NTExMDAwMTcyNzEz="
  },
  {
    "id": "SVRBMDA2MjIxMDAwMDg3Njkw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 25 TFSI 70 kW (95 PS) S tronic",
    "price": 22500,
    "km": 59505,
    "fuel": "Benzina",
    "registration": "1 mag 2022",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/9468/4750659468.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwMDg3Njkw="
  },
  {
    "id": "SVRBMzE4NDIxMDAwMTg4OTk1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 22750,
    "km": 12777,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/0114/4816050114.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDAwMTg4OTk1="
  },
  {
    "id": "SVRBMDA4NDIxMDAwMDk2OTA1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 22750,
    "km": 10500,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/9345/4750709345.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDAwMDk2OTA1="
  },
  {
    "id": "SVRBODA2MTMxMDY5MDk4Nw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 PS) 5-marce",
    "price": 22800,
    "km": 43432,
    "fuel": "Benzina",
    "registration": "1 apr 2021",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7585/4418137585.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY5MDk4Nw="
  },
  {
    "id": "SVRBMzEyODgxMDAwNDM3NjAy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 22900,
    "km": 19837,
    "fuel": "Benzina",
    "registration": "1 apr 2024",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/9553/4752909553.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNDM3NjAy="
  },
  {
    "id": "SVRBMzEyODgxMDAwMzIwODg2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) S tronic",
    "price": 22900,
    "km": 16127,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/0604/4791240604.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwMzIwODg2="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNjYwODc5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 22900,
    "km": 33385,
    "fuel": "Benzina",
    "registration": "1 mar 2023",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/9422/4788019422.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNjYwODc5="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzI2Nzcz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 81 kW (110 CV) S tronic",
    "price": 22900,
    "km": 73409,
    "fuel": "Benzina",
    "registration": "1 mag 2023",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/0676/4800950676.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzI2Nzcz="
  },
  {
    "id": "SVRBMzI2MDIxMDAwNzQzNDAx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 22900,
    "km": 23745,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "MILANO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4344/4802944344.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzI2MDIxMDAwNzQzNDAx="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzU1NTE0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 23200,
    "km": 67775,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9369/4785759369.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzU1NTE0="
  },
  {
    "id": "SVRBMzE4ODExMDAwMjA1ODM4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23400,
    "km": 12460,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9314/4753029314.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwMjA1ODM4="
  },
  {
    "id": "SVRBMDA4NjExMDc0NjMzNw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 23500,
    "km": 36878,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/2287/4750722287.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDc0NjMzNw="
  },
  {
    "id": "SVRBMzE5MTYxMDAwMTM5NjI4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23500,
    "km": 9969,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/4127/4528834127.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDAwMTM5NjI4="
  },
  {
    "id": "SVRBMDA4NjExMDAwMTQ0MzM0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 23500,
    "km": 20734,
    "fuel": "Benzina",
    "registration": "1 feb 2023",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5142/4785765142.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDAwMTQ0MzM0="
  },
  {
    "id": "SVRBMDA4NjExMDAwNTIzMjIx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 23500,
    "km": 38029,
    "fuel": "Benzina",
    "registration": "1 mar 2023",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5013/4785765013.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDAwNTIzMjIx="
  },
  {
    "id": "SVRBMDA2MjIxMDAwNTIyNTcx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 23500,
    "km": 39589,
    "fuel": "Benzina",
    "registration": "1 apr 2023",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/1681/4752481681.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwNTIyNTcx="
  },
  {
    "id": "SVRBMDA4MjI4NzY0MzA0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23500,
    "km": 1117,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6378/4785756378.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjI4NzY0MzA0="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNTMyOTAz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23600,
    "km": 11541,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/2792/4750762792.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNTMyOTAz="
  },
  {
    "id": "SVRBMDA4NjUxMDgwNzE1Mw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "25 TFSI 70 kW (95 CV) 5-marce",
    "price": 23800,
    "km": 14250,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/4179/4750754179.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDgwNzE1Mw="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMzA0NzI1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 23800,
    "km": 24660,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4285/4750714285.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMzA0NzI1="
  },
  {
    "id": "SVRBMDA4MzExMDAwNzE1Mjkz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 23800,
    "km": 33520,
    "fuel": "Benzina",
    "registration": "1 set 2024",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/0721/4799090721.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDAwNzE1Mjkz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzUyNDQ0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired Advanced 25 TFSI 70 kW (95 CV) S tronic",
    "price": 23850,
    "km": 31466,
    "fuel": "Benzina",
    "registration": "1 apr 2024",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/7693/4785757693.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzUyNDQ0="
  },
  {
    "id": "SVRBMDA2MTIxMDAwMDI4ODg3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23900,
    "km": 8510,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "DESIO",
    "dealer": "LOMBARDA MOTORI",
    "image": "https://vtpimages.audi.com/carimg2/6768/4750656768.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MTIxMDAwMDI4ODg3="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTE1OTc4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23900,
    "km": 7986,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6757/4750796757.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTE1OTc4="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTE1OTgw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23900,
    "km": 3609,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2283/4785822283.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTE1OTgw="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTE1OTcy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23900,
    "km": 7756,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8145/4785828145.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTE1OTcy="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTE1OTc1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 23900,
    "km": 5853,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6466/4785826466.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTE1OTc1="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNTAzNDMx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 23900,
    "km": 8698,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/8537/4789988537.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNTAzNDMx="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNjU3MTI5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 47476,
    "fuel": "Benzina",
    "registration": "1 set 2023",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3984/4787863984.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNjU3MTI5="
  },
  {
    "id": "SVRBMDA3NTQxMDAwNzQ1NzIx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 42016,
    "fuel": "Benzina",
    "registration": "1 mag 2023",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6810/4802186810.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDAwNzQ1NzIx="
  },
  {
    "id": "SVRBMDA4MDMxMDg1NzQ1MQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24200,
    "km": 5156,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/4613/4750724613.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDg1NzQ1MQ="
  },
  {
    "id": "SVRBMzA1MjUxMDAwMzY4OTI1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 24250,
    "km": 70834,
    "fuel": "Benzina",
    "registration": "1 dic 2022",
    "city": "ROMA",
    "dealer": "AUTOCENTRI BALDUINA",
    "image": "https://vtpimages.audi.com/carimg2/4253/4813744253.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA1MjUxMDAwMzY4OTI1="
  },
  {
    "id": "SVRBMDA4NjUxMDAwODIxMTc3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24300,
    "km": 41751,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5025/4815595025.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwODIxMTc3="
  },
  {
    "id": "SVRBMzE2MDIxMDAwMTA5NjM5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24400,
    "km": 9660,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0765/4752940765.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwMTA5NjM5="
  },
  {
    "id": "SVRBMzE4ODExMDAwNzA2NTU0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 24400,
    "km": 31000,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0631/4797450631.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNzA2NTU0="
  },
  {
    "id": "SVRBODA2MTMxMDc1NjMwMQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24500,
    "km": 16825,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/6891/4418136891.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDc1NjMwMQ="
  },
  {
    "id": "SVRBMzE5MTYxMDAwMDkzMjA1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 24500,
    "km": 23591,
    "fuel": "Benzina",
    "registration": "1 mar 2024",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/4887/4528834887.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDAwMDkzMjA1="
  },
  {
    "id": "SVRBMDA4MDAxMDAwNTc3OTQ0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 24500,
    "km": 35512,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "SESTO SAN GIOVANNI",
    "dealer": "SESTO AUTOVEICOLI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4150/4791184150.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDAxMDAwNTc3OTQ0="
  },
  {
    "id": "SVRBMzEwMzYxMDAwNTU2OTQ3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 24500,
    "km": 3780,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/8547/4769418547.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwNTU2OTQ3="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNDA0Njg3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24700,
    "km": 8766,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6244/4750706244.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNDA0Njg3="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDE3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24700,
    "km": 6801,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6605/4750726605.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDE3="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDE5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24800,
    "km": 9339,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6514/4750726514.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDE5="
  },
  {
    "id": "SVRBMDA3ODQxMDAwNjQ4MTcy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line edition 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24800,
    "km": 37897,
    "fuel": "Benzina",
    "registration": "1 dic 2022",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4613/4780744613.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwNjQ4MTcy="
  },
  {
    "id": "SVRBMzE4NDIxMDAwMTg4OTk4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24800,
    "km": 6405,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/9617/4781509617.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDAwMTg4OTk4="
  },
  {
    "id": "SVRBMzE5MTYxMDY2MTM0OA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24850,
    "km": 3930,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/6885/4511776885.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDY2MTM0OA="
  },
  {
    "id": "SVRBODA2MTMxMDY1MzQzNw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 7329,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8175/4418138175.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY1MzQzNw="
  },
  {
    "id": "SVRBMDA1MzgxMDgwMjQyNA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 8207,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1309/4750641309.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDgwMjQyNA="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMTc1MjIx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 24900,
    "km": 7287,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/4189/4750764189.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMTc1MjIx="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDEy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 5309,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6626/4750726626.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDEy="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNDUzMDg4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 2954,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/6082/4789986082.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNDUzMDg4="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTE1OTcz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 10259,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8491/4750798491.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTE1OTcz="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTE1OTc3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 5042,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1959/4790011959.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTE1OTc3="
  },
  {
    "id": "SVRBMzEyMjAxMDAwNjU3MDA2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 24900,
    "km": 62812,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "PIACENZA",
    "dealer": "BOSSONI PIACENZA",
    "image": "https://vtpimages.audi.com/carimg2/2132/4790042132.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyMjAxMDAwNjU3MDA2="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzM4NzM5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 10933,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/3046/4802203046.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzM4NzM5="
  },
  {
    "id": "SVRBMzEwOTcxMDAwNTc2ODc3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24900,
    "km": 6086,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "SAN MARTINO SICCOMARIO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1295/4816041295.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwOTcxMDAwNTc2ODc3="
  },
  {
    "id": "SVRBMzE2MDIxMDAwODI1MzI3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24900,
    "km": 32200,
    "fuel": "Benzina",
    "registration": "1 set 2024",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2650/4816772650.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwODI1MzI3="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDI0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24950,
    "km": 3790,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6493/4750726493.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDI0="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNTc3MzQx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 24990,
    "km": 8782,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/9014/4802259014.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNTc3MzQx="
  },
  {
    "id": "SVRBMzE4ODExMDAwNzUwMTY2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25000,
    "km": 37400,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3155/4802943155.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNzUwMTY2="
  },
  {
    "id": "SVRBODA2MTMxMDY1NzU5Nw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25500,
    "km": 10875,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7774/4418137774.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY1NzU5Nw="
  },
  {
    "id": "SVRBODA2MTMxMDcxMDI3OQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25500,
    "km": 6508,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7283/4418137283.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDcxMDI3OQ="
  },
  {
    "id": "SVRBMDAzMDYxMDAwMzQ5MjQ1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25500,
    "km": 7180,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2457/4785702457.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwMzQ5MjQ1="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNDAwODU4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25500,
    "km": 21335,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/7969/4791237969.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNDAwODU4="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNjI4NTMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25500,
    "km": 22283,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/7844/4777017844.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNjI4NTMw="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNTc3MzQz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25590,
    "km": 13303,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/1630/4767131630.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNTc3MzQz="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNTg4MDI3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25590,
    "km": 6582,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/1471/4788021471.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNTg4MDI3="
  },
  {
    "id": "SVRBMzE5MTYxMDc2NzA4OQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25700,
    "km": 7858,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/4873/4528834873.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDc2NzA4OQ="
  },
  {
    "id": "SVRBMDA4NjUxMDg1NzcwMA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25700,
    "km": 4358,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3774/4750753774.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDg1NzcwMA="
  },
  {
    "id": "SVRBMDA3ODQxMDcxNzQyMg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25800,
    "km": 5961,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7941/4789947941.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDcxNzQyMg="
  },
  {
    "id": "SVRBMzE5MTYxMDAwMTM5NjMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25800,
    "km": 9314,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/1326/4528831326.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDAwMTM5NjMw="
  },
  {
    "id": "SVRBMzE5MTYxMDgxODY4Mw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 15,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/6670/4511776670.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDgxODY4Mw="
  },
  {
    "id": "SVRBMDA1MzgxMDgwNTc4NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 6571,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1447/4750641447.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDgwNTc4NQ="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMTc1MjIy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 11007,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/3919/4750763919.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMTc1MjIy="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMzI2MjQx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 10832,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/3813/4750763813.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMzI2MjQx="
  },
  {
    "id": "SVRBMzEwMzYxMDAwMzkzMzMy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 9783,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/3080/4767103080.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwMzkzMzMy="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMDcxODEw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 4325,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/8739/4799178739.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMDcxODEw="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMDI5MDU2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 13671,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/1867/4753001867.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMDI5MDU2="
  },
  {
    "id": "SVRBMzE3MzAxMDgzOTc1Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 2426,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/3124/4769423124.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDgzOTc1Mg="
  },
  {
    "id": "SVRBMzE3MzAxMDg3MDIwMA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 8058,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2477/4753002477.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDg3MDIwMA="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNTIzNjQ1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 6779,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/8096/4789988096.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNTIzNjQ1="
  },
  {
    "id": "SVRBMDA2MjIxMDAwNTQ0NTQ5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25900,
    "km": 25523,
    "fuel": "Benzina",
    "registration": "1 set 2024",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/5237/4781985237.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwNTQ0NTQ5="
  },
  {
    "id": "SVRBMDA2MDgxMDAwNTcxMzkw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 2694,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/8936/4785728936.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwNTcxMzkw="
  },
  {
    "id": "SVRBMzA4ODIxMDAwNjM1ODky=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 4125,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "SIRACUSA",
    "dealer": "S.TUMINO S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9322/4790039322.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4ODIxMDAwNjM1ODky="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNjQ4NzMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 22592,
    "fuel": "Benzina",
    "registration": "1 set 2024",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/7077/4813657077.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNjQ4NzMw="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNjQ4NzI5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25900,
    "km": 28856,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/9165/4791999165.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNjQ4NzI5="
  },
  {
    "id": "SVRBMzA4ODIxMDQyNTI0Ng=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 14000,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "SIRACUSA",
    "dealer": "S.TUMINO S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7248/4802257248.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4ODIxMDQyNTI0Ng="
  },
  {
    "id": "SVRBMzE5NjExMDAwMTkwODky=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 25990,
    "km": 2723,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6092/4753026092.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDAwMTkwODky="
  },
  {
    "id": "SVRBMzE1NDgxMDAwMzUyNTQz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26000,
    "km": 7897,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7844/4752897844.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwMzUyNTQz="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNTM3Nzkz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26000,
    "km": 5508,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9610/4752899610.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNTM3Nzkz="
  },
  {
    "id": "SVRBMzE1NDgxMDgxNDc1Mw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26200,
    "km": 7652,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6138/4802256138.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDgxNDc1Mw="
  },
  {
    "id": "SVRBMDA4MjIxMDAwMjc4MzY1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26400,
    "km": 7597,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6599/4750706599.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwMjc4MzY1="
  },
  {
    "id": "SVRBMzE5NjExMDAwMzc2NDUz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26490,
    "km": 5246,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9643/4799179643.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDAwMzc2NDUz="
  },
  {
    "id": "SVRBMDA4NjE5NTI3NDIy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26500,
    "km": 200,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5811/4785765811.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjE5NTI3NDIy="
  },
  {
    "id": "SVRBMzE1NDgxMDAwMzUyNTQx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 6157,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8325/4752898325.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwMzUyNTQx="
  },
  {
    "id": "SVRBMDAzMDYxMDAwMzcwNzA4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 9938,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2454/4785702454.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwMzcwNzA4="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNDQzNTEz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 7070,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/4453/4750704453.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNDQzNTEz="
  },
  {
    "id": "SVRBMzE3MzAxMDY3MjM5OA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 8092,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2297/4753002297.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDY3MjM5OA="
  },
  {
    "id": "SVRBMDA1MzAxMDAwNjYwMDkz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 8264,
    "fuel": "Benzina",
    "registration": "1 nov 2024",
    "city": "MARTINA FRANCA",
    "dealer": "BASILE",
    "image": "https://vtpimages.audi.com/carimg2/0338/4787840338.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzAxMDAwNjYwMDkz="
  },
  {
    "id": "SVRBMDA4NjExMDc3ODExNw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 3736,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5242/4785765242.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDc3ODExNw="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzM4NzQ0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 7000,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/3033/4802203033.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzM4NzQ0="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzUyNjUw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26500,
    "km": 2390,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/2141/4802922141.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzUyNjUw="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNzQxOTkw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 6695,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/1636/4802941636.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNzQxOTkw="
  },
  {
    "id": "SVRBMDA5MDMxMDAwODAyNjgx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26500,
    "km": 3633,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/5010/4815595010.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwODAyNjgx="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNTc3MzQ1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26590,
    "km": 4364,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/1699/4767131699.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNTc3MzQ1="
  },
  {
    "id": "SVRBMDA2MzUxMDAwMTgxNjg1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26700,
    "km": 7738,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/7054/4789927054.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwMTgxNjg1="
  },
  {
    "id": "SVRBMDA5NTYxMDYwNDkyOA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26800,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2141/4790012141.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDYwNDkyOA="
  },
  {
    "id": "SVRBMDA5NTYxMDYxNTk0MQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26800,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0733/4750800733.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDYxNTk0MQ="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNDUwOTEx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 26850,
    "km": 55755,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/7208/4775087208.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNDUwOTEx="
  },
  {
    "id": "SVRBMDA3NTQxMDc5NzkxNA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 6337,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6219/4750696219.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDc5NzkxNA="
  },
  {
    "id": "SVRBODA2MTMxMDcxMDI3NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 6689,
    "fuel": "Benzina",
    "registration": "1 dic 2024",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7369/4418137369.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDcxMDI3NQ="
  },
  {
    "id": "SVRBODA2MTMxMDY1MzQ1NA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 8871,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8163/4418138163.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY1MzQ1NA="
  },
  {
    "id": "SVRBMDIyMDUxMDkwMzY1Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 21234,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6578/4729426578.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDkwMzY1Mg="
  },
  {
    "id": "SVRBMDA4NjExMDc3ODExOQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 5267,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/0171/4750720171.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDc3ODExOQ="
  },
  {
    "id": "SVRBMDAxMjAxMDAwMTU0NTM1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 12184,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/9233/4750599233.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwMTU0NTM1="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNDE2NDU1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26900,
    "km": 5000,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/0469/4785730469.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNDE2NDU1="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNDM2NzQ5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 2737,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6936/4791186936.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNDM2NzQ5="
  },
  {
    "id": "SVRBMDA1MzAxMDAwNDYxNDg1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 6216,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "MARTINA FRANCA",
    "dealer": "BASILE",
    "image": "https://vtpimages.audi.com/carimg2/2269/4785712269.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzAxMDAwNDYxNDg1="
  },
  {
    "id": "SVRBMzEyODgxMDAwNDcwNTg4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 5196,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/1168/4791241168.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNDcwNTg4="
  },
  {
    "id": "SVRBMDAxMjAxMDAwMjI0MTY5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 8807,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/8875/4750598875.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwMjI0MTY5="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDAwODU4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 21335,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0102/4730670102.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDAwODU4="
  },
  {
    "id": "SVRBMzEyMjAxMDAwMDMxNDIy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 8447,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "PIACENZA",
    "dealer": "BOSSONI PIACENZA",
    "image": "https://vtpimages.audi.com/carimg2/0492/4752880492.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyMjAxMDAwMDMxNDIy="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzM4NzQz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26900,
    "km": 8189,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/2716/4802202716.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzM4NzQz="
  },
  {
    "id": "SVRBMzA1MjUxMDAwODAzNTgy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 26976,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "ROMA",
    "dealer": "AUTOCENTRI BALDUINA",
    "image": "https://vtpimages.audi.com/carimg2/7338/4816027338.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA1MjUxMDAwODAzNTgy="
  },
  {
    "id": "SVRBMzEwNjUxMDAwODE5Mzc0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 11865,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2876/4816042876.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwODE5Mzc0="
  },
  {
    "id": "SVRBMzE5NjExMDc5MTk2OQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 26990,
    "km": 10859,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6362/4753026362.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDc5MTk2OQ="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMzQ5MjQw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27000,
    "km": 6109,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6375/4729426375.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMzQ5MjQw="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMzQ5MjQx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27000,
    "km": 10187,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6369/4729426369.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMzQ5MjQx="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDIw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27200,
    "km": 6379,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6442/4750726442.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDIw="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNTgwNzUw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27200,
    "km": 7412,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/7313/4759977313.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNTgwNzUw="
  },
  {
    "id": "SVRBMzEyODgxMDAwNjA4NTYw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27400,
    "km": 7212,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/0418/4792040418.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNjA4NTYw="
  },
  {
    "id": "SVRBMDAxMjAxMDAwMjMxMjQy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27400,
    "km": 4449,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/1493/4785691493.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwMjMxMjQy="
  },
  {
    "id": "SVRBMDA1MzAxMDAwNjYwMDkx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 27400,
    "km": 16419,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "MARTINA FRANCA",
    "dealer": "BASILE",
    "image": "https://vtpimages.audi.com/carimg2/0531/4787840531.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzAxMDAwNjYwMDkx="
  },
  {
    "id": "SVRBMzEwNjUxMDAwODE5NjQ5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27400,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2785/4816042785.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwODE5NjQ5="
  },
  {
    "id": "SVRBMDA1MzgxMDgwNTc4OA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 4715,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1441/4750641441.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDgwNTc4OA="
  },
  {
    "id": "SVRBMDA1MzgxMDgwMjQyMQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 13,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1525/4750641525.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDgwMjQyMQ="
  },
  {
    "id": "SVRBMDA4NjExMDc3ODExNg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 6665,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/8655/4789978655.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDc3ODExNg="
  },
  {
    "id": "SVRBMDA1MzgxMDc5NDQyNA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 4366,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1475/4750641475.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDc5NDQyNA="
  },
  {
    "id": "SVRBMDA1MzgxMDc5NDQyNQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 12182,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1316/4750641316.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDc5NDQyNQ="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMzI0ODA4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 8537,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3146/4750753146.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMzI0ODA4="
  },
  {
    "id": "SVRBMDA4NjUxMDQ5NzkwMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27500,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2440/4789982440.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDQ5NzkwMw="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNTQ3MzQ1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 4580,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9126/4752899126.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNTQ3MzQ1="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNTgzMTQ0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27500,
    "km": 8260,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6881/4759916881.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNTgzMTQ0="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNzM5NTg2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27500,
    "km": 18500,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/5223/4802165223.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNzM5NTg2="
  },
  {
    "id": "SVRBODA2MTMxMDYwNTA0OQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 27800,
    "km": 29274,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8217/4418138217.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDYwNTA0OQ="
  },
  {
    "id": "SVRBMDA4MzExMDAwNjA3NzEy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27800,
    "km": 7940,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/2537/4769382537.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDAwNjA3NzEy="
  },
  {
    "id": "SVRBMDAzMDYxMDU2OTU2NA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 27900,
    "km": 18583,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0857/4791170857.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDU2OTU2NA="
  },
  {
    "id": "SVRBODA2MTMxMDY1NzU5MA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 27900,
    "km": 35662,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7789/4418137789.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY1NzU5MA="
  },
  {
    "id": "SVRBODA2MTMxMDY1MzQxOA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 27900,
    "km": 37642,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/5016/4418135016.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY1MzQxOA="
  },
  {
    "id": "SVRBMDA4MDUxMDgyNDUwMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/5898/4785755898.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDgyNDUwMw="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDA0Njgw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 64,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3639/4750753639.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDA0Njgw="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDIyMDEz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1845/4785781845.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDIyMDEz="
  },
  {
    "id": "SVRBMDA1MzgxMDgxMjMzMA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 4441,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1437/4750641437.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDgxMjMzMA="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNDI0MTMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/9057/4788029057.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNDI0MTMw="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNDI0MTMx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/1964/4802261964.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNDI0MTMx="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNDI0MTI5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/5218/4753045218.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNDI0MTI5="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNDMwODE3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 6054,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1215/4773131215.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNDMwODE3="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNTE5ODgz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 3404,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/8727/4750598727.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNTE5ODgz="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNTE5ODg2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 7645,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/0070/4785690070.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNTE5ODg2="
  },
  {
    "id": "SVRBMDA4MzkxMDAwMTU0NTY5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 7853,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "REGGIO EMILIA",
    "dealer": "BOSSONI REGGIO EMILIA",
    "image": "https://vtpimages.audi.com/carimg2/2310/4779082310.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzkxMDAwMTU0NTY5="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNjI5MDA0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 7835,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1035/4785781035.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNjI5MDA0="
  },
  {
    "id": "SVRBMDA2MDgxMDAwNjQwOTUz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 5772,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/8655/4785728655.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwNjQwOTUz="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNjQ4NzI4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 3617,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/0178/4781390178.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNjQ4NzI4="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNjU1MTE5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 103,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1541/4785911541.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNjU1MTE5="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNjc5MzU0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 7833,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/7315/4791987315.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNjc5MzU0="
  },
  {
    "id": "SVRBMDA1MzgxMDgxMjMzOQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 3100,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/8048/4816728048.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDgxMjMzOQ="
  },
  {
    "id": "SVRBMDA1MzgxMDc5NDQxOQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 5022,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/3938/4791993938.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDc5NDQxOQ="
  },
  {
    "id": "SVRBMzEyODgxMDAwNzE5MzQ4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 5741,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/3064/4799173064.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNzE5MzQ4="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzM4NzQw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 8009,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/2536/4802202536.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzM4NzQw="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzUyNjUx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 6211,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/2243/4802922243.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzUyNjUx="
  },
  {
    "id": "SVRBMDAxMjAxMDAwMjI0MTc0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 10705,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/9698/4804019698.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwMjI0MTc0="
  },
  {
    "id": "SVRBMDA2MTIxMDAwODI1NDY5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 27900,
    "km": 8671,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "DESIO",
    "dealer": "LOMBARDA MOTORI",
    "image": "https://vtpimages.audi.com/carimg2/6980/4816726980.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MTIxMDAwODI1NDY5="
  },
  {
    "id": "SVRBMDA2ODA5OTU3Nzgx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28000,
    "km": 8,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "CAVALLINO",
    "dealer": "PEZZUTO GROUP S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9738/4785739738.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2ODA5OTU3Nzgx="
  },
  {
    "id": "SVRBMDAzMDYxMDU2OTU2NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 28200,
    "km": 12590,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1327/4791171327.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDU2OTU2NQ="
  },
  {
    "id": "SVRBMzE4NDIxMDEzNTIxNg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28200,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/6110/4773136110.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDEzNTIxNg="
  },
  {
    "id": "SVRBMDA4NDIxMDAwNTc2NzE3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28200,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/6056/4789976056.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDAwNTc2NzE3="
  },
  {
    "id": "SVRBMzEwNjUxMDAwMzY1MTk3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28300,
    "km": 32,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2421/4791242421.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwMzY1MTk3="
  },
  {
    "id": "SVRBMDAxMjAxMDAwMTU0NTQ1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28400,
    "km": 5169,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/9093/4750599093.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwMTU0NTQ1="
  },
  {
    "id": "SVRBMzAwNjgxMDAwMjMxMjQz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28400,
    "km": 11627,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "BRESCIA",
    "dealer": "BOSSONI BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/5301/4752825301.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzAwNjgxMDAwMjMxMjQz="
  },
  {
    "id": "SVRBMzExMDAxMDAwNTI1NTEy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 28400,
    "km": 32842,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/3569/4752883569.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNTI1NTEy="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNzA2ODYw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28400,
    "km": 8999,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/5169/4800865169.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNzA2ODYw="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNjQ3OTY1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28400,
    "km": 4458,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/5268/4800865268.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNjQ3OTY1="
  },
  {
    "id": "SVRBMzAwNjgxMDAwNTU0Mjg2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28400,
    "km": 7174,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "BRESCIA",
    "dealer": "BOSSONI BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2514/4813742514.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzAwNjgxMDAwNTU0Mjg2="
  },
  {
    "id": "SVRBODA2MTMxMDI2NzA5OA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 28500,
    "km": 23015,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8723/4418138723.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDI2NzA5OA="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ2Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 13953,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8997/4750748997.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ2Mg="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQzMg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 23718,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9066/4750749066.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQzMg="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMzExNDA1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28500,
    "km": 15,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/3373/4750713373.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMzExNDA1="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDcxODA5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 3199,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0503/4730670503.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDcxODA5="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDcxODEw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 4325,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0573/4730670573.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDcxODEw="
  },
  {
    "id": "SVRBMDIyMDUxMDgyOTAxNw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 1056,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1063/4730671063.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDgyOTAxNw="
  },
  {
    "id": "SVRBMDIyMDUxMDg3MDIwMA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 8058,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9418/4730669418.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDg3MDIwMA="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDI5MDU2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 13671,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0945/4730670945.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDI5MDU2="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDkwOTQ2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 5955,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0490/4730670490.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDkwOTQ2="
  },
  {
    "id": "SVRBMDIyMDUxMDY3MjM5OA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 8092,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0622/4730670622.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDY3MjM5OA="
  },
  {
    "id": "SVRBMDIyMDUxMDgzOTc1Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28500,
    "km": 2426,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0895/4730670895.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDgzOTc1Mg="
  },
  {
    "id": "SVRBMzExMDAxMDAwNzM4NzEx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 7500,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/0964/4802940964.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNzM4NzEx="
  },
  {
    "id": "SVRBMzEyODgxMDAwMzUzOTky=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28600,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/2591/4802252591.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwMzUzOTky="
  },
  {
    "id": "SVRBMDA5NTYxMDg3MDkwNA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28600,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0403/4750800403.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDg3MDkwNA="
  },
  {
    "id": "SVRBODA2MTMxMDY5NzQ2Nw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 28900,
    "km": 26158,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7547/4418137547.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY5NzQ2Nw="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ2NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 15687,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8980/4750748980.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ2NQ="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ0OA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 9918,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5877/4785775877.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ0OA="
  },
  {
    "id": "SVRBMDA4NDkxMDkxMDc3Mw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 12020,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1599/4750711599.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDkxMDc3Mw="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDIyMDE1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28900,
    "km": 7500,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3923/4750753923.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDIyMDE1="
  },
  {
    "id": "SVRBMDA1MzgxMDc5NDQyMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28900,
    "km": 6729,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/6633/4785716633.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDc5NDQyMw="
  },
  {
    "id": "SVRBMzE4NDIxMDM4ODIwNQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/7318/4788027318.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDM4ODIwNQ="
  },
  {
    "id": "SVRBMDA4OTkxMDAwNTY0MjI2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28900,
    "km": 3914,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4836/4785784836.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwNTY0MjI2="
  },
  {
    "id": "SVRBMDA2MDgxMDAwNTkxMDM3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 28900,
    "km": 8858,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/9579/4765149579.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwNTkxMDM3="
  },
  {
    "id": "SVRBMDAzNjMxMDAwNjM1NzEw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 6200,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "SAN MARINO",
    "dealer": "REGGINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1667/4789871667.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzNjMxMDAwNjM1NzEw="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDI5MDU3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29000,
    "km": 3164,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0578/4730670578.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDI5MDU3="
  },
  {
    "id": "SVRBMDA4MDUxMDAwNTQwNDQy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 29000,
    "km": 39,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/3780/4750713780.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwNTQwNDQy="
  },
  {
    "id": "SVRBMDA4NDkxMDAwMjg3NzEw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29400,
    "km": 7566,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0356/4750710356.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwMjg3NzEw="
  },
  {
    "id": "SVRBMDA4NDkxMDAwMzU1MzAy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29400,
    "km": 4869,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2739/4785762739.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwMzU1MzAy="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNjE2ODIw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29400,
    "km": 3410,
    "fuel": "Benzina",
    "registration": "1 apr 2026",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/4989/4776964989.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNjE2ODIw="
  },
  {
    "id": "SVRBMDA3NTQ5OTAwMTIz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29500,
    "km": 13000,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4000/4750694000.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQ5OTAwMTIz="
  },
  {
    "id": "SVRBMDA4OTkxMDAwNTc3MTY2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29500,
    "km": 10720,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4826/4785784826.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwNTc3MTY2="
  },
  {
    "id": "SVRBMDA1MzAxMDAwNjQ4NTcw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29500,
    "km": 87,
    "fuel": "Benzina",
    "registration": "1 ago 2026",
    "city": "MARTINA FRANCA",
    "dealer": "BASILE",
    "image": "https://vtpimages.audi.com/carimg2/3823/4781313823.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzAxMDAwNjQ4NTcw="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNjg2NTY2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 29500,
    "km": 5227,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/8328/4799058328.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNjg2NTY2="
  },
  {
    "id": "SVRBMDA4MDUxMDAwNDM0MTQ0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29600,
    "km": 30,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/3443/4750713443.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwNDM0MTQ0="
  },
  {
    "id": "SVRBMDA4NjUxMDU0OTMzNQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29700,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/4014/4750754014.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDU0OTMzNQ="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ0OQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 20409,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9178/4750749178.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ0OQ="
  },
  {
    "id": "SVRBMDA4NjUxMDcyNjIxNA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 apr 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1784/4785781784.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDcyNjIxNA="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNDcwNDky=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 17,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8280/4750688280.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNDcwNDky="
  },
  {
    "id": "SVRBMDA2NTAxMDAwNDY3NTU2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29900,
    "km": 6399,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "ROMA",
    "dealer": "L'AUTOMOBILE ROMA SRL",
    "image": "https://vtpimages.audi.com/carimg2/7532/4783777532.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTAxMDAwNDY3NTU2="
  },
  {
    "id": "SVRBMDA2NTAxMDAwNTkzNDM1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29900,
    "km": 10299,
    "fuel": "Benzina",
    "registration": "1 apr 2026",
    "city": "ROMA",
    "dealer": "L'AUTOMOBILE ROMA SRL",
    "image": "https://vtpimages.audi.com/carimg2/6172/4799066172.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTAxMDAwNTkzNDM1="
  },
  {
    "id": "SVRBMzE4NDIxMDM4ODIwOQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/8725/4799178725.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDM4ODIwOQ="
  },
  {
    "id": "SVRBMDA2NTAxMDAwNzQzNDk5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29900,
    "km": 3760,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "ROMA",
    "dealer": "L'AUTOMOBILE ROMA SRL",
    "image": "https://vtpimages.audi.com/carimg2/0123/4802180123.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTAxMDAwNzQzNDk5="
  },
  {
    "id": "SVRBMzAwNjgxMDAwNzY2MjA1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29900,
    "km": 8982,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "BRESCIA",
    "dealer": "BOSSONI BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2320/4813742320.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzAwNjgxMDAwNzY2MjA1="
  },
  {
    "id": "SVRBMDA2MTIxMDAwODI1NDcx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 29900,
    "km": 9089,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "DESIO",
    "dealer": "LOMBARDA MOTORI",
    "image": "https://vtpimages.audi.com/carimg2/5927/4816725927.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MTIxMDAwODI1NDcx="
  },
  {
    "id": "SVRBMDA2NjAxMDAwNjcxMzkx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30000,
    "km": 39949,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "CAGLIARI",
    "dealer": "CATTE AG S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0012/4797320012.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NjAxMDAwNjcxMzkx="
  },
  {
    "id": "SVRBMzE4NDIxMDAwNTExODk0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30200,
    "km": 15,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/4021/4777124021.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDAwNTExODk0="
  },
  {
    "id": "SVRBMDA4NDIxMDAwNTExODk5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30200,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/1455/4779081455.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDAwNTExODk5="
  },
  {
    "id": "SVRBMDA4NjUxMDQ5Nzg5OQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30400,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0661/4785780661.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDQ5Nzg5OQ="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ1MQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30500,
    "km": 22838,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8550/4750748550.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ1MQ="
  },
  {
    "id": "SVRBMDA4NzAxMDgzNzc3Ng=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30500,
    "km": 6190,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8009/4785778009.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzNzc3Ng="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ3MA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30900,
    "km": 13117,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8852/4750748852.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ3MA="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQzNw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30900,
    "km": 13138,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5882/4785775882.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQzNw="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ1Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 35 TFSI 110 kW (150 CV) S tronic",
    "price": 30900,
    "km": 17051,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9083/4750749083.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ1Mg="
  },
  {
    "id": "SVRBMDA2NTAxMDAwNjE2OTQ5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 40 TFSI 152 kW (207 CV) S tronic",
    "price": 30900,
    "km": 38699,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "ROMA",
    "dealer": "L'AUTOMOBILE ROMA SRL",
    "image": "https://vtpimages.audi.com/carimg2/8957/4785738957.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTAxMDAwNjE2OTQ5="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMTg4ODMw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31200,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3677/4750753677.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMTg4ODMw="
  },
  {
    "id": "SVRBMzE4NDIxMDAwMDExNDI0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31250,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/1913/4779151913.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDAwMDExNDI0="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNDY5MzI4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31300,
    "km": 12,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8290/4750688290.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNDY5MzI4="
  },
  {
    "id": "SVRBMDA4NjUxMDg4NzM4NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 31400,
    "km": 3495,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3645/4750753645.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDg4NzM4NQ="
  },
  {
    "id": "SVRBMDA3ODQxMDcwMDE0Ng=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31500,
    "km": 8,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/5511/4799075511.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDcwMDE0Ng="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ0Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31500,
    "km": 20779,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6059/4785776059.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ0Mg="
  },
  {
    "id": "SVRBMDA5MDMxMDAwMzEzMTUy=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 35 TFSI 110 kW (150 CV) S tronic",
    "price": 31500,
    "km": 18900,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/6002/4789986002.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwMzEzMTUy="
  },
  {
    "id": "SVRBMDA4NzA5ODgxNjc2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31800,
    "km": 5914,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0011/4791190011.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5ODgxNjc2="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNDY5MzI5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31900,
    "km": 18,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8286/4750688286.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNDY5MzI5="
  },
  {
    "id": "SVRBMzEyODgxMDAwNjQ4MDQz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31900,
    "km": 300,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/7840/4781507840.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNjQ4MDQz="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMzExNDEx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32200,
    "km": 17,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4076/4750714076.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMzExNDEx="
  },
  {
    "id": "SVRBMzE4NDIxMDUyNjQ0NQ=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32250,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/0181/4756480181.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDUyNjQ0NQ="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMzExNDE1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32300,
    "km": 18,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/6934/4785756934.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMzExNDE1="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNTY5MTA3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 32500,
    "km": 13411,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/6115/4789896115.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNTY5MTA3="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNjQ4NzI2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "",
    "price": 32500,
    "km": 6319,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/6995/4815336995.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNjQ4NzI2="
  },
  {
    "id": "SVRBMDA2NTYxMDAwMzk1NjM0=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 32500,
    "km": 12471,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8432/4799068432.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwMzk1NjM0="
  },
  {
    "id": "SVRBMzEwMzYxMDAwNDE1Mzcw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 32900,
    "km": 11732,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/1379/4791241379.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwNDE1Mzcw="
  },
  {
    "id": "SVRBMDAxNzMxMDczMTY4Mw=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32900,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 set 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9800/4780139800.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDczMTY4Mw="
  },
  {
    "id": "SVRBMDAxNzMxMDc2ODY0NA=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32900,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 set 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9793/4780139793.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDc2ODY0NA="
  },
  {
    "id": "SVRBMzEwMzYxMDAwNTQ2NjY4=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 32900,
    "km": 10872,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/2840/4809452840.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwNTQ2NjY4="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMzExMzk5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33400,
    "km": 18,
    "fuel": "Benzina",
    "registration": "1 apr 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/3994/4750713994.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMzExMzk5="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMjE1MzA3=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33500,
    "km": 15,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/6564/4785756564.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMjE1MzA3="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMzExNDAz=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33500,
    "km": 12,
    "fuel": "Benzina",
    "registration": "1 mag 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4277/4750714277.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMzExNDAz="
  },
  {
    "id": "SVRBMDA2MjI5OTk1NDYx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33500,
    "km": 93,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/6677/4781986677.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjI5OTk1NDYx="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ3Ng=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33900,
    "km": 7342,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8450/4750748450.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ3Ng="
  },
  {
    "id": "SVRBMDA2MjIxMDAwNjAxNDg1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 33900,
    "km": 8300,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/5874/4816725874.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwNjAxNDg1="
  },
  {
    "id": "SVRBMzE2MDIxMDAwMjE4Nzc2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 34900,
    "km": 10762,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9843/4767129843.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwMjE4Nzc2="
  },
  {
    "id": "SVRBMDA4NzA5NjMxOTI5=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 35 TFSI 110 kW (150 CV) S tronic",
    "price": 35000,
    "km": 8063,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5858/4750745858.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5NjMxOTI5="
  },
  {
    "id": "SVRBMDA4NzA5NzQxMDQ2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 35 TFSI 110 kW (150 CV) S tronic",
    "price": 35400,
    "km": 10965,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5572/4785775572.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5NzQxMDQ2="
  },
  {
    "id": "SVRBMDA4NzAxMDgzMjQ3Mg=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 35 TFSI 110 kW (150 CV) S tronic",
    "price": 35800,
    "km": 7897,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8658/4750748658.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDgzMjQ3Mg="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNTEzMTk1=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "S line Edition 40 TFSI 152 kW (207 CV) S tronic",
    "price": 35900,
    "km": 7529,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/6017/4774946017.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNTEzMTk1="
  },
  {
    "id": "SVRBMzEyODgxMDAwNTM5NDIx=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 40 TFSI 152 kW (207 CV) S tronic",
    "price": 35900,
    "km": 6621,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/9710/4756429710.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNTM5NDIx="
  },
  {
    "id": "SVRBMDA4NzA5NzI0MTI2=",
    "name": "Audi A1 Sportback",
    "family": "A1",
    "trim": "Identity Black 35 TFSI 110 kW (150 CV) S tronic",
    "price": 36000,
    "km": 3722,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0122/4750750122.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5NzI0MTI2="
  },
  {
    "id": "SVRBMDA4MDMxMDYwNTcwMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "30 TFSI 81 kW (110 CV) S tronic",
    "price": 18900,
    "km": 52718,
    "fuel": "Benzina",
    "registration": "1 nov 2022",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/8756/4785758756.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDYwNTcwMw="
  },
  {
    "id": "SVRBMDA2NTYxMDAwMzY0MTg1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 19700,
    "km": 81797,
    "fuel": "Benzina",
    "registration": "1 ago 2023",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1857/4791181857.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwMzY0MTg1="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMzk2NjY2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 20350,
    "km": 56268,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/4349/4785794349.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMzk2NjY2="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMDA1OTE4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 20400,
    "km": 80211,
    "fuel": "Benzina",
    "registration": "1 apr 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/2654/4750762654.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMDA1OTE4="
  },
  {
    "id": "SVRBMzE5MTYxMDY4ODg2Mw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 21800,
    "km": 54565,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/5123/4528835123.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDY4ODg2Mw="
  },
  {
    "id": "SVRBMzE2NTExMDc1Nzg1MQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 21900,
    "km": 44524,
    "fuel": "Benzina",
    "registration": "1 ago 2023",
    "city": "PARMA",
    "dealer": "EUROCAR PARMA",
    "image": "https://vtpimages.audi.com/carimg2/3308/4753003308.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2NTExMDc1Nzg1MQ="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNTgyNTY1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 22000,
    "km": 63000,
    "fuel": "Benzina",
    "registration": "1 gen 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/5610/4777065610.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNTgyNTY1="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNTM5MTcy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 22150,
    "km": 45640,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/8878/4785758878.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNTM5MTcy="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNzQzNDMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 22300,
    "km": 37068,
    "fuel": "Benzina",
    "registration": "1 dic 2023",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1848/4802941848.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNzQzNDMw="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNjQzNTQ4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 22900,
    "km": 23624,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1242/4788021242.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNjQzNTQ4="
  },
  {
    "id": "SVRBMzE4ODExMDAwNDQ0MzIx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23400,
    "km": 48950,
    "fuel": "Benzina",
    "registration": "1 nov 2022",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7914/4753027914.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNDQ0MzIx="
  },
  {
    "id": "SVRBMDA2MjIxMDAwMDk1NTE0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 23500,
    "km": 58304,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/9061/4785729061.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwMDk1NTE0="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNzQxOTky=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 23500,
    "km": 20607,
    "fuel": "Benzina",
    "registration": "1 mag 2024",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/2178/4802942178.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNzQxOTky="
  },
  {
    "id": "SVRBMzE1NjMxMDAwNTc4Mzgw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 35 TFSI 110 kW (150 CV) 6-marce",
    "price": 23600,
    "km": 36100,
    "fuel": "Benzina",
    "registration": "1 set 2022",
    "city": "LA SPEZIA",
    "dealer": "BROTINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9482/4758439482.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NjMxMDAwNTc4Mzgw="
  },
  {
    "id": "SVRBMDA2MzUxMDAwMjg4NDUz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 23700,
    "km": 15968,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/0690/4785730690.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwMjg4NDUz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNTkxODUx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 25 TFSI 70 kW (95 CV) 5-marce",
    "price": 23700,
    "km": 32298,
    "fuel": "Benzina",
    "registration": "1 dic 2022",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/5017/4802205017.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNTkxODUx="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMTM2NTAz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 37774,
    "fuel": "Benzina",
    "registration": "1 giu 2023",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9403/4785759403.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMTM2NTAz="
  },
  {
    "id": "SVRBMzExMDAxMDAwNDE1NTIz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 68742,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/5702/4816045702.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNDE1NTIz="
  },
  {
    "id": "SVRBMzExMDAxMDAwNDgxNTAy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 67742,
    "fuel": "Benzina",
    "registration": "1 set 2023",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/3805/4816043805.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNDgxNTAy="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNDk4ODI1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 23900,
    "km": 22020,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1503/4750621503.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNDk4ODI1="
  },
  {
    "id": "SVRBMzExMDAxMDAwNTI1NDkx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 66967,
    "fuel": "Benzina",
    "registration": "1 ago 2023",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/3834/4752883834.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNTI1NDkx="
  },
  {
    "id": "SVRBMzEwNjUxMDAwODAyNTgy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 23900,
    "km": 28936,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2897/4816042897.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwODAyNTgy="
  },
  {
    "id": "SVRBMzExMDAxMDAwNTAwNzc1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24200,
    "km": 54973,
    "fuel": "Benzina",
    "registration": "1 set 2023",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/1691/4769421691.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNTAwNzc1="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNjQ4NzI0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 24300,
    "km": 44884,
    "fuel": "Benzina",
    "registration": "1 set 2023",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/4123/4797324123.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNjQ4NzI0="
  },
  {
    "id": "SVRBMzE2MDIxMDAwMDUzNjQ4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "25 TFSI 70 kW (95 CV) 5-marce",
    "price": 24400,
    "km": 6918,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1027/4752941027.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwMDUzNjQ4="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNDY5NjEy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 24490,
    "km": 22601,
    "fuel": "Benzina",
    "registration": "1 ago 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/3311/4791193311.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNDY5NjEy="
  },
  {
    "id": "SVRBMDA4MDUxMDAwMDM3MTk3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 24500,
    "km": 12344,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4363/4750714363.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwMDM3MTk3="
  },
  {
    "id": "SVRBMzE5MTYxMDAwMDkzMjA3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 24500,
    "km": 37000,
    "fuel": "Benzina",
    "registration": "1 dic 2023",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/5573/4507925573.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDAwMDkzMjA3="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNTE2OTYw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 24900,
    "km": 7299,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/5328/4750705328.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNTE2OTYw="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNjE1NDA1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24900,
    "km": 41435,
    "fuel": "Benzina",
    "registration": "1 feb 2023",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4819/4797444819.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNjE1NDA1="
  },
  {
    "id": "SVRBMDA2MjIxMDAwNzMwNjcw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24900,
    "km": 25741,
    "fuel": "Benzina",
    "registration": "1 dic 2022",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/6829/4800896829.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwNzMwNjcw="
  },
  {
    "id": "SVRBMDA1MzgxMDAwNTc1MTU2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 24900,
    "km": 31998,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/7849/4816727849.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDAwNTc1MTU2="
  },
  {
    "id": "SVRBMzEwOTYxMDAwNTc2Nzk1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "25 TFSI 70 kW (95 CV) 5-marce",
    "price": 24900,
    "km": 2818,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "LODI",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2145/4816042145.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwOTYxMDAwNTc2Nzk1="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNDU2ODY4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Admired 35 TFSI 110 kW (150 CV) 6-marce",
    "price": 25000,
    "km": 48500,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/7241/4750637241.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNDU2ODY4="
  },
  {
    "id": "SVRBMzE4ODExMDAwMjcxODkz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25400,
    "km": 50000,
    "fuel": "Benzina",
    "registration": "1 dic 2023",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8855/4753028855.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwMjcxODkz="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNDIxMjgz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25500,
    "km": 22651,
    "fuel": "Benzina",
    "registration": "1 giu 2024",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0540/4785740540.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNDIxMjgz="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNDM2NzUw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25500,
    "km": 7712,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6293/4750706293.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNDM2NzUw="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNjE1NDAz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25500,
    "km": 12470,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6807/4777116807.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNjE1NDAz="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNjA1MjE1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25500,
    "km": 58054,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/6724/4779106724.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNjA1MjE1="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNjM0NDM4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25500,
    "km": 47415,
    "fuel": "Benzina",
    "registration": "1 mar 2024",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6456/4785826456.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNjM0NDM4="
  },
  {
    "id": "SVRBMDA2MjIxMDAwNDU1MDk3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25500,
    "km": 64440,
    "fuel": "Benzina",
    "registration": "1 lug 2024",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/9338/4797319338.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwNDU1MDk3="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzM4NzQ4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 25500,
    "km": 26965,
    "fuel": "Benzina",
    "registration": "1 feb 2024",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/5831/4813695831.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzM4NzQ4="
  },
  {
    "id": "SVRBMDA5MDMxMDAwMjI4OTE0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25800,
    "km": 10402,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/5697/4789985697.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwMjI4OTE0="
  },
  {
    "id": "SVRBMzE2MDIxMDAwMDAwNDU3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25800,
    "km": 7116,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1578/4752941578.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwMDAwNDU3="
  },
  {
    "id": "SVRBMDA4NzAxMDAwMDY5MjI2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25900,
    "km": 49457,
    "fuel": "Benzina",
    "registration": "1 apr 2023",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8613/4750748613.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDAwMDY5MjI2="
  },
  {
    "id": "SVRBMDA1MzAxMDAwNTA1MDc2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25900,
    "km": 7270,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "MARTINA FRANCA",
    "dealer": "BASILE",
    "image": "https://vtpimages.audi.com/carimg2/6337/4750636337.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzAxMDAwNTA1MDc2="
  },
  {
    "id": "SVRBMDA1MzAxMDAwMTIzNjE1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 25900,
    "km": 3068,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "MARTINA FRANCA",
    "dealer": "BASILE",
    "image": "https://vtpimages.audi.com/carimg2/7030/4750637030.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzAxMDAwMTIzNjE1="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTEz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25900,
    "km": 3210,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3050/4732363050.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTEz="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNTgxMjU4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25900,
    "km": 38009,
    "fuel": "Benzina",
    "registration": "1 dic 2023",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/0636/4785730636.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNTgxMjU4="
  },
  {
    "id": "SVRBMzA1MjUxMDAwNzM5NTMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 25900,
    "km": 28422,
    "fuel": "Benzina",
    "registration": "1 nov 2023",
    "city": "ROMA",
    "dealer": "AUTOCENTRI BALDUINA",
    "image": "https://vtpimages.audi.com/carimg2/0469/4809450469.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA1MjUxMDAwNzM5NTMw="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzU4NTYx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 25950,
    "km": 8767,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9528/4785759528.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzU4NTYx="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDA5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26200,
    "km": 7835,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9427/4785759427.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDA5="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNjg0OTMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) 6-marce",
    "price": 26200,
    "km": 39437,
    "fuel": "Benzina",
    "registration": "1 feb 2024",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6516/4792006516.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNjg0OTMw="
  },
  {
    "id": "SVRBMDExOTYxMDAwNzU0MjUz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26200,
    "km": 6556,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "ASSAGO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2951/4816742951.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDExOTYxMDAwNzU0MjUz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzY0MDEw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26300,
    "km": 5886,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9422/4785759422.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzY0MDEw="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNDk5NDk1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26450,
    "km": 4350,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/1561/4785791561.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNDk5NDk1="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNDk5NDk2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26450,
    "km": 6258,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/3869/4785793869.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNDk5NDk2="
  },
  {
    "id": "SVRBMzE5NjExMDAwMjE5MDU5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 26490,
    "km": 9638,
    "fuel": "Benzina",
    "registration": "1 mar 2024",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5758/4753025758.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDAwMjE5MDU5="
  },
  {
    "id": "SVRBMzE5NjExMDAwNjUzMTk0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 35 TFSI 110 kW (150 CV) S tronic",
    "price": 26490,
    "km": 30687,
    "fuel": "Benzina",
    "registration": "1 apr 2024",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9111/4785919111.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDAwNjUzMTk0="
  },
  {
    "id": "SVRBMDA4NjExMDgwOTIzNw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "25 TFSI 70 kW (95 CV) 5-marce",
    "price": 26500,
    "km": 5482,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5239/4785765239.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDgwOTIzNw="
  },
  {
    "id": "SVRBMDA4NjExMDg5NzMzMg=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26500,
    "km": 2478,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5163/4785765163.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDg5NzMzMg="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNDQzNTA3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26700,
    "km": 8050,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/8017/4785758017.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNDQzNTA3="
  },
  {
    "id": "SVRBMDA3ODQxMDY3MzA4Ng=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 35 TFSI 110 kW (150 CV) S tronic",
    "price": 26800,
    "km": 26212,
    "fuel": "Benzina",
    "registration": "1 mar 2024",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/5369/4785755369.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDY3MzA4Ng="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNTk0NTE3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26850,
    "km": 6716,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/3838/4785793838.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNTk0NTE3="
  },
  {
    "id": "SVRBMDA5MTYxMDgxODY4NQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 26900,
    "km": 6963,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/2407/4750762407.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDgxODY4NQ="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMzQyODA4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 11214,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0912/4771130912.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMzQyODA4="
  },
  {
    "id": "SVRBMzA4ODIxMDAwNzE2MDQ0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 5014,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "SIRACUSA",
    "dealer": "S.TUMINO S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1114/4799171114.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4ODIxMDAwNzE2MDQ0="
  },
  {
    "id": "SVRBMzEyMjAxMDAwMjU1NjA5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 26900,
    "km": 10156,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PIACENZA",
    "dealer": "BOSSONI PIACENZA",
    "image": "https://vtpimages.audi.com/carimg2/2629/4799172629.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyMjAxMDAwMjU1NjA5="
  },
  {
    "id": "SVRBMDExOTYxMDAwMTI0NDc2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "25 TFSI 70 kW (95 CV) 5-marce",
    "price": 26900,
    "km": 4051,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "ASSAGO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4573/4816744573.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDExOTYxMDAwMTI0NDc2="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNTM0MTUw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27000,
    "km": 8367,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9781/4752899781.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNTM0MTUw="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNTQ3MzQ2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27000,
    "km": 6846,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9056/4752899056.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNTQ3MzQ2="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNjg0OTE1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 27200,
    "km": 23016,
    "fuel": "Benzina",
    "registration": "1 ott 2023",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/8349/4802918349.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNjg0OTE1="
  },
  {
    "id": "SVRBODA2MTMxMDY2Mjg3Mw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27400,
    "km": 5618,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7932/4418137932.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY2Mjg3Mw="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNDIxMjM2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27400,
    "km": 39447,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/5744/4774945744.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNDIxMjM2="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNDAwNjky=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27400,
    "km": 2373,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4238/4790044238.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNDAwNjky="
  },
  {
    "id": "SVRBMzE4ODExMDAwNTE5ODMx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27400,
    "km": 5596,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7528/4753027528.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNTE5ODMx="
  },
  {
    "id": "SVRBMzEyMjAxMDAwNjU2OTkx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 81 kW (110 CV) S tronic",
    "price": 27400,
    "km": 10281,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "PIACENZA",
    "dealer": "BOSSONI PIACENZA",
    "image": "https://vtpimages.audi.com/carimg2/2330/4790042330.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyMjAxMDAwNjU2OTkx="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNTMxNDA2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27400,
    "km": 10283,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/4185/4816074185.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNTMxNDA2="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNzU2NTMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27400,
    "km": 6813,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/9347/4802909347.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNzU2NTMw="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNzczNTgz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27400,
    "km": 3000,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/7361/4813657361.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNzczNTgz="
  },
  {
    "id": "SVRBMDAzMDYxMDc4ODUyMA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27500,
    "km": 8076,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2779/4750622779.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDc4ODUyMA="
  },
  {
    "id": "SVRBODA2MTMxMDc2ODcyNQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 2679,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7028/4418137028.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDc2ODcyNQ="
  },
  {
    "id": "SVRBMzE5MTYxMDgxODY4NA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 3343,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/4178/4528834178.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDgxODY4NA="
  },
  {
    "id": "SVRBMzE5MTYxMDgxODY4NQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 6963,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/2873/4457442873.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDgxODY4NQ="
  },
  {
    "id": "SVRBMDA4NjExMDg5NzM0Mw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 2428,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/1083/4750721083.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDg5NzM0Mw="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNDQyNTkz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27500,
    "km": 5923,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1257/4785701257.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNDQyNTkz="
  },
  {
    "id": "SVRBMDA4NjExMDAwNDc3NjY4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 5088,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/8625/4797348625.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDAwNDc3NjY4="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzM4NzQy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27500,
    "km": 8266,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/2720/4802202720.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzM4NzQy="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNzkxODkx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27500,
    "km": 6724,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2255/4813622255.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNzkxODkx="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNzg0NjU4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27500,
    "km": 8380,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2588/4813622588.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNzg0NjU4="
  },
  {
    "id": "SVRBMzE1NDgxMDAwNDc0NzMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27800,
    "km": 7390,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "PALERMO",
    "dealer": "N.RIOLO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9008/4752899008.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NDgxMDAwNDc0NzMw="
  },
  {
    "id": "SVRBMDA2NTYxMDcyNjEwMA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 2122,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1311/4785741311.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDcyNjEwMA="
  },
  {
    "id": "SVRBODA2MTMxMDY1NzU5Ng=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 5060,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/7500/4418137500.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDY1NzU5Ng="
  },
  {
    "id": "SVRBODA2MTMxMDgwODczOA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 7191,
    "fuel": "Benzina",
    "registration": "1 nov 2024",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/6768/4418136768.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDgwODczOA="
  },
  {
    "id": "SVRBMDA4NjExMDgwOTIzNg=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 5778,
    "fuel": "Benzina",
    "registration": "1 dic 2024",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/7847/4750717847.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDgwOTIzNg="
  },
  {
    "id": "SVRBMDA4NzAxMDAwNDQ3NzE0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 24143,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7735/4750747735.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDAwNDQ3NzE0="
  },
  {
    "id": "SVRBMDA3NTQxMDAwMzg1NTE0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 12022,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4590/4785744590.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDAwMzg1NTE0="
  },
  {
    "id": "SVRBMzExMDAxMDAwNTk2ODg3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 27900,
    "km": 19503,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/4173/4802254173.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNTk2ODg3="
  },
  {
    "id": "SVRBMzE3MzAxMDAwODA5NTY5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 81 kW (110 CV) S tronic",
    "price": 27900,
    "km": 52821,
    "fuel": "Benzina",
    "registration": "1 ago 2023",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/0104/4816050104.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwODA5NTY5="
  },
  {
    "id": "SVRBODA2MTMxMDIzNzkyNQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28200,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8750/4418138750.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDIzNzkyNQ="
  },
  {
    "id": "SVRBODA2MTMxMDI0NDM3Ng=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28200,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8746/4418138746.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDI0NDM3Ng="
  },
  {
    "id": "SVRBODA2MTMxMDQ3MTU2Nw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28200,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8308/4418138308.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDQ3MTU2Nw="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNDI2MzEx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28400,
    "km": 4571,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2258/4771252258.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNDI2MzEx="
  },
  {
    "id": "SVRBMDA4NjExMDg3MDM4Nw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 8755,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/2805/4785762805.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDg3MDM4Nw="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTA5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 8210,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2273/4732362273.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTA5="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTEx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 7732,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2871/4732362871.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTEx="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMjYyODk4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 3735,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0289/4730670289.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMjYyODk4="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMjYyODk5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 7838,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0227/4730670227.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMjYyODk5="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMjYyODk5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 7838,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2081/4753002081.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMjYyODk5="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNDc3NTEx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 7732,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/1682/4753001682.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNDc3NTEx="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNDc3NTA5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 8210,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/1688/4753001688.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNDc3NTA5="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMjYyODk4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 3735,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/8957/4799178957.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMjYyODk4="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNDk0MzMx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "35 TFSI 110 kW (150 CV) S tronic",
    "price": 28500,
    "km": 8963,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/6630/4797446630.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNDk0MzMx="
  },
  {
    "id": "SVRBMDA3NTQxMDAwNjExNDU3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28500,
    "km": 10188,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4325/4799074325.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDAwNjExNDU3="
  },
  {
    "id": "SVRBMzA4ODIxMDQyNTI0NQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28500,
    "km": 11000,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "SIRACUSA",
    "dealer": "S.TUMINO S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7255/4802257255.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4ODIxMDQyNTI0NQ="
  },
  {
    "id": "SVRBMDA5MDMxMDAwNzUyNjU0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28500,
    "km": 8138,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/2241/4802922241.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwNzUyNjU0="
  },
  {
    "id": "SVRBMDA2MjIxMDAwNzkxMTgw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28500,
    "km": 5166,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "GENOVA",
    "dealer": "CENTRO",
    "image": "https://vtpimages.audi.com/carimg2/6366/4813656366.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MjIxMDAwNzkxMTgw="
  },
  {
    "id": "SVRBMDA4NjUxMDM1NzM1NQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 28600,
    "km": 6000,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/4071/4750754071.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDM1NzM1NQ="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNjI5MDEw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28700,
    "km": 5467,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1027/4785781027.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNjI5MDEw="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNzg0NjU5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28700,
    "km": 6839,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2585/4813622585.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNzg0NjU5="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNDk3MjQz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28800,
    "km": 5468,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9053/4754379053.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNDk3MjQz="
  },
  {
    "id": "SVRBODA2MTMxMDc3NTIxOQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 8403,
    "fuel": "Benzina",
    "registration": "1 giu 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/6835/4418136835.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDc3NTIxOQ="
  },
  {
    "id": "SVRBMDA1MzgxMDc5NDQyMQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 4301,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1549/4750641549.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDc5NDQyMQ="
  },
  {
    "id": "SVRBMDA4MDUxMDAwNjAwNzMz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 18131,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/6153/4785756153.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwNjAwNzMz="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNjExMTA2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 5108,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1632/4772961632.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNjExMTA2="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNTU0Mjg4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 11937,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/7793/4787787793.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNTU0Mjg4="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNzI1NTYy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 2869,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8332/4802148332.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNzI1NTYy="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTA2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 7089,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2887/4732362887.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTA2="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTA3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 10575,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2281/4732362281.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTA3="
  },
  {
    "id": "SVRBMDIyMDUxMDg3MDIwMQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 5240,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1044/4730671044.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDg3MDIwMQ="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDAwODU3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 13799,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9975/4730669975.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDAwODU3="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTA1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 1972,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2761/4732362761.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTA1="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDg0Mjcw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 5692,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0140/4730670140.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDg0Mjcw="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMzc4NDk5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 7445,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0178/4730670178.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMzc4NDk5="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDkwOTQ3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 7549,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0325/4730670325.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDkwOTQ3="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTEy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 7272,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2159/4732362159.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTEy="
  },
  {
    "id": "SVRBMDIyMDUxMDkwODM1Ng=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 9354,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0865/4730670865.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDkwODM1Ng="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMDQ2OTI5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 8526,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0508/4730670508.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMDQ2OTI5="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTEw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 1539,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3062/4732363062.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTEw="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMjM1ODI1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 17689,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0231/4730670231.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMjM1ODI1="
  },
  {
    "id": "SVRBMDIyMDUxMDAwMjM1ODI0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 16291,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0237/4730670237.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwMjM1ODI0="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMjM1ODI0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 16291,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2009/4753002009.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMjM1ODI0="
  },
  {
    "id": "SVRBMzE3MzAxMDkwODM1Ng=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 9354,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2126/4753002126.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDkwODM1Ng="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMzc4NDk5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 7445,
    "fuel": "Benzina",
    "registration": "1 mag 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2818/4768332818.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMzc4NDk5="
  },
  {
    "id": "SVRBMzE3MzAxMDAwMjM1ODI1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 17689,
    "fuel": "Benzina",
    "registration": "1 mar 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/2986/4768332986.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwMjM1ODI1="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNDc3NTA1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29000,
    "km": 1972,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/3431/4777123431.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNDc3NTA1="
  },
  {
    "id": "SVRBMDAzMDYxMDAwMDk4Mjc3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29200,
    "km": 7213,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2683/4785702683.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwMDk4Mjc3="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNTAxMzc4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 29300,
    "km": 10,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2132/4789982132.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNTAxMzc4="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNDQ0NjEz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29400,
    "km": 7119,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0311/4767130311.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNDQ0NjEz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNTkxODI2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29450,
    "km": 16065,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9714/4765179714.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNTkxODI2="
  },
  {
    "id": "SVRBMDA4NjExMDg5NzM0MQ=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29500,
    "km": 6114,
    "fuel": "Benzina",
    "registration": "1 ago 2025",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5219/4785765219.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDg5NzM0MQ="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTE0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29500,
    "km": 6709,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2156/4732362156.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTE0="
  },
  {
    "id": "SVRBMDIyMDUxMDAwNDc3NTA4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29500,
    "km": 4757,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "TORRE ANNUNZIATA",
    "dealer": "A. & C. MOTORS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2278/4732362278.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDIyMDUxMDAwNDc3NTA4="
  },
  {
    "id": "SVRBMzEyODgxMDc2NjQyMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29500,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 set 2026",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/4669/4816044669.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDc2NjQyMw="
  },
  {
    "id": "SVRBMDA5NTYxMDc3NTAyMA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 29600,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 lug 2026",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0495/4750800495.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDc3NTAyMA="
  },
  {
    "id": "SVRBODA2MTMxMDczMTg1MA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 29900,
    "km": 11002,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/6913/4418136913.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDczMTg1MA="
  },
  {
    "id": "SVRBMDA4NDkxMDAwMDI2MzUz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 6016,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2364/4785762364.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwMDI2MzUz="
  },
  {
    "id": "SVRBMDA4NDkxMDAwNTA1MDQ3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 7877,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6989/4789976989.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwNTA1MDQ3="
  },
  {
    "id": "SVRBMDA4NDkxMDAwNTA1MDQ0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 5777,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0928/4750710928.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwNTA1MDQ0="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNTQ5MDQ0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 3856,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/1167/4816051167.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNTQ5MDQ0="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNjExMTA4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "35 TFSI 110 kW (150 CV) S tronic",
    "price": 29900,
    "km": 6412,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1629/4772961629.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNjExMTA4="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNjQwNDEz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 29900,
    "km": 5537,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/5457/4785725457.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNjQwNDEz="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNjQ3ODk3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 3064,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/9508/4781509508.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNjQ3ODk3="
  },
  {
    "id": "SVRBMDA4NDkxMDAwNTA1MDQw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 4080,
    "fuel": "Benzina",
    "registration": "1 ott 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/6990/4789976990.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwNTA1MDQw="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNjc5NDMy=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 7836,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/9521/4791239521.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNjc5NDMy="
  },
  {
    "id": "SVRBMzI2MDIxMDAwNDk4Njky=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 4838,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "MILANO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1977/4802941977.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzI2MDIxMDAwNDk4Njky="
  },
  {
    "id": "SVRBMDA4NjExMDAwMTg1ODQ0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 29900,
    "km": 21,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/1879/4809381879.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDAwMTg1ODQ0="
  },
  {
    "id": "SVRBMzEwOTYxMDAwNDQ4NjU1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 35 TFSI 110 kW (150 CV) S tronic",
    "price": 29900,
    "km": 11877,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "LODI",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2172/4816042172.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwOTYxMDAwNDQ4NjU1="
  },
  {
    "id": "SVRBMDAxMjAxMDAwODI1MTU1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 7104,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/4840/4816724840.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwODI1MTU1="
  },
  {
    "id": "SVRBMzAwNjgxMDAwODI1MTU4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29900,
    "km": 8335,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "BRESCIA",
    "dealer": "BOSSONI BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/7760/4816757760.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzAwNjgxMDAwODI1MTU4="
  },
  {
    "id": "SVRBMDA4MDUxMDM0OTYyMA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 29950,
    "km": 8,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/4629/4750714629.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDM0OTYyMA="
  },
  {
    "id": "SVRBMzE3MzAxMDAwNTU4NjA4=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30500,
    "km": 3797,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "POZZUOLI",
    "dealer": "A. & C. MOTORS",
    "image": "https://vtpimages.audi.com/carimg2/1322/4753001322.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE3MzAxMDAwNTU4NjA4="
  },
  {
    "id": "SVRBMzExMDAxMDAwNzM4NzEw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30800,
    "km": 10000,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/0971/4802940971.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNzM4NzEw="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNjQwNDE1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) 6-marce",
    "price": 30900,
    "km": 5587,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/5454/4785725454.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNjQwNDE1="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNzI2NDg2=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30900,
    "km": 16401,
    "fuel": "Benzina",
    "registration": "1 feb 2025",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/6150/4816076150.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNzI2NDg2="
  },
  {
    "id": "SVRBMDA2MTIxMDAwNzU2NzM1=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Business 30 TFSI 85 kW (116 CV) S tronic",
    "price": 30900,
    "km": 2960,
    "fuel": "Benzina",
    "registration": "1 feb 2026",
    "city": "DESIO",
    "dealer": "LOMBARDA MOTORI",
    "image": "https://vtpimages.audi.com/carimg2/5842/4813655842.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MTIxMDAwNzU2NzM1="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNjI5MDA5=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 35 TFSI 110 kW (150 CV) S tronic",
    "price": 31500,
    "km": 5448,
    "fuel": "Benzina",
    "registration": "1 gen 2026",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1413/4777061413.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNjI5MDA5="
  },
  {
    "id": "SVRBMDA4NzA5ODUzMzk3=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 31900,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5905/4785775905.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5ODUzMzk3="
  },
  {
    "id": "SVRBMDA4NzA5NzU0Nzgz=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32100,
    "km": 2914,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0023/4750750023.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5NzU0Nzgz="
  },
  {
    "id": "SVRBMDA4NzA5NzU0Nzg0=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 32500,
    "km": 12324,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0119/4750750119.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5NzU0Nzg0="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNjA4OTgx=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 35 TFSI 110 kW (150 CV) S tronic",
    "price": 32900,
    "km": 2735,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/6041/4771096041.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNjA4OTgx="
  },
  {
    "id": "SVRBMDA4NzAxMDUyNTU3MA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33300,
    "km": 10939,
    "fuel": "Benzina",
    "registration": "1 dic 2025",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5777/4785775777.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDUyNTU3MA="
  },
  {
    "id": "SVRBMDAxNzMxMDQ4Mjc1NA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33400,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8240/4750608240.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDQ4Mjc1NA="
  },
  {
    "id": "SVRBMDAxNzMxMDQ2NjQ4Nw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33400,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8259/4750608259.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDQ2NjQ4Nw="
  },
  {
    "id": "SVRBMDAxNzMxMDQ5NjcyOA=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33400,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7481/4785707481.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDQ5NjcyOA="
  },
  {
    "id": "SVRBMDAxNzMxMDQwMDkwMw=",
    "name": "Audi A1 allstreet",
    "family": "A1",
    "trim": "Identity Contrast 30 TFSI 85 kW (116 CV) S tronic",
    "price": 33400,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7507/4785707507.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDQwMDkwMw="
  },
  {
    "id": "SVRBMDA1NTM4MjUxODA4=",
    "name": "Audi A3",
    "family": "A3",
    "trim": "S line edition 30 TDI 85 kW (116 CV) 6-marce",
    "price": 32900,
    "km": 23476,
    "fuel": "Diesel",
    "registration": "1 giu 2023",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/6672/4785726672.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTM4MjUxODA4="
  },
  {
    "id": "SVRBMzE5NjE5MjgxNDg0=",
    "name": "Audi A3",
    "family": "A3",
    "trim": "Launch edition S line 35 TDI 110 kW (150 CV) S tronic",
    "price": 34990,
    "km": 23765,
    "fuel": "Diesel",
    "registration": "1 mag 2024",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/4737/4753024737.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjE5MjgxNDg0="
  },
  {
    "id": "SVRBMDAxNzM5NjY2MjA3=",
    "name": "Audi A3",
    "family": "A3",
    "trim": "S line edition 35 TDI 110 kW (150 CV) S tronic",
    "price": 40900,
    "km": 135,
    "fuel": "Diesel",
    "registration": "1 dic 2025",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7598/4785707598.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzM5NjY2MjA3="
  },
  {
    "id": "SVRBMzE5MTYxMDE4MzM4Nw=",
    "name": "Audi A3",
    "family": "A3",
    "trim": "Launch edition S line Mythos 35 TFSI 110 kW (150 CV) S tronic",
    "price": 45500,
    "km": 1,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/5590/4499875590.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDE4MzM4Nw="
  },
  {
    "id": "SVRBMzE1NjMxMDAwMDA1Nzkx=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "Business Advanced 30 TDI 85 kW (116 CV) 6-marce",
    "price": 24800,
    "km": 53700,
    "fuel": "Diesel",
    "registration": "1 gen 2023",
    "city": "LA SPEZIA",
    "dealer": "BROTINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8819/4768328819.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NjMxMDAwMDA1Nzkx="
  },
  {
    "id": "SVRBMzA1MjUxMDAwNDE1ODcz=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "S line edition 35 TDI 110 kW (150 CV) S tronic",
    "price": 25900,
    "km": 99975,
    "fuel": "Diesel",
    "registration": "1 giu 2023",
    "city": "ROMA",
    "dealer": "AUTOCENTRI BALDUINA",
    "image": "https://vtpimages.audi.com/carimg2/6663/4769416663.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA1MjUxMDAwNDE1ODcz="
  },
  {
    "id": "SVRBMzExMDAxMDAwMDM4NjU2=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "Business 30 TDI 85 kW (116 CV) 6-marce",
    "price": 27900,
    "km": 15224,
    "fuel": "Diesel",
    "registration": "1 mag 2025",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/1106/4767121106.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwMDM4NjU2="
  },
  {
    "id": "SVRBMzE1NjMxMDY1NTY2MQ=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "S line edition 30 TDI 85 kW (116 CV) S tronic",
    "price": 28900,
    "km": 38700,
    "fuel": "Diesel",
    "registration": "1 mar 2024",
    "city": "LA SPEZIA",
    "dealer": "BROTINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2936/4752902936.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NjMxMDY1NTY2MQ="
  },
  {
    "id": "SVRBMDAzMDYxMDAwNDIzNjU0=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "S line edition 35 TDI 110 kW (150 CV) S tronic",
    "price": 28900,
    "km": 42623,
    "fuel": "Diesel",
    "registration": "1 giu 2023",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1815/4750621815.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwNDIzNjU0="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNTk4OTcz=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "S line edition 35 TFSI 110 kW (150 CV) S tronic",
    "price": 29500,
    "km": 42658,
    "fuel": "Benzina",
    "registration": "1 ago 2024",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9927/4767129927.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNTk4OTcz="
  },
  {
    "id": "SVRBMDA4MzExMDAwNDkzMDU4=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "TDI 85 kW (116 CV) 6-marce",
    "price": 29900,
    "km": 100,
    "fuel": "Diesel",
    "registration": "1 giu 2026",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/0243/4785760243.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDAwNDkzMDU4="
  },
  {
    "id": "SVRBMDA4MzExMDAwNTg3MzAz=",
    "name": "Audi A3 Sedan",
    "family": "A3",
    "trim": "Business TFSI 85 kW S tronic",
    "price": 29900,
    "km": 100,
    "fuel": "Benzina",
    "registration": "1 giu 2026",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/6561/4791186561.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDAwNTg3MzAz="
  },
  {
    "id": "SVRBMDA3NTQxMDgwMzIwNw=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business 30 TDI 100 kW (136 CV) S tronic",
    "price": 21900,
    "km": 96549,
    "fuel": "Diesel",
    "registration": "1 nov 2022",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6053/4750696053.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDgwMzIwNw="
  },
  {
    "id": "SVRBMDA0NjAxMDAwNjYwMjYx=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 35 TDI 120 kW (163 PS) S tronic",
    "price": 22900,
    "km": 87994,
    "fuel": "Diesel",
    "registration": "1 set 2020",
    "city": "CATANIA",
    "dealer": "COMER SUD S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4412/4802154412.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA0NjAxMDAwNjYwMjYx="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNzg1ODMy=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "S line edition 35 TDI 120 kW (163 PS) S tronic",
    "price": 23900,
    "km": 117259,
    "fuel": "Diesel",
    "registration": "1 feb 2020",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/8145/4813778145.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNzg1ODMy="
  },
  {
    "id": "SVRBMDA2ODAxMDAwNjQxNTc5=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 30 TDI 100 kW (136 PS) S tronic",
    "price": 24800,
    "km": 76938,
    "fuel": "Diesel",
    "registration": "1 ott 2022",
    "city": "CAVALLINO",
    "dealer": "PEZZUTO GROUP S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7956/4789927956.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2ODAxMDAwNjQxNTc5="
  },
  {
    "id": "SVRBMDA5NTYxMDAwNTU2NzY5=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 30 TDI 100 kW (136 CV) S tronic",
    "price": 25900,
    "km": 53910,
    "fuel": "Diesel",
    "registration": "1 lug 2023",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1775/4815771775.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwNTU2NzY5="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNzkwNzMx=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business 35 TFSI 110 kW (150 CV) S tronic",
    "price": 27900,
    "km": 32226,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/5841/4813635841.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNzkwNzMx="
  },
  {
    "id": "SVRBMzEwMzYxMDAwMzgyNjg2=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 35 TFSI 110 kW (150 CV) S tronic",
    "price": 28500,
    "km": 10999,
    "fuel": "Benzina",
    "registration": "1 lug 2023",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/1092/4752871092.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwMzgyNjg2="
  },
  {
    "id": "SVRBMzE5MTY5NDEyODMw=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 35 TDI 120 kW (163 CV) S tronic",
    "price": 30500,
    "km": 30045,
    "fuel": "Diesel",
    "registration": "1 giu 2023",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/6664/4511776664.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTY5NDEyODMw="
  },
  {
    "id": "SVRBMzA5NTAxMDAwMTQ5MDQw=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "S line edition 35 TDI 120 kW (163 CV) S tronic",
    "price": 31900,
    "km": 74156,
    "fuel": "Diesel",
    "registration": "1 set 2024",
    "city": "FROSINONE",
    "dealer": "L'AUTOMOBILE ROMA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9008/4791229008.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA5NTAxMDAwMTQ5MDQw="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNTUyMjU5=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 30 TDI 100 kW (136 CV) S tronic",
    "price": 31900,
    "km": 32871,
    "fuel": "Diesel",
    "registration": "1 gen 2025",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/3092/4752873092.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNTUyMjU5="
  },
  {
    "id": "SVRBMDA4NzA5MDU1NTg3=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "Business Advanced 30 TDI 100 kW (136 CV) S tronic",
    "price": 32900,
    "km": 17608,
    "fuel": "Diesel",
    "registration": "1 giu 2024",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0587/4750750587.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzA5MDU1NTg3="
  },
  {
    "id": "SVRBMDA4MDAxMDAwNTU4NTQz=",
    "name": "Audi A4",
    "family": "A4",
    "trim": "S line edition 30 TDI 100 kW (136 CV) S tronic",
    "price": 33400,
    "km": 3013,
    "fuel": "Diesel",
    "registration": "1 set 2023",
    "city": "SESTO SAN GIOVANNI",
    "dealer": "SESTO AUTOVEICOLI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4228/4791184228.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDAxMDAwNTU4NTQz="
  },
  {
    "id": "SVRBMzE5NjkxMDg4NjUxNQ=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TFSI 110 kW S tronic",
    "price": 34500,
    "km": 21518,
    "fuel": "Benzina",
    "registration": "1 apr 2025",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/6468/4753046468.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDg4NjUxNQ="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNjA4MDY2=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TFSI 110 kW S tronic",
    "price": 35990,
    "km": 27460,
    "fuel": "Benzina",
    "registration": "1 mar 2026",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/3397/4813773397.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNjA4MDY2="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNjM2NDIx=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TFSI 110 kW S tronic",
    "price": 35990,
    "km": 14321,
    "fuel": "Benzina",
    "registration": "1 set 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/4700/4779154700.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNjM2NDIx="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNjUwMTYx=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TDI 150 kW S tronic",
    "price": 36590,
    "km": 42409,
    "fuel": "Diesel",
    "registration": "1 lug 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/9416/4783959416.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNjUwMTYx="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNjMxMDc4=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TFSI 110 kW S tronic",
    "price": 37500,
    "km": 12529,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3954/4813663954.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNjMxMDc4="
  },
  {
    "id": "SVRBMzEwNjUxMDAwMzY0OTIx=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business Advanced TDI 150 kW S tronic",
    "price": 37900,
    "km": 48217,
    "fuel": "Diesel",
    "registration": "1 mar 2025",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/9288/4788019288.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwMzY0OTIx="
  },
  {
    "id": "SVRBMzE2MjUxMDAwMzg5OTU1=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TFSI quattro 150 kWS tronic",
    "price": 37900,
    "km": 26782,
    "fuel": "Benzina",
    "registration": "1 nov 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/9714/4797449714.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwMzg5OTU1="
  },
  {
    "id": "SVRBMDA3ODQxMDAwNzc5NzU0=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business TFSI 110 kW S tronic",
    "price": 38800,
    "km": 11118,
    "fuel": "Benzina",
    "registration": "1 lug 2025",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9048/4813669048.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwNzc5NzU0="
  },
  {
    "id": "SVRBMzE5NjkxMDAwMjIxNTY2=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business Advanced TDI 150 kW S tronic",
    "price": 38900,
    "km": 19280,
    "fuel": "Diesel",
    "registration": "1 mag 2025",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/6281/4753046281.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwMjIxNTY2="
  },
  {
    "id": "SVRBMzEwMzYxMDAwNDM1ODI4=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business Advanced TDI 150 kW S tronic",
    "price": 38900,
    "km": 46702,
    "fuel": "Diesel",
    "registration": "1 giu 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/8234/4758438234.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwNDM1ODI4="
  },
  {
    "id": "SVRBMzEwNjUxMDAwMzU5NTIy=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business Advanced TDI 150 kW S tronic",
    "price": 39900,
    "km": 30338,
    "fuel": "Diesel",
    "registration": "1 mar 2025",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/1556/4791241556.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwMzU5NTIy="
  },
  {
    "id": "SVRBMzEwNjUxMDAwMzU5NTI2=",
    "name": "Audi A5 Avant",
    "family": "A5",
    "trim": "Business Advanced TFSI 110 kW S tronic",
    "price": 39900,
    "km": 27309,
    "fuel": "Benzina",
    "registration": "1 gen 2025",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2663/4752872663.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwMzU5NTI2="
  },
  {
    "id": "SVRBMDA1Mzg4Nzk2OTE1=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI 150 kW (204 PS) S tronic",
    "price": 24500,
    "km": 135340,
    "fuel": "Diesel",
    "registration": "1 feb 2021",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1997/4750641997.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1Mzg4Nzk2OTE1="
  },
  {
    "id": "SVRBMDA5MDMxMDAwMDMzOTk4=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 35 TDI 120 kW (163 PS) S tronic",
    "price": 24500,
    "km": 127686,
    "fuel": "Diesel",
    "registration": "1 apr 2021",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/9302/4750759302.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwMDMzOTk4="
  },
  {
    "id": "SVRBMDA4NDIxMDI5ODY1Mw=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI 150 kW (204 PS) S tronic",
    "price": 24750,
    "km": 89729,
    "fuel": "Diesel",
    "registration": "1 nov 2020",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/9905/4750709905.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDI5ODY1Mw="
  },
  {
    "id": "SVRBMDA2NjAxMDAwNDkwMjY3=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 26000,
    "km": 110862,
    "fuel": "Diesel",
    "registration": "1 mar 2019",
    "city": "CAGLIARI",
    "dealer": "CATTE AG S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8895/4785738895.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NjAxMDAwNDkwMjY3="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNDI5MDAz=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 26500,
    "km": 149488,
    "fuel": "Diesel",
    "registration": "1 feb 2020",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/7329/4750637329.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNDI5MDAz="
  },
  {
    "id": "SVRBMzE2MDAxMDAwNDkzMjA4=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI 150 kW (204 PS) S tronic",
    "price": 26900,
    "km": 120087,
    "fuel": "Diesel",
    "registration": "1 feb 2021",
    "city": "ALTAMURA",
    "dealer": "MAGNIFICA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3900/4752903900.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDAxMDAwNDkzMjA4="
  },
  {
    "id": "SVRBMzEyODgxMDAwNjc5ODQy=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI 150 kW (204 PS) S tronic",
    "price": 26900,
    "km": 112343,
    "fuel": "Diesel",
    "registration": "1 lug 2021",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/4656/4816044656.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNjc5ODQy="
  },
  {
    "id": "SVRBMDA4NDIxMDAwODA0NjY2=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Design 40 TDI 150 kW (204 PS) S tronic",
    "price": 26900,
    "km": 116390,
    "fuel": "Diesel",
    "registration": "1 mag 2019",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/8476/4815488476.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDAwODA0NjY2="
  },
  {
    "id": "SVRBMDAzNjMxMDAwNzA0NjY4=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 27900,
    "km": 113000,
    "fuel": "Diesel",
    "registration": "1 dic 2021",
    "city": "SAN MARINO",
    "dealer": "REGGINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8526/4797298526.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzNjMxMDAwNzA0NjY4="
  },
  {
    "id": "SVRBMzE2MjUxMDAwMzY1MzU1=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 28900,
    "km": 100972,
    "fuel": "Diesel",
    "registration": "1 set 2022",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/2311/4788022311.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwMzY1MzU1="
  },
  {
    "id": "SVRBMDA1Mzg4NzA2NzAx=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI 150 kW (204 PS) S tronic",
    "price": 29500,
    "km": 113000,
    "fuel": "Diesel",
    "registration": "1 giu 2021",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1598/4750641598.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1Mzg4NzA2NzAx="
  },
  {
    "id": "SVRBMDAzNjMxMDA1OTU0Nw=",
    "name": "Audi A6 Avant",
    "family": "A6",
    "trim": "Business Sport 40 TDI 150 kW (204 PS) S tronic",
    "price": 29900,
    "km": 60285,
    "fuel": "Diesel",
    "registration": "1 giu 2020",
    "city": "SAN MARINO",
    "dealer": "REGGINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8464/4750628464.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzNjMxMDA1OTU0Nw="
  },
  {
    "id": "SVRBMDAzMDY5ODM0MDg1=",
    "name": "Audi A6 Avant",
    "family": "A6 e-tron",
    "trim": "Edition one Blu Malpelo e-tron performance 270,00 kW",
    "price": 81900,
    "km": 3256,
    "fuel": "Elettrico",
    "registration": "1 gen 2025",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2064/4785702064.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDY5ODM0MDg1="
  },
  {
    "id": "SVRBMDA2MDgxMDAwMDcyMDgw=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 59900,
    "km": 16775,
    "fuel": "Elettrico",
    "registration": "1 giu 2025",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/8172/4750658172.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwMDcyMDgw="
  },
  {
    "id": "SVRBMDA3NTQxMDAwMzU0MTcz=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 59900,
    "km": 16658,
    "fuel": "Elettrico",
    "registration": "1 lug 2025",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/5995/4750695995.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDAwMzU0MTcz="
  },
  {
    "id": "SVRBMDA5NTYxMDAwMzgyNTk1=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 60900,
    "km": 20897,
    "fuel": "Elettrico",
    "registration": "1 ago 2025",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2749/4785822749.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwMzgyNTk1="
  },
  {
    "id": "SVRBMDA4NDkxMDAwMTk5NjMw=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 61900,
    "km": 18026,
    "fuel": "Elettrico",
    "registration": "1 giu 2025",
    "city": "SALERNO",
    "dealer": "G. DEL PRIORE S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1294/4750711294.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDkxMDAwMTk5NjMw="
  },
  {
    "id": "SVRBMzAwNjgxMDAwNDY3NTUy=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 61900,
    "km": 12818,
    "fuel": "Elettrico",
    "registration": "1 ago 2025",
    "city": "BRESCIA",
    "dealer": "BOSSONI BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/9228/4802249228.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzAwNjgxMDAwNDY3NTUy="
  },
  {
    "id": "SVRBMDExOTYxMDM2NjE4NA=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "Launch edition e-tron performance 270,00 kW",
    "price": 62800,
    "km": 9445,
    "fuel": "Elettrico",
    "registration": "1 gen 2025",
    "city": "ASSAGO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4830/4816744830.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDExOTYxMDM2NjE4NA="
  },
  {
    "id": "SVRBMDAxNzMxMDAwMjYwNDA5=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 62900,
    "km": 14430,
    "fuel": "Elettrico",
    "registration": "1 giu 2025",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7430/4750607430.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDAwMjYwNDA5="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzgzMjA3=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 63800,
    "km": 14036,
    "fuel": "Elettrico",
    "registration": "1 ago 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/8790/4785758790.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzgzMjA3="
  },
  {
    "id": "SVRBMzE2MjUxMDAwMzc0NDAx=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 63990,
    "km": 10097,
    "fuel": "Elettrico",
    "registration": "1 ago 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/8518/4780778518.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwMzc0NDAx="
  },
  {
    "id": "SVRBMzE2NTExMDAwNDM2Nzg1=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 64400,
    "km": 16751,
    "fuel": "Elettrico",
    "registration": "1 ago 2025",
    "city": "PARMA",
    "dealer": "EUROCAR PARMA",
    "image": "https://vtpimages.audi.com/carimg2/1201/4790051201.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2NTExMDAwNDM2Nzg1="
  },
  {
    "id": "SVRBMDA1NTMxMDAwMDgwNzgy=",
    "name": "Audi A6 Avant e-tron",
    "family": "A6 e-tron",
    "trim": "S line edition e-tron quattro 315,00 kW",
    "price": 64800,
    "km": 11639,
    "fuel": "Elettrico",
    "registration": "1 giu 2025",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/8152/4750638152.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwMDgwNzgy="
  },
  {
    "id": "SVRBMDA3NTQxMDkwNDE0OA=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business plus 40 TDI quattro 150 kW (204 CV) S tronic",
    "price": 39900,
    "km": 77000,
    "fuel": "Diesel",
    "registration": "1 dic 2022",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/3270/4750693270.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDkwNDE0OA="
  },
  {
    "id": "SVRBMzA1MjUxMDU1ODkwMw=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business plus 55 TFSI quattro 250 kW (340 CV) S tronic",
    "price": 42900,
    "km": 33142,
    "fuel": "Benzina",
    "registration": "1 gen 2023",
    "city": "ROMA",
    "dealer": "AUTOCENTRI BALDUINA",
    "image": "https://vtpimages.audi.com/carimg2/0819/4771230819.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA1MjUxMDU1ODkwMw="
  },
  {
    "id": "SVRBMDA0NjAxMDAwNjIzMjU5=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business plus 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 44500,
    "km": 93762,
    "fuel": "Diesel",
    "registration": "1 gen 2022",
    "city": "CATANIA",
    "dealer": "COMER SUD S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9121/4776969121.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA0NjAxMDAwNjIzMjU5="
  },
  {
    "id": "SVRBMzE2MjUxMDAwMjk2MDg1=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business Advanced 40 TDI quattro 150 kW (204 CV) S tronic",
    "price": 46900,
    "km": 77544,
    "fuel": "Diesel",
    "registration": "1 gen 2024",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/7310/4779157310.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwMjk2MDg1="
  },
  {
    "id": "SVRBMzE2NTAxMDAwMDMxNTAx=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 47900,
    "km": 56606,
    "fuel": "Diesel",
    "registration": "1 gen 2022",
    "city": "LATINA",
    "dealer": "L'AUTOMOBILE LATINA",
    "image": "https://vtpimages.audi.com/carimg2/1283/4802941283.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2NTAxMDAwMDMxNTAx="
  },
  {
    "id": "SVRBMDA4MDUxMDAwNjczNDI3=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business plus 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 52950,
    "km": 35842,
    "fuel": "Diesel",
    "registration": "1 ago 2022",
    "city": "MODENA",
    "dealer": "SCHIATTI MOTOR SRL",
    "image": "https://vtpimages.audi.com/carimg2/6908/4791186908.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDUxMDAwNjczNDI3="
  },
  {
    "id": "SVRBMDAzMDYxMDAwMTE0OTYw=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business plus 45 TDI quattro 180 kW (245 CV) S tronic",
    "price": 57900,
    "km": 15738,
    "fuel": "Diesel",
    "registration": "1 set 2023",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2146/4750622146.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwMTE0OTYw="
  },
  {
    "id": "SVRBMDA4NjE4NzkyNjE1=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business Advanced 40 TDI quattro 150 kW (204 CV) S tronic",
    "price": 63900,
    "km": 161,
    "fuel": "Diesel",
    "registration": "1 giu 2024",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/7133/4771127133.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjE4NzkyNjE1="
  },
  {
    "id": "SVRBMzEyODgxMDAwMzEwMTg0=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business Advanced 45 TDI quattro180(245)kW(CV)S tronic",
    "price": 67900,
    "km": 12067,
    "fuel": "Diesel",
    "registration": "1 set 2025",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/1824/4768331824.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwMzEwMTg0="
  },
  {
    "id": "SVRBMzE2MDI4NzY2MTY1=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business Advanced 45 TDI quattro180(245)kW(CV)S tronic",
    "price": 67900,
    "km": 80,
    "fuel": "Diesel",
    "registration": "1 giu 2025",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9368/4816049368.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDI4NzY2MTY1="
  },
  {
    "id": "SVRBMzE5MTYxMDE4MzM4NA=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business Advanced 40 TDI quattro 150 kW (204 CV) S tronic",
    "price": 69800,
    "km": 1,
    "fuel": "Diesel",
    "registration": "1 gen 2025",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/7792/4513167792.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDE4MzM4NA="
  },
  {
    "id": "SVRBMDA4MzExMDA4MjIwMA=",
    "name": "Audi A7 Sportback",
    "family": "A7",
    "trim": "Business Advanced 50 TDI quattro210(286)kW(CV)tiptronic",
    "price": 69900,
    "km": 16290,
    "fuel": "Diesel",
    "registration": "1 mag 2025",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/3829/4750723829.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDA4MjIwMA="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNjYzMjg5=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 35900,
    "km": 142573,
    "fuel": "Diesel",
    "registration": "1 feb 2019",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5712/4787865712.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNjYzMjg5="
  },
  {
    "id": "SVRBMDA4NzAxMDAwMTg4MjU2=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 46400,
    "km": 92984,
    "fuel": "Diesel",
    "registration": "1 dic 2021",
    "city": "ALTAVILLA VICENTINA",
    "dealer": "FRAV S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7855/4750747855.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NzAxMDAwMTg4MjU2="
  },
  {
    "id": "SVRBMzExMDAxMDAwMTk5ODc3=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 53900,
    "km": 47958,
    "fuel": "Diesel",
    "registration": "1 mag 2023",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/4689/4802254689.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwMTk5ODc3="
  },
  {
    "id": "SVRBMDA3NTQxMDMyODE3OA=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 57900,
    "km": 114495,
    "fuel": "Diesel",
    "registration": "1 ott 2023",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6601/4750696601.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDMyODE3OA="
  },
  {
    "id": "SVRBMzExMDAxMDAwMDg4MjQ0=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 59900,
    "km": 104374,
    "fuel": "Diesel",
    "registration": "1 set 2023",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/5360/4752885360.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwMDg4MjQ0="
  },
  {
    "id": "SVRBMzExMDAxMDAwNTUyMzM4=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 62900,
    "km": 89876,
    "fuel": "Diesel",
    "registration": "1 gen 2024",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/2475/4788022475.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNTUyMzM4="
  },
  {
    "id": "SVRBMDA4NDIxMDEzNTI0NA=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 65550,
    "km": 18148,
    "fuel": "Diesel",
    "registration": "1 lug 2024",
    "city": "CONEGLIANO",
    "dealer": "FORZA QUATTRO",
    "image": "https://vtpimages.audi.com/carimg2/1959/4785761959.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NDIxMDEzNTI0NA="
  },
  {
    "id": "SVRBMzA5NTAxMDUyOTQ3MQ=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 69900,
    "km": 24408,
    "fuel": "Diesel",
    "registration": "1 ott 2024",
    "city": "FROSINONE",
    "dealer": "L'AUTOMOBILE ROMA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3894/4752853894.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA5NTAxMDUyOTQ3MQ="
  },
  {
    "id": "SVRBMzE2MDA5ODA1MDMz=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 70900,
    "km": 13049,
    "fuel": "Diesel",
    "registration": "1 giu 2024",
    "city": "ALTAMURA",
    "dealer": "MAGNIFICA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3111/4752903111.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDA5ODA1MDMz="
  },
  {
    "id": "SVRBMDAxNzM5MzA4MzMz=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 77900,
    "km": 39230,
    "fuel": "Diesel",
    "registration": "1 mag 2024",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8643/4750608643.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzM5MzA4MzMz="
  },
  {
    "id": "SVRBMzEwNjU5NTY1NTYx=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 77900,
    "km": 5874,
    "fuel": "Diesel",
    "registration": "1 nov 2024",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2316/4802252316.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjU5NTY1NTYx="
  },
  {
    "id": "SVRBMDA4MzExMDAwNTYzNjQ3=",
    "name": "Audi A8",
    "family": "A8",
    "trim": "50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 79000,
    "km": 24700,
    "fuel": "Diesel",
    "registration": "1 set 2025",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/9103/4785759103.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDAwNTYzNjQ3="
  },
  {
    "id": "SVRBMzE4ODExMDAwNzA2NTU4=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Admired Advanced 30 TDI 85 kW (116 PS) S tronic",
    "price": 16900,
    "km": 141580,
    "fuel": "Diesel",
    "registration": "1 giu 2021",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0625/4797450625.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNzA2NTU4="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNzcyODc0=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 16900,
    "km": 71466,
    "fuel": "Benzina",
    "registration": "1 feb 2020",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/5505/4813755505.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNzcyODc0="
  },
  {
    "id": "SVRBMDA5MTYxMDAwMDQ3OTEz=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Admired 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 17080,
    "km": 102679,
    "fuel": "Benzina",
    "registration": "1 ago 2020",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/2636/4750762636.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwMDQ3OTEz="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMzU1NTIx=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business 30 TDI 85 kW (116 PS) 6-marce",
    "price": 17150,
    "km": 101656,
    "fuel": "Diesel",
    "registration": "1 mag 2019",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/6129/4791186129.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMzU1NTIx="
  },
  {
    "id": "SVRBMzE5MTYxMDAwMDQ3OTA5=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business Design 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 17900,
    "km": 81416,
    "fuel": "Benzina",
    "registration": "1 feb 2019",
    "city": "BARBERINO TAVARNELLE",
    "dealer": "SCOTTI & CO. SRL",
    "image": "https://vtpimages.audi.com/carimg2/5026/4520875026.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5MTYxMDAwMDQ3OTA5="
  },
  {
    "id": "SVRBMzExMDAxMDAwMzU0Nzgx=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Admired 30 TDI 85 kW (116 PS) S tronic",
    "price": 17900,
    "km": 140599,
    "fuel": "Diesel",
    "registration": "1 mag 2022",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/1297/4769421297.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwMzU0Nzgx="
  },
  {
    "id": "SVRBMDA5NTYxMDQ4ODMyOQ=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business Design 30 TDI 85 kW (116 PS) 6-marce",
    "price": 18200,
    "km": 92875,
    "fuel": "Diesel",
    "registration": "1 mag 2019",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2149/4790012149.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDQ4ODMyOQ="
  },
  {
    "id": "SVRBMDA4MDMxMDAwNTM5MTg0=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Admired 30 TDI 85 kW (116 PS) 6-marce",
    "price": 18300,
    "km": 73880,
    "fuel": "Diesel",
    "registration": "1 mar 2019",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/8580/4785758580.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwNTM5MTg0="
  },
  {
    "id": "SVRBMzE4ODE5MzQ0ODM1=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Admired 30 TDI 85 kW (116 PS) S tronic",
    "price": 18400,
    "km": 108000,
    "fuel": "Diesel",
    "registration": "1 nov 2020",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7714/4788027714.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODE5MzQ0ODM1="
  },
  {
    "id": "SVRBMzE2NTExMDAwMDg5MTI4=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business 35 TDI 110 kW (150 CV) S tronic",
    "price": 18400,
    "km": 145672,
    "fuel": "Diesel",
    "registration": "1 set 2022",
    "city": "PARMA",
    "dealer": "EUROCAR PARMA",
    "image": "https://vtpimages.audi.com/carimg2/6706/4753006706.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2NTExMDAwMDg5MTI4="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNTMyOTAx=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business Design 30 TFSI 85 kW (116 PS) 6-marce",
    "price": 18417,
    "km": 75000,
    "fuel": "Benzina",
    "registration": "1 giu 2020",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/7812/4795477812.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNTMyOTAx="
  },
  {
    "id": "SVRBMDA1NTMxMDAwNTU0MDc2=",
    "name": "Audi Q2",
    "family": "Q2",
    "trim": "Business Design 30 TDI 85 kW (116 PS) 6-marce",
    "price": 18500,
    "km": 98802,
    "fuel": "Diesel",
    "registration": "1 gen 2019",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/8013/4776978013.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwNTU0MDc2="
  },
  {
    "id": "SVRBMDA5NTYxMDA1ODQ1NQ=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 35 TFSI 110 kW (150 PS) 6-marce",
    "price": 19900,
    "km": 111739,
    "fuel": "Benzina",
    "registration": "1 giu 2019",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6445/4785826445.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDA1ODQ1NQ="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNDY5MDIw=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business Advanced 35 TDI 110 kW (150 PS) S tronic",
    "price": 19900,
    "km": 149595,
    "fuel": "Diesel",
    "registration": "1 lug 2020",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2906/4750752906.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNDY5MDIw="
  },
  {
    "id": "SVRBMzE4ODExMDAwMjg5NzY1=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business Advanced 35 TDI 110 kW (150 PS) S tronic",
    "price": 20300,
    "km": 142000,
    "fuel": "Diesel",
    "registration": "1 mar 2019",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/3776/4769423776.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwMjg5NzY1="
  },
  {
    "id": "SVRBMzExMDAxMDAwNDcwMDk5=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business Advanced 35 TDI 110 kW (150 PS) S tronic",
    "price": 20900,
    "km": 124520,
    "fuel": "Diesel",
    "registration": "1 dic 2019",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/4146/4752884146.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwNDcwMDk5="
  },
  {
    "id": "SVRBMDA3ODQxMDgwODIzMA=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 40 TFSI quattro 140 kW (190 PS) S tronic",
    "price": 21800,
    "km": 108997,
    "fuel": "Benzina",
    "registration": "1 gen 2020",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7899/4750697899.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDgwODIzMA="
  },
  {
    "id": "SVRBMzE4ODExMDAwNzk4NjI0=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 35 TDI quattro 110 kW (150 PS) 6-marce",
    "price": 22300,
    "km": 122800,
    "fuel": "Diesel",
    "registration": "1 lug 2020",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0922/4816050922.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDAwNzk4NjI0="
  },
  {
    "id": "SVRBMDA3ODQxMDg2NTc0NA=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business Advanced 35 TDI 110 kW (150 PS) S tronic",
    "price": 22700,
    "km": 71756,
    "fuel": "Diesel",
    "registration": "1 dic 2019",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/3217/4791183217.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDg2NTc0NA="
  },
  {
    "id": "SVRBMDA4OTkxMDAwMzY5ODA5=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 35 TDI 110 kW (150 CV) S tronic",
    "price": 22800,
    "km": 116964,
    "fuel": "Diesel",
    "registration": "1 dic 2022",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6081/4750756081.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwMzY5ODA5="
  },
  {
    "id": "SVRBMzE2MDAxMDgwNzI1OA=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business Advanced 35 TDI 110 kW (150 PS) S tronic",
    "price": 22900,
    "km": 103001,
    "fuel": "Diesel",
    "registration": "1 nov 2019",
    "city": "ALTAMURA",
    "dealer": "MAGNIFICA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/0073/4788020073.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDAxMDgwNzI1OA="
  },
  {
    "id": "SVRBMzE5NjExMDAwNjE3MjA1=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 35 TFSI 110 kW (150 PS) 6-marce",
    "price": 22990,
    "km": 70768,
    "fuel": "Benzina",
    "registration": "1 lug 2019",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9051/4799179051.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDAwNjE3MjA1="
  },
  {
    "id": "SVRBMzE4ODExMDQ4NTY2MQ=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 35 TDI 110 kW (150 PS) S tronic",
    "price": 23300,
    "km": 95460,
    "fuel": "Diesel",
    "registration": "1 feb 2021",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1024/4802261024.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODExMDQ4NTY2MQ="
  },
  {
    "id": "SVRBMDA5NTY5MTgxODY0=",
    "name": "Audi Q3 SUV",
    "family": "Q3",
    "trim": "Business 35 TDI 110 kW (150 PS) 6-marce",
    "price": 23500,
    "km": 103318,
    "fuel": "Diesel",
    "registration": "1 mag 2021",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/1636/4790011636.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTY5MTgxODY0="
  },
  {
    "id": "SVRBMDA4MzExMDAwNjU1MTYy=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "EVO 40 e-tron 150,00 kW",
    "price": 29400,
    "km": 31740,
    "fuel": "Elettrico",
    "registration": "1 set 2023",
    "city": "PERUGIA",
    "dealer": "AUTOCENTRI GIUSTOZZI",
    "image": "https://vtpimages.audi.com/carimg2/6658/4791186658.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzExMDAwNjU1MTYy="
  },
  {
    "id": "SVRBMDA4MzkxMDAwMjc5NDc0=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "Business 45 e-tron quattro 195,00 kW",
    "price": 32900,
    "km": 66325,
    "fuel": "Elettrico",
    "registration": "1 lug 2023",
    "city": "REGGIO EMILIA",
    "dealer": "BOSSONI REGGIO EMILIA",
    "image": "https://vtpimages.audi.com/carimg2/4945/4781414945.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzkxMDAwMjc5NDc0="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNzQwMTg3=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "S line edition 40 e-tron 150,00 kW",
    "price": 34900,
    "km": 43688,
    "fuel": "Elettrico",
    "registration": "1 ott 2023",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/7126/4802207126.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNzQwMTg3="
  },
  {
    "id": "SVRBMDA3NTQxMDAwNjExNDUy=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "Business Advanced 40 e-tron 150,00 kW",
    "price": 36000,
    "km": 46000,
    "fuel": "Elettrico",
    "registration": "1 set 2023",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2618/4775022618.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDAwNjExNDUy="
  },
  {
    "id": "SVRBMzEyODgxMDAwNjM4MTYz=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "S line edition 45 e-tron quattro 210,00 kW",
    "price": 36900,
    "km": 81653,
    "fuel": "Elettrico",
    "registration": "1 apr 2024",
    "city": "TRENTO",
    "dealer": "EUROCAR TRENTO",
    "image": "https://vtpimages.audi.com/carimg2/4619/4779154619.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEyODgxMDAwNjM4MTYz="
  },
  {
    "id": "SVRBMzE5NjExMDAwNzIzNTk2=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "S line edition 45 e-tron quattro 195,00 kW",
    "price": 36990,
    "km": 63224,
    "fuel": "Elettrico",
    "registration": "1 ott 2023",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8695/4802258695.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjExMDAwNzIzNTk2="
  },
  {
    "id": "SVRBMzE5NjkxMDAwNTk2Nzg3=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "Business Advanced 50 e-tron quattro 220,00 kW",
    "price": 37900,
    "km": 57785,
    "fuel": "Elettrico",
    "registration": "1 set 2023",
    "city": "UDINE",
    "dealer": "EUROCAR UDINE",
    "image": "https://vtpimages.audi.com/carimg2/8408/4767138408.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjkxMDAwNTk2Nzg3="
  },
  {
    "id": "SVRBMDA2NTYxMDAwNjg1MTE3=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "Business Advanced 50 e-tron quattro 220,00 kW",
    "price": 37900,
    "km": 36341,
    "fuel": "Elettrico",
    "registration": "1 ott 2023",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/2416/4792002416.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwNjg1MTE3="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNzU2NzMw=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "S line edition 45 e-tron 210,00 kW",
    "price": 39900,
    "km": 39874,
    "fuel": "Elettrico",
    "registration": "1 giu 2024",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4453/4813774453.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNzU2NzMw="
  },
  {
    "id": "SVRBMDA5MDMxMDg5MzQ1Ng=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "Business 40 e-tron 150,00 kW",
    "price": 42900,
    "km": 13963,
    "fuel": "Elettrico",
    "registration": "1 ott 2025",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/7565/4789987565.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDg5MzQ1Ng="
  },
  {
    "id": "SVRBMDAxMjAxMDAwNTg0NTgy=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "S line edition 45 e-tron quattro 210,00 kW",
    "price": 43900,
    "km": 20726,
    "fuel": "Elettrico",
    "registration": "1 mag 2024",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/4153/4813614153.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwNTg0NTgy="
  },
  {
    "id": "SVRBMDA3NTQ4NTYwNjAx=",
    "name": "Audi Q4 Sportback e-tron",
    "family": "Q4 e-tron",
    "trim": "S line edition 45 e-tron 210,00 kW",
    "price": 44900,
    "km": 10000,
    "fuel": "Elettrico",
    "registration": "1 giu 2024",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8121/4785748121.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQ4NTYwNjAx="
  },
  {
    "id": "SVRBMDA3NTQxMDAwMTgwNTA2=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "Business Design 35 TDI 120 kW (163 PS) S tronic",
    "price": 22900,
    "km": 120000,
    "fuel": "Diesel",
    "registration": "1 nov 2020",
    "city": "PRATOLA SERRA",
    "dealer": "G.BENEVENTO-FINAUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6459/4785746459.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3NTQxMDAwMTgwNTA2="
  },
  {
    "id": "SVRBMDA4MDMxMDU5NTU0Mw=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "Business 40 TDI quattro 140 kW (190 PS) S tronic",
    "price": 23450,
    "km": 125249,
    "fuel": "Diesel",
    "registration": "1 giu 2020",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/7021/4771127021.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDU5NTU0Mw="
  },
  {
    "id": "SVRBMDA1MzgxMDAwNjQ1OTk3=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "S line plus 40 TDI quattro 140 kW (190 PS) S tronic",
    "price": 25900,
    "km": 114650,
    "fuel": "Diesel",
    "registration": "1 apr 2019",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/1077/4787841077.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDAwNjQ1OTk3="
  },
  {
    "id": "SVRBMzE2MjUxMDAwNjYyNTE0=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "S line 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 26500,
    "km": 120701,
    "fuel": "Diesel",
    "registration": "1 mag 2021",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/2430/4795562430.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDAwNjYyNTE0="
  },
  {
    "id": "SVRBMDA2MDgxMDAwNTAwNDMz=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "Business Sport 40 TDI quattro 140 kW (190 PS) S tronic",
    "price": 26800,
    "km": 78931,
    "fuel": "Diesel",
    "registration": "1 mag 2020",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/3143/4802913143.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwNTAwNDMz="
  },
  {
    "id": "SVRBMzA4Nzg5MjE5MjU1=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "Business 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 26900,
    "km": 101389,
    "fuel": "Diesel",
    "registration": "1 mar 2021",
    "city": "VIGEVANO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6765/4791226765.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4Nzg5MjE5MjU1="
  },
  {
    "id": "SVRBMDA2MDgxMDAwNTU2NjYx=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "S line plus 35 TDI quattro 120 kW (163 PS) S tronic",
    "price": 26900,
    "km": 98187,
    "fuel": "Diesel",
    "registration": "1 set 2020",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/7665/4750657665.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwNTU2NjYx="
  },
  {
    "id": "SVRBMDA1Mzg4NjI5NjU5=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "Business 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 27900,
    "km": 125218,
    "fuel": "Diesel",
    "registration": "1 giu 2021",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/6655/4785716655.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1Mzg4NjI5NjU5="
  },
  {
    "id": "SVRBMDA5MTYxMDAwNDY5NjI1=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "S line plus 40 TDI quattro 140 kW (190 PS) S tronic",
    "price": 28300,
    "km": 102694,
    "fuel": "Diesel",
    "registration": "1 giu 2019",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/1862/4791191862.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDAwNDY5NjI1="
  },
  {
    "id": "SVRBMzE1NjMxMDAwMjA5Mjc0=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "S line plus 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 29000,
    "km": 101700,
    "fuel": "Diesel",
    "registration": "1 ago 2020",
    "city": "LA SPEZIA",
    "dealer": "BROTINI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2549/4752902549.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE1NjMxMDAwMjA5Mjc0="
  },
  {
    "id": "SVRBMzA4NzgxMDE3MDM3NA=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "Business Advanced 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 29900,
    "km": 104356,
    "fuel": "Diesel",
    "registration": "1 feb 2022",
    "city": "VIGEVANO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8128/4790038128.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4NzgxMDE3MDM3NA="
  },
  {
    "id": "SVRBMDA2MzUxMDAwMjIyMjg2=",
    "name": "Audi Q5 SUV",
    "family": "Q5",
    "trim": "S line 40 TDI quattro 150 kW (204 PS) S tronic",
    "price": 29900,
    "km": 126404,
    "fuel": "Diesel",
    "registration": "1 ott 2022",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/1782/4750671782.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwMjIyMjg2="
  },
  {
    "id": "SVRBMDA4NjUxMDAwNDMxMDMy=",
    "name": "Audi Q6 Sportback e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron quattro 285,00 kW",
    "price": 69900,
    "km": 8195,
    "fuel": "Elettrico",
    "registration": "1 apr 2025",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1082/4785781082.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwNDMxMDMy="
  },
  {
    "id": "SVRBMDA2MzUxMDAwNjQxODY0=",
    "name": "Audi Q6 Sportback e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron performance 225,00 kW",
    "price": 69900,
    "km": 6410,
    "fuel": "Elettrico",
    "registration": "1 set 2025",
    "city": "FIRENZE",
    "dealer": "EUROCAR FIRENZE",
    "image": "https://vtpimages.audi.com/carimg2/9633/4785729633.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MzUxMDAwNjQxODY0="
  },
  {
    "id": "SVRBMDAxNzMxMDAwNjQ3ODY0=",
    "name": "Audi Q6 Sportback e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron performance 225,00 kW",
    "price": 75900,
    "km": 1,
    "fuel": "Elettrico",
    "registration": "1 feb 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7110/4785707110.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDAwNjQ3ODY0="
  },
  {
    "id": "SVRBMDAxNzM5ODgxNTQy=",
    "name": "Audi Q6 Sportback e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron quattro 285,00 kW",
    "price": 79900,
    "km": 70,
    "fuel": "Elettrico",
    "registration": "1 mar 2026",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7713/4785707713.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzM5ODgxNTQy="
  },
  {
    "id": "SVRBMDA4MjIxMDAwMDk3MDAy=",
    "name": "Audi Q6 Sportback e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron quattro 285,00 kW",
    "price": 79900,
    "km": 10100,
    "fuel": "Elettrico",
    "registration": "1 set 2025",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/6825/4750706825.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwMDk3MDAy="
  },
  {
    "id": "SVRBMDA3ODQxMDAwMTA1MjUy=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "Business Advanced e-tron performance 225,00 kW",
    "price": 44800,
    "km": 16429,
    "fuel": "Elettrico",
    "registration": "1 apr 2025",
    "city": "LIPOMO",
    "dealer": "L'AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/7541/4750697541.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA3ODQxMDAwMTA1MjUy="
  },
  {
    "id": "SVRBMDExOTYxMDAwMDUxNzY1=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "Business Advanced e-tron performance 225,00 kW",
    "price": 56900,
    "km": 17360,
    "fuel": "Elettrico",
    "registration": "1 mag 2025",
    "city": "ASSAGO",
    "dealer": "FRATELLI GIACOMEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/4689/4816744689.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDExOTYxMDAwMDUxNzY1="
  },
  {
    "id": "SVRBMzExMDAxMDAwMzE4Mjc2=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "Business Advanced e-tron quattro 285,00 kW",
    "price": 58900,
    "km": 9150,
    "fuel": "Elettrico",
    "registration": "1 mar 2025",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/5705/4816045705.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwMzE4Mjc2="
  },
  {
    "id": "SVRBMzE2MjUxMDYyOTYyNA=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "Business Advanced e-tron quattro 285,00 kW",
    "price": 59500,
    "km": 2718,
    "fuel": "Elettrico",
    "registration": "1 nov 2025",
    "city": "CASALECCHIO DI RENO",
    "dealer": "AUDI ZENTRUM BOLOGNA",
    "image": "https://vtpimages.audi.com/carimg2/0428/4791240428.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MjUxMDYyOTYyNA="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMDU3MDIz=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron quattro 285,00 kW",
    "price": 59900,
    "km": 22518,
    "fuel": "Elettrico",
    "registration": "1 mar 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/9565/4785759565.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMDU3MDIz="
  },
  {
    "id": "SVRBMzEwMzYxMDAwNjY2OTc1=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "Edition one Grey e-tron quattro kW",
    "price": 59900,
    "km": 29638,
    "fuel": "Elettrico",
    "registration": "1 ott 2024",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/2189/4816042189.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwNjY2OTc1="
  },
  {
    "id": "SVRBMzEwMzYxMDAwMTY0NDQ4=",
    "name": "Audi Q6 e-tron",
    "family": "Q6 e-tron",
    "trim": "S line edition e-tron quattro 285,00 kW",
    "price": 61500,
    "km": 15952,
    "fuel": "Elettrico",
    "registration": "1 mar 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/5772/4788015772.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDAwMTY0NDQ4="
  },
  {
    "id": "SVRBMzE2NTExMDAwMzU5MTEz=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport plus 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 38900,
    "km": 79532,
    "fuel": "Diesel",
    "registration": "1 mar 2019",
    "city": "PARMA",
    "dealer": "EUROCAR PARMA",
    "image": "https://vtpimages.audi.com/carimg2/5794/4753005794.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2NTExMDAwMzU5MTEz="
  },
  {
    "id": "SVRBMDA2MDgxMDAwNjA5MTA4=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "55 TFSI quattro 250 kW (340 PS) tiptronic",
    "price": 43800,
    "km": 93005,
    "fuel": "Benzina",
    "registration": "1 giu 2022",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/7635/4780147635.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDgxMDAwNjA5MTA4="
  },
  {
    "id": "SVRBMzE2MDAxMDcwMzk2NA=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 46900,
    "km": 75938,
    "fuel": "Diesel",
    "registration": "1 set 2020",
    "city": "ALTAMURA",
    "dealer": "MAGNIFICA S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/4835/4752904835.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDAxMDcwMzk2NA="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNTUyMjk1=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 46900,
    "km": 111494,
    "fuel": "Diesel",
    "registration": "1 lug 2022",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2828/4752872828.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNTUyMjk1="
  },
  {
    "id": "SVRBMzE2MDIxMDAwNjMwOTcy=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 49900,
    "km": 86195,
    "fuel": "Diesel",
    "registration": "1 gen 2022",
    "city": "CONCOREZZO",
    "dealer": "LOMBARDA MOTORI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8113/4780778113.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE2MDIxMDAwNjMwOTcy="
  },
  {
    "id": "SVRBMDA1MzgxMDAwMTgyNzAw=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Business 45 TDI quattro 170 kW (231 PS) tiptronic",
    "price": 53500,
    "km": 18671,
    "fuel": "Diesel",
    "registration": "1 giu 2022",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/0172/4750640172.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1MzgxMDAwMTgyNzAw="
  },
  {
    "id": "SVRBMDA4NjExMDAwNDkwOTcy=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 56900,
    "km": 115552,
    "fuel": "Diesel",
    "registration": "1 apr 2023",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/9509/4797349509.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjExMDAwNDkwOTcy="
  },
  {
    "id": "SVRBMzE4NDI5OTAyNTQz=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 60100,
    "km": 23572,
    "fuel": "Diesel",
    "registration": "1 apr 2023",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/6296/4753016296.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDI5OTAyNTQz="
  },
  {
    "id": "SVRBMzE4ODE5OTU5MzYz=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 60800,
    "km": 92870,
    "fuel": "Diesel",
    "registration": "1 feb 2024",
    "city": "PIETRASANTA",
    "dealer": "ALDO TERIGI S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1507/4753031507.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4ODE5OTU5MzYz="
  },
  {
    "id": "SVRBMDAxMjAxMDAwMDI4MTQ3=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "S line edition 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 61900,
    "km": 34371,
    "fuel": "Diesel",
    "registration": "1 mag 2024",
    "city": "CREMONA",
    "dealer": "BOSSONI CREMONA",
    "image": "https://vtpimages.audi.com/carimg2/8513/4791168513.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxMjAxMDAwMDI4MTQ3="
  },
  {
    "id": "SVRBMzAwNjgxMDAwMDMzMzcz=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "S line edition 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 62900,
    "km": 26188,
    "fuel": "Diesel",
    "registration": "1 ott 2024",
    "city": "BRESCIA",
    "dealer": "BOSSONI BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/6044/4791226044.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzAwNjgxMDAwMDMzMzcz="
  },
  {
    "id": "SVRBMDAxNzMxMDkxMDc5Mw=",
    "name": "Audi Q7 SUV",
    "family": "Q7",
    "trim": "Sport 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 63900,
    "km": 74940,
    "fuel": "Diesel",
    "registration": "1 mar 2023",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8104/4750608104.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDkxMDc5Mw="
  },
  {
    "id": "SVRBMDA1Mzg3MDQ3NzY4=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 44900,
    "km": 117898,
    "fuel": "Diesel",
    "registration": "1 ott 2019",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/0304/4750640304.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1Mzg3MDQ3NzY4="
  },
  {
    "id": "SVRBMDA2NTYxMDAwMjEyMTAw=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 44900,
    "km": 106531,
    "fuel": "Diesel",
    "registration": "1 dic 2020",
    "city": "FERRARA",
    "dealer": "GRAND PRIX S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1724/4797321724.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NTYxMDAwMjEyMTAw="
  },
  {
    "id": "SVRBMDAzMDYxMDAwMjA4OTM3=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "45 TDI quattro 170 kW (231 PS) tiptronic",
    "price": 45900,
    "km": 130410,
    "fuel": "Diesel",
    "registration": "1 set 2021",
    "city": "SAN GIOVANNI TEATINO",
    "dealer": "PASQUARELLI AUTO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2211/4750622211.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAzMDYxMDAwMjA4OTM3="
  },
  {
    "id": "SVRBMzE4NDIxMDQyNTAzMg=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 46500,
    "km": 86856,
    "fuel": "Diesel",
    "registration": "1 gen 2021",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/7597/4753017597.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDIxMDQyNTAzMg="
  },
  {
    "id": "SVRBMDA2ODAxMDY3NTczNA=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 46800,
    "km": 140000,
    "fuel": "Diesel",
    "registration": "1 feb 2022",
    "city": "CAVALLINO",
    "dealer": "PEZZUTO GROUP S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9723/4785739723.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2ODAxMDY3NTczNA="
  },
  {
    "id": "SVRBMDA4MzkxMDAwMzU3NzM4=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 55 TFSI quattro 250 kW (340 PS) tiptronic",
    "price": 46900,
    "km": 63355,
    "fuel": "Benzina",
    "registration": "1 gen 2021",
    "city": "REGGIO EMILIA",
    "dealer": "BOSSONI REGGIO EMILIA",
    "image": "https://vtpimages.audi.com/carimg2/4940/4781414940.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MzkxMDAwMzU3NzM4="
  },
  {
    "id": "SVRBMDA1NTMxMDAwMzQ4ODU3=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 47500,
    "km": 147000,
    "fuel": "Diesel",
    "registration": "1 lug 2020",
    "city": "PESARO",
    "dealer": "GABELLINI",
    "image": "https://vtpimages.audi.com/carimg2/7341/4750637341.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1NTMxMDAwMzQ4ODU3="
  },
  {
    "id": "SVRBMDA4NjUxMDAwMDE2NzYz=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 CV) tiptronic",
    "price": 47900,
    "km": 115989,
    "fuel": "Diesel",
    "registration": "1 gen 2023",
    "city": "VENEZIA",
    "dealer": "MOTORCLASS S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1854/4785781854.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjUxMDAwMDE2NzYz="
  },
  {
    "id": "SVRBMDA1Mzg5NTMzMTYx=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 50 TDI quattro 210 kW (286 PS) tiptronic",
    "price": 48800,
    "km": 94540,
    "fuel": "Diesel",
    "registration": "1 apr 2022",
    "city": "PARUZZARO",
    "dealer": "AUDI ZENTRUM ARONA",
    "image": "https://vtpimages.audi.com/carimg2/0307/4750640307.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA1Mzg5NTMzMTYx="
  },
  {
    "id": "SVRBMDA4OTkxMDAwMzMzMDMz=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "45 TDI quattro 170 kW (231 PS) tiptronic",
    "price": 49500,
    "km": 27260,
    "fuel": "Diesel",
    "registration": "1 mar 2022",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/6197/4750756197.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwMzMzMDMz="
  },
  {
    "id": "SVRBMDA5MTYxMDgzMDEyMA=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 45 TDI quattro 170 kW (231 CV) tiptronic",
    "price": 50865,
    "km": 111774,
    "fuel": "Diesel",
    "registration": "1 set 2023",
    "city": "LIVORNO",
    "dealer": "SCOTTI",
    "image": "https://vtpimages.audi.com/carimg2/2414/4750762414.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MTYxMDgzMDEyMA="
  },
  {
    "id": "SVRBMzExMDAxMDAwMTkzNzU0=",
    "name": "Audi Q8 SUV",
    "family": "Q8",
    "trim": "Sport 55 TFSI quattro 250 kW (340 CV) tiptronic",
    "price": 50900,
    "km": 106375,
    "fuel": "Benzina",
    "registration": "1 set 2022",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/5459/4752885459.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwMTkzNzU0="
  },
  {
    "id": "SVRBMzExMDAxMDAwODE5NzAw=",
    "name": "Audi Q8 Sportback e-tron",
    "family": "Q8 e-tron",
    "trim": "S line edition 55 e-tron quattro 300,00 kW",
    "price": 54900,
    "km": 41643,
    "fuel": "Elettrico",
    "registration": "1 feb 2024",
    "city": "VERONA",
    "dealer": "EUROCAR VERONA",
    "image": "https://vtpimages.audi.com/carimg2/3776/4816043776.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzExMDAxMDAwODE5NzAw="
  },
  {
    "id": "SVRBMDA2NjAxMDAwMzc4NjE3=",
    "name": "Audi Q8 e-tron",
    "family": "Q8 e-tron",
    "trim": "Business Advanced 55 e-tron quattro 300,00 kW",
    "price": 46000,
    "km": 75866,
    "fuel": "Elettrico",
    "registration": "1 mar 2023",
    "city": "CAGLIARI",
    "dealer": "CATTE AG S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/1710/4797321710.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2NjAxMDAwMzc4NjE3="
  },
  {
    "id": "SVRBMzE5NjE3MDMxMjg3=",
    "name": "Audi Q8 e-tron",
    "family": "Q8 e-tron",
    "trim": "Business Advanced 50 e-tron quattro 250,00 kW",
    "price": 49990,
    "km": 18685,
    "fuel": "Elettrico",
    "registration": "1 mar 2023",
    "city": "PRATO",
    "dealer": "QUATTROCAR S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/5131/4753025131.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE5NjE3MDMxMjg3="
  },
  {
    "id": "SVRBMDA4NjE3OTIwODk5=",
    "name": "Audi Q8 e-tron",
    "family": "Q8 e-tron",
    "trim": "Business Advanced 50 e-tron quattro 250,00 kW",
    "price": 54900,
    "km": 421,
    "fuel": "Elettrico",
    "registration": "1 mar 2023",
    "city": "ANCONA",
    "dealer": "AUDI ZENTRUM ANCONA",
    "image": "https://vtpimages.audi.com/carimg2/5288/4785765288.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4NjE3OTIwODk5="
  },
  {
    "id": "SVRBMDA4MDA4MzY0Mjk5=",
    "name": "Audi Q8 e-tron",
    "family": "Q8 e-tron",
    "trim": "S line edition 55 e-tron quattro 300,00 kW",
    "price": 68700,
    "km": 10,
    "fuel": "Elettrico",
    "registration": "1 mar 2025",
    "city": "SESTO SAN GIOVANNI",
    "dealer": "SESTO AUTOVEICOLI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/3331/4791183331.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDA4MzY0Mjk5="
  },
  {
    "id": "SVRBMDA2ODA3MTUwMzI0=",
    "name": "Audi Q8 e-tron",
    "family": "Q8 e-tron",
    "trim": "Business Advanced 55 e-tron quattro 300,00 kW",
    "price": 78000,
    "km": 1,
    "fuel": "Elettrico",
    "registration": "1 mar 2023",
    "city": "CAVALLINO",
    "dealer": "PEZZUTO GROUP S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/8309/4789928309.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2ODA3MTUwMzI0="
  },
  {
    "id": "SVRBMDA4MDAxMDUyMDk4OQ=",
    "name": "Audi SQ8 Sportback e-tron",
    "family": "Q8 e-tron",
    "trim": "SQ8 Sportback sport attitude e-tron 370,00 kW",
    "price": 69900,
    "km": 10,
    "fuel": "Elettrico",
    "registration": "1 apr 2024",
    "city": "SESTO SAN GIOVANNI",
    "dealer": "SESTO AUTOVEICOLI S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/2807/4791182807.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDAxMDUyMDk4OQ="
  },
  {
    "id": "SVRBMDA5NTYxMDAwMzIzNTk0=",
    "name": "Audi SQ8 Sportback e-tron",
    "family": "Q8 e-tron",
    "trim": "SQ8 Sportback sport attitude e-tron 370,00 kW",
    "price": 79900,
    "km": 1,
    "fuel": "Elettrico",
    "registration": "1 ago 2024",
    "city": "GRUGLIASCO",
    "dealer": "IL FARO S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/9404/4750799404.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5NTYxMDAwMzIzNTk0="
  },
  {
    "id": "SVRBMzA4ODI4OTU0NDE5=",
    "name": "Audi RS e-tron GT",
    "family": "e-tron GT",
    "trim": "RS e-tron GT 440,00 kW",
    "price": 67900,
    "km": 52000,
    "fuel": "Elettrico",
    "registration": "1 dic 2021",
    "city": "SIRACUSA",
    "dealer": "S.TUMINO S.R.L.",
    "image": "https://vtpimages.audi.com/carimg2/9250/4752849250.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzA4ODI4OTU0NDE5="
  },
  {
    "id": "SVRBMzE4NDI5MzU4OTQx=",
    "name": "Audi RS e-tron GT",
    "family": "e-tron GT",
    "trim": "RS e-tron GT 440,00 kW",
    "price": 116150,
    "km": 100,
    "fuel": "Elettrico",
    "registration": "1 ago 2024",
    "city": "PORCIA",
    "dealer": "AUDI ZENTRUM PORDENONE",
    "image": "https://vtpimages.audi.com/carimg2/7178/4753017178.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzE4NDI5MzU4OTQx="
  },
  {
    "id": "SVRBMDA2MDg4Nzc4NzQ2=",
    "name": "Audi S e-tron GT",
    "family": "e-tron GT",
    "trim": "S e-tron GT launch edition 435,00 kW",
    "price": 89900,
    "km": 1200,
    "fuel": "Elettrico",
    "registration": "1 mar 2025",
    "city": "BOLZANO",
    "dealer": "EUROCAR BOLZANO",
    "image": "https://vtpimages.audi.com/carimg2/7906/4785727906.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA2MDg4Nzc4NzQ2="
  },
  {
    "id": "SVRBMDA5MDMxMDAwMjkyMzI4=",
    "name": "Audi S e-tron GT",
    "family": "e-tron GT",
    "trim": "S e-tron GT 435,00 kW",
    "price": 98900,
    "km": 1030,
    "fuel": "Elettrico",
    "registration": "1 ott 2025",
    "city": "ALESSANDRIA",
    "dealer": "AUDI ZENTRUM ALESSANDRIA",
    "image": "https://vtpimages.audi.com/carimg2/5684/4789985684.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA5MDMxMDAwMjkyMzI4="
  },
  {
    "id": "SVRBMDA4MDMxMDAwMDUxMjQ1=",
    "name": "Audi S e-tron GT",
    "family": "e-tron GT",
    "trim": "S e-tron GT 435,00 kW",
    "price": 103500,
    "km": 24000,
    "fuel": "Elettrico",
    "registration": "1 ott 2025",
    "city": "CIRIE'",
    "dealer": "EUROCAR CIRIE'",
    "image": "https://vtpimages.audi.com/carimg2/7342/4750727342.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MDMxMDAwMDUxMjQ1="
  },
  {
    "id": "SVRBMDA4OTkxMDAwNTc3MTcw=",
    "name": "Audi S e-tron GT",
    "family": "e-tron GT",
    "trim": "S e-tron GT 435,00 kW",
    "price": 108500,
    "km": 1,
    "fuel": "Elettrico",
    "registration": "1 mag 2026",
    "city": "MILANO",
    "dealer": "SAGAM S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/0297/4757450297.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4OTkxMDAwNTc3MTcw="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNjA3MjI4=",
    "name": "Audi e-tron GT quattro",
    "family": "e-tron GT",
    "trim": "e-tron GT quattro 350,00 kW",
    "price": 63900,
    "km": 38683,
    "fuel": "Elettrico",
    "registration": "1 feb 2024",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/2718/4802252718.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNjA3MjI4="
  },
  {
    "id": "SVRBMzEwNjUxMDAwNDU3NTQ3=",
    "name": "Audi e-tron GT quattro",
    "family": "e-tron GT",
    "trim": "e-tron GT quattro 370,00 kW",
    "price": 88900,
    "km": 13977,
    "fuel": "Elettrico",
    "registration": "1 ott 2025",
    "city": "BRESCIA",
    "dealer": "EUROCAR BRESCIA",
    "image": "https://vtpimages.audi.com/carimg2/9270/4788019270.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwNjUxMDAwNDU3NTQ3="
  },
  {
    "id": "SVRBMzEwMzYxMDI0OTgxNQ=",
    "name": "Audi e-tron GT quattro",
    "family": "e-tron GT",
    "trim": "S e-tron GT 435,00 kW",
    "price": 91900,
    "km": 31462,
    "fuel": "Elettrico",
    "registration": "1 set 2025",
    "city": "GARLATE",
    "dealer": "EUROCAR LECCO",
    "image": "https://vtpimages.audi.com/carimg2/2553/4752872553.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMzEwMzYxMDI0OTgxNQ="
  },
  {
    "id": "SVRBMDA4MjIxMDAwNTkyMzM0=",
    "name": "Audi e-tron GT quattro",
    "family": "e-tron GT",
    "trim": "e-tron GT quattro 370,00 kW",
    "price": 95000,
    "km": 80,
    "fuel": "Elettrico",
    "registration": "1 mar 2026",
    "city": "VARESE",
    "dealer": "AUDI ZENTRUM VARESE",
    "image": "https://vtpimages.audi.com/carimg2/4848/4765174848.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDA4MjIxMDAwNTkyMzM0="
  },
  {
    "id": "SVRBMDAxNzMxMDUwMjI1MA=",
    "name": "Audi e-tron GT quattro",
    "family": "e-tron GT",
    "trim": "e-tron GT quattro 370,00 kW",
    "price": 97900,
    "km": 142,
    "fuel": "Elettrico",
    "registration": "1 set 2025",
    "city": "PADOVA",
    "dealer": "SCARABEL S.P.A.",
    "image": "https://vtpimages.audi.com/carimg2/8232/4750608232.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBMDAxNzMxMDUwMjI1MA="
  },
  {
    "id": "SVRBODA2MTMxMDI0OTgxNQ=",
    "name": "Audi e-tron GT quattro",
    "family": "e-tron GT",
    "trim": "S e-tron GT 435,00 kW",
    "price": 105900,
    "km": 13000,
    "fuel": "Elettrico",
    "registration": "1 set 2025",
    "city": "AZZANO SAN PAOLO",
    "dealer": "EUROCAR BERGAMO",
    "image": "https://vtpimages.audi.com/carimg2/8663/4418138663.jpg?im=Resize,width=640,height=480",
    "url": "https://www.audi.it/it/ricerca-auto-usate/dettagli/:/idSVRBODA2MTMxMDI0OTgxNQ="
  }
];

  // View e Controller dell’usato: i contenuti HTML sono nei template di index.html.
  const UsedCatalog = {
    families: [...new Set(USED_CARS.map(car => car.family))].sort((a,b) => a.localeCompare(b, 'it', {numeric:true})),
    currency: new Intl.NumberFormat('it-IT', {style:'currency', currency:'EUR', maximumFractionDigits:0}),
    card(car) {
      const fragment = cloneTemplate('used-car-card');
      const image = fragment.querySelector('img');
      image.src = car.image; image.alt = car.name + ' — foto dell’annuncio';
      image.addEventListener('error', () => { image.hidden = true; image.nextElementSibling.hidden = false; });
      fragment.querySelectorAll('a').forEach(link => { link.href = car.url; link.setAttribute('aria-label', 'Vedi annuncio ' + car.name + ' su Audi.it'); });
      const fields = {'h3':car.name,'.used-trim':car.trim,'.used-km':car.km.toLocaleString('it-IT')+' km','.used-year':car.registration,'.used-fuel':car.fuel,'.used-price':this.currency.format(car.price),'.used-dealer':car.city+' · '+car.dealer};
      Object.entries(fields).forEach(([selector,value]) => { fragment.querySelector(selector).textContent = value; });
      return fragment;
    },
    chips(container, onSelect, active = '') {
      ['', ...this.families].forEach(family => {
        const button = document.createElement('button'); button.type = 'button';
        button.textContent = family || 'Tutti i modelli'; button.dataset.family = family;
        button.setAttribute('aria-pressed', String(family === active));
        Controller.listen(button, 'click', () => {
          container.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
          onSelect(family);
        });
        container.append(button);
      });
    },
    home() {
      const grid = document.getElementById('used-home-grid');
      const draw = family => {
        const cars = family ? USED_CARS.filter(car => car.family === family).slice(0,3)
          : ['A3','Q3','Q5'].map(name => USED_CARS.find(car => car.family === name)).filter(Boolean);
        grid.replaceChildren(...cars.map(car => this.card(car)));
      };
      this.chips(document.getElementById('used-home-families'), draw);
      draw('');
    },
    mount(params) {
      const form = document.getElementById('used-filters');
      const sort = document.getElementById('used-sort');
      let family = this.families.includes(params.get('family')) ? params.get('family') : '';
      let page = 1; const perPage = 18;
      [...new Set(USED_CARS.map(car => car.fuel))].sort().forEach(fuel => form.elements.fuel.add(new Option(fuel,fuel)));
      ['search','fuel','price','km'].forEach(key => { if(params.has(key)) form.elements[key].value=params.get(key); });
      if(['model','price','price-desc','km'].includes(params.get('sort'))) sort.value=params.get('sort');
      const render = () => {
        const values = Object.fromEntries(new FormData(form));
        const query = values.search.trim().toLocaleLowerCase('it');
        const maxPrice = values.price === '' ? Infinity : Number(values.price);
        const maxKm = values.km === '' ? Infinity : Number(values.km);
        let cars = USED_CARS.filter(car => (!family || car.family===family) && (!values.fuel || car.fuel===values.fuel) && car.price<=maxPrice && car.km<=maxKm && (car.name+' '+car.trim+' '+car.city).toLocaleLowerCase('it').includes(query));
        const ordering = {model:(a,b)=>a.name.localeCompare(b.name,'it',{numeric:true})||a.price-b.price, price:(a,b)=>a.price-b.price, 'price-desc':(a,b)=>b.price-a.price, km:(a,b)=>a.km-b.km};
        cars.sort(ordering[sort.value]);
        const pages = Math.max(1,Math.ceil(cars.length/perPage)); page=Math.min(page,pages);
        document.getElementById('used-count').textContent=cars.length+' annunci nella selezione';
        document.getElementById('used-grid').replaceChildren(...cars.slice((page-1)*perPage,page*perPage).map(car=>this.card(car)));
        document.getElementById('used-empty').hidden=cars.length>0;
        document.getElementById('used-page').textContent='Pagina '+page+' di '+pages;
        document.getElementById('used-prev').disabled=page<=1;
        document.getElementById('used-next').disabled=page>=pages;
        const url = new URLSearchParams();
        Object.entries({...values,family,sort:sort.value}).forEach(([key,value])=>{if(value)url.set(key,value);});
        history.replaceState(null,'','#/usato?'+url.toString());
      };
      this.chips(document.getElementById('used-families'), value=>{family=value;page=1;render();},family);
      Controller.listen(form,'submit',event=>event.preventDefault());
      Controller.listen(form,'input',()=>{page=1;render();});
      Controller.listen(sort,'change',()=>{page=1;render();});
      Controller.listen(form,'reset',()=>{ family='';page=1;sort.value='model';queueMicrotask(()=>{
        form.querySelectorAll('[data-family]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.family==='')));render();
      });});
      const turn = direction => {page+=direction;render();document.getElementById('used-count').scrollIntoView({block:'center'});};
      Controller.listen(document.getElementById('used-prev'),'click',()=>turn(-1));
      Controller.listen(document.getElementById('used-next'),'click',()=>turn(1));
      render();
    }
  };

  Controller.start();
})();
