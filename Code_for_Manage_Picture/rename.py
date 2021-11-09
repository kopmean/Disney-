import os

def main():
    paths = "E:/Github/Disney-/Disney_Plus_Hotstar/image/New_to_Disney+_Hotstar/"
    for count, filename in enumerate(os.listdir(paths)):
        dst = str(count+1) + ".jpg"
        src = paths+filename
        dst = paths+dst
        os.rename(src, dst)
if __name__ == '__main__':
    main()