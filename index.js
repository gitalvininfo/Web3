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

    const result = await contract.methods.getData().call()
    console.log(result);
}

init();

