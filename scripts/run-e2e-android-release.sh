#!/bin/bash

yarn start &

METRO_BUNDLER_PID=$!

yarn e2e:test android.emu.release

DETOX_EXIT_CODE=$?

kill $METRO_BUNDLER_PID

exit $DETOX_EXIT_CODE