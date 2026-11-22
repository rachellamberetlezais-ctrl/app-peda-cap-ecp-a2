window.LESSON = {
  "code": "A2S6M2",
  "title": "Aires composées et métrés du spa",
  "objectives": [
    "Décomposer les surfaces du spa en figures usuelles.",
    "Additionner les zones pleines et soustraire les réservations.",
    "Convertir les aires, appliquer une marge et commander des cartons entiers."
  ],
  "prerequisites": "Aires du rectangle, carré et disque ; conversions cm², dm², m² ; pourcentages.",
  "badges": [
    "Maître des surfaces",
    "Métrés d’institut",
    "Gestion experte"
  ],
  "notes": [
    "Les 12 exercices du dossier sont repris. Le dossier ne contient pas d’évaluation ; aucune évaluation n’a été ajoutée. L’onglet Bilan affiche seulement la progression d’entraînement.",
    "π = 3,1416 pour les valeurs numériques. Calculs intermédiaires conservés puis arrondi au centième des aires et des prix, sauf indication différente. Les arrondis intermédiaires cohérents du dossier sont aussi acceptés lorsqu’ils modifient légèrement le montant final.",
    "Découverte : besoin net 31,667228 m² ; avec marge 34,20060624 m² ; 24 cartons de 1,44 m², soit 34,56 m² réellement achetés. La surface dite à facturer à Q6 est traitée comme besoin avec marge ; l’achat au carton reste la base réelle de quantité facturée.",
    "Exercice 2.1 : les deux rectangles sont juxtaposés sans chevauchement. Le schéma en L est une réalisation possible des dimensions, sans implication de conformité d’aménagement.",
    "Exercice 3.1 : on additionne le rectangle et deux quarts de disque supposés non superposés. Les deux quarts ont ensemble l’aire d’un demi-disque ; l’orientation précise des pièces n’est pas nécessaire au métré.",
    "Exercice 3.1 : 850 W/m² est une donnée hypothétique de l’exercice, pas une mesure météo locale ni une moyenne climatique vérifiée. P = flux surfacique × aire est une puissance incidente, pas l’énergie reçue ni la chaleur effectivement absorbée sans facteur d’absorption.",
    "Exercice 3.2 : majoration puis remise multiplicatives ; montant HT = surface nette × 1,07 × 58 × 0,88. Aucun conditionnement n’est donné, donc aucune commande en paquets n’est inventée.",
    "Exercice 3.3 : expression exacte A = 4,48 − 0,16π m². Avec π = 3,1416 : 3,977344 m², soit 3,98 m² au centième. Le bassin est un rectangle central de 1,60 × 0,80 m et deux demi-disques D = 0,80 m.",
    "Les réponses ouvertes nécessitent comparaison au modèle puis relecture de la formatrice. L’auto-vérification ne constitue pas une note formateur."
  ],
  "discovery": [
    {
      "title": "Rénover l’accueil et le spa péi Fleur de Vanille",
      "context": "À l’institut « Fleur de Vanille », à Sainte-Clotilde, le sol comprend un rectangle de 6,50 × 4,20 m et un espace détente en demi-disque de diamètre 4,20 m (R = 2,10 m) accolé sur un petit côté. Un patio carré central de côté 1,60 m, entièrement à l’intérieur du rectangle, ne reçoit pas de carrelage. Ajouter 8 % pour les découpes et chutes. Les cartons contiennent 1,44 m². Calculer le besoin, puis la quantité réellement achetée.",
      "questions": [
        {
          "label": "Q1 · Décomposition correcte",
          "type": "choice",
          "options": [
            "Rectangle + demi-disque − carré du patio",
            "Rectangle + disque complet + patio",
            "Rectangle − demi-disque"
          ],
          "answer": 0
        },
        {
          "label": "Q2 · Aire de l’accueil rectangulaire",
          "type": "number",
          "answer": 27.3,
          "unit": "m²",
          "round": 2
        },
        {
          "label": "Q3 · Demi-disque au centième",
          "type": "number",
          "answer": 6.93,
          "unit": "m²",
          "round": 2
        },
        {
          "label": "Q4 · Patio carré à retirer",
          "type": "number",
          "answer": 2.56,
          "unit": "m²",
          "round": 2
        },
        {
          "label": "Q5 · Aire utile à carreler",
          "type": "number",
          "answer": 31.67,
          "unit": "m²",
          "round": 2
        },
        {
          "label": "Q6 · Besoin avec 8 % de marge",
          "type": "number",
          "answer": 34.2,
          "unit": "m²",
          "round": 2
        },
        {
          "label": "Q7a · Nombre minimal de cartons",
          "type": "number",
          "answer": 24,
          "unit": "cartons",
          "round": 0
        },
        {
          "label": "Q7b · Surface réellement achetée",
          "type": "number",
          "answer": 34.56,
          "unit": "m²",
          "round": 2
        },
        {
          "label": "Q7c · Conclusion pour la gérante",
          "type": "manual",
          "answer": "Il faut carreler environ 31,67 m². Le besoin avec 8 % de marge est d’environ 34,20 m². Commander 24 cartons de 1,44 m², soit 34,56 m² ; 23 cartons ne fourniraient que 33,12 m², insuffisants."
        }
      ],
      "correction": "Rectangle : 6,50 × 4,20 = 27,30 m². Demi-disque : π × 2,10²/2 = 6,927228 m². Patio : 1,60² = 2,56 m². Utile = 31,667228 m² ≈ 31,67. Avec marge : ×1,08 = 34,20060624 m² ≈ 34,20. Quotient = 23,750421 : 24 cartons. Achat = 24 × 1,44 = 34,56 m².",
      "guidance": [
        {
          "title": "Additionner puis soustraire",
          "text": "Le demi-disque est une surface ajoutée, le carré végétalisé est une réservation non revêtue. Vérifier que les dimensions sont toutes en mètres.",
          "formula": "A₁ = 6,50 × 4,20 = 27,30 m²\nA₂ = π × (4,20 / 2)² / 2\nA₃ = 1,60²\nA utile = A₁ + A₂ − A₃"
        },
        {
          "title": "Passer du besoin aux cartons",
          "text": "π = 3,1416. Garde les décimales pour déterminer les cartons. La surface avec marge n’est pas forcément la surface réellement achetée.",
          "formula": "Besoin = A utile × 1,08\nCartons = arrondi entier supérieur (besoin / 1,44)\nSurface achetée = cartons × 1,44"
        }
      ],
      "figure": "spa"
    }
  ],
  "course": [
    [
      "Formules des surfaces",
      "Rectangle : A = L × l. Carré : A = c². Triangle : A = b × h/2. Disque : A = πR² avec D = 2R. Demi-disque : A = πR²/2. Quart de disque : A = πR²/4. Trapèze : A = (B + b) × h/2."
    ],
    [
      "Méthode des aires composées",
      "Décomposer en figures usuelles non superposées. Additionner les zones pleines juxtaposées, puis soustraire les ouvertures et réservations non revêtues : A utile = somme des aires pleines − somme des évidements. Ne pas compter deux fois une zone commune."
    ],
    [
      "Unités d’aire",
      "Convertir les longueurs dans la même unité avant le calcul. 1 m² = 100 dm² = 10 000 cm². Pour passer des dm² aux m² : diviser par 100 ; des cm² aux m² : diviser par 10 000. Les facteurs diffèrent de ceux des longueurs."
    ],
    [
      "Métré du spa",
      "A₁ = 27,30 m². A₂ = 6,927228 m² avec π = 3,1416. A₃ = 2,56 m². A utile = 31,667228 m² ≈ 31,67 m². Garder les décimales jusqu’au calcul de commande."
    ],
    [
      "Marge et conditionnement",
      "Besoin = aire utile × (1 + taux/100). Cartons = arrondi entier supérieur(besoin/aire par carton). Quantité achetée = cartons × aire par carton. Ici 24 cartons de 1,44 m² donnent 34,56 m², pour un besoin calculé d’environ 34,20 m²."
    ],
    [
      "Remise et montant",
      "Ajouter 7 % : multiplier par 1,07. Appliquer une remise de 12 % : multiplier par 0,88. Montant = surface achetée ou calculée selon le devis × prix au m². Respecter HT/TTC et la base annoncée. Pour les montants, conserver les valeurs intermédiaires puis arrondir aux centimes."
    ],
    [
      "Aire, puissance et énergie",
      "Dans l’exercice de verrière : puissance incidente P (W) = flux surfacique (W/m²) × aire (m²). Une puissance n’est pas une énergie ; une énergie exigerait une durée. L’absorption réelle nécessiterait des données supplémentaires."
    ]
  ],
  "levels": [
    [
      {
        "title": "1.1 · Cabine d’épilation",
        "context": "La cabine de Sainte-Clotilde mesure 3,80 × 2,50 m.",
        "questions": [
          {
            "label": "Aire au sol",
            "type": "number",
            "answer": 9.5,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "A = 3,80 × 2,50 = 9,50 m².",
        "figure": "rectangle"
      },
      {
        "title": "1.2 · Tapis de relaxation circulaire",
        "context": "Tapis de diamètre 1,80 m, donc R = 0,90 m. π = 3,1416.",
        "questions": [
          {
            "label": "Aire au centième",
            "type": "number",
            "answer": 2.54,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "A = π × 0,90² = 2,544696 m² ≈ 2,54 m².",
        "figure": "disk"
      },
      {
        "title": "1.3 · Présentoir mural arrondi",
        "context": "Rectangle de largeur 80 cm et hauteur 120 cm, surmonté d’un demi-disque D = 80 cm et R = 40 cm. Convertir les trois cotes largeur, hauteur et rayon en mètres.",
        "questions": [
          {
            "label": "Largeur 80 cm en m",
            "type": "number",
            "answer": 0.8,
            "unit": "m",
            "round": 2
          },
          {
            "label": "Hauteur 120 cm en m",
            "type": "number",
            "answer": 1.2,
            "unit": "m",
            "round": 2
          },
          {
            "label": "Rayon 40 cm en m",
            "type": "number",
            "answer": 0.4,
            "unit": "m",
            "round": 2
          },
          {
            "label": "Rectangle",
            "type": "number",
            "answer": 0.96,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Demi-disque",
            "type": "number",
            "answer": 0.25,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Surface totale",
            "type": "number",
            "answer": 1.21,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "0,80 m ; 1,20 m ; 0,40 m. Rectangle = 0,96 m² ; demi-disque = 0,251328 m² ; total = 1,211328 m² ≈ 1,21 m².",
        "figure": "display"
      },
      {
        "title": "1.4 · Douche avec receveur réservé",
        "context": "Sol rectangulaire 2,40 × 1,80 m. Receveur carré de côté 0,90 m entièrement inclus, sans carrelage de finition.",
        "questions": [
          {
            "label": "Aire brute",
            "type": "number",
            "answer": 4.32,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Receveur à retirer",
            "type": "number",
            "answer": 0.81,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Carrelage utile autour du receveur",
            "type": "number",
            "answer": 3.51,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "2,40 × 1,80 − 0,90² = 4,32 − 0,81 = 3,51 m².",
        "figure": "shower"
      },
      {
        "title": "1.5 · Conversions indispensables",
        "context": "1 m² = 100 dm² = 10 000 cm².",
        "questions": [
          {
            "label": "4,5 m² en dm²",
            "type": "number",
            "answer": 450,
            "unit": "dm²",
            "round": 2
          },
          {
            "label": "350 dm² en m²",
            "type": "number",
            "answer": 3.5,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "12 500 cm² en m²",
            "type": "number",
            "answer": 1.25,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "0,85 m² en cm²",
            "type": "number",
            "answer": 8500,
            "unit": "cm²",
            "round": 2
          }
        ],
        "correction": "4,5 × 100 = 450 dm² ; 350/100 = 3,50 m² ; 12 500/10 000 = 1,25 m² ; 0,85 × 10 000 = 8 500 cm²."
      }
    ],
    [
      {
        "title": "2.1 · Espace balnéo en L",
        "context": "Deux rectangles juxtaposés sans chevauchement : baignoire 3,60 × 2,20 m ; vestiaire 2 × 1,80 m. Marge 10 %. Boîtes de 1,20 m².",
        "questions": [
          {
            "label": "Aire totale",
            "type": "number",
            "answer": 11.52,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Besoin avec marge au centième",
            "type": "number",
            "answer": 12.67,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Nombre minimal de boîtes",
            "type": "number",
            "answer": 11,
            "unit": "boîtes",
            "round": 0
          }
        ],
        "correction": "7,92 + 3,60 = 11,52 m². Besoin = 11,52 × 1,10 = 12,672 m². 12,672/1,20 = 10,56 : 11 boîtes, soit 13,20 m².",
        "figure": "lshape"
      },
      {
        "title": "2.2 · Miroir trilobé oriental",
        "context": "Rectangle 1,20 × 0,90 m surmonté de trois demi-disques identiques de diamètre 0,40 m (R = 0,20 m). Ils sont côte à côte, sans recouvrement.",
        "questions": [
          {
            "label": "Rectangle",
            "type": "number",
            "answer": 1.08,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Somme des trois demi-disques",
            "type": "number",
            "answer": 0.19,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Aire totale argentée",
            "type": "number",
            "answer": 1.27,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "3 × π × 0,20²/2 = 0,188496 m². Total = 1,08 + 0,188496 = 1,268496 m² ≈ 1,27 m².",
        "figure": "trilobe"
      },
      {
        "title": "2.3 · Terrasse à angle coupé",
        "context": "Rectangle de 5 × 3,50 m. Une découpe triangulaire rectangle de côtés perpendiculaires 1,50 et 1,20 m est retirée à un coin.",
        "questions": [
          {
            "label": "Aire brute",
            "type": "number",
            "answer": 17.5,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Triangle retiré",
            "type": "number",
            "answer": 0.9,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Surface nette de teck",
            "type": "number",
            "answer": 16.6,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "17,50 − (1,50 × 1,20)/2 = 17,50 − 0,90 = 16,60 m².",
        "figure": "corner"
      },
      {
        "title": "2.4 · Aire libre du bar à ongles",
        "context": "Salle 4,50 × 3 m. Deux tables fixes identiques, sans chevauchement, ont une emprise trapézoïdale de bases 1,40 et 0,80 m et hauteur 0,60 m.",
        "questions": [
          {
            "label": "Salle brute",
            "type": "number",
            "answer": 13.5,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Emprise d’une table",
            "type": "number",
            "answer": 0.66,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Aire libre restante",
            "type": "number",
            "answer": 12.18,
            "unit": "m²",
            "round": 2
          }
        ],
        "correction": "Table = (1,40 + 0,80) × 0,60/2 = 0,66 m². Libre = 13,50 − 2 × 0,66 = 12,18 m². Cette aire seule ne décrit pas les largeurs de circulation ni une conformité d’accès.",
        "figure": "tables"
      }
    ],
    [
      {
        "title": "3.1 · Verrière et puissance solaire incidente",
        "context": "Rectangle central 4 × 2 m plus deux quarts de disque de rayon 2 m, supposés sans recouvrement avec le rectangle ni entre eux. Flux surfacique donné pour l’exercice : 850 W/m² ; ce n’est pas une mesure météo locale. Conserver les décimales pour la puissance.",
        "questions": [
          {
            "label": "Pourquoi les deux quarts ont-ils l’aire d’un demi-disque ?",
            "type": "manual",
            "answer": "Chaque quart vaut πR²/4. Deux quarts valent 2 × πR²/4 = πR²/2, soit l’aire d’un demi-disque de même rayon."
          },
          {
            "label": "Aire vitrée totale",
            "type": "number",
            "answer": 14.28,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Puissance incidente",
            "type": "number",
            "answer": 12140.72,
            "unit": "W",
            "round": 2,
            "alternatives": [
              12138
            ]
          },
          {
            "label": "Interpréter sans confondre puissance et chaleur absorbée",
            "type": "manual",
            "answer": "Le rayonnement apporte ici environ 12,14 kW incidents. Ce n’est pas une énergie (il manque la durée), ni nécessairement toute la chaleur absorbée par le spa : absorption, transmission et autres échanges ne sont pas donnés."
          }
        ],
        "correction": "A = 4 × 2 + 2 × π × 2²/4 = 8 + 2π = 14,2832 m². P = 14,2832 × 850 = 12 140,72 W ≈ 12,14 kW. 12 138 W accepté si aire arrondie à 14,28 m² avant calcul.",
        "figure": "roof"
      },
      {
        "title": "3.2 · Parquet marin et remise professionnelle",
        "context": "Pièce rectangulaire 6 × 4,50 m ; cabine circulaire centrale D = 2,20 m (R = 1,10 m), sans parquet sous son emprise. Majoration technique 7 %. Prix 58 € HT/m², remise 12 %. Calculer avec les valeurs non arrondies jusqu’au montant final.",
        "questions": [
          {
            "label": "Aire nette de parquet",
            "type": "number",
            "answer": 23.2,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Besoin avec 7 %",
            "type": "number",
            "answer": 24.82,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Prix unitaire HT après remise",
            "type": "number",
            "answer": 51.04,
            "unit": "€ HT/m²",
            "round": 2
          },
          {
            "label": "Montant HT total",
            "type": "number",
            "answer": 1266.94,
            "unit": "€ HT",
            "round": 2,
            "alternatives": [
              1267.02,
              1266.81
            ]
          }
        ],
        "correction": "Cabine = π × 1,10² = 3,801336 m². Net = 27 − 3,801336 = 23,198664 m². Besoin = 23,198664 × 1,07 = 24,82257048 m². Prix remisé = 58 × 0,88 = 51,04 €/m². Total = 1 266,943997… € HT ≈ 1 266,94 €. Autres arrondis cohérents : net arrondi avant marge 1 267,02 € ; besoin arrondi à 24,82 m² avant prix 1 266,81 €.",
        "figure": "cryotherapy"
      },
      {
        "title": "3.3 · Mosaïque autour du bassin péi",
        "context": "Enclos rectangulaire 3,20 × 1,80 m. Bassin intérieur : rectangle central 1,60 × 0,80 m prolongé par deux demi-disques de diamètre 0,80 m (R = 0,40 m). Le bassin est entièrement inclus dans l’enclos.",
        "questions": [
          {
            "label": "Aire de l’enclos",
            "type": "number",
            "answer": 5.76,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Aire du bassin au centième",
            "type": "number",
            "answer": 1.78,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Plage de mosaïque au centième",
            "type": "number",
            "answer": 3.98,
            "unit": "m²",
            "round": 2
          },
          {
            "label": "Donner l’expression exacte avec π",
            "type": "manual",
            "answer": "Enclos : 5,76 m². Bassin : 1,28 + 0,16π m². Plage : 5,76 − (1,28 + 0,16π) = 4,48 − 0,16π m²."
          }
        ],
        "correction": "Deux demi-disques = disque R = 0,40 m. Bassin = 1,60 × 0,80 + π × 0,40² = 1,28 + 0,16π. Plage exacte = 4,48 − 0,16π m². Avec π = 3,1416 : 3,977344 m² ≈ 3,98 m².",
        "figure": "basin"
      }
    ]
  ]
};
