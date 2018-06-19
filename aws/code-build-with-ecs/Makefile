aws_profile := tamakiii
aws_region  := ap-northeast-1

setup: .env build

build:
	$(MAKE) -C docker build

.env:
	@echo "# See /Makfile" > $(@F)
	@echo "AWS_PROFILE=$(aws_profile)" >> $(@F)
	@echo "AWS_DEFAULT_REGION=$(aws_region)" >> $(@F)
	@echo "TF_VAR_AWS_PROFILE=$(aws_profile)" >> $(@F)
	@echo "TF_VAR_AWS_DEFAULT_REGION=$(aws_region)" >> $(@F)

clean:
	rm .env