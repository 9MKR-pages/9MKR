from random import choice
def word():
    f = open('mots.txt', 'r')
    contenu = f.readlines()
    return  choice(contenu).upper().replace('\n','')
def underscore(mot , L = []):
    r = ''
    for i in mot:
        if i in L:
            r += i + ' '
        else:
            r += '_ '
    return r[:-1]
def saisie():
    lettre = input('Entrez une lettre : ')
    if len( lettre ) > 1 or ord(lettre) < 65 or ord(lettre) > 122:
        return saisie()
    else:
        return lettre.upper()
lettres_deja_proposees = []
mot_a_deviner = word()
affichage = underscore( mot_a_deviner )
print( 'Mot à deviner : ' , affichage )
nb_erreurs = 0
while '_' in affichage and nb_erreurs < 11:
    lettre = saisie()
    if lettre not in lettres_deja_proposees:
        lettres_deja_proposees += [ lettre ]
    if lettre not in mot_a_deviner:
        nb_erreurs += 1
    affichage = underscore( mot_a_deviner , lettres_deja_proposees )
    print( '\nMot à deviner : ' , affichage , ' '*10 , 'Nombre d\'erreurs maximum :' , 11-nb_erreurs )


