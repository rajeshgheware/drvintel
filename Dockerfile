FROM openjdk:8-jre-alpine

MAINTAINER rajesh@unigps.in

ADD obd.jar app.jar

ENTRYPOINT ["/usr/bin/java", "-Djava.security.egd=file:/dev/./urandom", "-jar","app.jar"]


