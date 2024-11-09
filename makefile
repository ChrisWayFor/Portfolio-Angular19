.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install-symfony: ## Install symfony part
	cd apps/back && make install

install-front: ## Install front-end dependencies
	cd apps/front && npm install -f

install: ## Install both back and front dependencies
	make install-front
	make install-symfony