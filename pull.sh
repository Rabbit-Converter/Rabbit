#!/bin/bash
git fetch --all
git pull origin master
git submodule foreach git pull origin master