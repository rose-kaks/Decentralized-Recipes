// scripts/deploy.js
async function main() {
    const RecipeNFT = await ethers.getContractFactory("RecipeNFT");
    const recipeNFT = await RecipeNFT.deploy();
    await recipeNFT.deployed();
    console.log("RecipeNFT deployed to:", recipeNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
