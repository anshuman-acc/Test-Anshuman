bundle exec jekyll build

echo "Pushing the site to S3"
s3_website push
