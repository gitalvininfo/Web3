const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');
const MyContractEvents = require('./build/contracts/MyContractEvents.json');

const HDWalletProvider = require('@truffle/hdwallet-provider')

const address = "0xe07Cdeade8a9A55068B2AC599e2E810FC7389423";
const privateKey = "0x497d644adc6a2149ce16d7419ce339c6822798a03501bd3dd4a5c3f4dda8768e";
// const privateKey = "89695e614779c280a965be116a2b8335eb696a5c4a54ba69e6bc931aa592088c"
const init = async () => {
    // const provider = new Web3.providers.HttpProvider('http://localhost:7545');
    // const web3 = new Web3('http://localhost:7545');

    const provider = new HDWalletProvider(
        privateKey,
        'https://ropsten.infura.io/v3/7c1447319c004138ae86e4bf861b554b'
        // 'http://localhost:7545'
    );

    const web3 = new Web3(provider);
    // connected to the blockchain

    // const id = await web3.eth.net.getId();
    // const deployedNetwork = MyContract.networks[id];
    // const deployedNetwork2 = MyContractEvents.networks[id];

    let contract = new web3.eth.Contract(
        MyContract.abi,
        // deployedNetwork.address
    );

    contract = await contract
        .deploy({ data: MyContract.byteCode })
        .send({ from: address })

    await contract.methods
        .setData(10)
        .send({ from: address })

    const result = await contract.methods
        .getData()
        .call();

    console.log(result);

    // const contractEvent = new web3.eth.Contract(
    //     MyContractEvents.abi,
    //     deployedNetwork2.address
    // )

    // const address = await web3.eth.getAccounts();

    // const result = await contract.methods.getData().call()

    // .on('receipt', receipt => {
    //     // console.log(receipt)
    // });
    // on('confirmation', (confirmationNumber, receipt) => {
    //     console.log(confirmationNumber, receipt)
    // })
    // on('error', (error, receipt) => {
    //     console.log(error, receipt)
    // })

    // await contract.methods.sendEther().send({
    //     from: address[0],
    //     value: '100000'
    // })

    // await web3.eth.sendTransaction({
    //     from: address[0],
    //     to: address[1],
    //     value: '10000'
    // })

    // console.log(contract.options.address)

    // console.log(await contract.methods.functionCalled().call());

    // await contractEvent.methods.emitEvent('hey').send({
    //     from: address[0]
    // })
    //     .on('receipt', receipt => {
    //         console.log('receipt 1', receipt)
    //     });



    // const results = await contractEvent.getPastEvents(
    //     'MyEvent',
    //     { fromBlock: 0 }
    // )


}

init();

