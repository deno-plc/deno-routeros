# Description

This is a Mikrotik Routerboard API written in Typescript for Deno

# Features

- Connection and reconnection without destroying the object.
- Change host, username and other parameters of the object without recreating
  it.
- Based on promises.
- You can choose to keep the connection alive if it gets idle.
- Every command is async, but can be synced using the promises features.
- Can pause, resume and stop streams (like what you get from /tool/torch).
- Support languages with accents, keeping it consistent throughout winbox and
  api.

# Installing

```
deno install jsr:@deno-plc/routeros
```

# Credits

This project is entirely based on
[George Joseph](https://github.com/f5eng/mikronode-ng) and
[Brandon Myers](https://github.com/Trakkasure/mikronode)'s work with
`mikronode`, thank you very much!!!

This is a fork of [node-routeros](https://github.com/aluisiora/node-routeros)

# License

MIT License

Copyright (c) 2017 Aluísio Rodrigues Amaral

Copyright (c) 2026 Felix Beckh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
