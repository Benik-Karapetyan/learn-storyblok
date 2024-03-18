if [ "$CF_PAGES_BRANCH" == "main" ]; then
  # Run the "production" script in `package.json` on the "production" branch
  # "production" should be replaced with the name of your Production branch

  npm run generate

elif [ "$CF_PAGES_BRANCH" == "dev" ]; then
  # Run the "staging" script in `package.json` on the "staging" branch
  # "staging" should be replaced with the name of your specific branch

   npm run generate-dev
else
  # Else run the dev script
  npm run generate-dev 
fi