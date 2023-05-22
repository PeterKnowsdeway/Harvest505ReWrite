import Worker from 'worker-loader!./worker'
import * as Comlink from 'comlink'

const worker = Comlink.wrap(new Worker())

export const toUpperCase = worker.toUpperCase
export const doHardWork = worker.doHardWork