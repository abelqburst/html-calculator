#! /bin/bash
first="$(docker run -p 3000:3000 -d calc_app)"
two=${first:0:12}
docker rename $two app
