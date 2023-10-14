from random import *
import time

erreurs = 0
reussites = 0

print("Résoudre ces multiplications entre 0 et 10 le plus vite possible.")

t1 = time.time()

for nombre_de_multiplications in range(10):
    nb1 = randint(0,10)
    nb2 = randint(0,10)
    print()
    print("multiplication %s :" %(nombre_de_multiplications+1))
    calcul = input("%s × %s : " %((nb1),(nb2)))

    if eval(calcul) == nb1*nb2:
        print("Bravo !!!")
        reussites = reussites+1
    else:
        print("Tu a raté... Le résultat correcte était %s." %(nb1*nb2))
        erreurs = erreurs+1

t2 = time.time()
print()
print("Tu as mis %s secondes à résoudre 10 multiplications." %(t2-t1))
print()
print("tu as réussi %s multiplication(s)." %(reussites))
print()
print("tu as fait %s erreur(s)." %(erreurs))
print()

if t2-t1 <= 50 and erreurs <= 8:
    print('Tu calcules très vite !!!')
else:
    print("Tu peux t\'améliorer.")
