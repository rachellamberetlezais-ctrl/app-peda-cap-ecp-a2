window.LESSON = {
  "code": "A2S6M1",
  "title": "Géométrie : périmètres complexes et frises",
  "objectives": [
    "Décomposer un contour en segments et arcs.",
    "Calculer un linéaire décoratif et retirer les ouvertures.",
    "Prévoir une marge et commander des longueurs entières."
  ],
  "prerequisites": "Rectangle, carré, cercle ; conversions mm, cm et m.",
  "badges": [
    "Maître des contours",
    "Métrés d’institut",
    "Calepinage expert"
  ],
  "notes": [
    "Les 12 exercices et l’évaluation sur 10 du dossier sont repris. Corrigés calculés pour cette application, à relire par la formatrice.",
    "Arrondis : π = 3,1416 ; calculs intermédiaires non arrondis, puis résultat au centième sauf consigne contraire. Pour la découverte, 6,08 m obtenu à partir de l’arc arrondi est aussi accepté.",
    "Exercice 2.2 : les trois arcs sont explicités comme trois demi-cercles de rayon 20 cm, compatibles avec la largeur totale de 1,20 m et avec l’illustration du dossier.",
    "Exercice 2.3 : le quart de cercle remplace deux segments de 0,80 m au coin du rectangle ; il ne s’ajoute pas au périmètre brut.",
    "Exercice 3.1 : la somme demandée porte sur les trois arcs décoratifs. Ces données ne permettent pas de définir un contour ovale fermé ni de calculer une base droite ; l’application ne présente donc pas cette somme comme un périmètre fermé.",
    "Exercice 3.2 : pour un octogone régulier, l’onglet symétrique est de 22,5° à chaque extrémité, et non 45°. La perte forfaitaire de 4 cm par morceau du dossier reste utilisée : 24 morceaux de 39 cm, six par baguette de 250 cm, donc quatre baguettes.",
    "Exercice 3.3 : hypothèse ajoutée et explicitée : rectangle 220 × 70 cm dont les deux coins avant sont arrondis vers l’intérieur par des quarts de cercle de rayon 25 cm ; chant sur le devant et les deux côtés, sans le dos contre le mur.",
    "Les nombres et choix sont vérifiés automatiquement. Les raisonnements et conclusions rédigés nécessitent une relecture humaine ; l’auto-vérification ne constitue pas une note formateur.",
    "Les achats en longueurs standard supposent que les raccords et chutes réutilisables sont admis, sauf le calepinage explicitement testé à l’exercice 3.2. Ce sont des métrés pédagogiques."
  ],
  "discovery": [
    {
      "title": "Miroir zen et frise en bois de tamarin",
      "context": "Tu travailles au spa « L’Oasis de Bourbon », à Sainte-Clotilde. Le miroir comprend un rectangle de largeur 1,20 m et de hauteur 1,50 m, surmonté d’un demi-cercle de diamètre 1,20 m. Un ruban LED hydrofuge souligne tout son contour. La cabine mesure 4,50 × 3,20 m ; une baie de 1,40 m interrompt la frise haute. Le fournisseur vend les LED en rouleaux de 5 m et les moulures en baguettes de 2,40 m. Prévois 5 % de marge pour les LED.",
      "questions": [
        {
          "label": "Q1 · Quels éléments appartiennent au contour extérieur ?",
          "type": "choice",
          "options": [
            "4 côtés droits et un cercle",
            "3 côtés droits et un arc de demi-cercle",
            "2 côtés et un diamètre intérieur"
          ],
          "answer": 1
        },
        {
          "label": "Q2 · Arc supérieur, au centième",
          "type": "number",
          "answer": 1.88,
          "unit": "m",
          "round": 2
        },
        {
          "label": "Q3 · Contour complet du miroir, au centième",
          "type": "number",
          "answer": 6.08,
          "unit": "m",
          "round": 2
        },
        {
          "label": "Q4a · Longueur de LED avec 5 % de marge, au centième",
          "type": "number",
          "answer": 6.39,
          "unit": "m",
          "round": 2
        },
        {
          "label": "Q4b · Nombre minimal de rouleaux de 5 m",
          "type": "number",
          "answer": 2,
          "unit": "rouleaux",
          "round": 0
        },
        {
          "label": "Q5 · Périmètre brut de la cabine",
          "type": "number",
          "answer": 15.4,
          "unit": "m"
        },
        {
          "label": "Q6 · Frise utile après déduction de la baie",
          "type": "number",
          "answer": 14,
          "unit": "m"
        },
        {
          "label": "Q7a · Nombre minimal de baguettes de 2,40 m",
          "type": "number",
          "answer": 6,
          "unit": "baguettes",
          "round": 0
        },
        {
          "label": "Q7b · Rédige le devis matériaux",
          "type": "manual",
          "answer": "Le miroir nécessite environ 6,08 m de LED, soit 6,39 m avec la marge de 5 % : commander 2 rouleaux de 5 m. La frise nécessite 14 m : commander 6 baguettes de 2,40 m, soit 14,40 m. Les raccords sont admis."
        }
      ],
      "correction": "Arc = 3,1416 × 1,20 ÷ 2 = 1,88496 m. Contour = 1,20 + 2 × 1,50 + 1,88496 = 6,08496 m ≈ 6,08 m. Marge : 6,08496 × 1,05 = 6,389208 m ≈ 6,39 m. 6,389208 ÷ 5 = 1,2778416 : 2 rouleaux. Cabine : 2 × (4,50 + 3,20) = 15,40 m. Frise : 15,40 − 1,40 = 14 m. 14 ÷ 2,40 = 5,833… : 6 baguettes.",
      "figure": "arch",
      "guidance": [
        {
          "title": "1 · Repérer le contour",
          "text": "La ligne horizontale à la jonction du rectangle et du demi-cercle est intérieure : elle ne reçoit pas de LED.",
          "formula": "Arc seul = π × D ÷ 2\nContour = base + 2 × hauteur droite + arc"
        },
        {
          "title": "2 · Préparer la commande",
          "text": "Calcule avec π = 3,1416. Garde les décimales pendant le calcul, puis arrondis les longueurs au centième. Un achat se fait en nombre entier arrondi au supérieur.",
          "formula": "Avec 5 % de marge : longueur × 1,05\nFrise utile = 2 × (L + l) − ouverture\nNombre de longueurs = arrondi supérieur (besoin ÷ longueur vendue)"
        }
      ]
    }
  ],
  "course": [
    [
      "Formules utiles",
      "Rectangle : P = 2(L + l). Carré : P = 4c. Cercle : P = πD = 2πR. Demi-cercle, arc seul : πD/2 = πR. Quart de cercle, arc seul : πR/2. Arc d’angle α : πRα/180."
    ],
    [
      "Le contour extérieur seulement",
      "Suis le bord avec ton doigt. Les séparations intérieures, rayons et diamètres de construction ne s’ajoutent pas au contour. Décompose, calcule les tronçons, puis additionne dans la même unité."
    ],
    [
      "Métré de la cabine",
      "Frise utile = 2 × (L + l) − largeur non équipée. Ici : 15,40 − 1,40 = 14 m."
    ],
    [
      "Marge et achats",
      "Ajouter 5 % : multiplier par 1,05. Ajouter 10 % : multiplier par 1,10. Diviser le besoin par la longueur vendue, puis arrondir au supérieur. Pour des morceaux indivisibles, vérifier le plan de coupe : le seul quotient des longueurs peut être insuffisant."
    ],
    [
      "Conserver les décimales",
      "Prendre π = 3,1416. Conserver les résultats non arrondis pendant le calcul ; arrondir à la fin. Les réponses attendues au centième sont indiquées. Un calcul géométrique ne garantit pas la conformité d’une installation électrique ou d’un aménagement."
    ]
  ],
  "levels": [
    [
      {
        "title": "1.1 · Miroir rectangulaire",
        "context": "Un miroir de coiffeuse à Sainte-Clotilde mesure 1,40 m de long et 0,90 m de haut. Encadre tout le contour.",
        "questions": [
          {
            "label": "Périmètre",
            "type": "number",
            "answer": 4.6,
            "unit": "m"
          },
          {
            "label": "Longueur d’aluminium nécessaire, sans marge",
            "type": "number",
            "answer": 4.6,
            "unit": "m"
          }
        ],
        "correction": "P = 2 × (1,40 + 0,90) = 4,60 m. Il faut 4,60 m de baguette hors pertes.",
        "figure": "rectangle"
      },
      {
        "title": "1.2 · Guéridon circulaire",
        "context": "Le guéridon d’accueil pour les parfums a un diamètre de 80 cm. Le ruban suit tout le cercle ; π = 3,1416.",
        "questions": [
          {
            "label": "Longueur du ruban, au cm près",
            "type": "number",
            "answer": 251,
            "unit": "cm",
            "round": 0
          }
        ],
        "correction": "P = πD = 3,1416 × 80 = 251,328 cm, soit 251 cm au cm près.",
        "figure": "circle"
      },
      {
        "title": "1.3 · Arche décorative",
        "context": "L’arche au-dessus de la cabine est un demi-cercle de rayon 60 cm. On mesure uniquement l’arc.",
        "questions": [
          {
            "label": "Arc au centième de cm",
            "type": "number",
            "answer": 188.5,
            "unit": "cm",
            "round": 2
          },
          {
            "label": "Arc au centième de m",
            "type": "number",
            "answer": 1.88,
            "unit": "m",
            "round": 2
          }
        ],
        "correction": "Arc = πR = 188,496 cm ≈ 188,50 cm. En mètres : 1,88496 m ≈ 1,88 m. Le diamètre n’est pas compris dans l’arc.",
        "figure": "arc"
      },
      {
        "title": "1.4 · Table de massage arrondie",
        "context": "La partie centrale est un rectangle de 160 × 70 cm. Chaque extrémité est prolongée par un demi-cercle de diamètre 70 cm. Les séparations intérieures ne sont pas comptées.",
        "questions": [
          {
            "label": "Contour extérieur",
            "type": "choice",
            "options": [
              "2 segments de 160 cm + 2 demi-cercles",
              "4 côtés du rectangle + un cercle",
              "2 segments de 70 cm seulement"
            ],
            "answer": 0
          },
          {
            "label": "Les deux demi-cercles forment…",
            "type": "choice",
            "options": [
              "un quart de cercle",
              "un cercle complet",
              "deux cercles"
            ],
            "answer": 1
          },
          {
            "label": "Périmètre au centième de cm",
            "type": "number",
            "answer": 539.91,
            "unit": "cm",
            "round": 2
          }
        ],
        "correction": "P = 2 × 160 + π × 70 = 320 + 219,912 = 539,912 cm ≈ 539,91 cm.",
        "figure": "capsule"
      },
      {
        "title": "1.5 · Conversions d’atelier",
        "context": "Exprime chaque longueur dans l’unité demandée.",
        "questions": [
          {
            "label": "2,45 m =",
            "type": "number",
            "answer": 245,
            "unit": "cm"
          },
          {
            "label": "650 mm =",
            "type": "number",
            "answer": 0.65,
            "unit": "m"
          },
          {
            "label": "1,80 m =",
            "type": "number",
            "answer": 1800,
            "unit": "mm"
          },
          {
            "label": "45 cm =",
            "type": "number",
            "answer": 0.45,
            "unit": "m"
          }
        ],
        "correction": "1 m = 100 cm = 1 000 mm. Résultats : 245 cm ; 0,65 m ; 1 800 mm ; 0,45 m."
      }
    ],
    [
      {
        "title": "2.1 · Plinthes sanitaires",
        "context": "Cabine de 3,80 × 2,60 m. Une porte de 0,90 m et un placard de 1,20 m ne reçoivent pas de plinthe. Barres de 2 m ; raccords et réemploi des chutes admis.",
        "questions": [
          {
            "label": "Périmètre brut",
            "type": "number",
            "answer": 12.8,
            "unit": "m"
          },
          {
            "label": "Linéaire utile",
            "type": "number",
            "answer": 10.7,
            "unit": "m"
          },
          {
            "label": "Nombre de barres",
            "type": "number",
            "answer": 6,
            "unit": "barres",
            "round": 0
          }
        ],
        "correction": "2 × (3,80 + 2,60) = 12,80 m. Utile : 12,80 − 0,90 − 1,20 = 10,70 m. 10,70 ÷ 2 = 5,35 : 6 barres."
      },
      {
        "title": "2.2 · Miroir trilobé",
        "context": "La base rectangulaire mesure 1,20 m de large et 0,80 m de haut. Les trois arcs supérieurs sont trois demi-cercles identiques de rayon 20 cm, disposés côte à côte. Cette précision reprend la forme illustrée dans le dossier.",
        "questions": [
          {
            "label": "Somme des trois arcs, au centième",
            "type": "number",
            "answer": 1.88,
            "unit": "m",
            "round": 2
          },
          {
            "label": "Contour extérieur total, au centième",
            "type": "number",
            "answer": 4.68,
            "unit": "m",
            "round": 2
          }
        ],
        "correction": "3 × π × 0,20 = 1,88496 m. Contour : 1,20 + 2 × 0,80 + 1,88496 = 4,68496 m ≈ 4,68 m.",
        "figure": "trilobe"
      },
      {
        "title": "2.3 · Estrade à coin arrondi",
        "context": "Rectangle de 3 × 2 m. Au coin supérieur droit, deux segments de 0,80 m sont remplacés par un quart de cercle de rayon 0,80 m, arrondi vers l’intérieur.",
        "questions": [
          {
            "label": "Longueur des segments retirés",
            "type": "number",
            "answer": 1.6,
            "unit": "m"
          },
          {
            "label": "Arc ajouté au centième",
            "type": "number",
            "answer": 1.26,
            "unit": "m",
            "round": 2
          },
          {
            "label": "Périmètre final au centième",
            "type": "number",
            "answer": 9.66,
            "unit": "m",
            "round": 2
          }
        ],
        "correction": "P = 2 × (3 + 2) − 2 × 0,80 + π × 0,80 ÷ 2 = 9,65664 m ≈ 9,66 m.",
        "figure": "corner"
      },
      {
        "title": "2.4 · Bac pédicure",
        "context": "Le trapèze isocèle possède deux bases de 140 et 80 cm et deux côtés obliques de 50 cm.",
        "questions": [
          {
            "label": "Longueur de frise",
            "type": "number",
            "answer": 320,
            "unit": "cm"
          },
          {
            "label": "La même longueur en mètres",
            "type": "number",
            "answer": 3.2,
            "unit": "m"
          }
        ],
        "correction": "P = 140 + 80 + 50 + 50 = 320 cm = 3,20 m.",
        "figure": "trapeze"
      }
    ],
    [
      {
        "title": "3.1 · Guirlande sur trois arcs",
        "context": "Motif décoratif : un arc de rayon 1,50 m et d’angle 60°, et deux arcs de rayon 0,50 m et d’angle 60° chacun. Calcule uniquement la somme des trois arcs ; aucune base droite n’est à ajouter. Ces données ne définissent pas un ovale fermé. Formule fournie : L = π × R × α ÷ 180.",
        "questions": [
          {
            "label": "Somme des trois arcs, au centième",
            "type": "number",
            "answer": 2.62,
            "unit": "m",
            "round": 2
          }
        ],
        "correction": "L = π × 1,50 × 60 ÷ 180 + 2 × π × 0,50 × 60 ÷ 180 = 2,618 m ≈ 2,62 m. Il s’agit de la longueur du motif en trois arcs, pas du périmètre d’un ovale fermé."
      },
      {
        "title": "3.2 · Trois cadres octogonaux",
        "context": "3 cadres réguliers, 8 côtés de 35 cm par cadre. Perte forfaitaire : 4 cm par morceau. Baguettes de 250 cm. Pour un octogone régulier, l’onglet symétrique est de 22,5° à chaque extrémité (correction de l’indication 45° du dossier).",
        "questions": [
          {
            "label": "Périmètre d’un cadre",
            "type": "number",
            "answer": 280,
            "unit": "cm"
          },
          {
            "label": "Longueur nette pour trois cadres",
            "type": "number",
            "answer": 840,
            "unit": "cm"
          },
          {
            "label": "Longueur brute avec les pertes",
            "type": "number",
            "answer": 936,
            "unit": "cm"
          },
          {
            "label": "Nombre de morceaux de 39 cm dans une baguette",
            "type": "number",
            "answer": 6,
            "unit": "morceaux",
            "round": 0
          },
          {
            "label": "Nombre optimal de baguettes",
            "type": "number",
            "answer": 4,
            "unit": "baguettes",
            "round": 0
          },
          {
            "label": "Justifie le calepinage",
            "type": "manual",
            "answer": "24 morceaux de 35 + 4 = 39 cm. Une baguette de 250 cm fournit 6 morceaux : 234 cm utilisés et 16 cm de chute. Quatre baguettes fournissent les 24 morceaux, avec 64 cm de chute au total."
          }
        ],
        "correction": "8 × 35 = 280 cm ; 3 × 280 = 840 cm. Pertes : 24 × 4 = 96 cm. Brut : 936 cm. 6 × 39 = 234 ≤ 250 ; 7 × 39 = 273 > 250. 24 ÷ 6 = 4 baguettes.",
        "figure": "octagon"
      },
      {
        "title": "3.3 · Chant du comptoir de tisanerie",
        "context": "Hypothèse explicite pour lever l’ambiguïté du dossier : rectangle 220 × 70 cm ; les deux coins AVANT sont arrondis vers l’intérieur par des quarts de cercle de rayon 25 cm. Le dos de 220 cm est contre le mur et ne reçoit pas de chant. Le chant suit les deux côtés et la face avant.",
        "questions": [
          {
            "label": "Somme des segments droits visibles",
            "type": "number",
            "answer": 260,
            "unit": "cm"
          },
          {
            "label": "Somme des deux quarts de cercle, au centième",
            "type": "number",
            "answer": 78.54,
            "unit": "cm",
            "round": 2
          },
          {
            "label": "Longueur totale visible au centième",
            "type": "number",
            "answer": 338.54,
            "unit": "cm",
            "round": 2
          },
          {
            "label": "Décris le tracé et le contour retenu",
            "type": "manual",
            "answer": "Tracer le rectangle 220 × 70 cm ; marquer 25 cm depuis chaque coin avant sur les deux bords adjacents et relier les marques par un quart de cercle de rayon 25 cm. Compter le devant droit 170 cm, les deux côtés droits 45 cm et les deux arcs. Ne pas compter le dos."
          }
        ],
        "correction": "Segments : (220 − 2 × 25) + 2 × (70 − 25) = 260 cm. Arcs : 2 × π × 25 ÷ 2 = 78,54 cm. Chant visible : 338,54 cm. Sous cette hypothèse, le contour fermé complet serait 558,54 cm.",
        "figure": "counter"
      }
    ]
  ],
  "evaluation": {
    "title": "Évaluation · Miroir Fleur de Lotus · /10",
    "context": "Miroir composé d’un rectangle de largeur 0,80 m et de hauteur 1,10 m surmonté d’un demi-cercle de diamètre 0,80 m. Baguette en laiton sur tout le contour ; marge de 10 % ; baguettes de 1,50 m. π = 3,1416. Calculs intermédiaires non arrondis, longueurs finales au centième.",
    "questions": [
      {
        "label": "1 · Éléments du contour (C1)",
        "type": "choice",
        "options": [
          "3 côtés droits et un demi-cercle",
          "4 côtés droits et un cercle",
          "2 côtés droits et deux arcs"
        ],
        "answer": 0,
        "points": 2
      },
      {
        "label": "2 · Longueur de l’arc (C2)",
        "type": "number",
        "answer": 1.26,
        "unit": "m",
        "round": 2,
        "points": 2
      },
      {
        "label": "3 · Périmètre total (C2)",
        "type": "number",
        "answer": 4.26,
        "unit": "m",
        "round": 2,
        "points": 2
      },
      {
        "label": "4 · Longueur avec marge de 10 % (C3)",
        "type": "number",
        "answer": 4.68,
        "unit": "m",
        "round": 2,
        "points": 2,
        "alternatives": [
          4.69
        ]
      },
      {
        "label": "5a · Nombre minimal de baguettes",
        "type": "number",
        "answer": 4,
        "unit": "baguettes",
        "round": 0,
        "points": 1
      },
      {
        "label": "5b · Conclusion rédigée (C4)",
        "type": "manual",
        "answer": "Il faut environ 4,26 m pour le contour et 4,68 m avec la marge. Trois baguettes donnent 4,50 m, insuffisants ; commander quatre baguettes de 1,50 m, soit 6 m.",
        "points": 1
      }
    ],
    "correction": "Arc : π × 0,80 ÷ 2 = 1,25664 m ≈ 1,26 m. P = 0,80 + 2 × 1,10 + 1,25664 = 4,25664 m ≈ 4,26 m. Avec marge : 4,25664 × 1,10 = 4,682304 m ≈ 4,68 m (4,69 m accepté si le périmètre a été arrondi à 4,26 m avant la marge). Achat : 4,682304 ÷ 1,50 = 3,121536 : 4 baguettes.",
    "figure": "evalarch"
  }
};
