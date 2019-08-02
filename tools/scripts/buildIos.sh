#!/bin/bash

INSTRUCTIONS="""
  Builds the iOS app. Currently hard-coded values are used for most things. 
  A valid distribution cert associated with the hard-coded provisioning profile
  must exist within the default keychain of the system this script is run on.

  Tested and working with Node v10.4.1

  Usage:
  buildIos.sh [--help]

  Environment Variables:
    KEYCHAIN_PASSWORD
    The password needed to unlock the default keychain as the user running this
    script. If not set, you will be prompted to enter the password manually.

  Options:
  --help                      Optional
    Prints these instructions.
"""

if [[ $1 = "--help" ]]; then
  echo "$INSTRUCTIONS"
  exit 0
fi

if [[ -z $KEYCHAIN_PASSWORD ]]; then
  echo "WARN: There is no KEYCHAIN_PASSWORD set."
fi

# Unlock the default keychain (typically the "login" keychain)
security unlock-keychain -p "$KEYCHAIN_PASSWORD"

xcodebuild -UseModernBuildSystem=NO -archivePath ios/build/ptb.xcarchive -project ios/Anthem.xcodeproj -scheme Anthem -configuration PROVISIONING_PROFILE="tools/certs/ptb.mobileprovision" DEVELOPMENT_TEAM="229SRPKW7G" archive -allowProvisioningUpdates
xcodebuild -UseModernBuildSystem=NO -exportArchive -exportOptionsPlist tools/ios/exportOptions.plist -allowProvisioningUpdates -archivePath ios/build/ptb.xcarchive -exportPath ios/build/