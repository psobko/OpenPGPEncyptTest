$(document).ready(function() {

		var msgEncryptor = new encrpytor;

		function genKeys(encVal, passVal, callback) {
			msgEncryptor.generateKeys(encVal, passVal);
			callback();
		}

		$('#encrypt').click(function( ){
			var encVal = $('#encryption-strength').val(),
				passVal = $('#password').val(),
				msg = $('#data').val();
			
			genKeys(encVal, passVal, function() {
				var encrypted = msgEncryptor.encryptMsg(msg)
				
				$('#data').val(encrypted);
			});
		});

		$('#decrypt').click(function() {
			var msg = $('#data').val(),
				pwd = $('#password').val(),
				decrypted = msgEncryptor.decryptMsg(msg, pwd);

			$('#data').val(decrypted);
		});

	});