import os
##1 espace entre chaque lettre, 2 espaces entre chaque mot
def bip(texte):
    texte=list(texte)
    for i,j in enumerate(texte):
        if j=="-":
            os.system("(speaker-test -t sine -f 1000 -l 1)& pid=$! ; sleep 0.6s ; kill -9 $pid")
            print("3")
            print("1")
            os.system("sleep O.2s")
        elif j=="·":
            os.system("(speaker-test -t sine -f 1000 -l 1)& pid=$! ; sleep 0.2s ; kill -9 $pid")
            print("1")
            print("1")
            os.system("sleep 0.2s")
        elif j==" ":
            print("2")
            os.system("sleep 0.4s")
            if texte[i+1]==" ":
                os.system("sleep 0.4s")
                print("2","double")
                
        
        
        
    



