#!/bin/bash
FILE=public/css/style.css
rm -f "$FILE"
cd src/site-scss
node-sass site.scss > site.css --output-style expanded
rtlcss site.css ../../"$FILE"
rm -f site.css
cd ../../