#!/bin/sh
dirname=$(cd `dirname $0`; pwd)
autoloadphp=$dirname/vendor/autoload.php
pidFile=$dirname/runtime/hyperf.pid
if [  -e $pidFile ]; then
    rm -f $pidFile
fi
if [ ! -e $autoloadphp ]; then
    cd $dirname && composer install
fi
if ( [ ! -e $pidFile ] && [ -e $autoloadphp ] ); then
#
    php $dirname/bin/mix-httpd start -c ./applications/http/config/httpd.php -env .local
fi

if [ $1 == "-d" ]; then
    while true; do sleep 1000; done
fi

if [ $1 == "-sh" ]; then
    /bin/sh
fi

if [ $1 == "-ash" ]; then
    /bin/ash
fi

if [ $1 == "-bash" ]; then
    /bin/bash
fi
