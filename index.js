const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');
const MyContractEvents = require('./build/contracts/MyContractEvents.json');

const init = async () => {
    // const provider = new Web3.providers.HttpProvider('http://localhost:7545');
    // const web3 = new Web3('http://localhost:7545');
    const web3 = new Web3('http://localhost:7545');
    // connected to the blockchain

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const deployedNetwork2 = MyContractEvents.networks[id];

    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )

    const contractEvent = new web3.eth.Contract(
        MyContractEvents.abi,
        deployedNetwork2.address
    )

    const address = await web3.eth.getAccounts();
    // const result = await contract.methods.getData().call()
    // const receipt = await contract.methods.setData(456).send({
    //     from: address[0],        
    // })
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

    await contractEvent.methods.emitEvent('hey').send({
        from: address[0]
    })
        .on('receipt', receipt => {
            console.log('receipt 1', receipt)
        });



    // const results = await contractEvent.getPastEvents(
    //     'MyEvent',
    //     { fromBlock: 0 }
    // )


}

init();

