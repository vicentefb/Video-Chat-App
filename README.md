# Video Web Application

Video Web App is a simple WebRTC application to showcase the usage of socket.io and peerjs to broadcast video between client and server.

### Build

```sh
git clone https://github.com/vicentefb/Video-Chat-App.git
Backend
From root: npm run start
Frontend
cd client
npm install
npm run start
```
Go to **localhost:3000**

### Tech

* [ReactJS] for structuring and styling the front end
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [Socket.io] - to enable real-time, bi-directional communication between web clients and servers
* [PeerJS] - WebRTC wrapper
* [Heroku] - cloud platform to run server side
  
   [PeerJS]: <https://peerjs.com/>
   [ReactJS]: <https://reactjs.org/>
   [Socket.io]: <https://socket.io/>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Heroku]: <https://www.heroku.com/>

### Folder structure
```
.
├── client                  # Contains the front-end
├── .gitignore                  
├── README.md
├── package-lock.json
├── package.json
└── index.js                # handles the backend socket event configuration
```
