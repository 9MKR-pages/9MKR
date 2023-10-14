from random import *
import time
t1=time.time()
nb_essai=0
nombre=randint(0,100)
nb_choisi=int(input("Trouver le nombre mystère compris entre 0 et 100 : "))
while nombre != nb_choisi:
    if nb_choisi<nombre:
        print("Plus !")
        nb_essai+=1
        nb_choisi=int(input("Trouver le nombre mystère compris entre 0 et 100 : "))
    if nb_choisi>nombre:
        print("Moins !")
        nb_essai+=1
        nb_choisi=int(input("Trouver le nombre mystère compris entre 0 et 100 : "))
if nombre==nb_choisi:
    print("Bravo ! Tu as réussi !")
    t2 = time.time()
    print()
    print("Tu as mis %s secondes à trouver le nombre mystère." %(t2-t1))
    print()
    print("tu as fait %s essais." %(nb_essai))


