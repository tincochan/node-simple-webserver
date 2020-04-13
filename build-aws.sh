export REGION='eu-north1' # EDIT TO YOUR VALUE
export IMAGE='someproject' # EDIT TO YOUR VALUE
export ACCOUNT_NUMBER='123412341234' # EDIT TO YOUR VALUE

aws ecr get-login --no-include-email --region ${REGION} | /bin/bash
cd src
npm install
cd ..
docker build -t ${IMAGE} .
docker tag ${IMAGE}:latest ${ACCOUNT_NUMBER}.dkr.ecr.${REGION}.amazonaws.com/${IMAGE}:latest
docker push ${ACCOUNT_NUMBER}.dkr.ecr.${REGION}.amazonaws.com/${IMAGE}:latest