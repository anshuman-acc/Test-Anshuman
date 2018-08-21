# Developers portal

## Dev Env Setup
This is a jekyll site, and thus you will be needing Ruby. Just use `rvm` and install Ruby (if you already don't have one).

Install bundler if you don't have it already:

```bash
gem install bundler
```

Then, run the following command to install all required gems

```bash
bundle install
```

## Running a local server

Run this command to have a hot-reload server setup

```bash
./run_local_server.sh
```

## Changing or adding contents

Just add a new markdown and give the permalink, Jekyll will automatically create the HTML page.

## Uploading to S3
We use `s3_website` gem for this. Edit the `s3_website.yml` file and change the lines 4-5:

```yaml
s3_id: #<Insert AWS_ACCESS_KEY_ID here>
s3_secret: #<Insert AWS_SECRET_ACCESS_KEY here>
```

Instead, set these as environment variables. Refrain from checking in the prod creds to source control.

Then, run the following command to build the site and push to S3:

```bash
./build_and_publish.sh
```
