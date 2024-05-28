URL https://leetcode.com/problems/roman-to-integer/description/

Ici la logique de la soustraction vient de la composition des chiffres romains. 

Si l'on faisait une addition, cela inverserait le résultat et l'intérprétation. 

P. ex. : 

Exemple 1 : “XIV” (14)

	•	Parcours de droite à gauche :
	•	V (5) : result = 5
	•	I (1) : 1 est inférieur à 5, donc on soustrait 1 : result = 5 - 1 = 4
	•	X (10) : 10 est supérieur à 1, donc on ajoute 10 : result = 4 + 10 = 14

Exemple 2 : “MCMXCIV” (1994)

	•	Parcours de droite à gauche :
	•	V (5) : result = 5
	•	I (1) : 1 est inférieur à 5, donc on soustrait 1 : result = 5 - 1 = 4
	•	C (100) : 100 est supérieur à 1, donc on ajoute 100 : result = 4 + 100 = 104
	•	X (10) : 10 est inférieur à 100, donc on soustrait 10 : result = 104 - 10 = 94
	•	M (1000) : 1000 est supérieur à 10, donc on ajoute 1000 : result = 94 + 1000 = 1094
	•	C (100) : 100 est inférieur à 1000, donc on soustrait 100 : result = 1094 - 100 = 994
	•	M (1000) : 1000 est supérieur à 100, donc on ajoute 1000 : result = 994 + 1000 = 1994