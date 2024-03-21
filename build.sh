if [ "$CF_PAGES_BRANCH" == "main" ]; then
  # Run the "production" script in `package.json` on the "production" branch
  # "production" should be replaced with the name of your Production branch

  yarn run generate

elif [ "$CF_PAGES_BRANCH" == "stage" ]; then
  # Run the "staging" script in `package.json` on the "staging" branch
  # "staging" should be replaced with the name of your specific branch

   yarn run generate-stage
else
  # Else run the dev script
  yarn run generate-dev
fi