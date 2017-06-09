build:
	yarn deploy:prod
	docker build --force-rm -t docker.datarx.cn:5000/pdas-report .

push:
	docker push docker.datarx.cn:5000/pdas-report

up:
	docker-compose up -d

.PHONY: build up

	