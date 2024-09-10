#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <dockerfile_path> <new_config_value>"
    exit 1
fi

DOCKERFILE_PATH=$1
NEW_CONFIG_VALUE=$2

# Check if Dockerfile exists
if [ ! -f "$DOCKERFILE_PATH" ]; then
    echo "Error: Dockerfile not found at $DOCKERFILE_PATH"
    exit 1
fi

# Use sed to replace the value
sed -i "s|app-config.production.yaml|$NEW_CONFIG_VALUE|g" "$DOCKERFILE_PATH"

echo "Dockerfile updated successfully."

