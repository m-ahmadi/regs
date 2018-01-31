#!/bin/bash
DIR=src/ukscss/
rm -rf "$DIR"
cd uk
git pull
cp -r src/scss ../"$DIR"
cd ../