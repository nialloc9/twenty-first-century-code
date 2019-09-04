deploy_to_s3:
	aws s3 sync ./build s3://${BUCKET_NAME} --delete

invalidate_cache:
	aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths '/*'