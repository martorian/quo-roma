
// GITHUB Porject vote - https://github.com/scrtlabs/SecretSimpleVote


// Reference: https://docs.scrt.network/secret-network-documentation/development/resources-api-contract-addresses/connecting-to-the-network/mainnet-secret-4
// Mainnet
secretcli config chain-id secret-4

// Node address
secretcli config node https://rpc.secret.express


// Deploy on mainnet smart contract
secretcli tx wasm store contract.wasm.gz --gas 5000000 --from mainNetKey


// Transaction result
```
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: C305F20F321DE3FF8ADAD3FFF0F5EDF89D0FBBF604F5EA62C29E368B7FE5C0F2
```


// TODO :: Question here : Why having the instance ID ??

// Instanciate the smartcontract
secretcli tx compute instantiate 1300 '{"poll": "Cooking menu proposal"}' --from mainNetKey --label proposalContract -y

```
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 1407EC5640271BDF8E1C04D5BD7AEB50D968C2CC6A7D9079150975045C2CDB7D
```

secretcli query compute list-contract-by-code 1

```
[
    {
        "contract_address": "secret1m28yu2s3500lg39aah296e34xfnalvg3mq3lp2",
        "code_id": 1300,
        "creator": "secret1r7dv0zzduucu5dlz2mlw5vx32ate87gunq83xa",
        "label": "proposalContract",
        "admin_proof": "kEyoHXc9xKwG1SvZF6DVqLoHp2LHk3F5R+Fs0px4+9M="
    }
]
```

// Vote
secretcli tx compute execute secret1m28yu2s3500lg39aah296e34xfnalvg3mq3lp2 '{"handle": {"yes": true}}' --from mainNetKey


```
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 134D5C08E42FB3772082A907F9174A62F596EEBB2BC04BD75EBBA7B6C2EFE90F
```



// Launch receiver smarcontract
// POLYGON
// Gateway contract: 0x6f015F16De9fC8791b234eF68D486d2bF203FBA8
// Gas Service contract: 0x2d5d7d31F671F86C782533cc367F14109a082712

=> See contract in `./src/VoteResult.sol`

// Deployed tx: 0xfeca236a35a2dd2fb7eeac5c9333b9d9bf0669700afb470be2218d92653e9553
// Contract address: 0x240aF64dF76D214a80dd15d218eEB33d8c30643D



// Send the result from secret network to matic network


// ----------------
pub fn send_message_evm(
    _deps: DepsMut,
    env: Env,
    info: MessageInfo,
    destination_chain: String,
    destination_address: String,
    message: String,
) -> Result<Response, CustomContractError> {
// ----------------



secretcli tx wasm execute secret10qgu633ge7q2r0v9zz65luc42uqactq998ev8w \
  '{"send_message_evm": { \
      "destination_chain": "Polygon", \
      "destination_address":"0x240aF64dF76D214a80dd15d218eEB33d8c30643D", \
      "message":"yes" \
    }}' --amount 2000000ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E --from mainNetKey

```
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 8E0FB8E01621F4D4EFE8987C78D72F0A79E762FFB16F1EDE675B5C36626F24AB
```









secretcli tx wasm store contract.wasm.gz --gas 5000000 --from myWallet

 tx wasm store <path_to_wasm_file> --from myaccount --gas 2000000 --gas-prices=0.25uscrt





