/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

let scoreJohn= 89 + 120 + 103 ;
let scoreMike = 116 + 94 + 123;
let moyJohn= scoreJohn/3
let moyMike=scoreMike/3;

if(moyJohn<moyMike)
{
    console.log("L'équipe de Mike a gagné avec une moyenne de " + moyMike)
}
else
{
    console.log("L'équipe de John a gagné avec une moyenne de " + moyMike)
}

scoreJohn = 119 + 119 + 119;
scoreMike = 119 + 119 + 119;
moyJohn= scoreJohn/3;
moyMike=scoreMike/3;


if(moyJohn<moyMike)
{
    console.log("L'équipe de Mike a gagné avec une moyenne de " + moyMike)
}
else
{
    if (moyMike<moyJohn)
    {
        console.log("L'équipe de John a gagné avec une moyenne de " + moyMike)
    }
    else
    {
        console.log("Les 2 équipes sont a égalités");
    }
}
// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.
