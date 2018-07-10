#! /bin/bash
first="$(docker run -p 3000:3000 -d root/html-calculator)"
two=${first:0:12}
sudo docker rename $two app
