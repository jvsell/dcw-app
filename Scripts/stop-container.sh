#!/bin/bash

docker rm -f $(docker ps -qa) || true
docker rmi devopscloudweek3/dcw-app:develop || true
