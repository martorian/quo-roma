
# Quo-Roma


### Encryption message workflow

We are using Waku to exchange messages. However, all the messages are sent in clear. It is not a problem for some DAOs however, for some communities, some messages need to be encrypted to be sure to be transmitted and to avoid censorship.

To solve this issue, an idea is to integrating encrypted messages through Waku. In this hackathon, we decided to have a simple approach for that. When we create a DAO, a NFT will be minted for each members. Plus, a symmetric key will be generated for the exchange.

When a user first arrived on the chat, he will first send his public address to the channel. Then, another member, will verify that the user have the NFT of the DA0. If it is the case, a user that owned the symmetric key, will encrypt the symmetric key with the public key of the new user and send it to him.

This solution will allow to have private messages send on Waku and keep the privacy of it.
