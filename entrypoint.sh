#!/bin/bash
echo "ENTRYPOINT WORKING"


flask run --host=0.0.0.0 & python3 smops.py