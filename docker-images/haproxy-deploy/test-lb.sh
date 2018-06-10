#!/bin/bash

URL=http://localhost

for i in {1..5000}
do
	curl "$URL" &
done

wait
