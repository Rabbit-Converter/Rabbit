#!/bin/bash
git fetch --all
git pull origin master
git submodule init
git submodule update
git submodule foreach git fetch
git submodule foreach git checkout master