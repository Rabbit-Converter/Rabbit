git add -A
git commit -m "$1"
git push origin master

declare -a arr=("Elixir" "Node" "Objc" "PHP" "ruby" "Swift" "Go")

cd Packages
## now loop through the above array
for i in "${arr[@]}"
do
	cd "$i"
	git add -A
	git commit -m "$1"
	git push origin master
	cd ..
done