#!/bin/sh
git add .
echo "Escribe una descripción para el commit y pulsa enter."
read msg
git commit -am "$msg"
git push
