const Web3 = require('web3');
const MyContract = require('./build/contracts/MyContract.json');

const init = async () => {
    // const provider = new Web3.providers.HttpProvider('http://localhost:7545');
    const web3 = new Web3('http://localhost:7545');
    // connected to the blockchain

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];

    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    )

    const address = await web3.eth.getAccounts();
    const result = await contract.methods.getData().call()
    const receipt = await contract.methods.setData(456).send({
        from: address[0],        
    })
    console.log(receipt)
    // .on('receipt', receipt => {
    //     // console.log(receipt)
    // });
    // on('confirmation', (confirmationNumber, receipt) => {
    //     console.log(confirmationNumber, receipt)
    // })
    // on('error', (error, receipt) => {
    //     console.log(error, receipt)
    // })





}

init();

