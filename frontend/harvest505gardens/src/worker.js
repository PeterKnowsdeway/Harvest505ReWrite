import * as Comlink from 'comlink'

const fns = {
    toUpperCase(msg) {
        return msg.toUpperCase()
    },
    doHardWork() {
        let i = 0;
        while(i < 900000000) {
            i++
        }
        return i
    }
}

Comlink.expose(fns)
