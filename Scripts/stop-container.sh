#!/bin/bash

docker rm -f $(docker ps -qa) || true
docker rmi devopscloudweek22/dcp-app:develop || true
