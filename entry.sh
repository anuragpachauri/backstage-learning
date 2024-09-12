#!/bin/sh

# Default config file
CONFIG_FILE_1="app-config.yaml"

# Choose the second config file based on the ENV environment variable
if [ "$ENV" = "staging" ]; then
  CONFIG_FILE_2="app-config.staging.yaml"
else
  CONFIG_FILE_2="app-config.production.yaml"
fi

# Run the backend with the two config files
exec node packages/backend --config $CONFIG_FILE_1 --config $CONFIG_FILE_2

