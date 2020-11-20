if [ -d $1 ]; then
    echo 'Directory is exist'
    exit 1
fi
if [ -f $1 ]; then
    echo 'Create the $1 error! Please check wheather you had a file like the name!'
    exit 1
fi

mkdir $1 && cd $1
mkdir css && mkdir js
echo '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>' > index.html
cd css
echo 'h1{color: red;}' > style.css
cd ../js
echo 'var string = "Hello World"\nalert(string)' > main.js
cd ../..
echo "Success"
exit 0
