dir       :=
project   := try/aws/code-build-with-ecs
tfplan    := .terraform/terraform.tfplan
s3_bucket := terraform.tamakiii.com
s3_key    := $(project)/$(dir)/terraform.tfstate

var_files := $(realpath ../global.hcl)
var_opts   = $(foreach v,$(var_files),-var-file=$(v))

init:
	terraform init \
		-input=false \
		-get=true \
		-get-plugins=true \
		-backend=true \
		$(dir)

plan: require_dir
	terraform plan $(var_opts) -out $(tfplan) $(dir)

apply:
	terraform apply $(tfplan)

destroy:
	terraform plan -destroy $(var_opts) -out $(tfplan) $(dir)

refresh: require_dir
	terraform refresh $(var_opts) $(dir)

validate: require_dir
	terraform validate $(var_opts) $(dir)

require_dir:
ifeq ($(dir),)
	$(error "You must specify dir")
endif