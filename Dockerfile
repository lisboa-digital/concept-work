FROM linuxbrew/brew

RUN brew install hugo node

WORKDIR /home/app