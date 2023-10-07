
# Quo-Roma


### Encryption message workflow

We are using Waku to exchange messages. However, all the messages are sent in clear. It is not a problem for some DAOs however, for some communities, some messages need to be encrypted to be sure to be transmitted and to avoid censorship.

To solve this issue, an idea is to integrating encrypted messages through Waku. In this hackathon, we decided to have a simple approach for that. When we create a DAO, a NFT will be minted for each members. Plus, a symmetric key will be generated for the exchange.

When a user first arrived on the chat, he will first send his public address to the channel. Then, another member, will verify that the user have the NFT of the DA0. If it is the case, a user that owned the symmetric key, will encrypt the symmetric key with the public key of the new user and send it to him.

This solution will allow to have private messages send on Waku and keep the privacy of it.

For our implementation, see it in the `front` repository.



#### Wallet issue

During our development, some issue raises as we could not use the private key from metamask to sign the symmetric key, defined in the previous part. To solve this issue, we think about another implementation. A person of the DAO can first create a public/private key locally. Then, it will create a message with his public key and proof that is it the owner of it by adding a signature of it using the private key from metamask. Then, this message can be send to another member of the DAO. Somone else can trust the message, as it can verify that the public key is associated to the address of the other member of the DAO. 

Then, the other person, can create a symetric key, use the public key to encrypt it and send it back to the other member of the DAO. The other decrypt it using the private key created for this exchange and then, can communicate with the other member by using the symmetric key. 



### Voting System - Railgun workflow

In the DAO chat, users can decided to create proposals or get feedback form the community. For voting, we need to be sure that user can vote by expressing itself freely without any judgement for his vote.

We decided to implement the voting system with railgun. To create a new proposal, a user will first create a NFT for a proposal. This proposal will also create two nfts, one for the "yes" and another one for the "no" choice. Then, users will have to claim a NFT representing his voting rights. This token can only be minted, if the user is part of the DAO. Then, after minted, the user will have to send this NFT to one of the two available choices address (the "yes" or "no" contract). When, the time period is finished, we can called the NFT proposal and count the number of NFT in "yes" or "no".

This solution take advantage of sending privately an NFT through Railgun technology.
A work in progress implementation can be seen in `./railgun/contracts/` and `./railgun/scripts/`. 
