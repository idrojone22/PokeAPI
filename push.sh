git status
git add *
echo -n "Nombre del commit:"
read n
git commit -m "$n"
git push -f