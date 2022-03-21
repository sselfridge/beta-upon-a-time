#!/bin/bash

# https://stackoverflow.com/a/42845150/901311

MAC='/Users/samwise/Library/Android/sdk/emulator/emulator -avd Pixel_4_API_30'

WIN='/c/Documents\ and\ Settings/samse/AppData/Local/Android/Sdk/emulator/emulator.exe -avd Pixel_4_API_30'

if [ $OSTYPE == 'msys' ]; then
    echo 'windows'
    eval $WIN
else
    echo 'mac'
    $MAC
fi

# $MAC