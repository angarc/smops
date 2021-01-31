#!/bin/bash
echo "ENTRYPOINT WORKING"

cd backend
flask run --host=0.0.0.0 & python3 smops.py #default port is 5000