#!/bin/bash
echo scp -i .aws/drvintel.pem target/obd-*.jar ubuntu@3.6.109.128:/home/ubuntu/obd.jar

rm -rf ~/git/drvintel/drvintelgui/dist/
cd ~/git/drvintel/drvintelgui/
npm run build -- --prod --aot
rm -rf ~/git/drvintel/src/main/resources/static/*
cp -r ~/git/drvintel/drvintelgui/dist/* ~/git/drvintel/src/main/resources/static/

cd ~/git/drvintel/

mvn  -DskipTests=true  clean install

cd ~/git/drvintel/target

docker build -t drvintel/obd:0.0.1-SNAPSHOT -f ../Dockerfile .

echo 'saving docker to ui.tar'
docker save drvintel/obd:0.0.1-SNAPSHOT --output ~/Downloads/obd.tar
echo 'uploading obd.tar to remote obd.new.tar'
scp -i ~/git/drvintel/.aws/drvintel.pem ~/Downloads/obd.tar ubuntu@3.6.109.128:/home/ubuntu/obd.new.tar
echo 'copy latest docker container start'
scp -i ~/git/drvintel/.aws/drvintel.pem docker-prod-track.unigps.in.sh ubuntu@3.6.109.128:/home/ubuntu/

echo 'loading docker image '
ssh -t -i ~/git/drvintel/.aws/drvintel.pem ubuntu@3.6.109.128  "docker load -i obd.new.tar"
echo 'stopping and removing container'
ssh -t -i ~/git/drvintel/.aws/drvintel.pem ubuntu@3.6.109.128  "docker stop obd && docker rm obd"
echo 'starting container using new image'
ssh -t -i ~/git/drvintel/.aws/drvintel.pem ubuntu@3.6.109.128  "docker run --log-opt max-size=20m --log-opt max-file=5 -itd -p 80:80 --name obd --restart always  -v /tmp/obd:/tmp/obd/   -e java.security.egd=file:/dev/./urandom   -e server.port=80 drvintel/obd:0.0.1-SNAPSHOT"
