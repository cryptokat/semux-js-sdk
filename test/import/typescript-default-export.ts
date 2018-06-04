import Semux from 'semux';

let key : Semux.Key = Semux.Key.generateKeyPair()
let apiConfig : Semux.SemuxApiConfiguration = new Semux.SemuxApiConfiguration();
let api : Semux.SemuxApi = new Semux.SemuxApi(apiConfig);

function test (tx : Semux.Transaction) {

}

