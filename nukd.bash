psql -U gitpod -c 'DROP DATABASE example;'
psql -U gitpod -c 'CREATE DATABASE example;'
rm ./migrations/versions/*.py
pipenv run migrate
pipenv run upgrade