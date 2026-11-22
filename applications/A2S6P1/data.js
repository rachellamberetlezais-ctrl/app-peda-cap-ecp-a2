window.LESSON = {
  "code": "A2S6P1",
  "title": "Optique : spectre de la lumière blanche, UV et IR",
  "objectives": [
    "Repérer visible, UV et IR et convertir les longueurs d’onde.",
    "Distinguer les effets des UVA et UVB sans confondre chaleur et UV.",
    "Lire l’Index UV et formuler des conseils de prévention argumentés."
  ],
  "prerequisites": "Rayon lumineux, réfraction, nm et m, épiderme et mélanocytes.",
  "badges": [
    "Exploratrice du spectre",
    "Conseil solaire argumenté",
    "Expertise scientifique"
  ],
  "notes": [
    "Les 12 exercices du dossier sont conservés avec corrections scientifiques explicites. Le bilan /10 est un ajout formatif : le PDF ne fournit pas d’évaluation sommative.",
    "Le visible 400–700 nm est le repère pédagogique du dossier, pas une frontière physiologique absolue. Les limites UV sont fixées ici par convention : UVC [100;280[, UVB [280;315[, UVA [315;400[, visible [400;700].",
    "La formule temps naturel × SPF est reprise comme multiplication demandée par le dossier, puis critiquée : le SPF est un rapport de doses érythémales dans des conditions d’essai, pas un multiplicateur de temps sûr au soleil. Aucun minuteur d’exposition n’est proposé.",
    "L’absorption atmosphérique concerne tout le rayonnement solaire UVC et la plupart des UVB ; la proportion exacte dépend des conditions. Le taux fixe de 90 % n’est pas présenté comme universel.",
    "Exercice 1.4 : le logo UVA entouré est recommandé, pas obligatoire. Il indique une protection UVA d’au moins un tiers du SPF selon la recommandation européenne.",
    "Exercice 2.3 : les transmissions 0 % UVB et 75 % UVA sont des données de modèle. Elles ne garantissent pas une absence de coup de soleil pour tout vitrage et toute durée.",
    "Exercice 3.1 : 600 nm est orange dans notre représentation, et non rouge. À énergie double, le photon UVB a plus d’énergie ; cela ne suffit pas à déduire mécaniquement un risque de cancer ou un seuil de rupture de liaison. Les UV sont associés à des lésions et mutations ; ne pas qualifier le visible d’absolument inoffensif.",
    "Exercice 3.2 : DME et flux sont des valeurs imposées pour calculer dose = flux × durée ; ces durées ne sont pas des limites individuelles sûres. Tous les phototypes nécessitent une protection adaptée.",
    "Exercice 3.3 : le coefficient 2,20 relie explicitement prix achat HT et prix vente TTC ; 8,5 % est la donnée de TVA de l’exercice, sans conseil fiscal. Arrondir le prix unitaire HT seulement après les calculs du lot.",
    "L’huile de tamanu, la fabrication locale ou l’absence de nanoparticules ne démontrent pas à elles seules l’innocuité pour les coraux. L’argumentaire doit se limiter aux propriétés documentées ; pas de promesse environnementale non étayée.",
    "Conseils de prévention généraux en institut, pas une prescription ni un diagnostic médical. Références consultées : OMS (UV et protection solaire), DGCCRF (produits solaires, allégations environnementales)."
  ],
  "discovery": [
    {
      "title": "Madame Hoarau prépare ses excursions",
      "context": "Au spa « Les Alizés de Bourbon », à Sainte-Clotilde, Madame Hoarau, phototype III, prépare une semaine de sorties nautiques et de randonnées en été austral. Dans cette situation pédagogique, l’Index UV annoncé est 12 à midi : ce n’est pas une prévision météo en direct. Elle veut comprendre lumière visible, UV et IR, puis recevoir des conseils de prévention. Aucune durée d’exposition sans risque ne peut être prescrite à partir du SPF.",
      "questions": [
        {
          "label": "Q1a · Quel dispositif disperse la lumière blanche ?",
          "type": "choice",
          "options": [
            "Un prisme en verre",
            "Un miroir plan",
            "Un écran opaque"
          ],
          "answer": 0
        },
        {
          "label": "Q1b · Donner l’ordre des couleurs du violet au rouge",
          "type": "manual",
          "answer": "Violet, indigo, bleu, vert, jaune, orange, rouge. Il s’agit d’un spectre continu, pas de sept raies séparées. Expérience classiquement associée à Newton."
        },
        {
          "label": "Q2a · Limite basse du visible retenue",
          "type": "number",
          "answer": 400,
          "unit": "nm"
        },
        {
          "label": "Q2b · Limite haute retenue",
          "type": "number",
          "answer": 700,
          "unit": "nm"
        },
        {
          "label": "Q2c · Des courtes aux grandes longueurs d’onde",
          "type": "choice",
          "options": [
            "Rouge puis violet",
            "Violet puis rouge",
            "Vert puis bleu"
          ],
          "answer": 1
        },
        {
          "label": "Q3 · De part et d’autre du visible",
          "type": "choice",
          "options": [
            "UV côté violet ; IR côté rouge",
            "IR côté violet ; UV côté rouge"
          ],
          "answer": 0
        },
        {
          "label": "Q4a · Exposant : 1 nm = 10^… m",
          "type": "number",
          "answer": -9,
          "unit": ""
        },
        {
          "label": "Q4b · 400 nm en m (écriture 4e-7 acceptée)",
          "type": "number",
          "answer": 4e-07,
          "unit": "m"
        },
        {
          "label": "Q4c · 700 nm en m",
          "type": "number",
          "answer": 7e-07,
          "unit": "m"
        },
        {
          "label": "Q5 · UV solaires reçus au sol",
          "type": "choice",
          "options": [
            "UVA et une partie des UVB",
            "UVC seulement",
            "Les trois catégories intégralement"
          ],
          "answer": 0
        },
        {
          "label": "Q6a · Pénétration plus profonde et photovieillissement surtout associés aux…",
          "type": "choice",
          "options": [
            "UVC",
            "UVA",
            "IR uniquement"
          ],
          "answer": 1
        },
        {
          "label": "Q6b · Érythème et bronzage retardé surtout associés aux…",
          "type": "choice",
          "options": [
            "UVB",
            "IR",
            "Lumières vertes"
          ],
          "answer": 0
        },
        {
          "label": "Q7 · Conseiller la cliente avec un Index UV de 12",
          "type": "manual",
          "answer": "Rechercher l’ombre et éviter les heures de plus fort rayonnement ; vêtements couvrants, chapeau à larges bords et lunettes filtrant les UV. Sur les zones découvertes, protection solaire large spectre UVA/UVB, SPF 50+ adapté à cette situation, en quantité suffisante selon la notice. Renouveler au moins toutes les deux heures et après baignade, transpiration ou essuyage. Ne pas prolonger l’exposition grâce à la crème ; aucun produit ne protège totalement."
        }
      ],
      "correction": "Visible pédagogique : 400–700 nm ; UV avant le violet, IR après le rouge. 1 nm = 10⁻⁹ m, donc 400 nm = 4 × 10⁻⁷ m et 700 nm = 7 × 10⁻⁷ m. Atmosphère : UVC solaires absorbés, UVB en grande partie absorbés, UVA largement transmis. UVA : pénétration plus profonde ; UVB : érythème et pigmentation retardée. UVA et UVB peuvent léser la peau. Rechercher l’ombre et éviter les heures de plus fort rayonnement ; vêtements couvrants, chapeau à larges bords et lunettes filtrant les UV. Sur les zones découvertes, protection solaire large spectre UVA/UVB, SPF 50+ adapté à cette situation, en quantité suffisante selon la notice. Renouveler au moins toutes les deux heures et après baignade, transpiration ou essuyage. Ne pas prolonger l’exposition grâce à la crème ; aucun produit ne protège totalement.",
      "guidance": [
        {
          "title": "Repères du spectre",
          "formula": "100 — UVC — 280 — UVB — 315 — UVA — 400 — VISIBLE — 700 — IR\n1 nm = 10⁻⁹ m",
          "text": "Le visible est continu. Le violet est plus dévié que le rouge dans un prisme de verre ordinaire. UV et IR sont invisibles."
        },
        {
          "title": "Protection combinée",
          "text": "L’Index UV indique le risque lié au rayonnement UV. Dès 3, une protection est nécessaire. SPF et bronzage ne rendent pas l’exposition sûre. Associer ombre, vêtements, chapeau, lunettes et crème large spectre."
        }
      ]
    }
  ],
  "course": [
    [
      "Lumière blanche et dispersion",
      "La lumière blanche est polychromatique : son spectre est continu. Dans un prisme de verre ordinaire, la dispersion sépare les directions selon la longueur d’onde. Ordre conventionnel : violet, indigo, bleu, vert, jaune, orange, rouge. Visible retenu : environ 400–700 nm."
    ],
    [
      "UV et IR",
      "UV : 100–400 nm (UVC, UVB, UVA). L’atmosphère absorbe les UVC solaires et la plupart des UVB ; les UVA et une partie des UVB atteignent le sol. IR : au-delà de 700 nm dans le repère de la séance ; ils peuvent contribuer au réchauffement. UV et IR sont invisibles."
    ],
    [
      "Peau et UV",
      "UVA : pénètrent plus profondément, participent au photovieillissement et à la pigmentation immédiate. UVB : surtout épiderme, érythème et pigmentation retardée. UVA comme UVB peuvent endommager la peau. Les mélanines atténuent une partie du rayonnement sans protection totale."
    ],
    [
      "Index UV et prévention",
      "1–2 faible ; 3–5 modéré ; 6–7 élevé ; 8–10 très élevé ; 11 et plus extrême. Dès 3, protéger peau et yeux. Consulter les prévisions locales ; éviter les heures les plus fortes et privilégier ombre et vêtements. L’Index du simulateur est fictif, pas une mesure météo."
    ],
    [
      "SPF et protection UVA",
      "Le SPF évalue surtout la protection contre l’érythème lié aux UVB. Il ne fournit pas une durée d’exposition sûre. Le logo UVA entouré, recommandé, indique une protection UVA au moins égale au tiers du SPF. Aucun produit ne protège totalement. Rechercher l’ombre et éviter les heures de plus fort rayonnement ; vêtements couvrants, chapeau à larges bords et lunettes filtrant les UV. Sur les zones découvertes, protection solaire large spectre UVA/UVB, SPF 50+ adapté à cette situation, en quantité suffisante selon la notice. Renouveler au moins toutes les deux heures et après baignade, transpiration ou essuyage. Ne pas prolonger l’exposition grâce à la crème ; aucun produit ne protège totalement."
    ],
    [
      "Calculs et unités",
      "1 nm = 10⁻⁹ m. Exemple : 550 nm = 5,5 × 10⁻⁷ m (saisir 5,5e-7). Snell-Descartes : n₁sin(i)=n₂sin(r). Énergie photonique : E=hc/λ avec λ en m. Dose = flux érythémal × durée : modèle de calcul, pas un seuil sûr individuel."
    ]
  ],
  "levels": [
    [
      {
        "title": "1.1 · Les trois domaines",
        "context": "Utilise l’axe spectral du simulateur (100 à 1 000 nm), avec le repère visible 400–700 nm.",
        "questions": [
          {
            "label": "Début du visible",
            "type": "number",
            "answer": 400,
            "unit": "nm"
          },
          {
            "label": "Fin du visible",
            "type": "number",
            "answer": 700,
            "unit": "nm"
          },
          {
            "label": "350 nm appartient aux…",
            "type": "choice",
            "options": [
              "UV",
              "Visible",
              "IR"
            ],
            "answer": 0
          },
          {
            "label": "850 nm appartient aux…",
            "type": "choice",
            "options": [
              "UV",
              "Visible",
              "IR"
            ],
            "answer": 2
          },
          {
            "label": "Propriété des IR",
            "type": "manual",
            "answer": "Ils sont invisibles et peuvent contribuer à un échauffement par absorption. La chaleur ressentie n’est pas un indicateur du niveau d’UV."
          }
        ],
        "correction": "Les UV précèdent 400 nm ; le visible se situe ici entre 400 et 700 nm ; les IR suivent 700 nm."
      },
      {
        "title": "1.2 · Classer les UV",
        "context": "Conventions de la séance : UVC de 100 à moins de 280 nm ; UVB de 280 à moins de 315 nm ; UVA de 315 à moins de 400 nm.",
        "questions": [
          {
            "label": "UVA",
            "type": "choice",
            "options": [
              "100–280 nm",
              "280–315 nm",
              "315–400 nm"
            ],
            "answer": 2
          },
          {
            "label": "UVB",
            "type": "choice",
            "options": [
              "100–280 nm",
              "280–315 nm",
              "315–400 nm"
            ],
            "answer": 1
          },
          {
            "label": "UVC",
            "type": "choice",
            "options": [
              "100–280 nm",
              "280–315 nm",
              "315–400 nm"
            ],
            "answer": 0
          },
          {
            "label": "Filtration atmosphérique",
            "type": "choice",
            "options": [
              "UVC solaires absorbés ; UVB majoritairement absorbés ; UVA largement transmis",
              "Tous les UV traversent sans atténuation",
              "Seuls les UVC atteignent le sol"
            ],
            "answer": 0
          }
        ],
        "correction": "Les UVA et une partie des UVB arrivent au sol. L’atmosphère absorbe le rayonnement solaire UVC. Pas de pourcentage universel fixe pour les UVB."
      },
      {
        "title": "1.3 · Du nm au m",
        "context": "Multiplie par 10⁻⁹. Tu peux saisir 3,5e-7 pour 3,5 × 10⁻⁷.",
        "questions": [
          {
            "label": "350 nm =",
            "type": "number",
            "answer": 3.5e-07,
            "unit": "m"
          },
          {
            "label": "300 nm =",
            "type": "number",
            "answer": 3e-07,
            "unit": "m"
          },
          {
            "label": "550 nm =",
            "type": "number",
            "answer": 5.5e-07,
            "unit": "m"
          },
          {
            "label": "800 nm =",
            "type": "number",
            "answer": 8e-07,
            "unit": "m"
          }
        ],
        "correction": "350 nm = 3,5 × 10⁻⁷ m ; 300 nm = 3 × 10⁻⁷ m ; 550 nm = 5,5 × 10⁻⁷ m ; 800 nm = 8 × 10⁻⁷ m."
      },
      {
        "title": "1.4 · Lire un produit SPF 30",
        "context": "Une cliente achète un produit affichant SPF 30. Le logo UVA dans un cercle est un repère recommandé de protection UVA, et non un marquage obligatoire.",
        "questions": [
          {
            "label": "Le SPF chiffre principalement la protection contre…",
            "type": "choice",
            "options": [
              "UVB",
              "IR",
              "UVC"
            ],
            "answer": 0
          },
          {
            "label": "Le logo UVA entouré indique…",
            "type": "choice",
            "options": [
              "Une protection totale",
              "Une protection UVA au moins égale au tiers du SPF",
              "Une durée sûre d’exposition"
            ],
            "answer": 1
          }
        ],
        "correction": "SPF : protection mesurée contre l’érythème, liée principalement aux UVB. Logo UVA entouré : protection UVA au moins égale au tiers du SPF selon la recommandation européenne."
      },
      {
        "title": "1.5 · Index UV 9",
        "context": "Dans cet exercice, l’Index UV est 9 sur la côte Ouest. Échelle : 1–2 faible ; 3–5 modéré ; 6–7 élevé ; 8–10 très élevé ; 11 et plus extrême.",
        "questions": [
          {
            "label": "Niveau de risque",
            "type": "choice",
            "options": [
              "Faible",
              "Modéré",
              "Très élevé",
              "Extrême"
            ],
            "answer": 2
          },
          {
            "label": "Trois mesures de prévention",
            "type": "manual",
            "answer": "Éviter les heures les plus fortes et chercher l’ombre ; porter des vêtements, un chapeau et des lunettes filtrant les UV ; appliquer une protection solaire UVA/UVB en complément sur les zones découvertes, à renouveler."
          }
        ],
        "correction": "9 : très élevé. La crème est un complément aux mesures physiques, pas une autorisation à rester plus longtemps."
      }
    ],
    [
      {
        "title": "2.1 · Critiquer un calcul de durée",
        "context": "Le dossier propose la multiplication 15 min × SPF 30. Effectue cette multiplication comme exercice arithmétique, puis explique pourquoi elle ne donne PAS une durée d’exposition sûre. Le SPF est un rapport de doses dans des conditions d’essai, pas un multiplicateur de temps de bronzage.",
        "questions": [
          {
            "label": "Résultat arithmétique de 15 × 30",
            "type": "number",
            "answer": 450,
            "unit": "min"
          },
          {
            "label": "Ce résultat exprimé en heures",
            "type": "number",
            "answer": 7.5,
            "unit": "h"
          },
          {
            "label": "Peut-on conseiller 7 h 30 de soleil ?",
            "type": "choice",
            "options": [
              "Oui, si le SPF est 30",
              "Non : ce calcul ne définit pas une durée sûre"
            ],
            "answer": 1
          },
          {
            "label": "Pourquoi renouveler l’application ?",
            "type": "manual",
            "answer": "La quantité appliquée et la couverture sont variables ; transpiration, eau, frottements et essuyage réduisent la protection. Renouveler au moins toutes les deux heures et après baignade ou transpiration, sans allonger l’exposition."
          }
        ],
        "correction": "15 × 30 = 450 min = 7 h 30. C’est uniquement le résultat de la multiplication : ne pas l’utiliser comme conseil d’exposition."
      },
      {
        "title": "2.2 · Dispersion dans un flacon",
        "context": "Air n₁ = 1,00 ; incidence 45°. Verre : n rouge = 1,512 à 700 nm ; n violet = 1,528 à 400 nm. Relation : sin(r) = sin(45°)/n. Angles au centième ; conserver les valeurs non arrondies pour l’écart.",
        "questions": [
          {
            "label": "Angle réfracté rouge",
            "type": "number",
            "answer": 27.88,
            "unit": "°",
            "round": 2
          },
          {
            "label": "Angle réfracté violet",
            "type": "number",
            "answer": 27.57,
            "unit": "°",
            "round": 2
          },
          {
            "label": "Écart angulaire",
            "type": "number",
            "answer": 0.32,
            "unit": "°",
            "round": 2,
            "alternatives": [
              0.31
            ]
          },
          {
            "label": "Pourquoi deux angles ?",
            "type": "manual",
            "answer": "Le verre est dispersif : son indice dépend de la longueur d’onde. Le violet, d’indice plus élevé, se rapproche davantage de la normale à cette première interface. Un prisme sépare les directions émergentes."
          }
        ],
        "correction": "r rouge = arcsin(sin45°/1,512) ≈ 27,8827°. r violet ≈ 27,5658°. Écart ≈ 0,31697° soit 0,32° ; 0,31° accepté si les deux angles ont été arrondis avant soustraction."
      },
      {
        "title": "2.3 · Vitrage : modèle de transmission",
        "context": "Pour ce modèle seulement, le vitrage transmet 0 % des UVB et 75 % des UVA. Ces nombres ne décrivent pas tous les vitrages ni toutes les situations.",
        "questions": [
          {
            "label": "Sur 100 unités d’UVA incidentes, unités transmises",
            "type": "number",
            "answer": 75,
            "unit": ""
          },
          {
            "label": "Quels risques subsistent et quelle solution proposer ?",
            "type": "manual",
            "answer": "Dans ce modèle, la composante UVB est supprimée, mais 75 % des UVA traversent : une exposition aux UVA persiste, avec des risques pour la peau. Choisir un vitrage ou film dont les performances UV sont documentées, des stores ou de l’ombre. Ne pas garantir l’absence de coup de soleil pour tout vitrage."
          }
        ],
        "correction": "Le vitrage du modèle ne supprime pas les UVA. Une vitre ordinaire ne constitue pas une garantie générale de photoprotection."
      },
      {
        "title": "2.4 · Mélanogenèse",
        "context": "Les kératinocytes signalent une exposition aux UV ; les mélanocytes synthétisent des pigments ensuite transférés aux kératinocytes.",
        "questions": [
          {
            "label": "Pigment fabriqué",
            "type": "choice",
            "options": [
              "Kératine",
              "Mélanine",
              "Collagène"
            ],
            "answer": 1
          },
          {
            "label": "Expliquer le parasol cellulaire et distinguer les pigments",
            "type": "manual",
            "answer": "Les mélanosomes peuvent se disposer au-dessus du noyau et atténuer une partie du rayonnement. Les eumélanines brunes/noires sont davantage photoprotectrices ; les phéomélanines jaunes/rousses protègent moins et peuvent contribuer au stress oxydatif. La pigmentation n’empêche pas toutes les lésions UV."
          }
        ],
        "correction": "La mélanine absorbe une partie du rayonnement. Le bronzage n’est pas une protection suffisante et ne doit pas être recherché comme protection."
      }
    ],
    [
      {
        "title": "3.1 · Énergie d’un photon",
        "context": "E = hc/λ ; h = 6,62 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m/s. Comparer 300 nm (UVB) à 600 nm (visible orange, rectification du mot rouge du dossier). Saisie scientifique avec e acceptée.",
        "questions": [
          {
            "label": "Énergie à 300 nm",
            "type": "number",
            "answer": 6.62e-19,
            "unit": "J"
          },
          {
            "label": "Énergie à 600 nm",
            "type": "number",
            "answer": 3.31e-19,
            "unit": "J"
          },
          {
            "label": "Rapport E300 / E600",
            "type": "number",
            "answer": 2,
            "unit": ""
          },
          {
            "label": "Interpréter sans généralisation abusive",
            "type": "manual",
            "answer": "Le photon de 300 nm transporte deux fois plus d’énergie. Les UV peuvent provoquer des lésions de l’ADN et des mutations, par des mécanismes directs et indirects. Le risque biologique ne dépend pas uniquement de l’énergie d’un photon : dose, absorption et réparations interviennent. La lumière visible intense peut aussi présenter des risques, notamment oculaires."
          }
        ],
        "correction": "E300 = 6,62 × 10⁻¹⁹ J ; E600 = 3,31 × 10⁻¹⁹ J ; rapport 2. Ce résultat seul ne permet pas de prédire un cancer ni une dose sûre."
      },
      {
        "title": "3.2 · Dose minimale érythémateuse",
        "context": "Valeurs de modèle : DME phototype I = 200 J/m² ; phototype V = 700 J/m² ; flux érythémal constant 0,25 W/m². Relation t = dose/flux. Ces seuils d’apparition d’une rougeur ne sont pas des durées sûres individuelles.",
        "questions": [
          {
            "label": "Phototype I : durée",
            "type": "number",
            "answer": 800,
            "unit": "s"
          },
          {
            "label": "Phototype I en minutes, au centième",
            "type": "number",
            "answer": 13.33,
            "unit": "min",
            "round": 2
          },
          {
            "label": "Phototype V : durée",
            "type": "number",
            "answer": 2800,
            "unit": "s"
          },
          {
            "label": "Phototype V en minutes, au centième",
            "type": "number",
            "answer": 46.67,
            "unit": "min",
            "round": 2
          },
          {
            "label": "Conclure sur la prévention",
            "type": "manual",
            "answer": "Les temps du modèle diffèrent selon la DME donnée. L’absence de rougeur ne signifie pas absence de lésions. Tous les phototypes ont besoin de prévention adaptée ; ces nombres ne doivent pas servir de minuterie d’exposition."
          }
        ],
        "correction": "200/0,25 = 800 s = 13,333… min ; 700/0,25 = 2 800 s = 46,666… min."
      },
      {
        "title": "3.3 · Gestion du stock de solaires",
        "context": "120 tubes ; achat 8,50 € HT par tube. Par convention de l’exercice, prix vente TTC = prix achat HT × 2,20. TVA donnée : 8,5 %. Calculer la marge du lot sans arrondir le prix unitaire HT intermédiaire. Les qualités environnementales nécessitent des preuves.",
        "questions": [
          {
            "label": "Prix public TTC d’un tube",
            "type": "number",
            "answer": 18.7,
            "unit": "€"
          },
          {
            "label": "Chiffre d’affaires potentiel TTC",
            "type": "number",
            "answer": 2244,
            "unit": "€"
          },
          {
            "label": "Chiffre d’affaires HT du lot au centime",
            "type": "number",
            "answer": 2068.2,
            "unit": "€",
            "round": 2
          },
          {
            "label": "Marge brute HT du lot au centime",
            "type": "number",
            "answer": 1048.2,
            "unit": "€",
            "round": 2
          },
          {
            "label": "Argumentaire loyal et documenté",
            "type": "manual",
            "answer": "Présenter la protection SPF 50+ et UVA/UVB vérifiée sur le produit, ses conditions d’utilisation et, si elles sont attestées, sa fabrication locale et sa composition. Ne pas affirmer que tamanu ou absence de nanoparticules garantissent la préservation des coraux. Associer le produit à l’ombre, aux vêtements et aux bonnes pratiques."
          }
        ],
        "correction": "Vente TTC = 8,50 × 2,20 = 18,70 €. CA TTC = 120 × 18,70 = 2 244 €. CA HT = 2 244/1,085 = 2 068,202… €. Achat HT = 1 020 €. Marge brute HT = 1 048,20 €."
      }
    ]
  ],
  "evaluation": {
    "title": "Défi de synthèse formatif ajouté · /10",
    "context": "Ce bilan est un ajout à l’application, pas une évaluation présente dans le PDF. Pour la séance, visible 400–700 nm. Une sortie est prévue avec un Index UV pédagogique de 12.",
    "questions": [
      {
        "label": "1 · 350 nm : quel domaine ?",
        "type": "choice",
        "options": [
          "Visible",
          "UVA",
          "IR"
        ],
        "answer": 1,
        "points": 2
      },
      {
        "label": "2 · 500 nm en mètres",
        "type": "number",
        "answer": 5e-07,
        "unit": "m",
        "points": 2
      },
      {
        "label": "3 · SPF 50 signifie…",
        "type": "choice",
        "options": [
          "50 fois plus de temps sans risque",
          "Une protection mesurée surtout contre les UVB, sans durée sûre garantie"
        ],
        "answer": 1,
        "points": 2
      },
      {
        "label": "4 · Index UV 12",
        "type": "choice",
        "options": [
          "Faible",
          "Très élevé",
          "Extrême"
        ],
        "answer": 2,
        "points": 2
      },
      {
        "label": "5a · Protection combinée",
        "type": "choice",
        "options": [
          "Crème seule puis bronzage",
          "Ombre, vêtements, chapeau, lunettes et crème UVA/UVB en complément"
        ],
        "answer": 1,
        "points": 1
      },
      {
        "label": "5b · Deux conseils argumentés pour la sortie",
        "type": "manual",
        "answer": "Rechercher l’ombre et éviter les heures de plus fort rayonnement ; vêtements couvrants, chapeau à larges bords et lunettes filtrant les UV. Sur les zones découvertes, protection solaire large spectre UVA/UVB, SPF 50+ adapté à cette situation, en quantité suffisante selon la notice. Renouveler au moins toutes les deux heures et après baignade, transpiration ou essuyage. Ne pas prolonger l’exposition grâce à la crème ; aucun produit ne protège totalement.",
        "points": 1
      }
    ],
    "correction": "350 nm : UVA. 500 nm = 5 × 10⁻⁷ m. SPF : pas une durée sûre. UV 12 : extrême. Rechercher l’ombre et éviter les heures de plus fort rayonnement ; vêtements couvrants, chapeau à larges bords et lunettes filtrant les UV. Sur les zones découvertes, protection solaire large spectre UVA/UVB, SPF 50+ adapté à cette situation, en quantité suffisante selon la notice. Renouveler au moins toutes les deux heures et après baignade, transpiration ou essuyage. Ne pas prolonger l’exposition grâce à la crème ; aucun produit ne protège totalement."
  }
};
