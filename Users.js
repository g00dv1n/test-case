var usersList = require('./users.json');

function Users(list){
	this.usersList = list;
}

Users.prototype.checkAuth = function(user) {
	var result = {};


	if(usersList[user.Login] && (usersList[user.Login].Password == user.Password)){
		result = this.checkHotp(user);
	}
	else{
		result.Auth = 'Denied';
	}

	return result;
};

Users.prototype.checkHotp = function(user){
	var result = {};

	if(usersList[user.Login].Hotp){

		if(!user.Hotp){
			result.Auth = 'HOTP required';
			return result;
		}


		if(user.Hotp  && (usersList[user.Login].Hotp == user.Hotp)){
			result.Auth = 'Logged';
			result.Theme = 'Simple';
			result.Language = 'EN';
			return result;
		}
		else{
			result.Auth = 'HOTP wrong code';
			return result;
		}

	}
	else{
			result.Auth = 'Logged';
			result.Theme = 'Simple';
			result.Language = 'EN';
			return result;
	}


};

module.exports =  new Users(usersList);

