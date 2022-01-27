//create a new repository on the command line

echo "# instaReels" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kamalpreetSingh0557/instaReels.git
git push -u origin main

-----------------------------------------------------------------

//push an existing repository from the command line

git remote add origin https://github.com/kamalpreetSingh0557/instaReels.git
git branch -M main
git push -u origin main