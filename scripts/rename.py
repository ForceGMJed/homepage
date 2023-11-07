import os
filePath = "./favIcons/"

def main():
    fileList = os.listdir(filePath)
    n=0
    for eachFilename in fileList:  
       
        print(eachFilename)
        
        ogPath = filePath + eachFilename
        newPath = filePath+ str(n) +".png"
        os.rename(ogPath, newPath)

        n +=1




main()