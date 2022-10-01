# Password Check

You can try to hack the password.
This is not the intended exercise but an exercise nonetheless.

More information about the password check algorithm:
We hard-coded the hash of the password.
The hashing algorithm is PBKDF2 with SHA-512 and salt.
The iterations are tuned to take a few seconds on a modern computer.
This should make it hard to brute-force the password.