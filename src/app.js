import {ethers} from './ethers_min.js'
import {abi, contractAddress} from './constants.js'

const wallet = document.querySelector('.btn-warning')
const form = document.querySelector('.submit')
const taskId = document.getElementById('newTask')


wallet.addEventListener('click', async () =>{
  await window.ethereum.request({method: 'eth_requestAccounts'})
  window.alert('Succesfully connected to MetaMask')
})

async function addTask(text) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  console.log(signer)
  const contract = new ethers.Contract(contractAddress, abi, signer)
  console.log(contract);
  try{
    await contract.createTask(text)
    console.log(contract.tasks);
  }
  catch(error){
    console.log(error);
  }
}

form.addEventListener('click', async(e)=> {
  e.preventDefault();
  addTask(taskId.value);
  taskId.value = ""
})