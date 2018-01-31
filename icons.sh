#!/bin/bash
DIR1=public/js/
DIR2=uk/custom/icons/
rm -f "$DIR1"/uikit-icons.js
rm -rf "$DIR2"
cp -r src/icons "$DIR2"
cd uk
npm run compile
cp dist/js/uikit-icons.js ../"$DIR1"
cd ../