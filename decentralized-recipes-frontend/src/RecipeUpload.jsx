// frontend/src/components/RecipeUpload.jsx
import { useState } from 'react';
import { ethers } from 'ethers';
import RecipeNFT from '../artifacts/contracts/RecipeNFT.sol/RecipeNFT.json'; // Adjust the path if necessary

const RecipeUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const mintNFT = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract('YOUR_CONTRACT_ADDRESS', RecipeNFT.abi, signer);

    try {
      const transaction = await contract.createRecipeNFT(signer.getAddress());
      await transaction.wait();
      alert('NFT Minted!');
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div>
      <h1>Upload Recipe as NFT</h1>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={mintNFT}>Mint Recipe NFT</button>
    </div>
  );
};

export default RecipeUpload;
