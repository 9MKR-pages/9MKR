from tkinter import *
from random import *
Mafenetre=tk()
def commande():
    al=randint(0,1000000000)
    Label1 = Label(Mafenetre, text = "nombre entier aléatoire entre 0 et 100000000 : "+str(al), fg = 'purple')
    Label1.pack()
Bouton1 = Button(Mafenetre, text = 'Quitter', fg = 'red', command = Mafenetre.destroy)
Bouton1.pack()
bouton_avec_commmande = Button(Mafenetre, text="Donner un nombe entier aléatoire entre 0 et 1 000 000 000.", fg = 'orange', command = commande)
bouton_avec_commmande.pack()
def pic():
    Label2 = Label(Mafenetre, text = 'π=3,14159265358979323846264338327950288419716939937510582097494459230781...', fg = 'green')
    Label2.pack()
pi = Button(Mafenetre, text="π", fg = 'brown', command = pic)
pi.pack()
def radi():
    Label3 = Label(Mafenetre, text = "Radio classique = 101.1 à Paris !!!", fg = 'salmon')
    Label3.pack()
radio = Button(Mafenetre, text="Radio", fg = 'violet', command = radi)
radio.pack()
Mafenetre.mainloop()
