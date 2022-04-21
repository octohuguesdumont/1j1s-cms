#!/bin/bash

if [ "$NODE_ENV" = "development" ] ; then
  exec yarn develop
else
  exec yarn start
fi
