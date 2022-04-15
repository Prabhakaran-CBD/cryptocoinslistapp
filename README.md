# cryptocoinslistapp
This Application is about to list out ERC20 fungible tokens and ERC721 a non-fungible tokens (NFT). To get this used ethplorer API call and Opensea Marketplace API endpoints respectively.

* Ethplorer provides free-apikey to fetch ERC20 tokens from mainnet but it allows to fetch 50 tokens as a whole and also have some limitations for the number of tries.

* Similarly OpenSea has the same limitation to get all NFTs it allows to get max of 50 NFT tokens for the fee-apikey but these are pretty much for our testing/trail scenario.

# Run and Test:
This application is hosted in netlify, so by clicking the following link it will take to the application https://cryptocoinslistapp.netlify.app/
The screen will be look like below 
![image](https://user-images.githubusercontent.com/77061534/163612459-7de4d5ed-4017-483c-a1b5-f7aa066748dc.png)
* We can select cryptocurrencies or NFT menu from the right menu panel to see the respective list of crypto tokens in page.
*	If wallet is not connected yet then need to connect with wallet by clicking the ‘connect wallet’ button, this connection will take you the Metamask wallet section.
*	Once wallet is connected then we can select each menu ‘cryptocurrencies’ or ‘NFT’ from the right menu panel, it will display the respective list of crypto tokens in page.
*	If wallet is already connected then app will say the wallet is connected already.
*	Before connecting with wallet if you try to see the menu item then app will prompt to say ‘connect with the wallet’ first.
*	Also each menu items have their respective tokens list and some useful token details under that.
*	NFT tokens will display token details as show below, like symbol, Base price , creation date, closing date etc… also when you click on that token it will take you the corresponding ‘openSea website link’ you user can view further about the token

![image](https://user-images.githubusercontent.com/77061534/163613487-0aecfee8-6555-472d-89e4-bc3297376281.png)

* Regarding the Cryptocurrencies page, this will display the ERC20 tokens list as like below and this section show some token details under that additionally we have search text button by selecting the token name or symbol in that we can filter and see the respective tokens from that search.
 ![image](https://user-images.githubusercontent.com/77061534/163615683-3c3e3950-85ae-423f-a1ad-a6bd9d253362.png)
 
 # To run locally
 To run this application locally just clone the repo into your local system and make sure to install the required dependencies based on the package.json file and then get into the project folder and do run command ‘npm start’ to view the application in your 'localhost', before that need to make sure npm package is installed already , if not need to install the node package from https://nodejs.org/en/download/


