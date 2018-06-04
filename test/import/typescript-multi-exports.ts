import {Key, SemuxApi, SemuxApiConfiguration, Transaction} from 'semux';

let key : Key = Key.generateKeyPair()
let apiConfig : SemuxApiConfiguration = new SemuxApiConfiguration();
let api : SemuxApi = new SemuxApi(apiConfig);

function test (tx : Transaction) {

}

