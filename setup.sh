#!/usr/bin/env bash
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'
touch cnf.json
echo -e "${NC}Welcome to setup process for Gluo Utilities Discord App!"
echo -e "${NC}All the dependencies will be automatically installed."
echo -e "${NC}Eventually, you will be guided to type some information to fill the configuration file."
echo -e "${RED}Please note that what you type here is not uploaded to anywhere or seen by anyone except yourself!\n${NC}"
echo -e "${NC}Installing dependencies…"
npm i github:Clyders/fogeskript#dev github:tryforge/forgedb sqlite3 
echo -e "${NC}Finishing up…"
npm cache clean --force
echo -e "${GREEN}Successfully installed all the dependencies!"
echo -e "${NC}Starting configuration file setup…"
echo -e "${RED}Info: you can only have one prefix!"
> cnf.json
read -p "App Token: " -e A
read -p "App Prefix: " -e B
echo -e "{\ntoken=\"${A}\",\nprefix=[\"${B}\"]\n}" >> cnf.json
echo -e "\n${GREEN}Successfully set up configuration file."
echo -e "${RED}Keep this file safe in a lcoal folder!"
echo -e "${RED}Do not share this file to anyone!"
