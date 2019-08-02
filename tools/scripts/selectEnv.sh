#!/bin/bash

# TODO: Update with other environments as they are defined.

INSTRUCTIONS="""
  Modifies the project appropriately based on the environment and protection-level 
  selected. The script will accept environment variables or parameters. Parameters 
  passed in via the CLI will always be preferred over env vars.

  Usage:
  selectEnv [--env <dev|qa>] [--protected <true|false>] [--help]

  Environment Variables:
    BROKER_GO_ENVIRONMENT - see \`--env\`
    BROKER_GO_PROTECTED - see \`--protected\`

  Options:
  --env <dev|qa>              Optional
    The environment being connected to via the mobile app. One of \`dev\` or \`qa\`.
    Will overwrite BROKER_GO_ENVIRONMENT if specified.

  --protected <true|false>    Optional
    The protection level of the environment being connected to via the mobile app. 
    A protected environment is connecting through OpenID. An unprotected 
    environment is direct access. One of \`true\` or \`false\`.
    Will overwrite BROKER_GO_PROTECTED if specified.
  
  --help                      Optional
    Prints these instructions.
"""

printHelp() {
  echo "$INSTRUCTIONS"
}

err() {
  echo "Error on line $1"; exit 1
}

# TODO: Determine what cleanup needs to happen and do it here
finish() {
  echo ""
}

setEnvironment() {
  if [[ $BROKER_GO_ENVIRONMENT = "qa" || $BROKER_GO_ENVIRONMENT = "dev" ]]; then
    echo
  else
    echo "ERROR: Environment must be one of \`dev\` or \`qa\`."
    exit 1
  fi
}

setProtection() {
  if [[ $BROKER_GO_PROTECTED = "true" ]]; then
    BROKER_GO_PROTECTED_VAL=protected
  elif [[ $BROKER_GO_PROTECTED = "false" ]]; then
    BROKER_GO_PROTECTED_VAL=unprotected
  else
    echo "ERROR: Protected must be one of \`true\` or \`false\`."
    exit 1
  fi
}

validate() {
  if [ -z "$BROKER_GO_ENVIRONMENT" ]; then
    echo "ERROR: An environment has not been specified."
    FAILED=1
  else
    setEnvironment
  fi

  if [ -z "$BROKER_GO_PROTECTED" ]; then
    echo "ERROR: A protected value has not been specified."
    FAILED=1
  else
    setProtection
  fi

  if [ -n "$FAILED" ]; then
    exit 1
  fi
}

trap 'err $LINENO' ERR
trap finish EXIT

while test $# -gt 0; do
  case "$1" in
    --env)
      shift
      if [[ "$1" =~ ^-.* ]]; then
        echo "ERROR: Must supply an environment name after --env."
        exit 1
      fi

      BROKER_GO_ENVIRONMENT=$1
      ;;
    --protected)
      shift
      if [[ "$1" =~ ^-.* ]]; then
        echo "ERROR: Must supply a value after --protected."
        exit 1
      fi

      BROKER_GO_PROTECTED=$1
      ;;
    --help)
      printHelp
      exit 0
      ;;
    *)
      if [ "$#" -lt 1 ]; then
        break
      fi

      shift
      ;;
  esac
done

validate

cp tools/environments/.env.$BROKER_GO_ENVIRONMENT.$BROKER_GO_PROTECTED_VAL .env

# TODO: Modify Info.plist and RCTHTTPRequestHandler.mm in the iOS project for Production environments
#       Or maybe the inverse of this. Modify those files when non-Production selection. Guarantees app
#       prefers security over not.
