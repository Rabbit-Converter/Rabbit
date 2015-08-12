#!/bin/bash
git fetch --all
git pull origin master
git submodule init
git submodule update
git submodule foreach git pull origin master