const axios = require('axios');

function getIndex (req, res){
	res.render('index', {
		pageName: 'Home'
	})
}

function getAbout (req, res){
	res.render('about', {
		pageName: 'About'
	})
}

function makeProxyRequest(req, res) {
	axios.get(`${req.query.api}`).then((serverRes)=>{
		return res.json(serverRes.data).status(200)
	})
}


module.exports = {
	getIndex,
	getAbout,
	makeProxyRequest
}
