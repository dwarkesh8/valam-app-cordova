$(document).ready(function(){
	setTimeout(function() {
		window.location = 'menu.html';
	}, 3000);
	setInterval(function() {
		$('#titleText').css('color', 'orange');
		$('#titleText').css('text-shadow', '0 0 25px yellow');
		$('img').css('box-shadow','0 0 25px yellow');
	}, 1000);

});
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
/*default*/
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
function onDeviceReady() {

}
function onOffline() {
	alert("You are offline");
}
function onOnline() {
	alert("You are back to online");
}