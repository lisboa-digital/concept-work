FROM linuxbrew/brew

RUN brew install hugo

WORKDIR /home/app