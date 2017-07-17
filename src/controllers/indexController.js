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

function getNosotros (req, res){
	res.render('nosotros', {
		pageName: 'Nosotros'
	})
}

function getTerminos (req, res){
	res.render('terminos', {
		pageName: 'Terminos y Condiciones'
	})
}

function getPrivacidad (req, res){
	res.render('privacidad', {
		pageName: 'Aviso de Privacidad'
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
	getNosotros,
	getTerminos,
	getPrivacidad,
	makeProxyRequest
}
