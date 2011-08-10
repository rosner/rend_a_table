# What is this?
This a little pet project in node.js. It uses phantomjs to render images (png) from given HTML. All that rendering is wrapped in a node.js project. That's it, nothing fancy there. Though I have to say that you can use `vagrant` to get up running pretty quickly on a 10.04 Ubuntu and don't have to hassle with all the dependencies and settings phantomjs needs on a "gui"-less Ubuntu.

So basically this combines four things I wanted to play around with: 
* phantomjs
* nodejs
* chef
* vagrant

## Installation
# Requirements

* VirtualBox (http://www.virtualbox.org/wiki/Downloads)
* `vagrant`

* ack-grep
* vim (which vim package is the coolest? Also I need my setups, like zsh, ack, oh-my-zsh, dotfiles)

* git clone git://github.com/ariya/phantomjs.git && cd phantomjs
* git checkout 1.2
* qmake-qt4 && make
* phantomjs in Pfad aufnehmen

# node
* sudo apt-get -y install curl apache2-utils
* sudo apt-get install build-essential openssl libssl-dev
* sudo apt-get install python-software-properties
* sudo add-apt-repository ppa:chris-lea/node.js
* sudo apt-get update
* sudo apt-get install nodejs
* curl http://npmjs.org/install.sh | sh
* (in case there are problems with rights: sudo chown -R $USER /usr/local)

