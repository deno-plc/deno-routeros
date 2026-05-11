import { RouterOSAPI } from "../src/RouterOSAPI.ts";

function connect() {
    const conn = new RouterOSAPI({
        host: Deno.env.get("HOST")!,
        user: Deno.env.get("USERNAME"),
        password: Deno.env.get("PASSWORD"),
    });

    conn.connect()
        .then(() => {
            conn.keepaliveBy("/interface/bridge/port/get", ["=.id=*6"]);
            conn.write("/interface/bridge/port/set", ["=.id=*6", "=pvid=500"])
                .then(
                    (res) => {
                        console.log(res);
                    },
                );
        })
        .catch((err) => {
            // Got an error while trying to connect
            console.log(err);
        });
}

connect();
