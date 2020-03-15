#!/bin/bash
scp -i .aws/drvintel.pem target/obd-*.jar ubuntu@3.6.109.128:/home/ubuntu/obd.jar
