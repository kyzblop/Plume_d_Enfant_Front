#!/bin/sh
echo "Vérification du fichier /docker-entrypoint.sh"
ls -l /docker-entrypoint.sh
nginx -g 'daemon off;'
